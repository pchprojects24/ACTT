# ACTT Scenario Engine Documentation

## Overview

The ACTT Scenario Engine is a JavaScript module that provides robust save/resume functionality, progress tracking, and post-scenario review capabilities for all interactive clinical scenarios in the ACTT application.

## Key Features

### 1. Automatic Save/Resume
- **Automatic Progress Saving**: User progress is automatically saved to localStorage after each decision point
- **Resume Prompt**: When returning to a scenario with saved progress, users see a dialog offering to resume or start fresh
- **State Preservation**: Saves decision choices, stage unlocks, and current position within the scenario

### 2. Progress Tracking
- **Visual Progress Bar**: Real-time progress indicator showing completion percentage
- **Save Indicator**: Brief "Saved" notification appears after each action
- **Decision Counter**: Shows number of decisions made vs. total (e.g., "3 / 5")

### 3. Enhanced Navigation
- **Stage-Based Progression**: Clear navigation through scenario stages
- **Continue Button Logic**: Buttons enable/disable based on completion of required decision points
- **Scroll Management**: Automatic smooth scrolling to next stage

### 4. Scoring and Review
- **Automatic Scoring**: Calculates optimal/acceptable/suboptimal choices
- **Score Breakdown**: Visual display of performance metrics
- **Completion Tracking**: Stores review data for potential future analysis

## Architecture

### Files

```
scenarios/
├── scenario-engine.js         # Core engine logic
├── scenario-engine.css        # UI styles for engine features
├── actt_scenario_01_*.html    # Individual scenario files (use engine)
├── actt_scenario_02_*.html
└── ...
```

### Storage Schema

**Progress Data** (`localStorage: actt-scenario-{id}`)
```javascript
{
  answers: {
    "1": { choice: "A", grade: "correct", timestamp: 1234567890 },
    "2": { choice: "B", grade: "acceptable", timestamp: 1234567891 },
    // ...
  },
  stageUnlocks: { 1: true, 2: true, 3: true, 4: false, 5: false, 6: false },
  currentStage: 3,
  timestamp: 1234567890,
  version: 1
}
```

**Review Data** (`localStorage: actt-scenario-review-{id}`)
```javascript
{
  answers: { /* same as progress */ },
  score: {
    points: 7,
    maxPoints: 10,
    percentage: 70,
    optimal: 2,
    acceptable: 3,
    suboptimal: 0
  },
  completedAt: 1234567890,
  version: 1
}
```

## Integration Guide

### Adding Engine to a Scenario

1. **Add CSS Link** (in `<head>`):
```html
<link rel="stylesheet" href="scenario-engine.css">
```

2. **Add Save Indicator** (in topbar):
```html
<span class="save-indicator" id="saveIndicator">
  <svg class="save-indicator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  Saved
</span>
```

3. **Include Engine Script** (before scenario script):
```html
<script src="scenario-engine.js"></script>
```

4. **Initialize Engine** (in scenario script):
```javascript
var engine = new ScenarioEngine({
  scenarioId: "scenario-01-head-injury",
  totalDecisionPoints: 5,
  continueRequirements: {
    2: ["1"],      // Stage 2 requires DP 1
    3: ["2"],      // Stage 3 requires DP 2
    4: ["3", "4"], // Stage 4 requires DPs 3 and 4
    5: ["5"]       // Stage 5 requires DP 5
  },
  decisionMetadata: { /* optional for enhanced review */ },
  initialStageUnlocks: {1: true, 2: false, 3: false, 4: false, 5: false, 6: false}
});
```

5. **Update Event Handlers** to use engine methods:
```javascript
// Recording answers
engine.recordAnswer(dpId, choice, grade);

// Checking progress
engine.isComplete();
engine.getProgressPercentage();

// Stage navigation
engine.unlockStage(stageNum);

// Reset
engine.reset();
```

## API Reference

### ScenarioEngine Constructor

```javascript
new ScenarioEngine(config)
```

**Config Options:**
- `scenarioId` (string, required): Unique identifier for the scenario
- `totalDecisionPoints` (number, required): Total number of decision points
- `continueRequirements` (object, optional): Map of stage → required DP IDs
- `decisionMetadata` (object, optional): Metadata for review system
- `initialStageUnlocks` (object, optional): Initial stage unlock state

### Instance Methods

#### Progress Management
- `getProgressPercentage()` → number (0-100)
- `getProgressCounts()` → {answered, total, remaining}
- `isComplete()` → boolean

#### Answer Recording
- `recordAnswer(dpId, choice, grade, metadata)` → boolean
- `isAnswered(dpId)` → boolean

#### Navigation
- `canContinueFromStage(stageNum)` → boolean
- `unlockStage(stageNum)` → void

#### Scoring
- `calculateScore()` → {points, maxPoints, percentage, optimal, acceptable, suboptimal}
- `generateReview()` → review object with decision analysis
- `saveCompletion()` → void

#### State Management
- `save()` → boolean
- `reset()` → void
- `hasSavedProgress()` → boolean
- `restoreProgress()` → boolean

### Static Methods

```javascript
ScenarioEngine.showResumePrompt(scenarioId, onResume, onStart)
ScenarioEngine.clearProgress(scenarioId)
ScenarioEngine.loadReview(scenarioId)
```

## UI Components

### Resume Dialog
Automatically appears when saved progress exists:
- Shows number of decisions already made
- Shows time since last save
- Offers "Resume Progress" or "Start Fresh"

### Save Indicator
Brief notification that appears after:
- Recording a decision
- Advancing to next stage
- Fades out after 2 seconds

### Progress Bar
Visual indicator in topbar:
- Fills from 0% to 100% as decisions are made
- Smooth animation on updates

## Best Practices

### 1. Unique Scenario IDs
Use descriptive, unique IDs for each scenario:
```javascript
var SCENARIO_ID = "scenario-01-head-injury";  // Good
var SCENARIO_ID = "scenario-1";                 // Less descriptive
```

### 2. Decision Metadata
For enhanced review functionality, provide detailed metadata:
```javascript
decisionMetadata: {
  "1": {
    prompt: "What is your immediate priority?",
    choices: {
      "A": "Full text of choice A",
      "B": "Full text of choice B",
      // ...
    },
    optimalChoice: "A",
    rationale: "Explanation of why A is optimal"
  }
}
```

### 3. Error Handling
The engine gracefully handles:
- Missing localStorage support (degrades to session-only)
- Corrupted save data (starts fresh)
- Missing DOM elements (console warnings only)

### 4. Mobile Responsiveness
All engine UI components are mobile-responsive:
- Resume dialog adapts to small screens
- Save indicator remains visible on narrow viewports
- Touch-friendly button sizes

## Troubleshooting

### Progress Not Saving
- Check browser localStorage is enabled
- Verify unique scenario ID is set correctly
- Check browser console for errors

### Resume Dialog Not Appearing
- Ensure `ScenarioEngine.showResumePrompt()` is called on load
- Check that saved data exists: `ScenarioEngine.loadProgress(scenarioId)`

### Continue Buttons Not Enabling
- Verify `continueRequirements` matches decision point IDs
- Ensure `checkContinue()` is called after recording answers
- Check DOM for correct button IDs (e.g., "cont2", "cont3")

## Future Enhancements

Potential additions to the engine:

1. **Enhanced Review Mode**
   - Post-scenario detailed review panel
   - Side-by-side comparison of user choice vs. optimal
   - Educational rationale for each decision

2. **Performance Analytics**
   - Track completion times
   - Identify commonly missed decisions
   - Aggregate performance across scenarios

3. **Export Functionality**
   - Export scenario results as PDF
   - Share performance with instructors
   - Integration with LMS systems

4. **Adaptive Difficulty**
   - Adjust scenario complexity based on performance
   - Suggest related scenarios for practice
   - Personalized learning paths

## Version History

### v1.0 (Current)
- Initial release
- Save/resume functionality
- Progress tracking
- Basic scoring system
- Auto-save with debouncing
- Resume prompt dialog
- Mobile-responsive design

## Support

For issues or questions about the scenario engine:
1. Check this documentation
2. Review browser console for errors
3. Verify integration steps were followed
4. Check that all required files are present

## License

Part of the ACTT application. All rights reserved.
