#!/usr/bin/env python3
"""
Script to update all ACTT scenario files with the new scenario engine.
This script adds the engine integration, save/resume functionality, and enhanced UI.
"""

import re
import os
from pathlib import Path

# Scenario configuration mapping
SCENARIOS = [
    {
        "id": "scenario-02-tension-pneumothorax",
        "file": "actt_scenario_02_tension_pneumothorax.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-03-burn-inhalation",
        "file": "actt_scenario_03_burn_inhalation.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-04-septic-shock",
        "file": "actt_scenario_04_septic_shock.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-05-combative-casualty",
        "file": "actt_scenario_05_combative_casualty.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-06-stemi",
        "file": "actt_scenario_06_stemi.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-07-hypothermia",
        "file": "actt_scenario_07_hypothermia.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-08-polytrauma",
        "file": "actt_scenario_08_polytrauma.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-09-failed-airway",
        "file": "actt_scenario_09_failed_airway.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-10-shoulder-dislocation",
        "file": "actt_scenario_10_shoulder_dislocation.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-11-pressor-shock",
        "file": "actt_scenario_11_pressor_shock.html",
        "total_dp": 5,
        "total_stages": 6
    },
    {
        "id": "scenario-12-chest-tube-redeteriorates",
        "file": "actt_scenario_12_chest_tube_redeteriorates.html",
        "total_dp": 5,
        "total_stages": 6
    }
]


def add_engine_css_link(content):
    """Add the scenario-engine.css link to the head"""
    pattern = r'(<link href="https://fonts\.googleapis\.com/css2[^>]+>\s*)(</head>|<style>)'
    replacement = r'\1<link rel="stylesheet" href="scenario-engine.css">\n\2'
    return re.sub(pattern, replacement, content)


def add_save_indicator(content):
    """Add save indicator to the topbar"""
    pattern = r'(<div class="topbar-right">)\s*(<a class="back-link")'
    replacement = r'''\1
<span class="save-indicator" id="saveIndicator">
<svg class="save-indicator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
Saved
</span>
\2'''
    return re.sub(pattern, replacement, content)


def update_scenario_script(content, scenario_id, total_dp, total_stages):
    """Replace the existing scenario script with the enhanced version"""

    # Find the existing script block
    script_pattern = r'<script>\s*\(function\(\)\{.*?\}\)\(\);\s*</script>\s*</body>\s*</html>\s*$'

    new_script = f'''<script src="scenario-engine.js"></script>
<script>
(function(){{
"use strict";

// ============================================================================
// CONFIGURATION
// ============================================================================

var SCENARIO_ID = "{scenario_id}";
var TOTAL_DP = {total_dp};
var TOTAL_STAGES = {total_stages};

// Extract continue requirements from existing script
var continueReqs = extractContinueReqs();

// Note: Decision metadata would need to be added manually for full review functionality
var decisionMetadata = {{}};

// ============================================================================
// SCENARIO ENGINE INITIALIZATION
// ============================================================================

var engine = new ScenarioEngine({{
  scenarioId: SCENARIO_ID,
  totalDecisionPoints: TOTAL_DP,
  continueRequirements: continueReqs,
  decisionMetadata: decisionMetadata,
  initialStageUnlocks: {{1: true, 2: false, 3: false, 4: false, 5: false, 6: false}}
}});

// ============================================================================
// HELPER: Extract continue requirements from DOM
// ============================================================================

function extractContinueReqs(){{
  var reqs = {{}};
  // Stage 2 typically requires DP 1
  if(document.getElementById("cont2")) reqs[2] = ["1"];
  // Stage 3 typically requires DP 2
  if(document.getElementById("cont3")) reqs[3] = ["2"];
  // Stage 4 may require multiple DPs - check DOM structure
  if(document.getElementById("cont4")) reqs[4] = ["3", "4"];
  // Stage 5 typically requires DP 5
  if(document.getElementById("cont5")) reqs[5] = ["5"];
  return reqs;
}}

// ============================================================================
// UI UPDATE FUNCTIONS
// ============================================================================

function updateProgress(){{
  var counts = engine.getProgressCounts();
  document.getElementById("progressLabel").textContent = counts.answered + " / " + counts.total;
  document.getElementById("progressFill").style.width = engine.getProgressPercentage() + "%";
}}

function showSaveIndicator(){{
  var indicator = document.getElementById("saveIndicator");
  if(!indicator) return;

  indicator.classList.add("visible");
  setTimeout(function(){{
    indicator.classList.remove("visible");
  }}, 2000);
}}

function checkContinue(stageNum){{
  if(stageNum === 1) return;
  var btnId = "cont" + stageNum;
  var btn = document.getElementById(btnId);
  if(!btn) return;

  btn.disabled = !engine.canContinueFromStage(stageNum);
}}

// ============================================================================
// DECISION POINT HANDLING
// ============================================================================

window.selectOption = function(el){{
  if(el.classList.contains("locked")) return;

  var dp = el.getAttribute("data-dp");
  var choice = el.getAttribute("data-choice");
  var grade = el.getAttribute("data-grade");

  // Record answer in engine
  if(!engine.recordAnswer(dp, choice, grade)) return;

  // Visual feedback
  var container = document.getElementById("dp" + dp);
  var btns = container.querySelectorAll(".option-btn");
  btns.forEach(function(b){{
    b.classList.add("locked");
    var g = b.getAttribute("data-grade");
    if(g === "correct") b.classList.add("correct-show");
    else if(g === "acceptable") b.classList.add("acceptable-show");
    else b.classList.add("incorrect-show");
    if(b.getAttribute("data-choice") === choice) b.classList.add("selected");
  }});

  // Show feedback
  var fb = document.getElementById("dp" + dp + "-fb-" + choice);
  if(fb) fb.classList.add("visible");

  // Update UI
  updateProgress();
  showSaveIndicator();

  // Check all continue buttons
  for(var s = 2; s <= 5; s++) checkContinue(s);

  // If complete, show score
  if(engine.isComplete()) showScore();
}};

// ============================================================================
// SCORING AND REVIEW
// ============================================================================

function showScore(){{
  var score = engine.calculateScore();

  document.getElementById("scorePct").textContent = score.percentage + "%";
  document.getElementById("scoreSub").textContent = score.points + " of " + score.maxPoints + " points";
  document.getElementById("statOptimal").textContent = score.optimal;
  document.getElementById("statAcceptable").textContent = score.acceptable;
  document.getElementById("statSuboptimal").textContent = score.suboptimal;
  document.getElementById("scoreBreakdown").style.display = "flex";
  document.getElementById("resetBtn").style.display = "inline-block";

  // Save completion data
  engine.saveCompletion();
}}

// ============================================================================
// STAGE NAVIGATION
// ============================================================================

window.toggleStage = function(n){{
  var header = document.querySelector("#stage" + n + " .stage-header");
  var body = document.getElementById("stage" + n + "Body");
  var expanded = header.getAttribute("aria-expanded") === "true";

  header.setAttribute("aria-expanded", expanded ? "false" : "true");
  if(expanded){{
    body.classList.remove("open");
  }} else {{
    body.classList.add("open");
  }}
}};

window.advanceStage = function(current){{
  var next = current + 1;
  if(next > TOTAL_STAGES) return;

  // Close current
  var cHeader = document.querySelector("#stage" + current + " .stage-header");
  var cBody = document.getElementById("stage" + current + "Body");
  cHeader.setAttribute("aria-expanded", "false");
  cBody.classList.remove("open");

  // Open next
  engine.unlockStage(next);
  var nHeader = document.querySelector("#stage" + next + " .stage-header");
  var nBody = document.getElementById("stage" + next + "Body");
  nHeader.setAttribute("aria-expanded", "true");
  nBody.classList.add("open");

  // Scroll
  setTimeout(function(){{
    document.getElementById("stage" + next).scrollIntoView({{behavior: "smooth", block: "start"}});
  }}, 80);

  showSaveIndicator();
}};

// ============================================================================
// RESET FUNCTIONALITY
// ============================================================================

window.resetScenario = function(){{
  if(!confirm("Are you sure you want to reset this scenario? All progress will be lost.")) return;

  engine.reset();

  // Reset UI
  updateProgress();

  // Reset all decision points
  for(var dp = 1; dp <= TOTAL_DP; dp++){{
    var container = document.getElementById("dp" + dp);
    if(!container) continue;

    var btns = container.querySelectorAll(".option-btn");
    btns.forEach(function(b){{
      b.classList.remove("locked", "selected", "correct-show", "acceptable-show", "incorrect-show");
    }});

    var fbs = container.querySelectorAll(".feedback");
    fbs.forEach(function(f){{
      f.classList.remove("visible");
    }});
  }}

  // Disable continue buttons
  for(var s = 2; s <= 5; s++){{
    var btn = document.getElementById("cont" + s);
    if(btn) btn.disabled = true;
  }}

  // Reset score panel
  document.getElementById("scorePct").textContent = "—";
  document.getElementById("scoreSub").textContent = "Complete all " + TOTAL_DP + " decision points to see your score";
  document.getElementById("scoreBreakdown").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";

  // Close all stages, open stage 1
  for(var i = 1; i <= TOTAL_STAGES; i++){{
    var h = document.querySelector("#stage" + i + " .stage-header");
    var b = document.getElementById("stage" + i + "Body");
    if(i === 1){{
      h.setAttribute("aria-expanded", "true");
      b.classList.add("open");
    }} else {{
      h.setAttribute("aria-expanded", "false");
      b.classList.remove("open");
    }}
  }}

  window.scrollTo({{top: 0, behavior: "smooth"}});
}};

// ============================================================================
// RESTORE PROGRESS ON LOAD
// ============================================================================

function restoreScenarioState(){{
  if(!engine.restoreProgress()) return;

  // Restore decision point UI
  for(var dpId in engine.answers){{
    var answer = engine.answers[dpId];
    var container = document.getElementById("dp" + dpId);
    if(!container) continue;

    // Lock and style buttons
    var btns = container.querySelectorAll(".option-btn");
    btns.forEach(function(b){{
      b.classList.add("locked");
      var g = b.getAttribute("data-grade");
      if(g === "correct") b.classList.add("correct-show");
      else if(g === "acceptable") b.classList.add("acceptable-show");
      else b.classList.add("incorrect-show");
      if(b.getAttribute("data-choice") === answer.choice) b.classList.add("selected");
    }});

    // Show feedback
    var fb = document.getElementById("dp" + dpId + "-fb-" + answer.choice);
    if(fb) fb.classList.add("visible");
  }}

  // Update progress
  updateProgress();

  // Check continue buttons
  for(var s = 2; s <= 5; s++) checkContinue(s);

  // If complete, show score
  if(engine.isComplete()) showScore();
}}

// ============================================================================
// INITIALIZATION
// ============================================================================

function initializeScenario(){{
  // Check for saved progress and show resume prompt if exists
  ScenarioEngine.showResumePrompt(
    SCENARIO_ID,
    function onResume(){{
      restoreScenarioState();
    }},
    function onStart(){{
      // Fresh start - no restoration needed
      updateProgress();
    }}
  );
}}

// Run initialization when DOM is ready
if(document.readyState === "loading"){{
  document.addEventListener("DOMContentLoaded", initializeScenario);
}} else {{
  initializeScenario();
}}

}})();
</script>
</body>
</html>'''

    return re.sub(script_pattern, new_script, content, flags=re.DOTALL)


def update_scenario_file(scenario_config):
    """Update a single scenario file"""
    file_path = Path(__file__).parent / scenario_config["file"]

    if not file_path.exists():
        print(f"⚠️  File not found: {scenario_config['file']}")
        return False

    print(f"📝 Updating {scenario_config['file']}...")

    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply transformations
    content = add_engine_css_link(content)
    content = add_save_indicator(content)
    content = update_scenario_script(
        content,
        scenario_config["id"],
        scenario_config["total_dp"],
        scenario_config["total_stages"]
    )

    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Updated {scenario_config['file']}")
    return True


def main():
    """Main execution function"""
    print("🚀 Starting ACTT scenario update process...")
    print(f"📂 Processing {len(SCENARIOS)} scenarios\n")

    success_count = 0
    fail_count = 0

    for scenario in SCENARIOS:
        if update_scenario_file(scenario):
            success_count += 1
        else:
            fail_count += 1
        print()

    print("=" * 60)
    print(f"✅ Successfully updated: {success_count} scenarios")
    if fail_count > 0:
        print(f"⚠️  Failed to update: {fail_count} scenarios")
    print("=" * 60)
    print("\n✨ Update complete! All scenarios now have:")
    print("   • Save/resume functionality")
    print("   • Auto-save progress tracking")
    print("   • Enhanced navigation")
    print("   • Persistent state management")


if __name__ == "__main__":
    main()
