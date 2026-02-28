window.ACTT=window.ACTT||{};
window.ACTT.algorithms={
  id:'algorithms',
  title:'Algorithms & Decision Pathways',
  subtitle:'Chapter 4 — Major Clinical Decision Pathways',
  chapter:4,
  intro:'<p>This chapter translates the earlier domain map into operational bedside pathways. Each pathway is written to answer <strong>what to do first</strong>, <strong>what to do next</strong>, <strong>what changes the plan</strong>, <strong>what must be monitored</strong>, and <strong>when to escalate</strong>.</p><p>The goal is not simply to identify a condition, but to guide the clinician through sequence, priority, and reassessment. In practice, these algorithms are most useful when the patient is unstable, time is compressed, and there is pressure to decide quickly.</p><p>Each pathway should be approached as a practical scaffold rather than a rigid script. The sequence helps reduce omissions, but the clinician must still adapt to the patient, the environment, the available medications and equipment, and the likely delay to evacuation.</p><h4>Standard Algorithm Format</h4><p>For consistency, each algorithm in this chapter is organized around the same execution pattern. This makes the chapter easier to study and faster to use under stress.</p><ul><li><strong>Entry condition:</strong> the presentation that activates the pathway.</li><li><strong>Immediate threats:</strong> the problems that can kill the patient or the team in the next minutes.</li><li><strong>Immediate assessment:</strong> what must be checked before or while the first interventions are started.</li><li><strong>Immediate actions:</strong> the first treatment steps that should not be delayed.</li><li><strong>Decision branches:</strong> what changes the next step.</li><li><strong>Reassessment points:</strong> what must be rechecked after the initial intervention.</li><li><strong>Stabilization goals:</strong> the physiologic or operational endpoint you are aiming for.</li><li><strong>Escalation:</strong> when to move to a more invasive step, call for help, or shift toward prolonged holding.</li></ul>',
  sections:[
    {
      id:'airway-failure',
      title:'Airway Failure and Severe Altered Mental Status',
      severity:'red',
      sectionNumber:'4.3',
      content:'<h3>4.3 Airway Failure and Severe Altered Mental Status Pathway</h3>' +
        '<p>This pathway applies when the patient cannot maintain or protect the airway, cannot oxygenate or ventilate adequately, or has a level of consciousness low enough that immediate airway control is likely required. It also includes patients with facial trauma, inhalation injury, or severe agitation that makes safe treatment impossible.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>GCS 8 or less, rapidly falling level of consciousness, or inability to protect the airway.</li>' +
        '<li>Massive maxillofacial trauma, major upper-airway bleeding, or obvious mechanical obstruction.</li>' +
        '<li>Progressive airway edema from burns or inhalation injury.</li>' +
        '<li>Severe agitation where the patient cannot be safely oxygenated, monitored, restrained, or transported.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Determine whether the patient is oxygenating and ventilating right now.</li>' +
        '<li>Look for obvious predictors that oral intubation may fail.</li>' +
        '<li>Decide early whether this is an oral intubation problem or a surgical airway problem.</li>' +
        '<li>Assign one team member to airway preparation and one to monitoring and medications if staff allow.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Apply high-concentration oxygen immediately and place the patient in the best achievable airway position.</li>' +
        '<li>Suction aggressively if blood, vomit, soot, or secretions are present.</li>' +
        '<li>Apply continuous monitoring: pulse oximetry, cardiac monitoring, and end-tidal CO<sub>2</sub> as soon as it is available.</li>' +
        '<li>If oral intubation is appropriate, pre-oxygenate and set a strict attempt limit before the first attempt starts.</li>' +
        '<li>If oral intubation is not appropriate, or if the predefined attempt limit is reached, move directly to surgical cricothyroidotomy rather than repeating low-probability attempts.</li>' +
        '<li>After tube placement, confirm with direct visualization if possible, chest rise, auscultation, and end-tidal CO<sub>2</sub>. Then move immediately to post-intubation ventilation and sedation management.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>The airway plan must include a declared rescue step before the first attempt. If oral intubation is not appropriate or the predefined attempt limit is reached, move directly to surgical cricothyroidotomy. After tube placement, transition to post-intubation ventilation and sedation management.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Do not drift into repeated laryngoscopy attempts. The airway plan must include a declared rescue step before the first attempt.</li>' +
        '<li>Post-intubation management is part of the airway procedure: secure the tube, set ventilation targets, and reassess oxygenation, ventilation, and hemodynamics.</li>' +
        '<li>If burns or facial injury are present, think ahead about tube security. Standard adhesive fixation may fail.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>After tube placement, reassess oxygenation, ventilation, and hemodynamics. Confirm tube placement with end-tidal CO<sub>2</sub>, chest rise, auscultation, and direct visualization if possible. Monitor for tube dislodgement, especially during patient movement or transport.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Spending too long on assessment while the airway is already failing.</li>' +
        '<li>Attempting oral intubation despite a presentation that clearly requires a surgical airway.</li>' +
        '<li>Failing to transition to the next step after a failed attempt.</li>' +
        '<li>Treating tube placement as the end of the problem instead of the beginning of the ventilation phase.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Space, movement, lighting, and limited personnel increase the value of a simple declared plan.</li>' +
        '<li>Prepare for the possibility that the first successful airway must be maintained for hours, not minutes.</li>' +
        '<li>If evacuation is delayed, early attention to tube security, sedation continuity, suction planning, and ventilation reassessment is essential.</li>' +
        '</ul></div></div>',
      relatedLinks:['procedures/rsi','procedures/cricothyroidotomy','medications/ketamine','medications/succinylcholine','medications/rocuronium','thresholds/spo2','thresholds/etco2','pitfalls/airway-fixation']
    },
    {
      id:'combative-patient',
      title:'Combative or Agitated Patient',
      severity:'red',
      sectionNumber:'4.4',
      content:'<h3>4.4 Combative Patient Management Pathway</h3>' +
        '<p>This pathway addresses the unsafe, agitated, or violent patient. The key principle is to identify immediately reversible causes while also protecting the patient, the team, and the ability to continue care. Management is not only about sedation; it is about restoring control without losing the airway or missing a serious underlying illness or injury.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Violent, disorganized, or unsafe behaviour that interferes with assessment, treatment, or transport.</li>' +
        '<li>Agitation in the setting of head injury, hypoxia, suspected intoxication, infection, or metabolic disturbance.</li>' +
        '<li>An altered patient whose behaviour creates a direct safety threat.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Check for hypoxia, hypoglycemia, and head injury as early as practical.</li>' +
        '<li>Rapidly judge whether the patient can be verbally redirected or whether immediate physical control is required.</li>' +
        '<li>Decide if sedation alone is likely to be enough or if the patient is on the path toward airway control.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Use verbal de-escalation first if the patient can still engage and the environment is controlled.</li>' +
        '<li>If the patient remains unsafe, apply physical control promptly using enough personnel to avoid an extended struggle.</li>' +
        '<li>Obtain vital signs, oxygenation, and blood glucose as soon as feasible without escalating risk.</li>' +
        '<li>Use chemical restraint when verbal measures fail or when the patient is too dangerous to assess safely.</li>' +
        '<li>After sedation, reassess airway patency, respiratory effort, oxygenation, circulation, and level of consciousness immediately and repeatedly.</li>' +
        '<li>If the patient remains unsafe despite sedation, or if sedation results in loss of airway control, transition to the airway pathway.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If verbal de-escalation succeeds, proceed with assessment. If the patient remains unsafe, escalate to physical control and chemical restraint. If sedation results in loss of airway control, or the patient remains unsafe despite sedation, transition to the airway failure pathway (4.3).</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Physical restraint is a bridge to safer care, not the treatment endpoint.</li>' +
        '<li>Any sedated combative patient can deteriorate quickly, especially if hypoxia, TBI, infection, or polysubstance exposure is involved.</li>' +
        '<li>Always think in parallel: the patient can be both a behavioural problem and a critical medical problem.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>After sedation, reassess airway patency, respiratory effort, oxygenation, circulation, and level of consciousness immediately and repeatedly. Monitor for deterioration from underlying causes including hypoxia, TBI, infection, or polysubstance exposure.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Treating agitation as purely psychiatric before excluding hypoxia, glucose abnormality, TBI, or sepsis.</li>' +
        '<li>Using restraint without a monitoring plan.</li>' +
        '<li>Sedating the patient and then delaying reassessment.</li>' +
        '<li>Allowing repeated staff exposures to violence while trying to obtain a perfect history.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Movement, confined spaces, and limited escape routes increase staff injury risk during physical control.</li>' +
        '<li>Document what prompted restraint, what was used, how the patient responded, and when reassessments were performed, especially if prolonged holding follows.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/airway-failure','medications/ketamine','medications/midazolam','procedures/rsi','pitfalls/diagnostic-anchoring','thresholds/glucose']
    },
    {
      id:'tbi-management',
      title:'TBI Management',
      severity:'red',
      sectionNumber:'4.5',
      content:'<h3>4.5 Traumatic Brain Injury Management Pathway</h3>' +
        '<p>This is a prevention-of-secondary-injury pathway. The immediate objective is to avoid worsening the brain insult through hypoxia, hypotension, uncontrolled ventilation, fever, seizures, or delayed recognition of herniation.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Any head trauma with altered mental status, focal findings, abnormal pupils, repeated vomiting, seizure, or deteriorating level of consciousness.</li>' +
        '<li>A patient with suspected TBI who is also hypotensive, hypoxic, or requiring prolonged monitoring.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Document an initial neurologic baseline: GCS, pupils, motor behaviour, and visible deterioration.</li>' +
        '<li>Check oxygenation and establish whether the airway is still protected.</li>' +
        '<li>Measure blood pressure early because hypotension has immediate significance in TBI.</li>' +
        '<li>Identify seizure activity or signs suggesting rising intracranial pressure.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Correct hypoxia immediately and secure the airway if protection is lost or likely to be lost.</li>' +
        '<li>Maintain blood pressure to the target threshold and avoid hypotonic fluids.</li>' +
        '<li>Control ventilation to the desired end-tidal CO<sub>2</sub> range; do not hyperventilate routinely.</li>' +
        '<li>Elevate the head if spinal and tactical constraints allow.</li>' +
        '<li>Treat seizures immediately and continue reassessment after visible convulsions stop.</li>' +
        '<li>If the neurologic exam worsens or herniation is suspected, move to the herniation branch: short-duration hyperventilation to the specified target and osmotic therapy if indicated.</li>' +
        '<li>Trend the neurologic exam repeatedly. A series of observations is more useful than a single score.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If the neurologic exam worsens or herniation is suspected, move to the herniation branch: short-duration hyperventilation to the specified target and osmotic therapy if indicated. If hypotension co-exists, weigh cerebral perfusion needs against hemorrhage control priorities. If seizures occur, treat immediately and continue reassessment.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Do not let trauma resuscitation drift into permissive hypotension if TBI is also present without consciously weighing cerebral perfusion needs.</li>' +
        '<li>Treat fever early because temperature control is part of secondary injury prevention.</li>' +
        '<li>Hyperventilation is a rescue manoeuvre for impending herniation, not a default setting.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Trend the neurologic exam repeatedly. A series of observations is more useful than a single score. Recheck pupils and GCS after sedation, seizure treatment, or hemodynamic intervention. Watch for downward blood pressure trends rather than accepting a single normal reading.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Accepting a single normal blood pressure reading and not watching for downward trend.</li>' +
        '<li>Using fluids that worsen cerebral edema.</li>' +
        '<li>Failing to recheck pupils and GCS after sedation, seizure treatment, or hemodynamic intervention.</li>' +
        '<li>Using prolonged aggressive hyperventilation and worsening cerebral ischemia.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>Delayed evacuation means the clinician must think beyond the first intervention and plan for serial neurologic reassessment, repeat communication, and sustained hemodynamic and ventilation control.</p>' +
        '</div></div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','medications/hypertonic-saline','medications/mannitol','thresholds/sbp','thresholds/etco2','thresholds/icp','pitfalls/permissive-hypotension-with-tbi']
    },
    {
      id:'burn-resuscitation',
      title:'Burn Assessment and Resuscitation',
      severity:'red',
      sectionNumber:'4.6',
      content:'<h3>4.6 Burn Assessment and Resuscitation Pathway</h3>' +
        '<p>This pathway focuses on airway risk, fluid strategy, urine-output guided resuscitation, temperature control, pain management, and recognition of limb- or chest-threatening circumferential burns.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Thermal, inhalational, or electrical burn with clinically significant pain, visible tissue injury, or concern for large total body surface area involvement.</li>' +
        '<li>Burn patient with facial burns, soot, hoarseness, airway symptoms, or delayed evacuation.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Identify inhalation injury or progressive airway edema early.</li>' +
        '<li>Estimate burn size and depth well enough to start a practical resuscitation plan.</li>' +
        '<li>Look for associated trauma, because not every burn patient has an isolated burn problem.</li>' +
        '<li>Determine whether urine-output monitoring is needed from the start.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Make an early airway decision if there is significant inhalation risk or large burn burden.</li>' +
        '<li>Begin isotonic fluid resuscitation using the course formula and then adjust to response.</li>' +
        '<li>Place a Foley catheter when urine-output guided resuscitation is needed and not contraindicated.</li>' +
        '<li>Use urine output as the main practical endpoint and adjust the fluid rate deliberately rather than reflexively.</li>' +
        '<li>Protect the patient from further heat loss and treat pain early.</li>' +
        '<li>Inspect circumferential burns for compromised perfusion or restrictive chest mechanics.</li>' +
        '<li>If pulses are deteriorating or ventilation is restricted because of circumferential full-thickness burns, move to escharotomy planning.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If there is significant inhalation risk or large burn burden, make an early airway decision. If pulses are deteriorating or ventilation is restricted because of circumferential full-thickness burns, move to escharotomy planning. Fluid resuscitation should be adjusted based on urine output response rather than fixed bolus volumes.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Burn fluid formulas give a starting point. Ongoing adjustment is where the clinical work happens.</li>' +
        '<li>Urine output is a dynamic resuscitation marker and must be trended.</li>' +
        '<li>Airway swelling can progress; a patient who looks manageable early may become difficult later.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Trend urine output as the main practical resuscitation endpoint. Monitor for progressive airway edema. Reassess circumferential burns for perfusion compromise. Watch respiratory tolerance during fluid resuscitation.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Underestimating the burn and delaying fluids.</li>' +
        '<li>Over-resuscitating without watching urine output or respiratory tolerance.</li>' +
        '<li>Delaying intubation until edema makes airway control much harder.</li>' +
        '<li>Treating the visible burn and missing concurrent trauma, inhalation injury, or shock.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>Delayed evacuation may convert a short burn resuscitation problem into a sustained critical-care problem. Plan for repeated fluid adjustments, ongoing urine measurement, tube security, analgesia continuity, and temperature preservation.</p>' +
        '</div></div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','procedures/escharotomy','procedures/foley-catheter','medications/ketamine','medications/morphine','thresholds/urine-output','thresholds/tbsa','pitfalls/burn-underestimation']
    },
    {
      id:'hypothermia',
      title:'Accidental Hypothermia',
      severity:'red',
      sectionNumber:'4.7',
      content:'<h3>4.7 Accidental Hypothermia Pathway</h3>' +
        '<p>This is a stage-based pathway. The central execution principle is that the colder patient may still be salvageable and may require modified resuscitation logic, especially in deep hypothermia and arrest.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Cold exposure with impaired function, altered mental status, reduced consciousness, or absent vital signs.</li>' +
        '<li>A patient found in a cold environment where trauma, drowning, or prolonged exposure may also be present.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Assess for vital signs carefully and avoid rough handling.</li>' +
        '<li>Determine whether an alternate cause of arrest or collapse is more likely than hypothermia alone.</li>' +
        '<li>Estimate the hypothermia stage and identify whether arrest management must be modified.</li>' +
        '<li>Determine whether advanced rewarming or an ECMO-capable destination is realistically reachable.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Prevent further heat loss immediately.</li>' +
        '<li>Handle the patient gently to reduce the risk of precipitating arrhythmia.</li>' +
        '<li>Stage the patient clinically and choose the rewarming intensity that matches the presentation.</li>' +
        '<li>If the patient is in Stage IV with absent vital signs, begin CPR unless clear non-survivable criteria are present.</li>' +
        '<li>Apply the course-specific limits on medications and defibrillation in profound hypothermia.</li>' +
        '<li>Continue rewarming and reassessment while arranging the best available destination.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>Stage the patient clinically and choose rewarming intensity accordingly. If Stage IV with absent vital signs, begin CPR unless clear non-survivable criteria are present. Apply course-specific limits on medications and defibrillation in profound hypothermia. Consider whether advanced rewarming or an ECMO-capable destination is realistically reachable.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>In deep hypothermia, the resuscitation question is not just whether there is arrest; it is whether the patient is potentially salvageable despite prolonged downtime.</li>' +
        '<li>Rewarming is part of treatment, but avoidance of further heat loss starts first and usually fastest.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Continue reassessment during rewarming. Monitor for arrhythmia, return of vital signs, and response to CPR. Reassess hypothermia stage as rewarming progresses. Monitor perfusion and neurologic status.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Declaring death too early in a potentially salvageable profoundly cold patient.</li>' +
        '<li>Handling the patient roughly during movement or assessment.</li>' +
        '<li>Applying standard arrest logic without accounting for hypothermia-specific modifications.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>Cold maritime operations make this especially relevant. Transport planning, packaging, and realistic destination choices matter as much as the initial arrest response.</p>' +
        '</div></div>',
      relatedLinks:['procedures/cpr','medications/epinephrine','medications/amiodarone','thresholds/core-temperature','thresholds/hypothermia-stages','pitfalls/premature-death-declaration']
    },
    {
      id:'sepsis',
      title:'Sepsis and Septic Shock',
      severity:'red',
      sectionNumber:'4.8',
      content:'<h3>4.8 Sepsis and Septic Shock Pathway</h3>' +
        '<p>This pathway is built around early recognition, timely antibiotics, appropriate fluids, transition to vasopressors when needed, and ongoing reassessment in settings where resources may be limited or evacuation delayed.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Suspected infection with systemic illness, poor perfusion, altered mental status, respiratory distress, or hypotension.</li>' +
        '<li>A patient with fever or hypothermia plus signs of shock or worsening organ function.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Identify likely infection source if practical, but do not delay treatment waiting for certainty.</li>' +
        '<li>Judge perfusion using vitals, mental status, skin findings, capillary refill, urine output, and available labs.</li>' +
        '<li>Determine if the patient appears fluid responsive or already at risk of overload.</li>' +
        '<li>Decide whether antibiotics must be given now. In severe sepsis or septic shock, the answer is usually yes.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Establish IV or IO access and begin initial crystalloid resuscitation when appropriate.</li>' +
        '<li>Obtain cultures before antibiotics if feasible and if this does not delay treatment.</li>' +
        '<li>Administer empiric antibiotics within the target time window.</li>' +
        '<li>Reassess the response to fluids rather than committing to automatic repeated large boluses.</li>' +
        '<li>If hypotension persists after initial volume resuscitation, prepare and start norepinephrine using the available route and monitoring.</li>' +
        '<li>Continue trend monitoring and adjust for respiratory tolerance, urine output, blood pressure, and mental status.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If the patient appears fluid responsive, continue judicious crystalloid resuscitation. If hypotension persists after initial volume resuscitation, prepare and start norepinephrine. Reassess the response to fluids rather than committing to automatic repeated large boluses. Watch for respiratory decline or clear overload as indicators to change the fluid strategy.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Early antibiotics are a treatment step, not an afterthought.</li>' +
        '<li>Fluid strategy must be matched to the patient and to the resources available. More fluid is not always safer.</li>' +
        '<li>Norepinephrine is a transition step when fluid alone is not enough, not a substitute for all volume assessment.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Continue trend monitoring and adjust for respiratory tolerance, urine output, blood pressure, and mental status. Reassess the response to each fluid bolus. Monitor perfusion using the overall clinical picture rather than focusing on a single vital sign.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Delaying antibiotics while refining the diagnosis.</li>' +
        '<li>Repeating large fluid boluses despite respiratory decline or clear overload.</li>' +
        '<li>Starting a vasopressor without a plan for site monitoring, titration, and reassessment.</li>' +
        '<li>Focusing on one vital sign instead of the overall perfusion picture.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>Limited diagnostics and delayed transfer increase the importance of serial clinical examination, practical source identification, and clear documentation of response to each intervention.</p>' +
        '</div></div>',
      relatedLinks:['procedures/iv-io-access','medications/norepinephrine','medications/antibiotics','medications/crystalloid','thresholds/map','thresholds/lactate','thresholds/urine-output','pitfalls/fluid-overload']
    },
    {
      id:'stemi',
      title:'STEMI and Fibrinolysis',
      severity:'red',
      sectionNumber:'4.9',
      content:'<h3>4.9 STEMI and Fibrinolysis Pathway</h3>' +
        '<p>This pathway is a time-sensitive risk-benefit algorithm. The clinician must identify true ST-elevation myocardial infarction, determine whether timely PCI is unavailable, exclude major contraindications, and execute fibrinolysis and adjunctive therapy safely.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Ischemic chest pain or equivalent symptoms with a compatible ECG.</li>' +
        '<li>A patient in whom access to definitive PCI is delayed beyond the accepted time target.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Confirm the symptom pattern and timing.</li>' +
        '<li>Confirm the ECG pattern that makes the reperfusion decision relevant.</li>' +
        '<li>Screen immediately for bleeding risk and major contraindications to fibrinolysis.</li>' +
        '<li>Determine whether the patient can reach PCI in time or whether fibrinolysis is the correct next step.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Recognize the STEMI pattern and declare the reperfusion decision point early.</li>' +
        '<li>If PCI within the time target is not realistic, move to fibrinolysis screening without delay.</li>' +
        '<li>Confirm there is no absolute contraindication to fibrinolysis.</li>' +
        '<li>Prepare tenecteplase carefully using the correct weight-based dose and administration technique.</li>' +
        '<li>Administer the associated antiplatelet and anticoagulant therapies required by the protocol.</li>' +
        '<li>After treatment, monitor closely for reperfusion, bleeding, arrhythmia, and neurologic decline.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If PCI is available within the time target, arrange rapid transfer. If PCI is not realistic, move to fibrinolysis screening. If absolute contraindications to fibrinolysis exist, fibrinolysis cannot proceed. After fibrinolysis, monitor for reperfusion signs or complications including bleeding and arrhythmia.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>This pathway depends on decisive screening, not prolonged indecision.</li>' +
        '<li>The fibrinolytic is only one part of the reperfusion package. Adjunctive medications and monitoring are part of the execution.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>After treatment, monitor closely for reperfusion, bleeding, arrhythmia, and neurologic decline. Perform repeated neurologic checks, bleeding surveillance, and rhythm monitoring, especially if transfer is delayed after fibrinolysis.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Treating before screening for major contraindications.</li>' +
        '<li>Incorrect dose selection or poor reconstitution technique.</li>' +
        '<li>Failing to monitor actively after fibrinolysis.</li>' +
        '<li>Missing intracranial hemorrhage or significant bleeding during the post-treatment period.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>If transfer is delayed after fibrinolysis, the shipboard team may have to monitor the early reperfusion phase longer than would occur ashore. That increases the value of repeated neurologic checks, bleeding surveillance, and rhythm monitoring.</p>' +
        '</div></div>',
      relatedLinks:['medications/tenecteplase','medications/aspirin','medications/heparin','medications/clopidogrel','procedures/ecg-interpretation','thresholds/stemi-criteria','thresholds/door-to-needle','pitfalls/fibrinolysis-contraindications']
    },
    {
      id:'chest-decompression',
      title:'Needle/Chest Decompression (Tension Pneumothorax)',
      severity:'red',
      sectionNumber:'4.10',
      content:'<h3>4.10 Tension Pneumothorax Pathway</h3>' +
        '<p>This pathway is built around rapid recognition and immediate decompression. The critical operational principle is that a suspected tension pneumothorax in an unstable patient is treated as a clinical emergency, not a radiology problem.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Respiratory distress with hemodynamic instability and signs pointing toward unilateral tension physiology.</li>' +
        '<li>Cardiac arrest or peri-arrest where a thoracic cause is plausible.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Decide whether the presentation is severe enough that decompression should occur immediately.</li>' +
        '<li>Assess oxygenation, respiratory effort, and signs of poor perfusion.</li>' +
        '<li>Recognize that waiting for perfect confirmation may be more dangerous than prompt decompression.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Apply oxygen and perform immediate needle thoracostomy when the presentation is strongly suggestive and the patient is unstable.</li>' +
        '<li>Reassess within moments for improvement in oxygenation, ventilation, hemodynamics, or ease of bagging if ventilated.</li>' +
        '<li>If there is no improvement, reassess the landmark, side, equipment, and alternate causes of shock or arrest.</li>' +
        '<li>Once decompression has temporized the patient, move toward definitive chest tube placement because needle decompression alone is not the endpoint.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If the presentation is strongly suggestive and the patient is unstable, decompress immediately. After needle decompression, reassess for improvement. If no improvement, reconsider the landmark, side, equipment, and alternate diagnoses. Once temporized, move to definitive chest tube placement.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Rapid decompression is the lifesaving step; the chest tube is the definitive follow-through.</li>' +
        '<li>Immediate post-decompression reassessment tells you whether you relieved tension physiology or whether the diagnosis or placement should be reconsidered.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Reassess within moments for improvement in oxygenation, ventilation, hemodynamics, or ease of bagging if ventilated. After chest tube placement, continue monitoring for re-accumulation, ongoing air leak, or hemothorax.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Waiting too long because the classic signs are incomplete.</li>' +
        '<li>Treating needle decompression as definitive management.</li>' +
        '<li>Failing to reassess quickly after the intervention.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<p>In a moving platform with tight space, landmarking discipline matters. Equipment preparation before patient contact reduces delay if deterioration is sudden.</p>' +
        '</div></div>',
      relatedLinks:['procedures/needle-decompression','procedures/chest-tube','procedures/finger-thoracostomy','thresholds/spo2','thresholds/sbp','pitfalls/needle-decompression-as-definitive']
    },
    {
      id:'multi-system',
      title:'Integrated Multi-System Decision Pathways',
      severity:'red',
      sectionNumber:'4.11',
      content:'<h3>4.11 Integrated Multi-System Decision Pathways</h3>' +
        '<p>Real casualties often fit more than one algorithm at the same time. The clinician must decide what kills first, what can wait, and how one treatment may worsen another problem. This is where the earlier domain framework becomes useful.</p>' +

        '<h4>Common Conflicted Scenarios</h4>' +
        '<ul>' +
        '<li><strong>TBI plus hemorrhagic shock:</strong> blood pressure support helps cerebral perfusion, but uncontrolled hemorrhage may limit how far pressure can be pushed.</li>' +
        '<li><strong>Burns plus inhalation injury plus fluid resuscitation:</strong> early airway decisions may be required while fluid strategy is still being established.</li>' +
        '<li><strong>Combative patient plus TBI or hypoxia:</strong> the behavioural problem may actually be the first sign of critical physiology.</li>' +
        '<li><strong>Sepsis plus respiratory overload risk:</strong> the patient may need fluid but may also worsen if fluid is overused.</li>' +
        '<li><strong>Hypothermia plus trauma:</strong> the patient may have both a cold-driven physiology problem and a parallel injury that changes prognosis.</li>' +
        '</ul>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Priority Rule</div>' +
        '<p>The practical rule is to treat the most immediate lethal threat first, then reassess and reprioritize. In ACTT-style scenarios, this usually means moving in order from airway and catastrophic breathing problems, to profound circulatory failure, to neurologic and syndrome-specific priorities, while still preparing for what comes next.</p></div>' +

        '<h4>Execution Habit</h4>' +
        '<ol>' +
        '<li>State the immediate lethal threat out loud.</li>' +
        '<li>Assign the current active pathway.</li>' +
        '<li>Identify the next likely branch if the patient fails to respond.</li>' +
        '<li>After the intervention, force a reassessment before moving on.</li>' +
        '</ol>' +

        '<h3>4.12 Algorithm Execution in the RCN At-Sea Context</h3>' +
        '<p>Shipboard practice changes how algorithms are used. The sequence may be the same as ashore, but the practical limits are different: staffing may be thinner, evacuation may be delayed, diagnostics may be limited, and the patient may need to be maintained for many hours.</p>' +

        '<h4>Practical Constraints</h4>' +
        '<ul>' +
        '<li>Limited personnel can force simpler task division and tighter prioritization.</li>' +
        '<li>Movement, noise, space limits, and lighting can degrade performance during airway and procedural tasks.</li>' +
        '<li>Finite medications and equipment require early recognition of what can be sustained.</li>' +
        '<li>Delayed evacuation means every acute pathway must eventually connect to a prolonged holding plan.</li>' +
        '</ul>' +

        '<h4>Practical Adaptations</h4>' +
        '<ul>' +
        '<li>Do the first lifesaving step early and decisively.</li>' +
        '<li>Choose interventions you can monitor and maintain.</li>' +
        '<li>Document trend, response, and time of intervention clearly, because prolonged care depends on continuity.</li>' +
        '<li>Use teleconsultation early when the next branch is uncertain or when competing priorities are difficult to balance.</li>' +
        '</ul>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Errors in Algorithm Use (4.13)</div>' +
        '<ul>' +
        '<li>Recognizing the problem but delaying the first treatment step.</li>' +
        '<li>Collecting data without acting on clear thresholds.</li>' +
        '<li>Failing to define the next escalation step before the current one fails.</li>' +
        '<li>Not reassessing after medications or procedures.</li>' +
        '<li>Anchoring on a single diagnosis while the patient evolves.</li>' +
        '<li>Stopping at temporary improvement and missing the need for definitive management.</li>' +
        '</ul></div>' +

        '<h4>End State for the Learner (4.14)</h4>' +
        '<p>After this chapter, the learner should be able to recognize the major ACTT-critical presentations, activate the correct pathway, carry out the first intervention sequence, identify when the current step has failed, and transition either to escalation or to prolonged holding. The aim is not memorization alone. The aim is to know what to do on the patient, in order, under pressure.</p>' +

        '<h4>Bridge to the Next Chapter (4.15)</h4>' +
        '<p>Chapter 5 moves from decision pathways to procedural execution. Where this chapter answers when to act and what branch comes next, the next chapter focuses on how to physically perform the core high-acuity procedures.</p>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Shipboard practice changes how algorithms are used. The sequence may be the same as ashore, but the practical limits are different.</li>' +
        '<li>Staffing may be thinner, evacuation may be delayed, diagnostics may be limited, and the patient may need to be maintained for many hours.</li>' +
        '<li>Every acute pathway must eventually connect to a prolonged holding plan.</li>' +
        '<li>Use teleconsultation early when the next branch is uncertain or when competing priorities are difficult to balance.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/airway-failure','algorithms/combative-patient','algorithms/tbi-management','algorithms/burn-resuscitation','algorithms/hypothermia','algorithms/sepsis','algorithms/stemi','algorithms/chest-decompression','pitfalls/diagnostic-anchoring','pitfalls/task-fixation']
    }
  ]
};
