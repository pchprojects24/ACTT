window.ACTT = window.ACTT || {};
window.ACTT.casualtyClearingTeam = {
  id: 'casualty-clearing-team',
  title: 'Casualty Clearing Team',
  subtitle: 'Practical shipboard support guide for casualty reception, stabilization support, and transfer readiness.',
  intro:
    '<p>This section is for <strong>Casualty Clearing Team (CCT) support personnel</strong> who help receive, stabilize, monitor, document, and move casualties on board. It is intentionally practical and task-focused.</p>' +
    '<p>Use these pages during drills and real events to support safe, repeatable care when staffing, space, and MEDEVAC timelines are constrained.</p>' +
    '<div class="shipboard-callout"><strong>How to use this section:</strong><ul><li>Start with <strong>Role and Responsibilities</strong> if the team is forming.</li><li>Use <strong>Primary Assessment</strong> and <strong>Reporting and Communication</strong> during first contact and handoff.</li><li>Use <strong>Equipment</strong>, <strong>Patient Movement</strong>, and <strong>Monitoring and Vital Signs</strong> during ongoing care.</li><li>Use <strong>Quick Reference</strong> for compressed checklists.</li></ul></div>',
  sections: [
    {
      id: 'role-and-responsibilities',
      title: 'Role and Responsibilities',
      content:
        '<h3>Role and Responsibilities</h3>' +
        '<h4>Mission</h4>' +
        '<p>Provide organized casualty support that keeps patients stable, visible, and ready for transfer while the clinical lead performs advanced decision-making.</p>' +
        '<h4>Core CCT Tasks</h4>' +
        '<ul>' +
          '<li>Prepare treatment area, oxygen, suction, monitor, and movement route.</li>' +
          '<li>Support hemorrhage control, airway positioning, warming, and basic interventions as directed.</li>' +
          '<li>Obtain and repeat vital signs; call out deterioration early.</li>' +
          '<li>Track times, treatments, fluid totals, and key changes.</li>' +
          '<li>Prepare transfer paperwork and package casualty for internal move or MEDEVAC.</li>' +
        '</ul>' +
        '<h4>Suggested Team Roles (adapt to staffing)</h4>' +
        '<ul>' +
          '<li><strong>CCT Lead/Coordinator:</strong> assigns tasks, maintains overview, confirms priorities.</li>' +
          '<li><strong>Bedside Support:</strong> airway assist, hemorrhage control support, splinting, warming, positioning.</li>' +
          '<li><strong>Monitor/Recorder:</strong> trends vitals, documents interventions and response.</li>' +
          '<li><strong>Runner/Logistics:</strong> equipment, medications, route prep, communications relay.</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>Role boundaries:</strong><ul><li>CCT supports and executes assigned tasks.</li><li>Advanced procedures (e.g., RSI, chest tube, pressor titration strategy) remain under clinician direction.</li><li>When unsure, escalate early and clarify task ownership out loud.</li></ul></div>'
    },
    {
      id: 'primary-assessment',
      title: 'Primary Assessment',
      content:
        '<h3>Primary Assessment</h3>' +
        '<p>Use a simple repeatable structure: <strong>MARCH</strong> then <strong>ABCDE/XABCDE reassessment</strong> when directed. Treat immediate killers first.</p>' +
        '<h4>MARCH for CCT Support</h4>' +
        '<ul>' +
          '<li><strong>M — Massive hemorrhage:</strong> apply direct pressure, support tourniquet use, prepare packing supplies, note time.</li>' +
          '<li><strong>A — Airway:</strong> position, suction, adjuncts (OPA/NPA) if directed, prepare BVM and oxygen.</li>' +
          '<li><strong>R — Respiration:</strong> expose chest, apply oxygen, assist seal/dressing setup, watch for increasing distress.</li>' +
          '<li><strong>C — Circulation:</strong> assist IV/IO setup, keep casualty warm, check pulses/skin signs, track fluid given.</li>' +
          '<li><strong>H — Head/Hypothermia:</strong> AVPU/GCS trend, pupils if trained, prevent heat loss immediately.</li>' +
        '</ul>' +
        '<h4>After Any Intervention, Move, or Deterioration</h4>' +
        '<ul>' +
          '<li>Repeat quick primary check (airway, breathing, perfusion, mental status, temperature exposure).</li>' +
          '<li>Confirm all lines/tubes/dressings remained secure.</li>' +
          '<li>Update latest vitals and response to treatment.</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>Escalate now if any of the following:</strong><ul><li>Uncontrolled bleeding, worsening breathing, or falling level of consciousness.</li><li>SpO<sub>2</sub> dropping despite oxygen.</li><li>Shock signs worsening (cool clammy skin, weak pulses, altered mentation, dropping BP).</li></ul></div>'
    },
    {
      id: 'reporting-and-communication',
      title: 'Reporting and Communication',
      content:
        '<h3>Reporting and Communication</h3>' +
        '<h4>MIST Handover Format (default)</h4>' +
        '<ul>' +
          '<li><strong>M — Mechanism/Medical complaint:</strong> what happened or key illness concern.</li>' +
          '<li><strong>I — Injuries/Information:</strong> major findings from primary survey and obvious injuries.</li>' +
          '<li><strong>S — Signs:</strong> latest vitals, trends, mental status, oxygen requirement.</li>' +
          '<li><strong>T — Treatment:</strong> what was done, when, and patient response.</li>' +
        '</ul>' +
        '<h4>Closed-Loop Communication Rules</h4>' +
        '<ul>' +
          '<li>Repeat back critical orders (drug, dose, route, time).</li>' +
          '<li>Verbally confirm task completion.</li>' +
          '<li>Call out changes immediately: "BP falling", "SpO<sub>2</sub> now 88%", "more agitated".</li>' +
        '</ul>' +
        '<h4>MEDEVAC / Transfer Preparation Snapshot</h4>' +
        '<ul>' +
          '<li>Patient identifiers, problem list, and urgency category.</li>' +
          '<li>Current status: airway/oxygen, circulation, neuro status, pain/sedation status.</li>' +
          '<li>Interventions with times (tourniquet time, meds, fluids, procedures).</li>' +
          '<li>Outstanding risks: potential airway failure, bleeding risk, device concerns.</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>Avoid these common handoff failures:</strong><ul><li>Missing times for last sedative/analgesic doses.</li><li>No trend data (only one set of vitals).</li><li>No statement of what may fail next.</li></ul></div>'
    },
    {
      id: 'equipment',
      title: 'Equipment',
      content:
        '<h3>Equipment</h3>' +
        '<h4>Priority Equipment Groups</h4>' +
        '<ul>' +
          '<li><strong>Airway/Oxygen:</strong> oxygen source, BVM, suction, airway adjuncts, ETCO<sub>2</sub> if available.</li>' +
          '<li><strong>Hemorrhage/Trauma:</strong> tourniquets, hemostatic gauze, pressure dressings, splints, burn sheets.</li>' +
          '<li><strong>Monitoring:</strong> ECG/defib, SpO<sub>2</sub>, NIBP cuffs, thermometer, glucose meter.</li>' +
          '<li><strong>Access/Fluids:</strong> IV/IO supplies, flushes, giving sets, warmed fluids when available.</li>' +
          '<li><strong>Movement/Packaging:</strong> stretcher/litter, straps, blankets, securing materials, route lights.</li>' +
        '</ul>' +
        '<h4>Quick Readiness Check (start of event or watch)</h4>' +
        '<ul>' +
          '<li>Power/battery status confirmed for monitor, suction, and transport ventilator if used.</li>' +
          '<li>Oxygen reserve estimated for projected transport/holding period.</li>' +
          '<li>Critical disposables present and in date (pads, tubing, airway consumables).</li>' +
          '<li>Backup plan staged (spare suction, spare airway adjuncts, spare BP cuff/probe).</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>Shipboard tip:</strong> Before moving a patient, recheck what can snag, disconnect, tip, or run out (oxygen, battery, drains, lines, monitor leads).</div>'
    },
    {
      id: 'patient-movement',
      title: 'Patient Movement',
      content:
        '<h3>Patient Movement</h3>' +
        '<p>Move only when destination improves care or safety. Every movement is a risk event.</p>' +
        '<h4>Pre-Move Checklist</h4>' +
        '<ul>' +
          '<li>State why moving and where going.</li>' +
          '<li>Recheck airway, breathing, perfusion, and bleeding control before departure.</li>' +
          '<li>Secure all lines/tubes/drains with slack and visible anchor points.</li>' +
          '<li>Assign roles: airway watch, lines/drains watch, route lead, stretcher team.</li>' +
          '<li>Carry immediate rescue kit: oxygen, BVM, suction option, key meds, dressing supplies.</li>' +
        '</ul>' +
        '<h4>During Movement</h4>' +
        '<ul>' +
          '<li>Pause if deterioration occurs; treat before continuing.</li>' +
          '<li>Protect C-spine and fractures as indicated.</li>' +
          '<li>Maintain verbal updates at intervals and at route hazards (ladders, narrow passageways).</li>' +
        '</ul>' +
        '<h4>Post-Move Arrival Check</h4>' +
        '<ul>' +
          '<li>Immediate reassessment and full set of vitals.</li>' +
          '<li>Confirm device function (oxygen flow, suction, monitor signals, drain position/patency).</li>' +
          '<li>Document movement time and any adverse events.</li>' +
        '</ul>'
    },
    {
      id: 'injuries-and-medical-emergencies',
      title: 'Injuries and Medical Emergencies',
      content:
        '<h3>Injuries and Medical Emergencies</h3>' +
        '<p>CCT members should recognize patterns early, support immediate measures, and escalate rapidly.</p>' +
        '<h4>High-Priority Trauma Patterns</h4>' +
        '<ul>' +
          '<li><strong>Major bleeding:</strong> direct pressure, tourniquet/packing support, warming, rapid reassessment.</li>' +
          '<li><strong>Chest injury:</strong> worsening dyspnea, unilateral breath changes, chest seal/chest tube support readiness.</li>' +
          '<li><strong>Head injury:</strong> declining mentation, vomiting, pupils changing, seizure activity.</li>' +
          '<li><strong>Burns/inhalation:</strong> airway soot/voice change, circumferential burns, fluid and temperature support.</li>' +
          '<li><strong>Fracture/crush:</strong> splint, distal pulse/sensation checks, pain and compartment concern watch.</li>' +
        '</ul>' +
        '<h4>Common Shipboard Medical Emergencies</h4>' +
        '<ul>' +
          '<li><strong>ACS/chest pain:</strong> monitor, vitals, oxygen if hypoxic, prepare for transfer pathway.</li>' +
          '<li><strong>Sepsis/shock:</strong> fever/hypothermia plus hypotension or altered mental status; prioritize perfusion support.</li>' +
          '<li><strong>Anaphylaxis:</strong> airway swelling/wheeze/hypotension; immediate emergency response support.</li>' +
          '<li><strong>DKA/hyperglycemia:</strong> dehydration, tachypnea, altered status; monitor glucose and fluids per plan.</li>' +
          '<li><strong>Hypothermia/drowning:</strong> gentle handling, rewarming support, careful vital-sign checks.</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>CCT focus:</strong> recognize, report, support immediate interventions, then trend response. Do not wait for complete diagnosis before escalating a dangerous pattern.</div>'
    },
    {
      id: 'monitoring-and-vital-signs',
      title: 'Monitoring and Vital Signs',
      content:
        '<h3>Monitoring and Vital Signs</h3>' +
        '<h4>What to Trend</h4>' +
        '<ul>' +
          '<li>HR, BP, RR, SpO<sub>2</sub>, temperature, pain score, mental status (AVPU/GCS), urine output when available.</li>' +
          '<li>Device status: oxygen source, airway position, dressings, drains, IV/IO patency, infusion rates.</li>' +
          '<li>Clinical response after each intervention (better/worse/unchanged).</li>' +
        '</ul>' +
        '<h4>Practical Frequency Guide</h4>' +
        '<ul>' +
          '<li><strong>Unstable or immediately post-intervention:</strong> every 5-15 min.</li>' +
          '<li><strong>Temporarily stable high-risk casualty:</strong> every 15-30 min.</li>' +
          '<li><strong>Extended holding with stable trend:</strong> at least hourly, plus after any change.</li>' +
        '</ul>' +
        '<h4>Escalation Triggers</h4>' +
        '<ul>' +
          '<li>New hypoxia, rising oxygen requirement, or worsening work of breathing.</li>' +
          '<li>Falling BP, rising HR, reduced urine output, cool mottled skin, or altered mentation.</li>' +
          '<li>New confusion, seizure, focal neurologic signs, or decreasing GCS.</li>' +
          '<li>Recurrent bleeding, drain failure, loss of IV/IO access, or equipment failure.</li>' +
        '</ul>' +
        '<div class="shipboard-callout"><strong>Trend over snapshot:</strong> one normal set of vitals does not clear risk. A worsening trend is often the earliest warning at sea.</div>'
    },
    {
      id: 'quick-reference',
      title: 'Quick Reference',
      content:
        '<h3>Quick Reference</h3>' +
        '<h4>60-Second CCT Start</h4>' +
        '<ul>' +
          '<li>State lead and roles.</li>' +
          '<li>Run MARCH.</li>' +
          '<li>Apply monitor and get baseline vitals.</li>' +
          '<li>Start documentation clock (times, meds, interventions, response).</li>' +
          '<li>Identify likely transfer need early.</li>' +
        '</ul>' +
        '<h4>MIST Handover Card</h4>' +
        '<ul>' +
          '<li><strong>M:</strong> Mechanism/medical complaint</li>' +
          '<li><strong>I:</strong> Injuries/information found</li>' +
          '<li><strong>S:</strong> Signs (latest + trend)</li>' +
          '<li><strong>T:</strong> Treatments + times + response</li>' +
        '</ul>' +
        '<h4>Before Any Movement</h4>' +
        '<ul>' +
          '<li>Reassess ABC/perfusion.</li>' +
          '<li>Secure devices and confirm oxygen/power reserve.</li>' +
          '<li>Assign airway watcher and line watcher.</li>' +
          '<li>Carry rescue kit and brief route hazards.</li>' +
        '</ul>' +
        '<h4>Do Not Miss</h4>' +
        '<ul>' +
          '<li>Tourniquet time not documented.</li>' +
          '<li>No repeat vitals after meds/procedure/movement.</li>' +
          '<li>Unclear last sedative/analgesic dose at handover.</li>' +
          '<li>Device displacement after transfer.</li>' +
        '</ul>'
    }
  ]
};
