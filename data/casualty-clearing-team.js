window.ACTT = window.ACTT || {};
window.ACTT.casualtyClearingTeam = {
  id: 'casualty-clearing-team',
  title: 'Casualty Clearing Team',
  subtitle: 'Practical shipboard support guide for casualty reception, stabilization support, and transfer readiness.',
  intro:
    '<p>This section is for <strong>Casualty Clearing Team (CCT) support personnel</strong> who help receive, stabilize, monitor, document, and move casualties on board. It is intentionally practical and task-focused.</p>' +
    '<p>Use these pages during drills and real events to support safe, repeatable care when staffing, space, and MEDEVAC timelines are constrained.</p>' +
    '<div class="shipboard-callout">' +
    '<div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')">' +
    '<span>&#9875;</span> How to use this section<span class="sc-chevron">&#9654;</span></div>' +
    '<div class="shipboard-callout-body expanded">' +
    '<ul style="margin:0 0 0 18px;color:var(--text-secondary)">' +
    '<li>Start with <strong>Role and Responsibilities</strong> if the team is forming.</li>' +
    '<li>Use <strong>Primary Assessment</strong> and <strong>Reporting and Communication</strong> during first contact and handoff.</li>' +
    '<li>Use <strong>Equipment</strong>, <strong>Patient Movement</strong>, and <strong>Monitoring</strong> during ongoing care.</li>' +
    '<li>Use <strong>Quick Reference</strong> for compressed checklists and cards.</li>' +
    '</ul></div></div>',
  sections: [
    {
      id: 'role-and-responsibilities',
      title: 'Role and Responsibilities',
      content:
        '<h3>Mission</h3>' +
        '<p>Provide organized casualty support that keeps patients <strong>stable, visible, and ready for transfer</strong> while the clinical lead performs advanced decision-making.</p>' +

        '<h3>Team Roles</h3>' +
        '<p>Assign roles early. Adapt to the number of people available — one person may hold multiple roles.</p>' +
        '<div class="cct-role-grid">' +
          '<div class="cct-role-card">' +
            '<div class="rc-icon">&#128101;</div>' +
            '<div class="rc-title">CCT Lead / Coordinator</div>' +
            '<div class="rc-desc">Assigns tasks, maintains overview, confirms priorities with clinical lead, coordinates transfers.</div>' +
          '</div>' +
          '<div class="cct-role-card">' +
            '<div class="rc-icon">&#128137;</div>' +
            '<div class="rc-title">Bedside Support</div>' +
            '<div class="rc-desc">Airway positioning assist, hemorrhage control support, splinting, warming, patient positioning.</div>' +
          '</div>' +
          '<div class="cct-role-card">' +
            '<div class="rc-icon">&#128200;</div>' +
            '<div class="rc-title">Monitor / Recorder</div>' +
            '<div class="rc-desc">Trends vitals, documents interventions and responses, tracks fluid totals and medication times.</div>' +
          '</div>' +
          '<div class="cct-role-card">' +
            '<div class="rc-icon">&#128230;</div>' +
            '<div class="rc-title">Runner / Logistics</div>' +
            '<div class="rc-desc">Equipment retrieval, medication prep, route clearance, communications relay to bridge/command.</div>' +
          '</div>' +
        '</div>' +

        '<h3>Core CCT Tasks</h3>' +
        '<ul>' +
          '<li>Prepare treatment area, oxygen, suction, monitor, and movement route before casualty arrives.</li>' +
          '<li>Support hemorrhage control, airway positioning, warming, and basic interventions as directed.</li>' +
          '<li>Obtain and repeat vital signs; call out any deterioration immediately and out loud.</li>' +
          '<li>Track times, treatments, fluid totals, and key clinical changes in writing.</li>' +
          '<li>Prepare transfer paperwork and package casualty for internal move or MEDEVAC.</li>' +
        '</ul>' +

        '<div class="severity-card amber" style="margin-top:18px">' +
          '<div class="sc-title"><span class="sc-label" style="background:var(--severity-amber);color:#000">ROLE LIMITS</span> Know your boundaries</div>' +
          '<ul style="margin:8px 0 0 18px;color:var(--text-secondary)">' +
            '<li>CCT supports and executes assigned tasks — not independent clinical decisions.</li>' +
            '<li>Advanced procedures (RSI, chest tube, pressor titration) remain under clinician direction only.</li>' +
            '<li>When unsure: <strong>escalate early</strong> and clarify task ownership out loud.</li>' +
          '</ul>' +
        '</div>'
    },
    {
      id: 'primary-assessment',
      title: 'Primary Assessment',
      content:
        '<h3>Assessment Framework</h3>' +
        '<p>Use a simple, repeatable structure: <strong>MARCH</strong> on arrival, then <strong>ABCDE reassessment</strong> after any intervention, movement, or sign of deterioration. Treat immediate life threats first.</p>' +

        '<h3>MARCH — Immediate Life Threats</h3>' +
        '<div class="march-grid">' +
          '<div class="march-card">' +
            '<div class="mc-letter">M</div>' +
            '<div class="mc-label">Massive Hemorrhage</div>' +
            '<div class="mc-items">Direct pressure, tourniquet/packing support, note tourniquet time, warm the patient.</div>' +
          '</div>' +
          '<div class="march-card">' +
            '<div class="mc-letter">A</div>' +
            '<div class="mc-label">Airway</div>' +
            '<div class="mc-items">Position for airway patency, suction if needed, have OPA/NPA and BVM ready, prepare oxygen.</div>' +
          '</div>' +
          '<div class="march-card">' +
            '<div class="mc-letter">R</div>' +
            '<div class="mc-label">Respiration</div>' +
            '<div class="mc-items">Expose chest, apply oxygen, assist chest seal/dressing setup, watch for increasing respiratory distress.</div>' +
          '</div>' +
          '<div class="march-card">' +
            '<div class="mc-letter">C</div>' +
            '<div class="mc-label">Circulation</div>' +
            '<div class="mc-items">Assist IV/IO setup, keep patient warm, check pulses and skin signs, track total fluids given.</div>' +
          '</div>' +
          '<div class="march-card">' +
            '<div class="mc-letter">H</div>' +
            '<div class="mc-label">Head / Hypothermia</div>' +
            '<div class="mc-items">AVPU/GCS trend, pupils if trained, prevent heat loss immediately with blankets and barrier.</div>' +
          '</div>' +
        '</div>' +

        '<h3>After Any Intervention, Move, or Deterioration</h3>' +
        '<ul>' +
          '<li>Repeat quick primary check: airway, breathing, perfusion, mental status, temperature exposure.</li>' +
          '<li>Confirm all lines, tubes, and dressings remained secure and in position.</li>' +
          '<li>Update latest vitals and document response to each treatment given.</li>' +
        '</ul>' +

        '<div class="escalation-banner">' +
          '<div class="eb-icon">&#9888;</div>' +
          '<div class="eb-body">' +
            '<div class="eb-title">Escalate immediately if any of the following</div>' +
            '<ul>' +
              '<li>Uncontrolled bleeding, worsening breathing, or falling level of consciousness.</li>' +
              '<li>SpO<sub>2</sub> dropping despite supplemental oxygen.</li>' +
              '<li>Shock signs worsening — cool/clammy skin, weak pulses, altered mentation, or dropping BP.</li>' +
            '</ul>' +
          '</div>' +
        '</div>'
    },
    {
      id: 'reporting-and-communication',
      title: 'Reporting and Communication',
      content:
        '<h3>MIST Handover Format</h3>' +
        '<p>Use MIST for every handover — casualty arrival, clinician briefing, and MEDEVAC transfer. Deliver it in under 60 seconds.</p>' +
        '<div class="mist-card">' +
          '<div class="mist-item">' +
            '<div class="mi-letter">M</div>' +
            '<div class="mi-word">Mechanism / Medical complaint</div>' +
            '<div class="mi-desc">What happened or the key illness concern. Include time of injury if known.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">I</div>' +
            '<div class="mi-word">Injuries / Information</div>' +
            '<div class="mi-desc">Major findings from the primary survey and obvious injuries identified.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">S</div>' +
            '<div class="mi-word">Signs</div>' +
            '<div class="mi-desc">Latest vital signs, trend direction, mental status, and current oxygen requirement.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">T</div>' +
            '<div class="mi-word">Treatment</div>' +
            '<div class="mi-desc">What was done, when it was done, and how the patient responded.</div>' +
          '</div>' +
        '</div>' +

        '<h3>Closed-Loop Communication Rules</h3>' +
        '<ul>' +
          '<li><strong>Repeat back critical orders</strong> — drug name, dose, route, and time before executing.</li>' +
          '<li><strong>Verbally confirm task completion</strong> — say "done" out loud when a task is finished.</li>' +
          '<li><strong>Call out changes immediately:</strong> "BP falling", "SpO<sub>2</sub> now 88%", "patient more agitated".</li>' +
          '<li><strong>Name the person you are talking to</strong> before giving instructions in a crowded space.</li>' +
        '</ul>' +

        '<h3>MEDEVAC / Transfer Snapshot</h3>' +
        '<ul>' +
          '<li>Patient identifiers, problem list, and urgency category (immediate / delayed / minimal).</li>' +
          '<li>Current status: airway/oxygen requirement, circulation, neurological status, pain/sedation state.</li>' +
          '<li>Interventions with times — tourniquet time, medications given, fluids, and procedures performed.</li>' +
          '<li>Outstanding risks: potential airway failure, ongoing bleeding risk, device-specific concerns.</li>' +
        '</ul>' +

        '<div class="severity-card red" style="margin-top:18px">' +
          '<div class="sc-title"><span class="sc-label" style="background:var(--severity-red);color:#fff">AVOID</span> Common handoff failures</div>' +
          '<ul style="margin:8px 0 0 18px;color:var(--text-secondary)">' +
            '<li>Missing times for last sedative or analgesic doses given.</li>' +
            '<li>Only one set of vitals — always give a trend, not just a snapshot.</li>' +
            '<li>No statement of what may deteriorate next during transport.</li>' +
          '</ul>' +
        '</div>'
    },
    {
      id: 'equipment',
      title: 'Equipment',
      content:
        '<h3>Priority Equipment Groups</h3>' +
        '<p>Stage and verify these groups before any anticipated casualty event or at watch start.</p>' +
        '<ul>' +
          '<li><strong>Airway / Oxygen:</strong> oxygen source and flow rate checked, BVM with mask, suction device functional, OPA/NPA sizes, ETCO<sub>2</sub> if available.</li>' +
          '<li><strong>Hemorrhage / Trauma:</strong> tourniquets (at least 2), hemostatic gauze, pressure dressings, splints, burn sheets, large bore needles for decompression.</li>' +
          '<li><strong>Monitoring:</strong> ECG/defib pads attached and ready, SpO<sub>2</sub> probe, NIBP cuffs (correct sizes), thermometer, point-of-care glucose meter.</li>' +
          '<li><strong>Access / Fluids:</strong> IV and IO supplies, normal saline or Ringers, giving sets, flushes, fluid warmer if available, tape and labels.</li>' +
          '<li><strong>Movement / Packaging:</strong> stretcher or litter, straps and securing materials, blankets, portable oxygen for transport, route lights if underway at night.</li>' +
        '</ul>' +

        '<h3>Quick Readiness Check</h3>' +
        '<p>Run at the start of each event or watchkeeping period:</p>' +
        '<ul>' +
          '<li>Power/battery status confirmed for monitor, suction unit, and transport ventilator if used.</li>' +
          '<li>Oxygen reserve estimated for the projected holding and transport period.</li>' +
          '<li>Critical disposables present, in date, and accessible (pads, tubing, airway consumables).</li>' +
          '<li>Backup plan staged: spare suction, spare airway adjuncts, spare BP cuff and SpO<sub>2</sub> probe.</li>' +
        '</ul>' +

        '<div class="shipboard-callout">' +
          '<div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')">' +
          '<span>&#9875;</span> Before moving a patient — check for snag risks<span class="sc-chevron">&#9654;</span></div>' +
          '<div class="shipboard-callout-body expanded">' +
            '<p>Identify what could <strong>snag, disconnect, tip, or run out</strong> during movement: oxygen line length, battery life, drain positions, IV tubing, monitor leads, and side rail or hatch clearances along the route.</p>' +
          '</div>' +
        '</div>'
    },
    {
      id: 'patient-movement',
      title: 'Patient Movement',
      content:
        '<div class="severity-card amber" style="margin-bottom:18px">' +
          '<div class="sc-title">Move only when the destination improves care or safety</div>' +
          '<p style="margin:6px 0 0;color:var(--text-secondary)">Every movement is a risk event. An unstable patient moved poorly is more dangerous than a stable patient held in position.</p>' +
        '</div>' +

        '<h3>Pre-Move Checklist</h3>' +
        '<ul>' +
          '<li>State why moving and where going — every team member must know the destination and reason.</li>' +
          '<li>Recheck airway, breathing, perfusion, and bleeding control immediately before departure.</li>' +
          '<li>Secure all lines, tubes, and drains with visible slack and confirmed anchor points.</li>' +
          '<li>Assign roles: <strong>airway watch</strong>, <strong>lines/drains watch</strong>, <strong>route lead</strong>, <strong>stretcher team positions</strong>.</li>' +
          '<li>Carry an immediate rescue kit: oxygen, BVM, suction option, key emergency meds, dressing supplies.</li>' +
        '</ul>' +

        '<h3>During Movement</h3>' +
        '<ul>' +
          '<li>Pause and treat if any deterioration occurs — do not continue moving a deteriorating patient.</li>' +
          '<li>Protect C-spine and fractures as indicated throughout the move.</li>' +
          '<li>Maintain verbal status updates at regular intervals and at every route hazard: ladders, narrow passageways, hatches, and deck changes.</li>' +
        '</ul>' +

        '<h3>Post-Move Arrival Check</h3>' +
        '<ul>' +
          '<li>Immediate full reassessment and a complete set of vital signs.</li>' +
          '<li>Confirm device function: oxygen flow rate, suction availability, monitor signals, drain position and patency.</li>' +
          '<li>Document movement time and record any adverse events or changes that occurred during transport.</li>' +
        '</ul>'
    },
    {
      id: 'injuries-and-medical-emergencies',
      title: 'Injuries and Medical Emergencies',
      content:
        '<p>CCT members should recognize dangerous patterns early, support immediate measures, and escalate without delay. You do not need a complete diagnosis to act on a dangerous trend.</p>' +

        '<h3>High-Priority Trauma Patterns</h3>' +
        '<ul>' +
          '<li><strong>Major bleeding:</strong> direct pressure, tourniquet/packing support, keep patient warm, rapid serial reassessment of bleeding control.</li>' +
          '<li><strong>Chest injury:</strong> watch for worsening dyspnea, unilateral breath sounds changing, rising work of breathing — chest seal and chest tube support readiness.</li>' +
          '<li><strong>Head injury:</strong> declining mentation or GCS, repeated vomiting, pupil asymmetry or dilation, new seizure activity.</li>' +
          '<li><strong>Burns / inhalation:</strong> airway soot, voice change, or stridor are airway emergencies — also manage circumferential burns, fluid requirements, and temperature support.</li>' +
          '<li><strong>Fracture / crush:</strong> splint and immobilize; check distal pulses, sensation, and motor function; watch for compartment syndrome signs.</li>' +
        '</ul>' +

        '<h3>Common Shipboard Medical Emergencies</h3>' +
        '<ul>' +
          '<li><strong>ACS / Chest pain:</strong> monitor continuously, vital signs, oxygen only if hypoxic, prepare for transfer pathway early.</li>' +
          '<li><strong>Sepsis / Shock:</strong> fever or hypothermia combined with hypotension or altered mental status — perfusion support and IV access are priorities.</li>' +
          '<li><strong>Anaphylaxis:</strong> airway swelling, wheeze, or hypotension — immediate emergency response support, epinephrine ready.</li>' +
          '<li><strong>DKA / Hyperglycemia:</strong> dehydration, rapid breathing, altered status — monitor glucose frequently, IV fluids per clinical plan.</li>' +
          '<li><strong>Hypothermia / Drowning:</strong> handle extremely gently, active rewarming support, careful vital sign monitoring — pulse check can take 60 seconds.</li>' +
        '</ul>' +

        '<div class="escalation-banner">' +
          '<div class="eb-icon">&#128226;</div>' +
          '<div class="eb-body">' +
            '<div class="eb-title">CCT focus: recognize, report, support, then trend</div>' +
            '<ul>' +
              '<li>Recognize the dangerous pattern.</li>' +
              '<li>Report it immediately and out loud to the clinical lead.</li>' +
              '<li>Support the immediate interventions directed by the clinician.</li>' +
              '<li>Trend the response — better, worse, or unchanged after each intervention.</li>' +
              '<li>Do not wait for a complete diagnosis before escalating a dangerous trend.</li>' +
            '</ul>' +
          '</div>' +
        '</div>'
    },
    {
      id: 'monitoring-and-vital-signs',
      title: 'Monitoring and Vital Signs',
      content:
        '<h3>What to Trend</h3>' +
        '<ul>' +
          '<li><strong>Vital signs:</strong> HR, BP, RR, SpO<sub>2</sub>, temperature, pain score (0–10), mental status (AVPU or GCS).</li>' +
          '<li><strong>Output:</strong> urine output in mL/hr when a catheter is in place.</li>' +
          '<li><strong>Device status:</strong> oxygen source remaining, airway position, dressings intact, drains patent, IV/IO site patent, infusion rates running as prescribed.</li>' +
          '<li><strong>Clinical response:</strong> after each intervention, document whether the patient is better, worse, or unchanged.</li>' +
        '</ul>' +

        '<h3>Monitoring Frequency Guide</h3>' +
        '<table class="freq-table">' +
          '<thead><tr><th>Patient Status</th><th>Frequency</th><th>Priority</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Unstable or immediately post-intervention</td><td>Every 5–15 minutes</td><td><span class="freq-badge urgent">Urgent</span></td></tr>' +
            '<tr><td>Temporarily stable but high-risk</td><td>Every 15–30 minutes</td><td><span class="freq-badge caution">Caution</span></td></tr>' +
            '<tr><td>Extended holding with stable trend</td><td>At least every hour + after any change</td><td><span class="freq-badge stable">Stable</span></td></tr>' +
          '</tbody>' +
        '</table>' +

        '<h3>Escalation Triggers</h3>' +
        '<div class="escalation-banner">' +
          '<div class="eb-icon">&#9888;</div>' +
          '<div class="eb-body">' +
            '<div class="eb-title">Escalate immediately for any of these</div>' +
            '<ul>' +
              '<li>New hypoxia, rising oxygen requirement, or worsening work of breathing.</li>' +
              '<li>Falling BP, rising HR, reduced urine output, cool/mottled skin, or altered mentation.</li>' +
              '<li>New confusion, new seizure activity, focal neurologic signs, or a decreasing GCS score.</li>' +
              '<li>Recurrent bleeding, drain failure, loss of IV/IO access, or equipment failure.</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +

        '<div class="shipboard-callout">' +
          '<div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')">' +
          '<span>&#9875;</span> Trend over snapshot<span class="sc-chevron">&#9654;</span></div>' +
          '<div class="shipboard-callout-body expanded">' +
            '<p>One normal set of vitals does not clear risk. A <strong>worsening trend</strong> is often the earliest warning available at sea — especially in prolonged holding. Document and report trends, not just single readings.</p>' +
          '</div>' +
        '</div>'
    },
    {
      id: 'quick-reference',
      title: 'Quick Reference',
      content:
        '<h3>60-Second CCT Start</h3>' +
        '<ul>' +
          '<li><strong>1.</strong> State lead and assign roles out loud.</li>' +
          '<li><strong>2.</strong> Run MARCH — treat immediate life threats first.</li>' +
          '<li><strong>3.</strong> Apply monitor and get a baseline set of vitals.</li>' +
          '<li><strong>4.</strong> Start the documentation clock: times, meds, interventions, and responses.</li>' +
          '<li><strong>5.</strong> Identify the likely transfer need early and begin packaging planning.</li>' +
        '</ul>' +

        '<h3>MIST Handover Card</h3>' +
        '<div class="mist-card" style="margin-bottom:20px">' +
          '<div class="mist-item">' +
            '<div class="mi-letter">M</div>' +
            '<div class="mi-word">Mechanism / Medical</div>' +
            '<div class="mi-desc">What happened and when.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">I</div>' +
            '<div class="mi-word">Injuries / Info</div>' +
            '<div class="mi-desc">Findings from the primary survey.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">S</div>' +
            '<div class="mi-word">Signs + Trend</div>' +
            '<div class="mi-desc">Latest vitals and direction of change.</div>' +
          '</div>' +
          '<div class="mist-item">' +
            '<div class="mi-letter">T</div>' +
            '<div class="mi-word">Treatment + Times</div>' +
            '<div class="mi-desc">What was given, when, and response.</div>' +
          '</div>' +
        '</div>' +

        '<h3>Before Any Movement</h3>' +
        '<ul>' +
          '<li>Reassess airway, breathing, and perfusion immediately before departure.</li>' +
          '<li>Secure all devices and confirm oxygen/power reserve for the route.</li>' +
          '<li>Assign airway watcher and lines watcher by name.</li>' +
          '<li>Carry the rescue kit and brief the team on route hazards.</li>' +
        '</ul>' +

        '<h3>Do Not Miss</h3>' +
        '<div class="severity-card red">' +
          '<div class="sc-title"><span class="sc-label" style="background:var(--severity-red);color:#fff">CRITICAL</span> These are never acceptable gaps</div>' +
          '<ul style="margin:10px 0 0 18px;color:var(--text-secondary)">' +
            '<li>Tourniquet application time not documented.</li>' +
            '<li>No repeat vital signs after medications, procedures, or movement.</li>' +
            '<li>Unclear time of last sedative or analgesic dose at handover.</li>' +
            '<li>Device displacement (tube, line, drain) undiscovered after a transfer.</li>' +
          '</ul>' +
        '</div>'
    }
  ]
};
