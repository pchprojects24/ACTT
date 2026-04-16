window.ACTT=window.ACTT||{};
window.ACTT.pathways={
  id:'pathways',
  title:'Learning Pathways',
  subtitle:'Four-week deliberate practice tracks for ACTT learners',
  intro:`<p>Use these pathways to structure study time and team drills. Each week pairs core content with checklists, scenarios, and tools so you can prove readiness under time pressure.</p>
  <ul>
    <li>Spend 20–30 minutes daily on the listed content, then run a scenario or micro-quiz.</li>
    <li>Capture gaps and questions in a debrief note; revisit weak areas the next day.</li>
    <li>Use the timers and checklists during practice so habits match real use.</li>
  </ul>`,
  sections:[
    {
      id:'airway',
      title:'Week 1 - Airway and Ventilation',
      subtitle:'RSI fundamentals, rescue options, and post-intubation care',
      content:`<h3>Focus</h3>
      <ul>
        <li>Walk the <a href="#/algorithms/airway-failure">Failed Airway</a> pathway and rehearse the RSI checklist start to finish.</li>
        <li>Run through <a href="#/procedures/rsi">RSI setup</a>, <a href="#/procedures/surgical-cric">surgical cric</a>, and <a href="#/procedures/needle-thoracostomy">needle decompression</a> skills in sequence.</li>
        <li>Review <a href="#/thresholds/airway-respiratory">airway/respiratory thresholds</a> and pitfall cards to set escalation triggers.</li>
      </ul>
      <h3>Practice and proof</h3>
      <ul>
        <li>Complete the <a href="#/checklists/rsi">RSI checklist</a> twice with a timer; log times for setup and post-intubation confirmation.</li>
        <li>Use the <a href="#/tools/gcs">GCS calculator</a> during simulated neuro cases to keep consistency.</li>
        <li>Run Scenario 09 (Failed Airway / CICO) and note one improvement for equipment layout.</li>
      </ul>
      <h3>Reference targets</h3>
      <ul>
        <li>Know tube size, induction/pressor dosing, and ventilator starting points without looking.</li>
        <li>Define the exact triggers for switching to surgical airway in your setting.</li>
      </ul>`,
      relatedLinks:[
        'algorithms/airway-failure',
        'procedures/rsi',
        'procedures/surgical-cric',
        'procedures/needle-thoracostomy',
        'thresholds/airway-respiratory',
        'pitfalls/airway-errors',
        'checklists/rsi',
        'checklists/emergency-airway-equipment',
        'shipboard/airway-at-sea',
        'tools/gcs'
      ]
    },
    {
      id:'shock',
      title:'Week 2 - Shock and Resuscitation',
      subtitle:'Hemodynamic control, sepsis, STEMI, and post-ROSC',
      content:`<h3>Focus</h3>
      <ul>
        <li>Drill <a href="#/algorithms/sepsis">sepsis</a>, <a href="#/algorithms/stemi">STEMI</a>, and <a href="#/algorithms/chest-decompression">thoracic compromise</a> pathways with medication prep.</li>
        <li>Practice IO/IV access and <a href="#/procedures/chest-tube">chest tube</a> setup under time limits.</li>
        <li>Memorize <a href="#/thresholds/hemodynamic">hemodynamic targets</a> and <a href="#/thresholds/sepsis-targets">sepsis bundle numbers</a>.</li>
      </ul>
      <h3>Practice and proof</h3>
      <ul>
        <li>Run the <a href="#/checklists/fibrinolysis-screening">fibrinolysis screen</a> and <a href="#/checklists/post-fibrinolysis-monitoring">monitoring</a> checklists back to back.</li>
        <li>Use the <a href="#/tools/dosecalc">dose calculator</a> for push-dose pressors and analgesia dosing; confirm prep steps aloud.</li>
        <li>Simulate post-ROSC care using the <a href="#/checklists/post-rosc">post-ROSC checklist</a> with the <a href="#/tools/timer">reassessment timer</a> running.</li>
      </ul>
      <h3>Reference targets</h3>
      <ul>
        <li>First antibiotic within 1 hour for sepsis; norepinephrine start and titration plan ready.</li>
        <li>STEMI fibrinolysis criteria and contraindications recalled without notes.</li>
      </ul>`,
      relatedLinks:[
        'algorithms/sepsis',
        'algorithms/stemi',
        'algorithms/chest-decompression',
        'procedures/io-access',
        'procedures/chest-tube',
        'thresholds/hemodynamic',
        'thresholds/sepsis-targets',
        'checklists/post-rosc',
        'checklists/fibrinolysis-screening',
        'checklists/post-fibrinolysis-monitoring',
        'pitfalls/circulation-errors',
        'pitfalls/medication-errors',
        'tools/dosecalc',
        'tools/timer'
      ]
    },
    {
      id:'prolonged-hold',
      title:'Week 3 - Prolonged Hold',
      subtitle:'Trend-based care, sedation, devices, and limits under delayed evacuation',
      content:`<h3>Focus</h3>
      <ul>
        <li>Review the <a href="#/prolonged-holding/critical-care-24h-hold">24-hour hold framework</a> and trending cadence.</li>
        <li>Plan sedation/analgesia strategies (<a href="#/prolonged-holding/sedation-pain">sedation and pain</a>) with monitoring and delirium checks.</li>
        <li>Walk through <a href="#/prolonged-holding/device-maintenance">device maintenance</a> and troubleshooting for vents, tubes, and lines.</li>
      </ul>
      <h3>Practice and proof</h3>
      <ul>
        <li>Set the <a href="#/tools/timer">reassessment timer</a> for a 4-hour hold scenario; log three cycles with actions taken.</li>
        <li>Use the <a href="#/thresholds/reassessment-numbers">reassessment numbers</a> to trigger interventions during a mock long hold.</li>
        <li>Rehearse team handoff using <a href="#/team/handover">handover structure</a> and <a href="#/team/sustained-performance">sustained performance</a> cues.</li>
      </ul>
      <h3>Reference targets</h3>
      <ul>
        <li>Clear escalation thresholds for worsening ventilation, shock, or neuro status during multi-day care.</li>
        <li>Documented plan for supply use, rotation, and teleconsultation during the hold.</li>
      </ul>`,
      relatedLinks:[
        'prolonged-holding/critical-care-24h-hold',
        'prolonged-holding/reassessment-rhythm',
        'prolonged-holding/airway-breathing-holding',
        'prolonged-holding/circulation-fluids',
        'prolonged-holding/sedation-pain',
        'prolonged-holding/device-maintenance',
        'prolonged-holding/holding-limits',
        'shipboard/sustaining-care',
        'team/sustained-performance',
        'team/handover',
        'thresholds/reassessment-numbers',
        'tools/timer'
      ]
    },
    {
      id:'trauma',
      title:'Week 4 - Trauma Systems',
      subtitle:'Primary survey discipline, burns, TBI, and MASCAL readiness',
      content:`<h3>Focus</h3>
      <ul>
        <li>Run the <a href="#/algorithms/atls-trauma-survey">ATLS survey</a> and <a href="#/algorithms/multi-system">multi-system trauma</a> pathways with timing goals.</li>
        <li>Refresh <a href="#/algorithms/tbi-management">TBI</a> and <a href="#/algorithms/burn-resuscitation">burn resuscitation</a> priorities and thresholds.</li>
        <li>Rehearse thoracic procedures: <a href="#/procedures/needle-thoracostomy">decompression</a> and <a href="#/procedures/chest-tube">chest tube</a> under simulated stress.</li>
      </ul>
      <h3>Practice and proof</h3>
      <ul>
        <li>Complete the <a href="#/checklists/mascal">MASCAL</a> checklist plus <a href="#/shipboard/triage-prioritization">triage</a> considerations.</li>
        <li>Use the <a href="#/thresholds/neurologic-tbi">TBI</a> and <a href="#/thresholds/burn-thresholds">burn</a> thresholds to decide when to escalate or transfer.</li>
        <li>Run Scenario 08 (Polytrauma) and note one airway, one circulation, and one documentation improvement.</li>
      </ul>
      <h3>Reference targets</h3>
      <ul>
        <li>Confidently call critical actions for airway, breathing, circulation within 5 minutes of arrival.</li>
        <li>Have a documented plan for analgesia, fluid targets, and evacuation messaging for trauma cases.</li>
      </ul>`,
      relatedLinks:[
        'algorithms/atls-trauma-survey',
        'algorithms/multi-system',
        'algorithms/tbi-management',
        'algorithms/burn-resuscitation',
        'procedures/needle-thoracostomy',
        'procedures/chest-tube',
        'thresholds/neurologic-tbi',
        'thresholds/burn-thresholds',
        'checklists/mascal',
        'shipboard/triage-prioritization',
        'pitfalls/thoracic-errors',
        'pitfalls/neurologic-errors'
      ]
    }
  ]
};
