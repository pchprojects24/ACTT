window.ACTT=window.ACTT||{};
window.ACTT.prolongedHolding={
  id:'prolonged-holding',
  title:'Prolonged Holding & Delayed MEDEVAC',
  subtitle:'Chapter 7 — Sustained Care Framework',
  chapter:7,
  intro:'<p>This chapter explains how to convert initial stabilization into a structured 24–72 hour holding plan when evacuation is delayed. The focus is sustained monitoring, complication prevention, clear reassessment rhythm, and knowing when holding is no longer safe.</p>'+
    '<h3>7.1 Purpose of This Chapter</h3>'+
    '<p>This chapter addresses the period after the dramatic first minutes of care are over. In the ACTT context, the problem is often not simply how to save a patient in the initial resuscitation, but how to keep that patient alive, monitored, and organized for the next several hours when transfer is delayed. That shift changes nearly every clinical priority.</p>'+
    '<p>The practical goal is to move from isolated interventions to a deliberate holding plan. A chest tube, an endotracheal tube, a fluid bolus, a pressor infusion, or a sedative dose may solve an immediate problem, but each one creates a maintenance burden. Prolonged holding means the clinician must manage those burdens continuously and predict what will fail next.</p>'+
    '<h3>7.2 Why Prolonged Holding Matters in the ACTT / RCN Context</h3>'+
    '<p>For a Royal Canadian Navy clinician working at sea, delayed evacuation is not an edge case. Weather, distance, sea state, flight availability, platform limitations, and the operational setting can all extend the time between initial stabilization and definitive transfer. As a result, patients may remain under shipboard care far longer than would be typical in a shore-based emergency department.</p>'+
    '<p>A patient who initially looks "stabilized" can deteriorate later for predictable reasons: sedation accumulates, drains stop functioning, edema progresses, a temporary decompression fails, infection declares itself, or the team becomes fatigued. ACTT-level prolonged care therefore requires active surveillance rather than passive observation.</p>'+
    '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>At sea, delayed evacuation is the norm rather than the exception. Weather, sea state, flight availability, distance, and operational constraints routinely extend holding times well beyond what would be expected ashore. Plan for sustained care from the outset.</p></div></div>'+
    '<h3>7.3 How Prolonged Holding Changes Clinical Priorities</h3>'+
    '<h4>7.3.1 From rescue to maintenance</h4>'+
    '<p>During the first phase, the priority is to identify and treat immediate threats. Once those threats are addressed, the operational question changes from "What is killing the patient right now?" to "What could cause this patient to worsen over the next 1, 6, 24, or 72 hours?"</p>'+
    '<ul>'+
      '<li>Temporary interventions must be converted into sustainable care plans.</li>'+
      '<li>Every medication now needs a re-dosing plan, not just a one-time dose.</li>'+
      '<li>Every device now needs securement, checks, and troubleshooting expectations.</li>'+
      '<li>A normal single set of vitals is less useful than a clear trend over time.</li>'+
    '</ul>'+
    '<h4>7.3.2 From snapshot thinking to trend thinking</h4>'+
    '<p>Prolonged holding depends on trends. Blood pressure, neurologic status, oxygen requirement, urine output, chest tube output, temperature, sedation depth, and infusion needs all need repeated documentation. The aim is to detect drift early while it is still manageable.</p>',
  sections:[
    {
      id:'stabilization-checklist',
      title:'Stabilization Checklist Before Holding',
      content:'<h3>7.4 Transition Into the Holding Phase</h3>'+
        '<h4>7.4.1 Stabilization check before formal holding</h4>'+
        '<p>Before declaring a patient to be in a holding phase, run a deliberate stabilization check. This prevents the common mistake of calling a patient stable when a life-threatening problem is only partially treated.</p>'+
        '<ul>'+
          '<li><strong>Airway:</strong> secured, maintainable, and reassessed?</li>'+
          '<li><strong>Breathing:</strong> oxygenation acceptable, ventilation adequate, chest interventions functioning?</li>'+
          '<li><strong>Circulation:</strong> hemorrhage controlled, perfusion acceptable, access reliable?</li>'+
          '<li><strong>Disability:</strong> neurologic status documented and comparable over time?</li>'+
          '<li><strong>Exposure:</strong> temperature protected, wounds covered, no missed injury pattern?</li>'+
        '</ul>'+
        '<h4>7.4.2 Define the working problem list</h4>'+
        '<p>Create a concise written problem list. It should include active diagnoses, current threats, devices in place, medications currently running or due, and what specific deterioration is most likely next. A working problem list turns prolonged care from reactive improvisation into organized management.</p>'+
        '<h4>7.4.3 Set explicit holding priorities</h4>'+
        '<p>Assign what must be watched continuously, what must be checked on a schedule, and what change would force escalation. This prevents omissions during long holds or shift turnover.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Shipboard stabilization checks must account for limited monitoring capability. If a parameter cannot be measured continuously, establish a written schedule for intermittent checks and define who is responsible. Use the problem list to brief the bridge and command on likely timelines and resource needs.</p></div></div>',
      relatedLinks:['thresholds/reassessment','pitfalls/prolonged-hold']
    },
    {
      id:'reassessment-rhythm',
      title:'Reassessment Rhythm and Scheduling',
      content:'<h3>7.5 Reassessment Framework Over 24–72 Hours</h3>'+
        '<p>Reassessment is the core skill in prolonged holding. There is no single universal schedule, but the pattern should be more frequent when unstable, immediately after interventions, and still routine even when the patient appears stable.</p>'+
        '<h4>7.5.1 Suggested reassessment rhythm</h4>'+
        '<table class="actt-table">'+
          '<thead><tr><th>Patient State</th><th>Typical Reassessment Rhythm</th><th>Focus</th></tr></thead>'+
          '<tbody>'+
            '<tr><td>Unstable or actively deteriorating</td><td>Continuous or near-continuous</td><td>ABCs, monitor trend, response to each intervention, immediate escalation readiness</td></tr>'+
            '<tr><td>Recently intervened upon</td><td>Recheck within minutes, then frequent short intervals</td><td>Effect of procedure or drug, new complications, whether target was achieved</td></tr>'+
            '<tr><td>Temporarily stable but high-risk</td><td>Scheduled full trend reviews</td><td>Neuro trend, perfusion, urine output, device function, medication timing</td></tr>'+
            '<tr><td>Long hold with handover risk</td><td>Formal written trend review each watch / shift</td><td>Continuity, cumulative totals, what may fail next</td></tr>'+
          '</tbody>'+
        '</table>'+
        '<h4>7.5.2 What must be trended</h4>'+
        '<ul>'+
          '<li>Mental status, GCS, and pupils in any neurologic concern.</li>'+
          '<li>Work of breathing, oxygen requirement, EtCO<sub>2</sub> if available, and airway patency.</li>'+
          '<li>Heart rate, blood pressure or MAP, capillary refill, skin findings, and pulses.</li>'+
          '<li>Urine output, total fluids in, total fluids out, and cumulative medication doses.</li>'+
          '<li>Chest tube output, drain function, and any sign of recurrent tension physiology.</li>'+
          '<li>Fever pattern, wound progression, and any sign of sepsis or new infection.</li>'+
        '</ul>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>At sea, watch rotations create natural handover points. Align reassessment rhythm with watch turnover so that each incoming team receives a structured update. Use a written trend sheet posted at the patient\'s side to reduce verbal-only handover errors.</p></div></div>',
      relatedLinks:['thresholds/reassessment','pitfalls/prolonged-hold']
    },
    {
      id:'airway-breathing-holding',
      title:'Airway and Breathing During Prolonged Holding',
      content:'<h3>7.6 Airway and Breathing During Prolonged Holding</h3>'+
        '<h4>7.6.1 Non-intubated patients</h4>'+
        '<p>A patient who is not intubated still requires an airway plan. Positioning, suction readiness, oxygen adjustment, and serial reassessment for fatigue or evolving obstruction are essential. This is particularly important with facial burns, inhalation injury, altered mental status, sedating medications, or progressive edema.</p>'+
        '<h4>7.6.2 Intubated patients</h4>'+
        '<p>Intubation does not end airway management. The tube must be checked repeatedly for depth, securement, cuff integrity if relevant, and patency. The team must confirm that the patient is adequately sedated, ventilated to target, and not developing tube obstruction, mainstem migration, or accidental partial withdrawal.</p>'+
        '<ul>'+
          '<li>Check tube depth after movement, transfers, or major patient repositioning.</li>'+
          '<li>Reconfirm bilateral breath sounds and appropriate chest rise when concern exists.</li>'+
          '<li>Use EtCO<sub>2</sub> trends when available; abrupt change can indicate displacement or obstruction.</li>'+
          '<li>Anticipate secretion burden and suction before it becomes a crisis.</li>'+
        '</ul>'+
        '<h4>7.6.3 Surgical and rescue airways</h4>'+
        '<p>Surgical or rescue airways carry an even higher maintenance burden. They are easier to dislodge, may bleed, and can become obstructed by secretions or clot. In a prolonged hold, the team must treat patency checks and securement as active tasks, not assumptions.</p>'+
        '<h4>7.6.4 Thoracic intervention follow-up</h4>'+
        '<p>Any needle decompression requires reassessment because it is a temporizing measure. Any chest tube requires ongoing function checks: drainage integrity, kinking, clotting, output trend, and recurrent tension signs. A procedure that worked once may fail later.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Ship motion increases the risk of tube dislodgement and migration. Secure all airway devices with redundant fixation. During patient movement through narrow passageways, ladders, or between decks, assign one team member exclusively to airway and tube management. Chest tube drainage systems must be secured against tipping in heavy seas.</p></div></div>',
      relatedLinks:['thresholds/airway','pitfalls/airway-loss']
    },
    {
      id:'circulation-fluids',
      title:'Circulation and Fluid Management Over Time',
      content:'<h3>7.7 Circulation, Perfusion, and Fluid Management Over Time</h3>'+
        '<h4>7.7.1 Ongoing perfusion goals</h4>'+
        '<p>The objective is sustained end-organ perfusion, not a single reassuring blood pressure. Mental status, skin findings, pulses, capillary refill, urine output, and trajectory after each intervention are often more informative than one number alone.</p>'+
        '<h4>7.7.2 Fluid management over hours</h4>'+
        '<p>Repeated fluids without a defined endpoint can harm the patient. Each bolus should have a reason, a reassessment point, and a clear stop condition. If oxygenation worsens, crackles appear, edema increases, or work of breathing rises, the plan must change.</p>'+
        '<h4>7.7.3 Burn resuscitation over time</h4>'+
        '<p>In burns, the initial rate is only the starting point. Urine output drives rate adjustments. Track temperature, peripheral perfusion, extremity tightness, evolving airway edema, and signs of fluid creep. Large burn patients can worsen from under-resuscitation or over-resuscitation.</p>'+
        '<h4>7.7.4 Vasopressors over time</h4>'+
        '<p>A patient on vasopressors requires sustained attention. Continuous infusions demand pump reliability, exact concentration awareness, IV site surveillance, and clear target MAP. Pressor dependence is itself an indicator of severity and should lower the threshold for teleconsultation and escalation.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Fluid supplies at sea are finite. Plan conservation early. Track cumulative fluid use against remaining stock and anticipated holding time. Burn resuscitation in particular can deplete IV fluid reserves rapidly on smaller platforms. Coordinate with the medical supply chain and command early if fluid needs may exceed available stock.</p></div></div>',
      relatedLinks:['thresholds/circulation','pitfalls/fluid-overload']
    },
    {
      id:'neurologic-care',
      title:'Neurologic Care During Holding',
      content:'<h3>7.8 Neurologic Care During Prolonged Holding</h3>'+
        '<h4>7.8.1 Serial neurologic assessment</h4>'+
        '<p>In TBI or any altered mental status case, document neurologic trends in a way that can be compared. GCS alone is not enough; note pupil size and reactivity, movement patterns, seizure activity, new asymmetry, and whether apparent agitation may actually reflect neurologic decline.</p>'+
        '<h4>7.8.2 Preventing secondary brain injury</h4>'+
        '<ul>'+
          '<li>Avoid hypoxia.</li>'+
          '<li>Avoid hypotension.</li>'+
          '<li>Avoid fever.</li>'+
          '<li>Maintain ventilation targets; do not drift into unrecognized hypo- or hyperventilation.</li>'+
          '<li>Avoid hypotonic fluids and monitor sodium when hypertonic therapy is used.</li>'+
        '</ul>'+
        '<h4>7.8.3 Herniation surveillance</h4>'+
        '<p>Watch for worsening level of consciousness, pupillary asymmetry, bradycardia with hypertension, or irregular respirations. If the patient begins to herniate despite current care, local holding may no longer be safe. Temporary rescue measures do not replace the need to escalate.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Neurologic monitoring at sea is limited to clinical examination. Without CT or advanced imaging, trend-based assessment becomes even more critical. Document GCS, pupils, and motor findings on a written timeline so that any deterioration is visible to the next assessor. Herniation signs in a maritime environment should trigger immediate teleconsultation and urgent evacuation planning.</p></div></div>',
      relatedLinks:['thresholds/neuro','pitfalls/tbi-secondary']
    },
    {
      id:'sedation-pain',
      title:'Sedation and Pain Continuity',
      content:'<h3>7.9 Sedation, Analgesia, and Agitation Over Time</h3>'+
        '<p>One of the most demanding prolonged-care tasks is keeping the patient comfortable enough to tolerate care, but not so sedated that deterioration is masked or respiratory compromise is created. This is especially important for intubated patients, burn patients, head injury patients, and previously combative patients.</p>'+
        '<h4>7.9.1 Practical sedation principles</h4>'+
        '<ul>'+
          '<li>Treat pain proactively; do not wait for severe distress to recur.</li>'+
          '<li>Track exact dose times and cumulative totals to avoid dose stacking.</li>'+
          '<li>If repeated boluses are creating instability or excessive workload, consider whether an infusion is more controlled.</li>'+
          '<li>Any new agitation should prompt reassessment for pain, hypoxia, hypoglycemia, delirium, urinary retention, TBI progression, or withdrawal.</li>'+
        '</ul>'+
        '<h4>7.9.2 Common prolonged-care medication traps</h4>'+
        '<p>The most common medication failures in long holds are cumulative oversedation, respiratory depression after repeated doses, undocumented PRN dosing, and treating every agitation event as behavioural rather than physiologic. The answer is structured reassessment after every major medication change.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Medication stocks at sea are limited. Plan sedation and analgesia conservation from the start. Track cumulative use against remaining supply and anticipated holding duration. If drug supply is running low, contact higher medical support early to discuss alternatives or arrange resupply.</p></div></div>',
      relatedLinks:['thresholds/sedation','pitfalls/dose-stacking']
    },
    {
      id:'device-maintenance',
      title:'Device and Procedure Maintenance',
      content:'<h3>7.10 Device and Procedure Maintenance</h3>'+
        '<p>Placing a device creates an obligation to maintain it. In prolonged holding, device failure is a common reason that previously controlled patients worsen.</p>'+
        '<ul>'+
          '<li><strong>Airway devices:</strong> check security, patency, suction needs, and migration risk.</li>'+
          '<li><strong>Chest tubes:</strong> check drainage system integrity, output, kinks, clots, and re-tension risk.</li>'+
          '<li><strong>IV and IO access:</strong> check patency, infiltration, extravasation, securement, and whether more durable access is needed.</li>'+
          '<li><strong>Foley catheters:</strong> confirm flow, avoid kinks, watch for blockage, and reassess continued need.</li>'+
          '<li><strong>Dressings and wounds:</strong> watch for bleed-through, contamination, swelling, and pressure injury.</li>'+
        '</ul>'+
        '<h3>7.12 Nursing-Style Supportive Care Requirements</h3>'+
        '<p>A common prolonged-care error is to think only in terms of procedures and drugs while neglecting supportive care. In reality, repositioning, hygiene, temperature control, mouth care, skin care, and prevention of pressure injury directly affect outcomes during long holds.</p>'+
        '<h4>7.12.1 Core supportive tasks</h4>'+
        '<ul>'+
          '<li>Reposition when feasible to reduce pressure injury and dependent edema.</li>'+
          '<li>Control temperature: avoid hypothermia in trauma, burns, and shock; avoid overheating during rewarming or prolonged coverage.</li>'+
          '<li>Allow oral intake only when airway protection and clinical status make it safe.</li>'+
          '<li>Manage oral secretions, emesis, blood, and incontinence promptly to reduce aspiration and skin breakdown risk.</li>'+
        '</ul>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Ship motion, vibration, and patient movement between decks all increase the risk of device dislodgement. Secure every tube, line, and drain with redundant fixation before any patient movement. Assign a dedicated team member to device surveillance during transfers through narrow passageways or up/down ladders. Supportive care tasks such as repositioning may be limited by space constraints in the medical treatment facility; adapt positioning schedules to what is feasible while still reducing pressure injury risk.</p></div></div>',
      relatedLinks:['thresholds/device-checks','pitfalls/device-failure']
    },
    {
      id:'infection-prevention',
      title:'Infection Prevention',
      content:'<h3>7.10 Infection Prevention and Sepsis During Holding</h3>'+
        '<h4>7.10.1 Continuing antibiotics safely</h4>'+
        '<p>When antibiotics are indicated, maintain the schedule accurately and document exact administration times. In prolonged care, delayed or missed doses often occur during shift changes or competing crises. That is preventable with a written medication timeline.</p>'+
        '<h4>7.10.2 Watching for progression</h4>'+
        '<p>Track temperature, perfusion, respiratory burden, urine output, mental status, and pressor need. A patient can progress into worse sepsis while appearing only mildly changed in any single category; the trend is what reveals the pattern.</p>'+
        '<h4>7.10.3 Preventing new infection</h4>'+
        '<p>Every line, tube, catheter, and wound creates infection risk. Device care, clean handling, dressing surveillance, and removal of unnecessary devices are part of prolonged treatment, not optional extras.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Shipboard environments present additional infection risks: limited sterile supplies, confined treatment spaces, and ambient contamination from the operational environment. Prioritize clean technique for all device interactions. Remove unnecessary lines and catheters as early as possible. Maintain a written antibiotic schedule visible at the patient\'s side to prevent missed doses during watch changes.</p></div></div>',
      relatedLinks:['thresholds/sepsis','pitfalls/infection']
    },
    {
      id:'documentation-continuity',
      title:'Documentation for Continuity',
      content:'<h3>7.13 Documentation and Handover During Prolonged Holding</h3>'+
        '<p>Documentation becomes more valuable as time passes. It preserves the trend, prevents repeated dosing errors, improves teleconsultation, and makes MEDEVAC handover useful rather than vague.</p>'+
        '<h4>7.13.1 Minimum documentation set</h4>'+
        '<ul>'+
          '<li>Timeline of deterioration and major interventions.</li>'+
          '<li>Vital sign trends and key reassessment findings.</li>'+
          '<li>Neurologic trend, including GCS and pupils when relevant.</li>'+
          '<li>Fluids in, fluids out, and urine output by interval.</li>'+
          '<li>Medications with exact time, dose, route, and observed effect.</li>'+
          '<li>Device placements, checks, and any complications or troubleshooting.</li>'+
          '<li>Current status, current threats, and what may fail next.</li>'+
        '</ul>'+
        '<h4>7.13.2 Structured handover</h4>'+
        '<p>A useful handover should answer five questions quickly: what happened, what has been done, what is the patient like now, what are the active threats, and what specifically must be watched next. This applies to watch turnover, teleconsultation, and actual transfer off the ship.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Handover at sea is complicated by watch rotation, fatigue, and the possibility that multiple casualties compete for attention. A written trend sheet posted at the bedside is the most reliable way to maintain continuity. Ensure documentation is legible, timestamped, and organized so that any team member—including one who was not present for the initial resuscitation—can rapidly understand the patient\'s trajectory and current plan.</p></div></div>',
      relatedLinks:['thresholds/reassessment','pitfalls/handover-failure']
    },
    {
      id:'teleconsultation',
      title:'Teleconsultation Thresholds',
      content:'<h3>7.14 Teleconsultation and Escalation Thresholds</h3>'+
        '<p>In prolonged holding, early remote support is usually more valuable than late remote support. The threshold should be lower when the patient is deteriorating, pressor-dependent, ventilated, seizing repeatedly, neurologically worsening, or approaching the edge of local monitoring capability.</p>'+
        '<h4>7.14.1 Information to have ready before calling</h4>'+
        '<ul>'+
          '<li>Concise problem list.</li>'+
          '<li>Vital signs and trends.</li>'+
          '<li>Interventions already performed and response to each.</li>'+
          '<li>Medications given, including dose and timing.</li>'+
          '<li>Current devices, access, and local limitations.</li>'+
          '<li>What specific decision or support is being requested.</li>'+
        '</ul>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>Teleconsultation at sea may be limited by communications availability, bandwidth, and time zones. Prepare all information before initiating the call to maximize the value of limited connection time. Have the trend sheet, medication log, and a clear question ready. If real-time voice is unavailable, structured text-based consultation using the same information format can still provide valuable guidance.</p></div></div>',
      relatedLinks:['thresholds/escalation','pitfalls/delayed-consult']
    },
    {
      id:'holding-limits',
      title:'When Holding Is No Longer Safe',
      content:'<h3>7.14.2 When holding is no longer acceptable</h3>'+
        '<p>Holding is no longer acceptable when the patient worsens despite active management, when oxygen or pressor requirements keep climbing, when airway or ventilation cannot be maintained safely, when bleeding or neurologic decline is progressing, or when staffing and supply limits mean safe monitoring can no longer be assured.</p>'+
        '<h3>7.15 Common 24–72 Hour Failure Points</h3>'+
        '<h4>7.15.1 Clinical failure points</h4>'+
        '<ul>'+
          '<li>Missed deterioration because reassessment drifted or was not documented.</li>'+
          '<li>Recurrent shock or recurrent tension physiology after temporary improvement.</li>'+
          '<li>Delayed brain herniation or seizure recurrence not recognized early.</li>'+
          '<li>Fluid overload after repeated boluses without endpoint-based reassessment.</li>'+
        '</ul>'+
        '<h4>7.15.2 Medication failure points</h4>'+
        '<ul>'+
          '<li>Dose stacking, especially with sedatives and opioids.</li>'+
          '<li>Infusion concentration errors or pump programming mistakes.</li>'+
          '<li>Missed antibiotic timing during watch changes.</li>'+
          '<li>Running out of key drugs because conservation was never planned.</li>'+
        '</ul>'+
        '<h4>7.15.3 Operational failure points</h4>'+
        '<ul>'+
          '<li>Poor handover.</li>'+
          '<li>Device dislodgement during movement or transport.</li>'+
          '<li>No explicit reassessment schedule.</li>'+
          '<li>Underestimating the staffing burden of a complex held patient.</li>'+
        '</ul>'+
        '<h3>7.16 RCN At-Sea Constraints and Practical Adaptations</h3>'+
        '<p>Shipboard prolonged care requires adaptation. The aim is not to recreate an ICU at sea. The aim is safe, sustainable bridging care that preserves the patient, detects deterioration early, and uses limited staff and equipment where they change decisions most.</p>'+
        '<h4>7.16.1 Practical adaptations</h4>'+
        '<ul>'+
          '<li>Simplify monitoring to the variables that actually change management.</li>'+
          '<li>Use written trend sheets and a routine reassessment rhythm to reduce omission.</li>'+
          '<li>Prioritize securement of every tube, line, and drain before movement.</li>'+
          '<li>Think ahead about medication conservation and re-supply limits.</li>'+
          '<li>Set explicit triggers for re-contacting higher support rather than relying on vague concern.</li>'+
        '</ul>'+
        '<h3>7.17 What the Learner Should Be Able to Do After This Chapter</h3>'+
        '<p>After studying this chapter, the learner should be able to convert an initially stabilized patient into a structured prolonged-care plan; reassess that patient over 24–72 hours using trends rather than snapshots; maintain airway, circulation, sedation, and device safety over time; recognize when the patient is drifting or failing; document clearly enough for continuity and transfer; and identify when local holding is no longer safe or acceptable.</p>'+
        '<h3>7.18 Transition to the Next Chapter</h3>'+
        '<p>The next chapter narrows from prolonged-care process to memorization-critical hard numbers. After learning how to hold the patient over time, the learner next needs a concise reference for thresholds, physiologic targets, trigger values, and dosing-related cutoffs that drive action under pressure.</p>'+
        '<h3>Chapter 7 Quick Reference</h3>'+
        '<table class="actt-table">'+
          '<thead><tr><th>If this is happening...</th><th>Then do this next</th></tr></thead>'+
          '<tbody>'+
            '<tr><td>Patient appears stable after initial resuscitation</td><td>Create a written problem list, define monitoring frequency, and set explicit escalation triggers.</td></tr>'+
            '<tr><td>Repeated PRN sedation is being given</td><td>Stop and review cumulative totals, reassess the cause of agitation, and decide whether a more controlled plan is needed.</td></tr>'+
            '<tr><td>A previously effective device stops improving the patient</td><td>Check function, position, patency, and whether the original intervention was only temporizing.</td></tr>'+
            '<tr><td>Trend is worsening but no single value looks catastrophic</td><td>Treat the trend as real deterioration and escalate early.</td></tr>'+
            '<tr><td>Team is fatigued or handover is approaching</td><td>Do a structured review of vitals, medications, devices, and likely next failure point before turnover.</td></tr>'+
          '</tbody>'+
        '</table>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body"><p>The decision that holding is no longer safe must be communicated clearly to the chain of command. When clinical limits are reached—escalating pressor requirements, failing airway management, uncontrolled bleeding, or progressive herniation—the clinician must articulate that continued holding carries an unacceptable risk and that evacuation priority must increase regardless of operational constraints. Use explicit language and documented clinical findings to support the escalation request.</p></div></div>',
      relatedLinks:['thresholds/escalation','pitfalls/holding-limits']
    }
  ]
};
