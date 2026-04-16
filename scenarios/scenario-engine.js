/**
 * ACTT Scenario Engine
 * Provides save/resume, progress tracking, and post-scenario review capabilities
 * for interactive clinical scenarios.
 */
(function(window) {
  'use strict';

  // ============================================================================
  // STORAGE KEY MANAGEMENT
  // ============================================================================

  function getStorageKey(scenarioId) {
    return 'actt-scenario-' + scenarioId;
  }

  function getReviewStorageKey(scenarioId) {
    return 'actt-scenario-review-' + scenarioId;
  }

  // ============================================================================
  // STATE PERSISTENCE
  // ============================================================================

  /**
   * Save scenario progress to localStorage
   */
  function saveProgress(scenarioId, state) {
    try {
      const data = {
        answers: state.answers || {},
        stageUnlocks: state.stageUnlocks || {},
        currentStage: state.currentStage || 1,
        timestamp: Date.now(),
        version: 1
      };
      localStorage.setItem(getStorageKey(scenarioId), JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Failed to save scenario progress:', e);
      return false;
    }
  }

  /**
   * Load saved scenario progress from localStorage
   */
  function loadProgress(scenarioId) {
    try {
      const stored = localStorage.getItem(getStorageKey(scenarioId));
      if (!stored) return null;

      const data = JSON.parse(stored);
      // Validate data structure
      if (!data.answers || !data.stageUnlocks) return null;

      return data;
    } catch (e) {
      console.warn('Failed to load scenario progress:', e);
      return null;
    }
  }

  /**
   * Clear saved progress for a scenario
   */
  function clearProgress(scenarioId) {
    try {
      localStorage.removeItem(getStorageKey(scenarioId));
      localStorage.removeItem(getReviewStorageKey(scenarioId));
      return true;
    } catch (e) {
      console.warn('Failed to clear scenario progress:', e);
      return false;
    }
  }

  /**
   * Save scenario completion data for review
   */
  function saveReview(scenarioId, reviewData) {
    try {
      const data = {
        answers: reviewData.answers,
        score: reviewData.score,
        completedAt: Date.now(),
        version: 1
      };
      localStorage.setItem(getReviewStorageKey(scenarioId), JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Failed to save scenario review:', e);
      return false;
    }
  }

  /**
   * Load saved review data
   */
  function loadReview(scenarioId) {
    try {
      const stored = localStorage.getItem(getReviewStorageKey(scenarioId));
      if (!stored) return null;
      return JSON.parse(stored);
    } catch (e) {
      console.warn('Failed to load scenario review:', e);
      return null;
    }
  }

  // ============================================================================
  // SCENARIO ENGINE CLASS
  // ============================================================================

  function ScenarioEngine(config) {
    this.scenarioId = config.scenarioId;
    this.totalDecisionPoints = config.totalDecisionPoints || 5;
    this.continueRequirements = config.continueRequirements || {};
    this.decisionMetadata = config.decisionMetadata || {};
    this.initialStageUnlocks = config.initialStageUnlocks || { 1: true };

    // State
    this.answers = {};
    this.stageUnlocks = Object.assign({}, this.initialStageUnlocks);
    this.currentStage = 1;

    // Auto-save timer
    this.autoSaveTimer = null;

    // Try to restore saved progress
    this.restoreProgress();
  }

  ScenarioEngine.prototype = {
    /**
     * Restore progress from localStorage
     */
    restoreProgress: function() {
      const saved = loadProgress(this.scenarioId);
      if (!saved) return false;

      this.answers = saved.answers || {};
      this.stageUnlocks = saved.stageUnlocks || { 1: true };
      this.currentStage = saved.currentStage || 1;

      return true;
    },

    /**
     * Get current progress percentage
     */
    getProgressPercentage: function() {
      const answered = Object.keys(this.answers).length;
      return Math.round((answered / this.totalDecisionPoints) * 100);
    },

    /**
     * Get progress counts
     */
    getProgressCounts: function() {
      const answered = Object.keys(this.answers).length;
      return {
        answered: answered,
        total: this.totalDecisionPoints,
        remaining: this.totalDecisionPoints - answered
      };
    },

    /**
     * Check if a decision point has been answered
     */
    isAnswered: function(dpId) {
      return Object.prototype.hasOwnProperty.call(this.answers, dpId);
    },

    /**
     * Record an answer to a decision point
     */
    recordAnswer: function(dpId, choice, grade, metadata) {
      if (this.isAnswered(dpId)) return false;

      this.answers[dpId] = {
        choice: choice,
        grade: grade,
        timestamp: Date.now(),
        metadata: metadata || {}
      };

      // Auto-save after recording answer
      this.scheduleSave();

      return true;
    },

    /**
     * Check if continue button should be enabled for a stage
     */
    canContinueFromStage: function(stageNum) {
      const requirements = this.continueRequirements[stageNum];
      if (!requirements || requirements.length === 0) return true;

      return requirements.every(function(dpId) {
        return Object.prototype.hasOwnProperty.call(this.answers, dpId);
      }, this);
    },

    /**
     * Unlock a stage
     */
    unlockStage: function(stageNum) {
      this.stageUnlocks[stageNum] = true;
      this.currentStage = stageNum;
      this.scheduleSave();
    },

    /**
     * Check if all decision points are answered
     */
    isComplete: function() {
      return Object.keys(this.answers).length === this.totalDecisionPoints;
    },

    /**
     * Calculate score based on answers
     */
    calculateScore: function() {
      let points = 0;
      let optimal = 0;
      let acceptable = 0;
      let suboptimal = 0;

      for (const dpId in this.answers) {
        const answer = this.answers[dpId];
        const grade = answer.grade;

        if (grade === 'correct') {
          points += 2;
          optimal++;
        } else if (grade === 'acceptable') {
          points += 1;
          acceptable++;
        } else {
          suboptimal++;
        }
      }

      const maxPoints = this.totalDecisionPoints * 2;
      const percentage = Math.round((points / maxPoints) * 100);

      return {
        points: points,
        maxPoints: maxPoints,
        percentage: percentage,
        optimal: optimal,
        acceptable: acceptable,
        suboptimal: suboptimal
      };
    },

    /**
     * Generate review data with decision path analysis
     */
    generateReview: function() {
      const score = this.calculateScore();
      const decisions = [];

      for (const dpId in this.answers) {
        const answer = this.answers[dpId];
        const metadata = this.decisionMetadata[dpId] || {};

        decisions.push({
          id: dpId,
          choice: answer.choice,
          grade: answer.grade,
          prompt: metadata.prompt || '',
          choiceText: metadata.choices ? metadata.choices[answer.choice] : '',
          feedback: metadata.feedback ? metadata.feedback[answer.choice] : '',
          optimalChoice: metadata.optimalChoice || null,
          rationale: metadata.rationale || ''
        });
      }

      return {
        score: score,
        decisions: decisions,
        completedAt: Date.now()
      };
    },

    /**
     * Save review data and mark scenario as complete
     */
    saveCompletion: function() {
      const review = this.generateReview();
      saveReview(this.scenarioId, {
        answers: this.answers,
        score: review.score
      });
      return review;
    },

    /**
     * Schedule auto-save (debounced)
     */
    scheduleSave: function() {
      if (this.autoSaveTimer) {
        clearTimeout(this.autoSaveTimer);
      }

      this.autoSaveTimer = setTimeout(function() {
        this.save();
      }.bind(this), 500);
    },

    /**
     * Save current state immediately
     */
    save: function() {
      return saveProgress(this.scenarioId, {
        answers: this.answers,
        stageUnlocks: this.stageUnlocks,
        currentStage: this.currentStage
      });
    },

    /**
     * Reset scenario to initial state
     */
    reset: function() {
      this.answers = {};
      this.stageUnlocks = Object.assign({}, this.initialStageUnlocks);
      this.currentStage = 1;
      clearProgress(this.scenarioId);
    },

    /**
     * Check if there is saved progress
     */
    hasSavedProgress: function() {
      return loadProgress(this.scenarioId) !== null;
    }
  };

  // ============================================================================
  // UI HELPERS
  // ============================================================================

  /**
   * Show a resume prompt if saved progress exists
   */
  function showResumePrompt(scenarioId, onResume, onStart) {
    const saved = loadProgress(scenarioId);
    if (!saved) {
      onStart();
      return;
    }

    // Calculate how many questions were answered
    const answeredCount = Object.keys(saved.answers || {}).length;
    if (answeredCount === 0) {
      onStart();
      return;
    }

    // Create resume dialog
    const overlay = document.createElement('div');
    overlay.className = 'scenario-resume-overlay';
    overlay.innerHTML = `
      <div class="scenario-resume-dialog">
        <div class="resume-header">Resume Scenario</div>
        <div class="resume-body">
          <p>You have saved progress from a previous session.</p>
          <div class="resume-stats">
            <div class="resume-stat">
              <span class="resume-stat-value">${answeredCount}</span>
              <span class="resume-stat-label">decisions made</span>
            </div>
            <div class="resume-stat">
              <span class="resume-stat-value">${Math.round((saved.timestamp ? (Date.now() - saved.timestamp) / (1000 * 60 * 60) : 0))}h ago</span>
              <span class="resume-stat-label">last saved</span>
            </div>
          </div>
          <p class="resume-question">Would you like to resume where you left off, or start fresh?</p>
        </div>
        <div class="resume-actions">
          <button class="resume-btn resume-btn-secondary" id="resumeStartFresh">Start Fresh</button>
          <button class="resume-btn resume-btn-primary" id="resumeContinue">Resume Progress</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('resumeContinue').addEventListener('click', function() {
      document.body.removeChild(overlay);
      onResume();
    });

    document.getElementById('resumeStartFresh').addEventListener('click', function() {
      clearProgress(scenarioId);
      document.body.removeChild(overlay);
      onStart();
    });
  }

  // ============================================================================
  // EXPORT
  // ============================================================================

  window.ScenarioEngine = ScenarioEngine;
  window.ScenarioEngine.showResumePrompt = showResumePrompt;
  window.ScenarioEngine.clearProgress = clearProgress;
  window.ScenarioEngine.loadReview = loadReview;

})(window);
