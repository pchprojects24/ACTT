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
        '<div class="critical-callout high-priority">' +
        '<div class="critical-callout-header"><span class="critical-icon">!</span> Time-Critical Steps</div>' +
        '<div class="critical-callout-body">' +
        '<p><strong>These actions must be performed immediately and in order:</strong></p>' +
        '<ol>' +
        '<li>Apply high-concentration oxygen immediately and place the patient in the best achievable airway position.</li>' +
        '<li>Suction aggressively if blood, vomit, soot, or secretions are present.</li>' +
        '<li>Apply continuous monitoring: pulse oximetry, cardiac monitoring, and end-tidal CO<sub>2</sub> as soon as it is available.</li>' +
        '<li>If oral intubation is appropriate, pre-oxygenate and set a strict attempt limit before the first attempt starts.</li>' +
        '</ol>' +
        '</div></div>' +
        '<ul>' +
        '<li>If oral intubation is not appropriate, or if the predefined attempt limit is reached, move directly to surgical cricothyroidotomy rather than repeating low-probability attempts.</li>' +
        '<li>After tube placement, confirm with direct visualization if possible, chest rise, auscultation, and end-tidal CO<sub>2</sub>. Then move immediately to post-intubation ventilation and sedation management. For post-intubation sedation: <strong>ketamine infusion 1-2 mg/kg/hr</strong> (preserves hemodynamics, good for unstable patients) or <strong>propofol infusion 5-50 mcg/kg/min</strong> (short-acting, easier neuro checks, requires BP monitoring) or <strong>midazolam infusion 1-5 mg/hr</strong> (longer-acting, may accumulate). Add <strong>fentanyl 25-100 mcg IV q1-2h</strong> or <strong>fentanyl infusion 25-100 mcg/hr</strong> for analgesia. Titrate to sedation target and monitor airway, ventilation, and hemodynamics continuously.</li>' +
        '</ul>' +

        '<div class="must-not-miss">' +
        '<div class="must-not-miss-title"><span class="critical-icon amber">⚠</span> Must-Not-Miss Assessment Points</div>' +
        '<ul>' +
        '<li>GCS ≤8 requires immediate airway decision</li>' +
        '<li>Signs of impending airway loss: stridor, drooling, respiratory distress, declining SpO2</li>' +
        '<li>Failed first attempt = immediate escalation, not retry</li>' +
        '<li>Post-intubation hypotension requires immediate treatment</li>' +
        '</ul>' +
        '</div>' +

        '<h4>Decision Branches</h4>' +
        '<p>The airway plan must include a declared rescue step before the first attempt. If oral intubation is not appropriate or the predefined attempt limit is reached, move directly to surgical cricothyroidotomy. After tube placement, transition to post-intubation ventilation and sedation management with specific agents selected based on hemodynamic status and need for neurologic monitoring (ketamine for unstable patients, propofol for short-acting sedation with easier neuro checks, midazolam for longer-acting sedation).</p>' +

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
      relatedLinks:['procedures/rsi','procedures/cricothyroidotomy','medications/ketamine','medications/succinylcholine','medications/rocuronium','thresholds/spo2','thresholds/etco2','pitfalls/airway-fixation'],
      sources:[
        {title:'ACTT 2026-01 Airway.pdf',file:'ACTT 2026-01 Airway .pdf',note:'Primary ACTT airway teaching package.'},
        {title:'Airway ressources and Pearls.pdf',file:'Airway ressources and Pearls.pdf'},
        {title:'RSI Check List and Intubation.pdf',file:'RSI Check List and Intubation.pdf'}
      ]
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
        '<li>Use chemical restraint when verbal measures fail or when the patient is too dangerous to assess safely. First-line agent: <strong>ketamine 4-5 mg/kg IM</strong> (no IV access) or <strong>1 mg/kg IV</strong> over 60 seconds, or <strong>midazolam 5-10 mg IM</strong> or <strong>5 mg IV</strong>. Ketamine is preferred when airway protection and hemodynamic stability are priorities; midazolam when pure anxiolysis is sufficient.</li>' +
        '<li>After sedation, reassess airway patency, respiratory effort, oxygenation, circulation, and level of consciousness immediately and repeatedly.</li>' +
        '<li>If the patient remains unsafe despite sedation, or if sedation results in loss of airway control, transition to the airway pathway.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If verbal de-escalation succeeds, proceed with assessment. If the patient remains unsafe, escalate to physical control and chemical restraint. If the patient is not frankly violent but the main problem is psychosis, suicidality, or prolonged behavioural management, move to the mental health and behavioral crisis pathway in parallel. If sedation results in loss of airway control, or the patient remains unsafe despite sedation, transition to the airway failure pathway (4.3).</p>' +

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
      relatedLinks:['algorithms/mental-health-behavioral-crisis','algorithms/airway-failure','medications/ketamine','medications/midazolam','procedures/rsi','pitfalls/diagnostic-anchoring','thresholds/glucose','checklists/mental-health-behavioral-crisis'],
      sources:[
        {title:'Combative patient.pdf',file:'Combative patient.pdf',note:'ACTT combative patient reference.'},
        {title:'Agitation in the ED_1073_April 2019.pdf',file:'Agitation in the ED_1073_April 2019.pdf'},
        {title:'MH Emergencies - ACTT 2026.pdf',file:'MH Emergencies - ACTT 2026.pdf'}
      ]
    },
    {
      id:'mental-health-behavioral-crisis',
      title:'Mental Health and Behavioral Crisis',
      severity:'red',
      sectionNumber:'4.4A',
      content:'<h3>4.4A Mental Health and Behavioral Crisis Pathway</h3>' +
        '<p>This pathway covers acute agitation, psychosis, delirium, and suicidality when the patient\'s presentation creates immediate safety, medical, or evacuation concerns. The priority is to keep the scene controlled, identify medical contributors early, use the least force needed to regain control, and set an observation and escalation plan that is realistic for shipboard care.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Erratic, hostile, psychotic, or severely distressed behaviour that threatens the patient, the team, or the mission.</li>' +
        '<li>New agitation, paranoia, hallucinations, or delirium where toxicologic, metabolic, infectious, or neurologic causes remain possible.</li>' +
        '<li>Suicidal thoughts, an organized plan, recent self-harm, or access to lethal means in a setting where the patient cannot be left unsupervised.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Make the scene safer first: remove weapons and obvious hazards, reduce crowding, and keep an exit route for staff.</li>' +
        '<li>Decide whether agitation is mild, moderate, or severe. Severe agitation / excited delirium is a medical emergency.</li>' +
        '<li>Rapidly screen for reversible medical drivers: hypoxia, hypoglycemia, hyperthermia, head injury, intoxication / withdrawal, sepsis, meningitis, serotonin syndrome, or neuroleptic malignant syndrome.</li>' +
        '<li>If the patient can engage, ask directly about suicidal thoughts, intent, plan, access to means, and recent stressors.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Use verbal de-escalation first when safe: one speaker, calm voice, short phrases, visible hands, clear limits, and simple choices.</li>' +
        '<li>Move the patient to the quietest controllable space available and reduce unnecessary personnel and stimulation.</li>' +
        '<li>Obtain ABCs, SpO<sub>2</sub>, glucose, temperature, and focused trauma / tox exam as early as feasible; treat abnormal findings in parallel.</li>' +
        '<li>If the patient becomes dangerous or blocks essential care, use physical restraint only as a brief bridge to chemical sedation. Avoid prone restraint and any neck or chest compression. For chemical sedation: <strong>ketamine 4-5 mg/kg IM</strong> or <strong>1 mg/kg IV</strong> for severe agitation with possible medical cause, or <strong>midazolam 5-10 mg IM/IV</strong> for anxiety-driven agitation. For psychosis with moderate agitation, consider <strong>haloperidol 5-10 mg IM</strong> or <strong>olanzapine 10 mg IM</strong> (slower onset but less extrapyramidal effects).</li>' +
        '<li>After sedation or control, place on continuous monitoring, reassess airway and breathing immediately, and keep resuscitation equipment at the bedside.</li>' +
        '<li>For suicidality, do not leave the patient alone, remove access to obvious means, and start command / supervisory notification and evacuation planning early.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If the patient is mildly agitated and still cooperative, continue verbal de-escalation and focused medical assessment. If moderate to severe agitation persists or danger rises, move to the combative patient pathway for coordinated restraint and sedation. If vitals, temperature, oxygenation, or neurologic findings are abnormal, treat this as a medical presentation first. If suicide risk is high, an active plan is present, or observation cannot be reliably maintained onboard, escalate to urgent repatriation / shore transfer with escort.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Agitation, psychosis, and suicidality are presentations, not diagnoses. Keep medical and toxicologic causes in the differential until actively excluded.</li>' +
        '<li>Physical restraint is a temporary bridge; prolonged struggling increases risk of asphyxia, hyperthermia, rhabdomyolysis, cardiovascular collapse, and staff injury.</li>' +
        '<li>If antipsychotic or benzodiazepine medication is used, document the dose, response, reassessment rhythm, and the airway / monitoring plan.</li>' +
        '<li>Mobilize available supports early: chain of command, Fleet Surgeon / remote physician, buddy system, sentinels, chaplain, or trusted peers when appropriate.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Repeat airway, breathing, circulation, temperature, glucose, and mental-status checks after each de-escalation attempt, restraint episode, or medication dose. Reassess suicide risk again after intoxication, delirium, or severe agitation begins to clear because the history often changes once the patient can engage. Review whether the current watch can maintain safe continuous observation before deciding to hold the patient onboard.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Assuming bizarre behaviour is psychiatric before checking oxygenation, glucose, temperature, and trauma clues.</li>' +
        '<li>Using physical restraint without a rapid transition plan, airway checks, or repeat vital signs.</li>' +
        '<li>Dismissing suicidal ideation because the patient later appears calmer, embarrassed, or intoxicated.</li>' +
        '<li>Failing to document means restriction, observation level, command notification, and the exact reason the patient could or could not be held onboard.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Confinement, noise, sleep disruption, weapons access, ladders, open decks, and surrounding water all increase risk in a behavioural crisis.</li>' +
        '<li>Onboard management is only acceptable if the patient can be observed continuously, means can be restricted, and the team can still respond to medical deterioration.</li>' +
        '<li>Have a low threshold to contact superiors and arrange repatriation for active suicidality, persistent psychosis, or recurrent dangerous agitation.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/combative-patient','algorithms/airway-failure','procedures/procedural-sedation','prolonged-holding/sedation-pain','medications/ketamine','medications/midazolam','sickbay-meds/haloperidol','sickbay-meds/olanzapine','checklists/mental-health-behavioral-crisis','checklists/mental-health-suicide-risk']
    },
    {
      id:'atls-trauma-survey',
      title:'ATLS Trauma Survey (Primary and Secondary)',
      severity:'red',
      sectionNumber:'4.4B',
      content:'<h3>4.4B ATLS Trauma Survey Pathway</h3>' +
        '<p>Use this as the first-pass structure for blunt, penetrating, blast, crush, or burn trauma. The objective is to find and treat the immediate killer before detailed diagnosis. If a problem is found in the primary survey, fix it before moving on.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Any trauma patient with significant mechanism, physiologic instability, or distracting injury.</li>' +
        '<li>Polytrauma, burns with possible associated trauma, or deterioration after transfer or movement.</li>' +
        '<li>Repeat the same sequence after each major intervention or sudden decline.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Declare a trauma primary survey and assign roles if staffing allows.</li>' +
        '<li>Use XABCDE order: control exsanguinating hemorrhage before airway, then move in sequence without losing reassessment discipline.</li>' +
        '<li>Apply monitoring early, maintain manual C-spine protection when indicated, and start heat-loss prevention immediately.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li><strong>X &mdash; eXsanguination:</strong><ul>' +
        '<li>Control massive external hemorrhage immediately with direct pressure, wound packing, tourniquet, or junctional control.</li>' +
        '<li>Only attempt tourniquet conversion if the casualty is not in shock, close monitoring is available, and the tourniquet is not controlling a traumatic amputation.</li>' +
        '<li>Aim to convert before 2 hours if bleeding can be controlled by other means; do not remove a tourniquet after 6 hours unless close monitoring and lab capability are available.</li>' +
        '</ul></li>' +
        '<li><strong>A &mdash; Airway with C-spine protection:</strong> clear the airway, suction blood or vomit, give oxygen, position, and use adjuncts as needed. If the airway cannot be maintained or is likely to fail, move early to RSI or surgical airway.</li>' +
        '<li><strong>B &mdash; Breathing:</strong><ul>' +
        '<li>Inspect, auscultate, and assess chest rise, oxygenation, and work of breathing.</li>' +
        '<li>Treat tension pneumothorax clinically and decompress immediately when suspected in an unstable patient.</li>' +
        '<li>If a surgical chest tube is placed, smaller bore 20&ndash;22 Fr is acceptable for trauma and all surgical chest tubes should receive one prophylactic antibiotic dose (ceftriaxone 2 g IV x1 in the ATLS deck).</li>' +
        '</ul></li>' +
        '<li><strong>C &mdash; Circulation:</strong> check pulses, blood pressure, skin signs, and obvious or internal bleeding sources. Gain IV/IO access, start resuscitation matched to the problem, and use shock index (HR/SBP) as an early warning that shock may be present; a shock index above 1 is concerning. If indicated by the trauma pattern, TXA 2 g slow IV push is the ACTT ATLS teaching point.</li>' +
        '<li><strong>D &mdash; Disability:</strong> document GCS, pupils, motor asymmetry, and glucose if altered. Worsening mental status, focal findings, or abnormal pupils should branch to the TBI pathway without delaying ABC stabilization.</li>' +
        '<li><strong>E &mdash; Exposure / Environment:</strong> fully expose long enough to find hidden injury, inspect the back when logistically safe, then cover and actively prevent hypothermia. Expose and keep warm, then transition to the secondary survey once immediate threats are addressed.</li>' +
        '</ul>' +

        '<h4>When To Move to the Secondary Survey</h4>' +
        '<p>Move to the secondary survey only when the airway is maintainable, oxygenation and ventilation are acceptable, major hemorrhage is controlled, and the patient has at least temporary response to resuscitation. If instability persists, stay in the primary survey loop and treat the next immediate threat before returning to detail.</p>' +

        '<h4>Secondary Survey Core Components</h4>' +
        '<ul>' +
        '<li><strong>History:</strong> mechanism of injury plus AMPLE history (allergies, medications, past medical and social history, last meal, events, and last tetanus when relevant).</li>' +
        '<li><strong>Head and neck:</strong> scalp, face, maxillofacial injury, pupils, C-spine or neck findings, airway contamination, and expanding hematoma.</li>' +
        '<li><strong>Chest:</strong> breath sounds, chest wall injury, penetrating wounds, paradoxical movement, and chest tube need or function.</li>' +
        '<li><strong>Abdomen and pelvis:</strong> tenderness, distension, bruising, penetrating injury, pelvic instability risk, and perineum / rectum / vagina when the mechanism requires it.</li>' +
        '<li><strong>Extremities and back:</strong> deformity, wounds, burns, fracture, pulses, motor function, sensation, and posterior inspection when log roll can be done safely.</li>' +
        '<li><strong>Pain management:</strong> address moderate to severe pain once ABC threats are stabilized. For hemodynamically stable patients: <strong>morphine 0.05-0.1 mg/kg IV</strong> (typically 5-10 mg, titrate carefully). For unstable or multi-trauma patients: <strong>ketamine 0.1-0.2 mg/kg IV</strong> (sub-dissociative, typically 10-20 mg, repeat q10-30min as needed). Ketamine preserves blood pressure and airway reflexes; morphine requires closer hemodynamic monitoring.</li>' +
        '<li><strong>Adjuncts:</strong> trend vital signs, SpO<sub>2</sub>, urine output, ECG, targeted labs, and focused ultrasound only if they change the next action.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Repeat XABCDE after every major procedure, medication, transfer, or sudden change. Secondary survey findings do not replace the primary survey; they sit on top of it. Document the first set of findings clearly enough that the next examiner can detect change.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Fixating on the obvious injury and missing exsanguinating hemorrhage, tension physiology, or airway contamination.</li>' +
        '<li>Moving to the secondary survey before the primary survey threats are actually controlled.</li>' +
        '<li>Exposing the patient to look for injuries and then allowing preventable hypothermia.</li>' +
        '<li>Failing to repeat the survey after sedation, movement, decompression, or temporary improvement.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Keep the sequence simple enough to survive watch turnover: XABCDE, problem list, current devices, and next reassessment time.</li>' +
        '<li>Use the secondary survey to identify what must be splinted, monitored, dressed, warmed, or documented before prolonged holding begins.</li>' +
        '<li>If space or staffing is limited, do not let secondary-survey detail delay treatment of airway, breathing, or shock problems that are still evolving.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/airway-failure','algorithms/chest-decompression','algorithms/tbi-management','algorithms/burn-resuscitation','domains/domain-2-hemodynamics','domains/domain-3-specialized-trauma','prolonged-holding/stabilization-checklist','prolonged-holding/reassessment-rhythm'],
      sources:[
        {title:'ACTT 2026-01 ATLS.pdf',file:'ACTT 2026-01 ATLS.pdf',note:'Primary source for XABCDE trauma survey, hemorrhage control, thoracic trauma adjuncts, TXA, shock index, and transition to secondary survey.'},
        {title:'Trauma Acute Care Clinical Record.pdf',file:'Trauma Acute Care Clinical Record.pdf',note:'Supports ACTT secondary survey structure and documentation fields.'}
      ]
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
        '<li>Hyperventilation is a rescue manoeuvre for impending herniation, not a default setting. Target EtCO<sub>2</sub> ~30&ndash;35 mmHg is a bridge measure only. Return to normocapnia (EtCO<sub>2</sub> 35&ndash;40 mmHg) within 30 minutes unless herniation is ongoing. Do not maintain prophylactic hyperventilation.</li>' +
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
        '<ul>' +
        '<li><strong>No CT, no neurosurgery, no ICP monitor.</strong> Shipboard TBI care is driven entirely by the clinical exam and physiologic targets. A CT decision delay ashore becomes an evacuation decision at sea; if the exam is worsening, escalate the MEDEVAC request rather than waiting for imaging confirmation.</li>' +
        '<li><strong>Set a written serial neuro check schedule</strong> and tape it at the bedside. GCS, pupil size/reactivity, motor response by limb, and any new focal findings every 15 minutes for the first hour, every 30 minutes for the next 2 hours, then hourly if stable. Record the exact watch-member responsible for each check.</li>' +
        '<li><strong>Define herniation trip-wires before they happen.</strong> Any of these triggers the herniation branch and an immediate teleconsult: unilateral pupil dilation, new motor asymmetry, GCS drop &ge; 2 points, Cushing response (hypertension with bradycardia), or new posturing. State these to the watch so they act without waiting for the PA to re-assess.</li>' +
        '<li><strong>Protect cerebral perfusion against ship motion.</strong> Head-of-bed 30&deg; only if spine is cleared and sea state allows secure positioning; otherwise, reverse-Trendelenburg with strap securement is safer than losing control of the patient on a rolling deck. Avoid flat supine unless CPR is needed.</li>' +
        '<li><strong>Ventilation targets must survive watch turnover.</strong> Post the target EtCO<sub>2</sub> (35&ndash;40 mmHg normally; brief 30&ndash;35 mmHg only as a herniation rescue), the SpO<sub>2</sub> floor (&ge; 94%), and the SBP floor (&ge; 110 mmHg or MAP &ge; 80) in large print on the ventilator and monitor. Do not assume the next watch will remember verbal targets.</li>' +
        '<li><strong>Avoid hypotonic fluids entirely</strong> and confirm all maintenance/resuscitation bags are 0.9% NaCl or balanced isotonic. Do not use D5W. Hypertonic saline (3%) or mannitol is reserved for the herniation branch; confirm stock and dosing before it is needed.</li>' +
        '<li><strong>Sedation must not mask the exam.</strong> Favor short-acting agents that can be interrupted briefly for a neuro check. For intubated TBI patients: <strong>propofol infusion 5-50 mcg/kg/min</strong> (short-acting, easy to interrupt for neuro checks, monitor BP closely) plus <strong>fentanyl 25-100 mcg IV q1-2h</strong> or <strong>fentanyl infusion 25-100 mcg/hr</strong> for analgesia. <strong>Ketamine 1-2 mg/kg/hr infusion</strong> is acceptable at ACTT doses when hemodynamic instability is present; avoid deep, long-acting sedation (e.g., high-dose midazolam) that eliminates the only monitor you have. Plan sedation interruption windows for serial GCS and pupil checks.</li>' +
        '<li><strong>Temperature control is secondary injury prevention.</strong> Treat fever aggressively with acetaminophen and active cooling; track core temperature on the same chart as GCS so the trend is visible.</li>' +
        '<li><strong>Request MEDEVAC as soon as TBI is suspected</strong>, not when deterioration is confirmed. Weather, flight deck status, and distance to a neurosurgical asset mean the request-to-wheels-up window may be hours; a deteriorating TBI cannot wait.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','medications/hypertonic-saline','medications/mannitol','thresholds/sbp','thresholds/etco2','thresholds/icp','pitfalls/permissive-hypotension-with-tbi'],
      sources:[
        {title:'ACTT 2026-01 ATLS.pdf',file:'ACTT 2026-01 ATLS.pdf',note:'Primary trauma/TBI course reference.'},
        {title:'Trauma Acute Care Clinical Record.pdf',file:'Trauma Acute Care Clinical Record.pdf'}
      ]
    },
    {
      id:'seizure-management',
      title:'Seizure Management and Status Epilepticus',
      severity:'red',
      sectionNumber:'4.6',
      content:'<h3>4.6 Seizure Management and Status Epilepticus Pathway</h3>' +
        '<p>This pathway centers on immediate airway protection, rapid benzodiazepine delivery, identification of reversible causes, and decisive escalation when seizures do not stop. The goal is to stop the seizure fast, prevent recurrence, and protect the patient from hypoxia, aspiration, and prolonged convulsive injury.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Active tonic-clonic seizure or recurrent seizures without full recovery.</li>' +
        '<li>Seizure activity lasting 5 minutes or more, or back-to-back seizures (status epilepticus).</li>' +
        '<li>Post-ictal patient not protecting airway, with persistent altered LOC, or with planned evacuation delay.</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>Airway protection and ability to oxygenate/ventilate now; place laterally and suction if needed.</li>' +
        '<li>Check blood glucose immediately; treat hypoglycemia without delay.</li>' +
        '<li>Estimate seizure duration, prior benzodiazepine doses, and response so far.</li>' +
        '<li>Scan for reversible causes: trauma/TBI, hypoxia, infection/fever, electrolyte disturbance, toxins/withdrawal, eclampsia.</li>' +
        '<li>Judge whether respiratory support or RSI preparation is required before additional sedating doses.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Protect airway: lateral position, suction, oxygen, and continuous monitoring (SpO<sub>2</sub>, ECG, BP, EtCO<sub>2</sub> if available).</li>' +
        '<li>Obtain IV/IO access if possible; do not delay first benzodiazepine dose while attempting IV if IM is faster.</li>' +
        '<li>Give midazolam 5 mg IV/IO/IM; repeat every 5 minutes until seizure stops. Avoid under-dosing or long delays.</li>' +
        '<li>If seizure persists after two benzodiazepine doses or status is likely, load levetiracetam 2 g IV/IO while preparing airway/ventilation support.</li>' +
        '<li>Correct reversible causes in parallel: glucose, oxygenation, temperature, and suspected tox/metabolic issues.</li>' +
        '<li>If ventilation or airway protection fails, move to RSI with ketamine and rocuronium per airway pathway.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If seizures continue after two benzodiazepine doses, move to second-line loading and prepare for airway control. If glucose is low, correct immediately and reassess before stacking sedatives. If the patient stops seizing but remains deeply altered, consider non-convulsive status epilepticus and continue monitoring, maintenance antiepileptic dosing, and evacuation planning. Suspected eclampsia or toxin exposure requires condition-specific treatment in parallel.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Do not wait 5 minutes to give the first benzodiazepine. Early adequate dosing is the single most effective step.</li>' +
        '<li>Every benzodiazepine dose requires airway vigilance. Assign someone to monitor respirations and preparedness for BVM.</li>' +
        '<li>Second-line loading is the follow-through to prevent recurrence; it does not replace benzodiazepine rescue.</li>' +
        '<li>Document seizure start time, doses, and response to guide teleconsultation and evacuation urgency.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>After visible convulsions stop, reassess airway protection, ventilation, oxygenation, blood pressure, GCS, pupils, and glucose. Monitor for respiratory depression and recurrent seizure activity. Confirm that maintenance antiepileptic therapy has been started and that evacuation/transfer is coordinated.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Delayed benzodiazepine dosing while pursuing IV access.</li>' +
        '<li>Stacking sedatives without airway preparation and continuous monitoring.</li>' +
        '<li>Missing hypoglycemia, hypoxia, or toxic/metabolic causes while focusing only on stopping convulsions.</li>' +
        '<li>Assuming the emergency is over when movements stop; non-convulsive status and recurrence risk remain.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Limited monitoring and oxygen require simple airway positioning, suction readiness, and clear RSI contingency.</li>' +
        '<li>Medication stock may be limited; plan for adequate benzodiazepine supply and a maintenance agent during delayed evacuation.</li>' +
        '<li>Document timelines and doses for teleconsultation and receiving teams; assign ongoing neurologic checks during holding.</li>' +
        '</ul></div></div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','medications/seizure-meds','medications/midazolam','thresholds/neurologic-tbi','thresholds/glucose','pitfalls/neurologic-errors','prolonged-holding/reassessment-rhythm']
    },
    {
      id:'burn-resuscitation',
      title:'Burn Assessment and Resuscitation',
      severity:'red',
      sectionNumber:'4.7',
      content:'<h3>4.7 Burn Assessment and Resuscitation Pathway</h3>' +
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
        '<li>Protect the patient from further heat loss and treat pain early. For severe burn pain: <strong>ketamine 0.1-0.2 mg/kg IV</strong> (sub-dissociative dose, repeat q10-30min as needed) or <strong>morphine 0.05-0.1 mg/kg IV</strong> (typically 5-10 mg, titrate to effect). Ketamine is preferred in unstable patients; morphine for stable patients without airway concerns. Consider continuous analgesia for large burns: <strong>ketamine infusion 1 mg/kg/hr</strong> or <strong>morphine infusion 2-10 mg/hr</strong> with close monitoring.</li>' +
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
      relatedLinks:['algorithms/airway-failure','procedures/rsi','procedures/escharotomy','procedures/foley-catheter','medications/ketamine','medications/morphine','thresholds/urine-output','thresholds/tbsa','pitfalls/burn-underestimation'],
      sources:[
        {title:'Burns - Dr Papp - AMTRP 0045.pdf',file:'Burns - Dr Papp - AMTRP 0045.pdf',note:'Primary ACTT burn teaching deck.'},
        {title:'Burn Fluid Resus Flowsheet.pdf',file:'Burn Fluid Resus Flowsheet.pdf'},
        {title:'TBSA__Burn_Estimation_Chart.pdf',file:'TBSA__Burn_Estimation_Chart.pdf'}
      ]
    },
    {
      id:'hypothermia',
      title:'Accidental Hypothermia',
      severity:'red',
      sectionNumber:'4.8',
      content:'<h3>4.8 Accidental Hypothermia Pathway</h3>' +
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
        '<ul>' +
        '<li><strong>Hypothermia is the default maritime trauma patient.</strong> Wind over an open deck, wet clothing, aluminum hulls, and long transit from point-of-injury to Sick Bay all drop core temperature before the casualty is ever assessed. Assume hypothermia in any man-overboard, submerged casualty, extended-exposure, or trauma patient brought in from weather decks, and begin heat-loss prevention at the point of retrieval.</li>' +
        '<li><strong>Handle like eggs.</strong> A cold, ventricular-irritable myocardium will fibrillate from rough extrication, forceful jaw thrust, aggressive line attempts, or even a bumpy stretcher carry up a ladder. Brief the retrieval and transport team before they touch the patient: smooth lifts, minimize axis rotation, no chest compressions unless arrest is confirmed, no unnecessary position changes.</li>' +
        '<li><strong>Strip, dry, insulate &mdash; in that order.</strong> Cut wet clothing away rather than peeling; towel-dry rapidly; wrap in a hypothermia burrito (vapour barrier against the skin, insulation layer, reflective outer shell if available). A casualty left in wet coveralls under a blanket will continue losing core heat.</li>' +
        '<li><strong>Get a real core temperature.</strong> Tympanic and oral readings are unreliable below 35&deg;C. Use a low-reading rectal or esophageal probe. If you do not have one, document this limitation explicitly and stage clinically by mental status, shivering, and cardiovascular stability (Swiss staging).</li>' +
        '<li><strong>Modify arrest algorithm for profound hypothermia.</strong> Below ~30&deg;C core: withhold epinephrine and antiarrhythmics, limit defibrillation to a single attempt until rewarming produces a core temperature response, and continue high-quality CPR during rewarming. Between 30&ndash;34&deg;C: double the interval between drug doses. State the temperature threshold aloud so the team does not default to standard ACLS rhythm.</li>' +
        '<li><strong>Build rewarming from what you have.</strong> Active external rewarming: forced-air warmer if available, chemical heat packs to axillae/groin/neck (buffered with a cloth layer &mdash; never direct to skin), warm blankets rotated, and ambient heat in the treatment space. Active internal rewarming: warmed (40&ndash;42&deg;C) IV crystalloid, humidified warmed oxygen via ventilator circuit, and warm fluid bladder lavage through NG if indicated. Do not rely on a single method.</li>' +
        '<li><strong>Identify the ECMO destination before the patient cools further.</strong> In true Stage IV hypothermic arrest, the only definitive rewarming is extracorporeal. Contact the Fleet Surgeon/tele-medicine immediately to identify the nearest ECMO-capable facility, confirm it is willing to accept, and start the MEDEVAC clock. If no ECMO asset is reachable within a survivable window, document that the decision was made after consultation, not by omission.</li>' +
        '<li><strong>"Not dead until warm and dead" has a narrow operational definition.</strong> Prolonged CPR is only justified when an ECMO destination is reachable, the arrest is primarily hypothermic (not trauma, not asphyxial submersion &gt; 60 minutes), and the ship can physically sustain compressions through transfer. Commit to the resuscitation only if those conditions are met.</li>' +
        '<li><strong>Protect the team.</strong> Running a prolonged hypothermia resuscitation on a cold, pitching ship exhausts the treatment team fast. Rotate compressors every 2 minutes, warm and feed off-cycle providers, and watch for cold stress in the clinicians themselves; a hypothermic provider makes errors.</li>' +
        '<li><strong>Rough seas narrow the usable rewarming window.</strong> Heavy weather may delay MEDEVAC for hours or stop flight operations entirely. Convert to a prolonged holding plan early, include calorie/fluid support and serial temperature trending, and re-contact teleconsultation at each major temperature milestone.</li>' +
        '</ul></div></div>',
      relatedLinks:['procedures/cpr','medications/epinephrine','medications/amiodarone','thresholds/core-temperature','thresholds/hypothermia-stages','pitfalls/premature-death-declaration'],
      sources:[
        {title:'Hypothermia and Drowning Jerome 2026-02.pdf',file:'Hypothermia and Drowning Jerome 2026-02.pdf',note:'Primary ACTT hypothermia source.'},
        {title:'ACLS Guidelines 2020.pdf',file:'ACLS Guidelines 2020.pdf'}
      ]
    },
    {
      id:'sepsis',
      title:'Sepsis and Septic Shock',
      severity:'red',
      sectionNumber:'4.9',
      content:'<h3>4.9 Sepsis and Septic Shock Pathway</h3>' +
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
        '<li>Administer empiric antibiotics within the target time window. Select regimen using the Sepsis &amp; Antibiotics reference.</li>' +
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
        '<ul>' +
        '<li><strong>No culture results, no CT, no imaging-guided source control.</strong> Shipboard sepsis is diagnosed clinically and treated empirically. Do not wait for confirmation that is never coming &mdash; treat on pattern recognition (fever or hypothermia + suspected source + hypoperfusion) and document your clinical reasoning so a receiving team can adjust later.</li>' +
        '<li><strong>Antibiotics within the first hour is a hard rule, not an aspiration.</strong> Pre-plan the empiric regimen for the most likely source before the patient arrives: undifferentiated = piperacillin-tazobactam or ceftriaxone + metronidazole; intra-abdominal = same with metronidazole; skin/soft tissue with MRSA concern = add vancomycin; respiratory = per the RCN empiric abx card. Confirm stock and reconstitution volumes at the start of every sail.</li>' +
        '<li><strong>Trend lactate with the i-STAT CG4+.</strong> Serial lactate is the most useful shipboard marker of whether resuscitation is working. Draw at baseline, 1 hour, and 2&ndash;4 hour intervals thereafter. Failure to clear lactate by &ge; 10%/hour or rising lactate despite adequate resuscitation is a teleconsult trigger.</li>' +
        '<li><strong>Fluid strategy must respect a small ship\'s reality.</strong> Initial 30 mL/kg crystalloid is a ceiling not a target &mdash; pause after each 500 mL bolus to reassess work of breathing, SpO<sub>2</sub>, lung sounds, and JVP. Overloading a septic patient on a platform without CPAP or HFNC converts a shock problem into an intubation problem the ship cannot easily support.</li>' +
        '<li><strong>Start norepinephrine early and via peripheral IV if needed.</strong> Do not delay pressors waiting for central access. Use the RCN double-concentration peripheral norepinephrine protocol (8 mg in 250 mL D5W = 32 mcg/mL) via a well-running 18-20 G forearm IV, with clear extravasation monitoring and phentolamine at the bedside. Mark the line and time on the IV dressing.</li>' +
        '<li><strong>Source control is physical, not pharmacologic.</strong> Drain what you can drain: remove the indwelling line if suspected source, incise and drain the abscess, pack the infected wound. Identify the source question early; if it is something only an OR ashore can fix (perforated viscus, appendicitis, cholangitis), the MEDEVAC request should go in before you finish your first bolus.</li>' +
        '<li><strong>Make the trend visible.</strong> Tape a sepsis trend sheet at the bedside: time, HR, BP/MAP, SpO<sub>2</sub>, RR, temp, urine output, lactate, mentation, fluid given, pressor dose, last antibiotic. A written trend survives watch turnover; verbal handoff does not.</li>' +
        '<li><strong>Urine output is your best end-organ monitor.</strong> Place a Foley early in septic shock and aim for &ge; 0.5 mL/kg/hr. A falling urine output on adequate MAP is a sign to escalate pressors, reconsider source, or re-contact teleconsultation.</li>' +
        '<li><strong>Plan the antibiotic course, not just the first dose.</strong> Confirm re-dose intervals are written in the MAR; calculate total vials needed for 24&ndash;48 hours at current dosing and verify against Sick Bay stock before committing to a regimen. Running out of the second dose of ceftriaxone mid-hold is a preventable failure.</li>' +
        '<li><strong>Escalate the MEDEVAC timeline with the patient, not behind them.</strong> A septic patient who needs a pressor now will need a higher-level bed within hours. Initiate repatriation conversations with command and Fleet Surgeon as soon as the pressor is started, not when the second pressor is added.</li>' +
        '</ul></div></div>',
      relatedLinks:['procedures/iv-io-access','medications/norepinephrine','medications/antibiotics','medications/crystalloid','appendices/appendix-l','thresholds/map','thresholds/lactate','thresholds/urine-output','pitfalls/fluid-overload'],
      sources:[
        {title:'Sepsis ACTT feb 2026.pptx',file:'Sepsis ACTT feb 2026.pptx',note:'Primary ACTT sepsis teaching deck.'},
        {title:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf',file:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf'},
        {title:'Vasoactive Medication V2 Hnatiuk 2026.pdf',file:'Vasoactive Medication V2 Hnatiuk 2026 .pdf'}
      ]
    },
    {
      id:'dka',
      title:'DKA / Hyperglycemic Emergency',
      severity:'red',
      sectionNumber:'4.9',
      content:'<h3>4.9 Diabetic Ketoacidosis / Hyperglycemic Emergency</h3>' +
        '<p>This pathway covers DKA and hyperosmolar hyperglycemic state (HHS) at the point of care. It emphasizes early recognition, aggressive but structured fluid resuscitation, insulin only after potassium is known, tight electrolyte monitoring, and evacuation planning once stabilized.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Entry Conditions</div>' +
        '<ul>' +
        '<li>Symptomatic hyperglycemia with dehydration, vomiting, abdominal pain, tachypnea/Kussmaul pattern, or acetone breath.</li>' +
        '<li>Altered mental status, shock signs, or profoundly dry mucosa/poor skin turgor with suspected missed insulin or infection trigger.</li>' +
        '<li>Bedside or lab evidence of DKA (glucose typically &gt; 11 mmol/L with ketones/acidosis) or HHS (very high glucose/osmolality with altered sensorium, minimal ketosis).</li>' +
        '</ul></div>' +

        '<h4>Immediate Assessment Priorities</h4>' +
        '<ul>' +
        '<li>POC glucose and urine/serum ketones; obtain VBG/pH/bicarbonate, anion gap, corrected sodium, and osmolality when available.</li>' +
        '<li>Check potassium before insulin; recognize total body potassium deficit even if initial K is normal or high.</li>' +
        '<li>Assess perfusion, mental status, respiratory effort, and risk for airway loss. Avoid intubation if possible because matching pre-intubation minute ventilation is difficult.</li>' +
        '<li>Search for precipitants: infection/sepsis, missed insulin, ischemia/ACS, medications (steroids, thiazides), or SGLT2 use.</li>' +
        '</ul>' +

        '<h4>Immediate Actions / Execution Sequence</h4>' +
        '<ul>' +
        '<li>Place two large-bore IVs, cardiac monitoring, and start isotonic crystalloid. Give roughly 15&ndash;20 mL/kg (~1&ndash;2 L) in the first hour unless clear overload risk, then continue 250&ndash;500 mL/hr guided by perfusion, urine output, and respiratory tolerance.</li>' +
        '<li>Do not start insulin until potassium is known. If K &lt; 3.5 mmol/L, hold insulin and replace potassium (e.g., 40 mEq KCl per liter while resuscitating) until K is safe.</li>' +
        '<li>If K &ge; 3.5 mmol/L, start regular insulin infusion at 0.1 units/kg/hr (no bolus). Continue potassium supplementation because intracellular shift will drop serum K.</li>' +
        '<li>Add dextrose to the fluid when glucose falls below ~14 mmol/L so insulin can continue to clear ketones.</li>' +
        '<li>Check glucose at least hourly and potassium about every 2 hours; repeat VBG/anion gap and osmolality when available to trend closure.</li>' +
        '<li>Treat the precipitating cause (antibiotics for infection, ACS pathway if indicated) while resuscitation continues.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If the patient is hypotensive or poorly perfused, prioritize initial crystalloid bolus while watching for respiratory compromise. If K remains below 3.3 mmol/L, continue potassium and defer insulin. If the anion gap is closing and the patient can take enteral intake, transition to basal/long-acting insulin before stopping the infusion to avoid rebound ketosis. If respiratory fatigue or airway threat develops, prepare for intubation but match pre-intubation minute ventilation and anticipate hemodynamic collapse.</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>Insulin without a potassium plan is unsafe; potassium will fall quickly once insulin starts.</li>' +
        '<li>Dextrose is added to allow insulin to continue once glucose approaches the target, not to stop insulin.</li>' +
        '<li>HHS is primarily a volume and osmolality problem; large fluid deficits are common, but reassess respiratory status to avoid overload.</li>' +
        '<li>Document timing of glucose checks, potassium replacement, insulin adjustments, and fluid volumes.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>Trend vital signs, mental status, respiratory pattern, urine output, and capillary refill. Recheck glucose hourly and potassium about every 2 hours. Repeat VBG/anion gap and osmolality when available to confirm resolution. Watch for pulmonary edema as fluids accumulate and for hypoglycemia when glucose drops faster than expected. Maintain evacuation planning and teleconsultation while stabilization continues.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Starting insulin before knowing potassium, leading to sudden hypokalemia and arrhythmia risk.</li>' +
        '<li>Stopping insulin when glucose normalizes but the anion gap remains open.</li>' +
        '<li>Failing to add dextrose once glucose &lt; 14 mmol/L, causing hypoglycemia and early insulin stoppage.</li>' +
        '<li>Fluid overload in older patients or HHS when reassessment is not frequent.</li>' +
        '<li>Intubating without matching pre-intubation minute ventilation, worsening acidosis.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li>Limited lab access means relying on serial clinical exam, glucose trends, urine output, and careful potassium replacement tracking.</li>' +
        '<li>Stock and power limits make insulin and fluid use a planning problem; calculate expected needs early.</li>' +
        '<li>Delayed evacuation increases the importance of teleconsultation, documentation of trends, and a durable monitoring plan.</li>' +
        '</ul></div></div>',
      relatedLinks:['procedures/iv-io-access','sickbay-meds/insulin_regular','medications/crystalloid','thresholds/urine-output','prolonged-holding/reassessment-rhythm','pitfalls/fluid-overload','algorithms/sepsis','medications/antibiotics','checklists/dka-hyperglycemia'],
      sources:[
        {title:'DKA Protocol.pdf',file:'DKA Protocol.pdf',note:'Primary DKA protocol used for this pathway.'},
        {title:'DKA Order Set_Treatment Protocol_TOH 2015.pdf',file:'DKA Order Set_Treatment Protocol_TOH 2015.pdf'},
        {title:'Ch15_HyperglycemicEmergencies.pdf',file:'Ch15_HyperglycemicEmergencies.pdf'}
      ]
    },
    {
      id:'stemi',
      title:'STEMI and Fibrinolysis',
      severity:'red',
      sectionNumber:'4.10',
      content:'<h3>4.10 STEMI and Fibrinolysis Pathway</h3>' +
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
        '<li>Recognize the STEMI pattern, document symptom onset, and declare the reperfusion decision point early.</li>' +
        '<li>If PCI within the time target is not realistic, move immediately to a structured fibrinolysis contraindication screen with baseline neuro and bleeding assessment.</li>' +
        '<li>Prepare tenecteplase: clear dextrose from the IV line, reconstitute with 10 mL sterile water (gentle swirl, no shake), select the correct weight band (mg and mL), label the time if not given immediately.</li>' +
        '<li>Administer tenecteplase as a single IV push over 5 seconds, then flush with normal saline. Do not re-dose.</li>' +
        '<li>Start adjuncts without delay: aspirin if not already given, P2Y12 plan (clopidogrel 300 mg load if naive, 75 mg if on &gt; 7 days; defer load if age &gt; 75), and anticoagulant within 5 minutes (enoxaparin 30 mg IV then 1 mg/kg SC q12h if age &le; 75 and eGFR &ge; 30; otherwise unfractionated heparin using low-PTT target protocol). For pain control: <strong>morphine 2-4 mg IV</strong> (titrate in 2 mg increments to pain relief, monitor respirations and BP closely) or <strong>nitroglycerin 0.4 mg sublingual</strong> or <strong>spray q5min x 3</strong> if SBP &gt; 90 mmHg and no right ventricular infarct suspected. Avoid nitrates if inferior STEMI with right-sided ECG changes or recent PDE5 inhibitor use.</li>' +
        '<li>Apply bleeding precautions: avoid new punctures if possible for 24 hours, hold firm pressure if unavoidable.</li>' +
        '<li>Continuous monitoring: rhythm, frequent neuro checks, and bleeding surveillance. Obtain a 12-lead ECG at ~75 minutes to look for &ge; 50% ST resolution.</li>' +
        '</ul>' +

        '<h4>Decision Branches</h4>' +
        '<p>If PCI is available within the time target, arrange rapid transfer. If PCI is not realistic, move to fibrinolysis screening. If absolute contraindications to fibrinolysis exist, fibrinolysis cannot proceed. After fibrinolysis, watch for reperfusion or complications and define rescue PCI triggers (persistent ST elevation or ischemic pain at 75 minutes, cardiogenic shock/worsening heart failure, refractory ventricular arrhythmias).</p>' +

        '<h4>Key Execution Points</h4>' +
        '<ul>' +
        '<li>This pathway depends on decisive screening and precise dosing, not prolonged indecision.</li>' +
        '<li>The fibrinolytic is only one part of the reperfusion package. Adjunctive medications, dosing adjustments for age/renal function, and monitoring are part of the execution.</li>' +
        '<li>Incorrect reconstitution, wrong weight band, or failure to flush dextrose-containing lines can all cause treatment failure or harm.</li>' +
        '</ul>' +

        '<h4>Reassessment Points</h4>' +
        '<p>After treatment, monitor closely for reperfusion, bleeding, arrhythmia, and neurologic decline. Perform repeated neurologic checks (hourly x 4, then every 4 hours in the first 24 hours), bleeding surveillance with line-site checks, and rhythm monitoring. Obtain the 75-minute ECG, define rescue triggers, and maintain evacuation planning.</p>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Traps</div>' +
        '<ul>' +
        '<li>Treating before screening for major contraindications.</li>' +
        '<li>Incorrect dose selection or poor reconstitution technique.</li>' +
        '<li>Failing to monitor actively after fibrinolysis.</li>' +
        '<li>Missing intracranial hemorrhage or significant bleeding during the post-treatment period.</li>' +
        '</ul></div>' +

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">' +
        '<ul>' +
        '<li><strong>Assume PCI is not reachable.</strong> For most RCN platforms at sea, door-to-balloon in the 90 or 120 minute window is fiction. Do not spend 20 minutes debating PCI transfer; calculate realistic wheels-up, flight, and cath-lab activation time, and if it exceeds the fibrinolysis benefit window, commit to lytic early. The practical decision is lytic vs. palliation, not lytic vs. PCI.</li>' +
        '<li><strong>Make the ECG diagnosis with what you have.</strong> The Zoll X-Series 12-lead is the shipboard gold standard; if the 12-lead cable is unavailable, diagnose STEMI on 4-lead monitoring only for clear-cut patterns and document the limitation. Transmit the tracing to teleconsultation when bandwidth permits; do not delay treatment waiting for remote confirmation on a borderline ECG.</li>' +
        '<li><strong>Run the fibrinolytic contraindication screen as a paper checklist, not from memory.</strong> At sea, distractions and fatigue make verbal screening unreliable. The ACTT fibrinolytic checklist must be read line-by-line with a second crew member witnessing, signed, and filed with the patient record. Any absolute contraindication stops the pathway.</li>' +
        '<li><strong>Pre-stage the tenecteplase kit before you need it.</strong> Know exactly where the TNK vial, 10 mL sterile water, reconstitution needle, and weight-band dosing card are stored. Confirm the IV line used for administration is free of dextrose (flush with 10 mL NS before and after). A wrong-line failure wastes the only dose you have.</li>' +
        '<li><strong>Protect the only IV sites you have.</strong> Once lytic is given, the patient is anticoagulated for 24&ndash;48 hours. Place all anticipated IVs, arterial samples, NG tubes, and Foley BEFORE administering TNK. No new punctures for 24 hours if avoidable; if unavoidable, use a compressible site and hold 10+ minutes of firm pressure.</li>' +
        '<li><strong>Bleeding surveillance is watch-to-watch, not shift-to-shift.</strong> Post a structured check at fixed intervals: GCS and pupils q15 min x 4, q30 min x 4, q1h thereafter for 24 hours; line sites, gum/nasal bleeding, urine and NG for blood at every vital sign check; abdomen/flank exam q2h for occult retroperitoneal bleed. Any new headache, confusion, focal deficit, or back pain is an intracranial/retroperitoneal hemorrhage until proven otherwise &mdash; stop heparin and call teleconsult immediately.</li>' +
        '<li><strong>Rhythm monitoring must be continuous, not intermittent.</strong> Reperfusion arrhythmias (AIVR, VT, bradycardia, AV block) occur in the first 2 hours. Keep the patient on the Zoll with print-capable defib pads already attached &mdash; do not wait to apply pads at the moment of arrest.</li>' +
        '<li><strong>Plan the 75-minute ECG and rescue trigger before you give the lytic.</strong> If &lt; 50% ST resolution, ongoing pain, hemodynamic deterioration, or worsening heart failure at 75 minutes, rescue PCI becomes urgent. On a ship this means escalating the MEDEVAC priority &mdash; so have the conversation with command before the 75-minute mark, not after.</li>' +
        '<li><strong>Build a sustainable adjunctive medication plan.</strong> Enoxaparin and clopidogrel dosing, aspirin, and morphine or nitro for pain all need to be documented with scheduled re-dose times. In a rolling sea, simple bedside math errors are common &mdash; write the weight-banded dose once, verify with a second provider, and post it.</li>' +
        '<li><strong>Cardiogenic shock post-MI is rarely survivable without definitive care.</strong> If the patient develops shock, a new murmur, or pulmonary edema, escalate the MEDEVAC request to the highest priority the mission allows. Have a documented goals-of-care conversation with command if evacuation is not achievable; a quiet, humane holding plan is part of ACTT practice.</li>' +
        '</ul></div></div>',
      relatedLinks:['checklists/fibrinolysis-screening','checklists/post-fibrinolysis-monitoring','medications/tenecteplase','medications/aspirin','medications/heparin','medications/clopidogrel','procedures/ecg-interpretation','thresholds/stemi-criteria','thresholds/door-to-needle','pitfalls/fibrinolysis-contraindications'],
      sources:[
        {title:'Acute chest pain Protocol.pdf',file:'Acute chest pain Protocol.pdf',note:'Primary ACTT chest pain/STEMI reference.'},
        {title:'Fibrinolytic Checklist.pdf',file:'Fibrinolytic Checklist.pdf'},
        {title:'Instructions for Use of Tenecteplase.pdf',file:'Instructions for Use of Tenecteplase.pdf'}
      ]
    },
    {
      id:'chest-decompression',
      title:'Needle/Chest Decompression (Tension Pneumothorax)',
      severity:'red',
      sectionNumber:'4.11',
      content:'<h3>4.11 Tension Pneumothorax Pathway</h3>' +
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
        '<ul>' +
        '<li><strong>Diagnosis is clinical; there is no CT or upright chest X-ray on most platforms.</strong> Treat suspected tension in an unstable patient immediately on the basis of mechanism plus distress, tachycardia, hypoxia, asymmetric breath sounds or chest rise, tracheal shift, JVD, or sudden deterioration after PPV. If in doubt and the patient is crashing, decompress first and argue later &mdash; a missed tension kills faster than an unnecessary thoracostomy.</li>' +
        '<li><strong>Pre-stage thoracostomy kits where the patient will actually be.</strong> A needle decompression kit and a finger/tube thoracostomy tray should live in Sick Bay ready for grab-and-go. If casualty reception is likely to be on the flight deck or in a boarding party space, duplicate the needle kit into the first-responder bag so you are not running back for equipment while the patient dies.</li>' +
        '<li><strong>Use a long needle.</strong> ACTT teaching favours a 10&ndash;14 G, 8 cm (3.25 in) catheter because the standard 5 cm catheter fails to reach the pleural space in ~30% of adult chest walls, and even more often in fit sailors with muscular chests or women with dense breast tissue. Confirm your deployed kit contains the long catheter &mdash; substitution with a standard angiocath is a known failure point.</li>' +
        '<li><strong>Prefer the 4th/5th intercostal space, anterior axillary line.</strong> This is now the ACTT-preferred landmark over 2nd ICS midclavicular because chest-wall thickness is lower laterally. In a moving space, lateral access is also mechanically easier than trying to work over the sternum while the patient and ship are both moving.</li>' +
        '<li><strong>Landmark with the patient secured.</strong> Rolling decks make a freehand needle insertion unsafe. Brake the stretcher, assign a crew member to stabilize the casualty against ship motion (shoulder and hip restraint), and count ribs deliberately rather than guessing. Mark the skin with a pen if there is time &mdash; it takes 5 seconds and survives repositioning.</li>' +
        '<li><strong>Needle decompression is a bridge measured in minutes.</strong> The catheter kinks, clots, or dislodges during ship movement; assume it will fail on the next roll or the next transfer through a hatch. A finger or surgical chest tube must follow immediately once the patient is temporized, not "when Sick Bay is set up."</li>' +
        '<li><strong>Reassess after every movement.</strong> Any transfer &mdash; deck to stretcher, stretcher to Sick Bay, lift down a ladder &mdash; risks recurrence or catheter failure. After each move: recheck breath sounds, SpO<sub>2</sub>, ventilator/BVM resistance, and hemodynamics. Tension can recur silently on a sedated patient.</li>' +
        '<li><strong>Plan the chest tube location before you commit.</strong> If the first decompression is being done in a passageway or on the deck, the definitive tube should go where there is room, lighting, suction, and drainage management. State the planned location out loud so the team can prepare it while you temporize.</li>' +
        '<li><strong>Give a prophylactic antibiotic at tube insertion.</strong> One dose of ceftriaxone 2 g IV at the time of trauma chest tube placement is the current ACTT teaching; stock a dedicated dose with the thoracostomy tray so it is not forgotten in the chaos.</li>' +
        '<li><strong>Drainage system must survive ship motion.</strong> Pleur-evac units must sit below the chest, remain upright, and be secured against sliding or tipping. In heavy weather, brief the watch explicitly on what the drainage system must NOT do &mdash; no lifting above the chest during transfers, no tipping, no clamping for transport unless explicitly ordered.</li>' +
        '</ul></div></div>',
      relatedLinks:['procedures/needle-decompression','procedures/chest-tube','procedures/finger-thoracostomy','thresholds/spo2','thresholds/sbp','pitfalls/needle-decompression-as-definitive'],
      sources:[
        {title:'ACTT 2026-01 ATLS.pdf',file:'ACTT 2026-01 ATLS.pdf',note:'Primary thoracic trauma reference.'},
        {title:'Setup - Pleurevac.pdf',file:'Setup - Pleurevac.pdf'},
        {title:'Pleurovac_Air Leak.pdf',file:'Pleurovac_Air Leak.pdf'}
      ]
    },
    {
      id:'multi-system',
      title:'Integrated Multi-System Decision Pathways',
      severity:'red',
      sectionNumber:'4.12',
      content:'<h3>4.12 Integrated Multi-System Decision Pathways</h3>' +
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

        '<h3>4.13 Algorithm Execution in the RCN At-Sea Context</h3>' +
        '<p>Shipboard practice changes how algorithms are used. The sequence may be the same as ashore, but the practical limits are different: staffing may be thinner, evacuation may be delayed, diagnostics may be limited, and the patient may need to be maintained for many hours.</p>' +

        '<h4>Practical Constraints (4.13.1)</h4>' +
        '<ul>' +
        '<li>Limited personnel can force simpler task division and tighter prioritization.</li>' +
        '<li>Movement, noise, space limits, and lighting can degrade performance during airway and procedural tasks.</li>' +
        '<li>Finite medications and equipment require early recognition of what can be sustained.</li>' +
        '<li>Delayed evacuation means every acute pathway must eventually connect to a prolonged holding plan.</li>' +
        '</ul>' +

        '<h4>Practical Adaptations (4.13.2)</h4>' +
        '<ul>' +
        '<li>Do the first lifesaving step early and decisively.</li>' +
        '<li>Choose interventions you can monitor and maintain.</li>' +
        '<li>Document trend, response, and time of intervention clearly, because prolonged care depends on continuity.</li>' +
        '<li>Use teleconsultation early when the next branch is uncertain or when competing priorities are difficult to balance.</li>' +
        '</ul>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Errors in Algorithm Use (4.14)</div>' +
        '<ul>' +
        '<li>Recognizing the problem but delaying the first treatment step.</li>' +
        '<li>Collecting data without acting on clear thresholds.</li>' +
        '<li>Failing to define the next escalation step before the current one fails.</li>' +
        '<li>Not reassessing after medications or procedures.</li>' +
        '<li>Anchoring on a single diagnosis while the patient evolves.</li>' +
        '<li>Stopping at temporary improvement and missing the need for definitive management.</li>' +
        '</ul></div>' +

        '<h4>End State for the Learner (4.15)</h4>' +
        '<p>After this chapter, the learner should be able to recognize the major ACTT-critical presentations, activate the correct pathway, carry out the first intervention sequence, identify when the current step has failed, and transition either to escalation or to prolonged holding. The aim is not memorization alone. The aim is to know what to do on the patient, in order, under pressure.</p>' +

        '<h4>Bridge to the Next Chapter (4.16)</h4>' +
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
