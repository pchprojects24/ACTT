window.ACTT=window.ACTT||{};
window.ACTT.pitfalls={
  id:'pitfalls',
  title:'Critical Errors, Pitfalls & Do Not Miss Items',
  subtitle:'Chapter 9 — Error Prevention for High-Consequence Care',
  chapter:9,
  intro:'<h3>9.1 Purpose of This Chapter</h3>'+
    '<p>The purpose of this chapter is to reduce preventable harm. Each section is built around what the error looks like, why it is dangerous, how it develops, what the early warning signs are, and what corrective steps should be taken. In ACTT-level care, errors do not always present as dramatic failures. They often begin as small deviations from safe practice that compound over time, especially when the team is fatigued, the patient appears stable, or the next intervention is delayed.</p>'+
    '<h3>9.2 The Delayed-MEDEVAC Context</h3>'+
    '<p>In delayed-MEDEVAC care, the patient survives the first intervention but remains vulnerable to the next failure. The holding period between initial stabilization and definitive surgical or critical care support is where most of these errors develop. A correctly placed tube can dislodge. A correctly started fluid can accumulate. A correctly dosed sedative can stack. The discipline of this chapter is to treat every completed intervention as the beginning of the next risk window, not the end of the problem.</p>'+
    '<h3>9.3 The Four Post-Intervention Questions</h3>'+
    '<p>After every major intervention, the clinician should ask four questions:</p>'+
    '<ol>'+
    '<li><strong>Did it work?</strong> Confirm that the intervention achieved its intended effect.</li>'+
    '<li><strong>What complication could develop in the next 5 to 30 minutes?</strong> Anticipate the most likely failure mode.</li>'+
    '<li><strong>What monitoring will detect that complication?</strong> Assign the check that catches it early.</li>'+
    '<li><strong>What triggers escalation?</strong> Define the threshold for moving to the next level of intervention.</li>'+
    '</ol>'+
    '<h3>9.4 Standard Format for Error Entries</h3>'+
    '<p>Each error entry in this chapter follows a standard format to support rapid recognition and corrective action:</p>'+
    '<ul>'+
    '<li><strong>Identify the error:</strong> what goes wrong.</li>'+
    '<li><strong>Where it occurs:</strong> the clinical context or procedure where the error is most likely.</li>'+
    '<li><strong>Why it is dangerous:</strong> the consequence if uncorrected.</li>'+
    '<li><strong>How it develops:</strong> the behavioral or system pathway that leads to the error.</li>'+
    '<li><strong>Early warning signs:</strong> what is observable before the full failure.</li>'+
    '<li><strong>Immediate corrective action:</strong> what to do once the error is recognized.</li>'+
    '<li><strong>Prevention habit:</strong> the routine practice that stops the error from starting.</li>'+
    '</ul>',
  sections:[
    {
      id:'airway-errors',
      title:'Airway & Ventilation Errors',
      severity:'red',
      content:'<h3>9.5 Airway &amp; Ventilation Errors</h3>'+

        '<h4>9.5.1 Delaying Definitive Airway Despite Clear Thresholds</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Delaying Definitive Airway Despite Clear Thresholds</div>'+
        '<p><strong>Where it occurs:</strong> Decreasing level of consciousness, progressive inhalation injury, recurrent airway obstruction, repeated vomiting, unsafe agitation.</p>'+
        '<p><strong>Why dangerous:</strong> The airway is easiest to secure before complete failure. Waiting means performing a rescue airway under worse conditions &mdash; more edema, less cooperation, deeper hypoxia, fewer options.</p>'+
        '<p><strong>How it develops:</strong> The team postpones because the patient is still talking, other tasks seem more urgent, or the team wants more certainty before committing to a definitive airway.</p>'+
        '<p><strong>Early warning signs:</strong> Rising work of breathing, worsening secretions, falling GCS, increasing suction needs, progressive facial or neck edema.</p>'+
        '<p><strong>Immediate corrective action:</strong> Reassess the airway immediately. Stop non-essential tasks. Prepare for definitive airway management. Commit to RSI or surgical airway.</p>'+
        '<p><strong>Prevention habit:</strong> Act on trend, not on the current snapshot. Define explicit airway triggers early in the case. Verbalize the backup plan before it is needed.</p>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Consideration<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Losing the airway later at sea means losing it when fatigue, progressive swelling, limited staff, and constrained workspace make rescue significantly harder. The margin for delay is narrower onboard.</p>'+
        '</div></div>'+
        '</div>'+

        '<h4>9.5.2 Repeated Intubation Attempts Beyond Safe Limits</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Repeated Intubation Attempts Beyond Safe Limits</div>'+
        '<p><strong>Why dangerous:</strong> Each additional attempt increases hypoxia, airway trauma, mucosal edema, aspiration risk, and bleeding. Multiple attempts convert a difficult airway into a failed airway.</p>'+
        '<p><strong>How it develops:</strong> The team continues because the cords were "almost visible," because no formal failed airway transition was declared, or because there is reluctance to move to a surgical airway.</p>'+
        '<p><strong>Early warning signs:</strong> Falling SpO2 between attempts, worsening bag-mask ventilation, airway bleeding, prolonged laryngoscopy duration, hemodynamic instability.</p>'+
        '<p><strong>Immediate corrective action:</strong> Stop at the pre-set attempt limit. Reoxygenate the patient. Switch to the rescue plan &mdash; supraglottic airway device or surgical cricothyroidotomy.</p>'+
        '<p><strong>Prevention habit:</strong> State attempt limits aloud before starting. In a difficult airway, use a one-attempt rule with immediate transition if unsuccessful. Have the cricothyroidotomy kit already open and accessible.</p>'+
        '</div>'+

        '<h4>9.5.3 Using Ketamine Alone for RSI Without Paralysis</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Using Ketamine Alone for RSI Without Paralysis</div>'+
        '<p><strong>Why dangerous:</strong> Ketamine alone produces suboptimal intubating conditions, carries a risk of laryngospasm, and leaves partial airway reflex persistence. The result is a patient who is neither awake nor fully relaxed &mdash; the worst combination for laryngoscopy.</p>'+
        '<p><strong>How it develops:</strong> The provider gives the induction agent but omits the paralytic due to uncertainty about dosing, fear of apnea in a patient who is still breathing, or incomplete preparation.</p>'+
        '<p><strong>Early warning signs:</strong> Jaw clenching after induction, poor laryngoscopic view despite adequate positioning, difficult tube passage, worsening desaturation during attempt.</p>'+
        '<p><strong>Immediate corrective action:</strong> Treat as a failed or incomplete RSI. Oxygenate the patient. Correct the plan by administering the paralytic or transitioning to the backup airway strategy.</p>'+
        '<p><strong>Prevention habit:</strong> RSI is a matched sequence: induction, paralysis, backup oxygenation plan, tube placement, confirmation, and post-intubation sedation. Do not separate the components.</p>'+
        '</div>'+

        '<h4>9.5.4 Failure to Confirm Tube Placement Properly</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Failure to Confirm Tube Placement Properly</div>'+
        '<p><strong>Why dangerous:</strong> Unrecognized esophageal intubation leads to severe hypoxia, gastric insufflation, aspiration, and cardiac arrest. It is one of the most preventable causes of death after intubation.</p>'+
        '<p><strong>How it develops:</strong> The team is relieved the tube passed, sees apparent chest movement, and fails to complete the full confirmation sequence including end-tidal CO2 and bilateral auscultation.</p>'+
        '<p><strong>Early warning signs:</strong> Absent or poor end-tidal CO2 waveform, asymmetric or absent chest rise, rapid desaturation, epigastric distension or gurgling.</p>'+
        '<p><strong>Immediate corrective action:</strong> Assume malposition until proven otherwise. Remove or reposition the tube. Reoxygenate the patient. Repeat the full confirmation sequence.</p>'+
        '<p><strong>Prevention habit:</strong> Use a structured post-intubation checklist every time. EtCO2 is the primary confirmation tool. Never skip it.</p>'+
        '</div>'+

        '<h4>9.5.5 Inadequate Post-Intubation Sedation</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Inadequate Post-Intubation Sedation</div>'+
        '<p><strong>Why dangerous:</strong> Without ongoing sedation after intubation, the patient is at risk of self-extubation, ventilator fighting, dangerous agitation, and worsened intracranial pressure in TBI.</p>'+
        '<p><strong>How it develops:</strong> The team treats the procedure as complete at tube passage. No standing sedation plan is established, or there is a gap between RSI drug wearing off and the start of maintenance sedation.</p>'+
        '<p><strong>Prevention habit:</strong> Prepare post-intubation sedation medications before the intubation attempt. The sedation plan should be part of the RSI briefing, not an afterthought.</p>'+
        '</div>'+

        '<h4>9.5.6 Tube Securement Errors</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Tube Securement Errors</div>'+
        '<p><strong>Why dangerous:</strong> A correctly placed tube that is poorly secured will eventually dislodge, especially during patient movement, suctioning, or position changes. Accidental extubation during prolonged holding is a preventable catastrophe.</p>'+
        '<p><strong>How it develops:</strong> Standard tape is poorly applied, fails on moist or burned skin, or is not rechecked after patient movement or repositioning.</p>'+
        '<p><strong>Prevention habit:</strong> Use burn-appropriate securement alternatives such as cloth ties or commercial holders when tape is unreliable. Build tube position checks into every reassessment cycle.</p>'+
        '</div>'+

        '<h4>9.5.7 Hyperventilating TBI Patients Without Indication</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Hyperventilating TBI Patients Without Indication</div>'+
        '<p><strong>Why dangerous:</strong> Excessive ventilation drives down CO2, which reduces cerebral blood flow and worsens cerebral ischemia. Routine hyperventilation in TBI causes secondary brain injury.</p>'+
        '<p><strong>How it develops:</strong> The provider ventilates too fast out of anxiety, habit, or lack of EtCO2 guidance. There is no active indication for temporary hyperventilation such as impending herniation.</p>'+
        '<p><strong>Prevention habit:</strong> Tie ventilation rate to a target EtCO2 value. In TBI, the maintenance target is 35&ndash;40 mmHg. Hyperventilation to approximately 30 mmHg is a short-duration rescue measure only, not a maintenance strategy.</p>'+
        '</div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','procedures/surgical-cric','thresholds/airway-respiratory','medications/rsi-airway','prolonged-holding/device-maintenance']
    },
    {
      id:'thoracic-errors',
      title:'Thoracic Procedure Errors',
      severity:'red',
      content:'<h3>9.6 Thoracic Procedure Errors</h3>'+

        '<h4>9.6.1 Delaying Needle Thoracostomy While Waiting for Certainty</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Delaying Needle Thoracostomy While Waiting for Certainty</div>'+
        '<p><strong>Why dangerous:</strong> Tension physiology is a clinical diagnosis. Waiting for imaging confirmation or absolute certainty can cost the salvageable window. The patient deteriorates rapidly once tension develops, and delayed decompression converts a survivable problem into an arrest.</p>'+
        '<p><strong>How it develops:</strong> The team recognizes concerning signs but hesitates because the presentation is not textbook, because they want imaging first, or because they are unsure whether the clinical picture truly represents tension.</p>'+
        '<p><strong>Prevention habit:</strong> Maintain a low threshold to act when the clinical pattern fits &mdash; hypotension, hypoxia, absent breath sounds, tracheal deviation, distended neck veins, or acute deterioration after chest trauma. Treat clinically; confirm afterward.</p>'+
        '</div>'+

        '<h4>9.6.2 Incorrect Needle Thoracostomy Landmarking</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Incorrect Needle Thoracostomy Landmarking</div>'+
        '<p><strong>Why dangerous:</strong> Missing the pleural space means no decompression occurs, and the patient continues to deteriorate. Additionally, incorrect landmarking risks injury to intercostal vessels or internal structures.</p>'+
        '<p><strong>How it develops:</strong> The provider rushes under pressure, counts rib spaces inaccurately, or uses a catheter that is too short for the chest wall thickness.</p>'+
        '<p><strong>Prevention habit:</strong> Slow down. Confirm the rib space by palpation. Use the correct catheter length for the patient. Landmark carefully even under time pressure &mdash; a few extra seconds of accuracy prevents a failed procedure.</p>'+
        '</div>'+

        '<h4>9.6.3 Assuming Needle Decompression Is Definitive</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Assuming Needle Decompression Is Definitive</div>'+
        '<p><strong>Why dangerous:</strong> Needle thoracostomy is a temporizing maneuver, not definitive treatment. Recurrent tension can develop from catheter failure, kinking, clotting, or displacement. A patient who improved after decompression can deteriorate again.</p>'+
        '<p><strong>How it develops:</strong> The team sees clinical improvement after the needle and moves on to other tasks, assuming the chest problem is resolved.</p>'+
        '<p><strong>Prevention habit:</strong> Every needle decompression must be immediately followed by a chest tube plan. Treat the needle as a bridge, not the destination.</p>'+
        '</div>'+

        '<h4>9.6.4 Poor Chest Tube Placement Technique</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Poor Chest Tube Placement Technique</div>'+
        '<p><strong>Why dangerous:</strong> Wrong-space entry, going under the rib instead of over it, failed blunt dissection, or omitting the finger sweep can result in tube malposition, intercostal vessel injury, lung laceration, or intra-abdominal placement.</p>'+
        '<p><strong>How it develops:</strong> The provider is unfamiliar with the procedural sequence, rushes under pressure, or skips confirmation steps.</p>'+
        '<p><strong>Prevention habit:</strong> Follow the full procedural sequence every time: landmark, incision over the rib, blunt dissection through the intercostal muscles, controlled pleural entry, finger sweep to confirm intrapleural position, then tube insertion and securement.</p>'+
        '</div>'+

        '<h4>9.6.5 Failure to Monitor Chest Tube Function Over Time</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Failure to Monitor Chest Tube Function Over Time</div>'+
        '<p><strong>Why dangerous:</strong> A chest tube can become blocked, dislodged, kinked, or develop an air leak at any time after placement. If the team documents placement but does not assign ongoing monitoring, these failures will be missed until the patient deteriorates.</p>'+
        '<p><strong>How it develops:</strong> The team treats placement as the end of the task. No one is explicitly assigned to check tube function, and no reassessment schedule is built into the care plan.</p>'+
        '<p><strong>Prevention habit:</strong> Every chest tube needs a maintenance plan: output trend monitoring, securement checks, drainage system integrity, tidaling or bubbling assessment, and scheduled reassessment intervals.</p>'+
        '</div>',
      relatedLinks:['procedures/needle-thoracostomy','procedures/chest-tube','algorithms/chest-decompression','thresholds/procedure-numbers','prolonged-holding/device-maintenance']
    },
    {
      id:'circulation-errors',
      title:'Circulation & Resuscitation Errors',
      severity:'red',
      content:'<h3>9.7 Circulation &amp; Resuscitation Errors</h3>'+

        '<h4>9.7.1 Blind Repeated Fluid Boluses Without Reassessment</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Blind Repeated Fluid Boluses Without Reassessment</div>'+
        '<p><strong>Why dangerous:</strong> Excess fluid administration leads to pulmonary edema, dilution of clotting factors, and worsened tissue edema. In TBI, it can increase intracranial pressure. In burns, it worsens compartment pressures and airway swelling.</p>'+
        '<p><strong>How it develops:</strong> The team gives bolus after bolus because the blood pressure remains low, without stopping to assess whether the fluid is actually improving perfusion or causing harm.</p>'+
        '<p><strong>Prevention habit:</strong> Every fluid bolus needs a response assessment. Before the next bolus, check mental status, heart rate trend, blood pressure trend, urine output, capillary refill, and respiratory status. Fluid is a drug with side effects.</p>'+
        '</div>'+

        '<h4>9.7.2 Under-Resuscitating TBI Because of Fear of Bleeding</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Under-Resuscitating TBI Because of Fear of Bleeding</div>'+
        '<p><strong>Why dangerous:</strong> Hypotension worsens secondary brain injury. Even a single episode of systolic blood pressure below 110 mmHg in a TBI patient significantly increases morbidity and mortality.</p>'+
        '<p><strong>How it develops:</strong> The provider applies permissive hypotension principles intended for hemorrhagic shock to a patient with TBI, not recognizing that the perfusion target is different.</p>'+
        '<p><strong>Prevention habit:</strong> Use condition-specific blood pressure targets. In TBI, avoiding hypotension IS the critical intervention. SBP must be maintained above 110 mmHg. Do not apply permissive hypotension to isolated TBI.</p>'+
        '</div>'+

        '<h4>9.7.3 Using Wrong Fluid in Wrong Patient</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Using Wrong Fluid in Wrong Patient</div>'+
        '<p><strong>Why dangerous:</strong> In TBI, hypotonic fluids worsen cerebral edema. Fluid selection that does not match the clinical diagnosis can cause direct harm beyond simply failing to help.</p>'+
        '<p><strong>How it develops:</strong> The team grabs whatever fluid is immediately available without matching the fluid type to the diagnosis. Convenience overrides clinical appropriateness.</p>'+
        '<p><strong>Prevention habit:</strong> Tie fluid selection to the diagnosis, not to convenience. State the fluid type and the reason for choosing it aloud. In TBI, use isotonic or hypertonic fluids only.</p>'+
        '</div>'+

        '<h4>9.7.4 Starting Vasopressors Without Adequate Initial Assessment</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Starting Vasopressors Without Adequate Initial Assessment</div>'+
        '<p><strong>Why dangerous:</strong> Vasopressors can mask ongoing hemorrhage, unrecognized hypovolemia, or an uncorrected reversible cause of shock. Starting pressors before diagnosing the reason for hypotension treats the number without treating the patient.</p>'+
        '<p><strong>How it develops:</strong> The team sees a low blood pressure, wants to see the number improve, and reaches for vasopressors before completing their assessment of why the pressure is low.</p>'+
        '<p><strong>Prevention habit:</strong> Vasopressors are not a substitute for diagnosing why the blood pressure is low. Complete the initial assessment: is there hemorrhage, tension physiology, hypovolemia, or a distributive cause? Address reversible causes first.</p>'+
        '</div>'+

        '<h4>9.7.5 Poor Vasopressor Line Monitoring</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Poor Vasopressor Line Monitoring</div>'+
        '<p><strong>Why dangerous:</strong> Vasopressor extravasation causes local vasoconstriction, tissue ischemia, and potentially tissue sloughing and necrosis. This is a preventable injury that occurs when the infusion site is not regularly inspected.</p>'+
        '<p><strong>How it develops:</strong> The infusion is started, the team moves on to other tasks, and no one is explicitly assigned to check the line site at regular intervals.</p>'+
        '<p><strong>Prevention habit:</strong> Assign ownership for vasopressor line checks. Document the infusion site, inspect it at every reassessment interval, and have a plan for what to do if extravasation is suspected.</p>'+
        '</div>',
      relatedLinks:['algorithms/burn-resuscitation','thresholds/hemodynamic','thresholds/neurologic-tbi','medications/vasopressors','procedures/io-access']
    },
    {
      id:'neurologic-errors',
      title:'Neurologic & TBI Errors',
      severity:'red',
      content:'<h3>9.8 Neurologic &amp; TBI Errors</h3>'+

        '<h4>9.8.1 Missing Subtle Neurologic Deterioration</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Missing Subtle Neurologic Deterioration</div>'+
        '<p><strong>Why dangerous:</strong> Rising intracranial pressure may appear as small GCS changes, subtle pupil asymmetry, or gradual behavioral changes rather than sudden dramatic collapse. By the time the deterioration is obvious, the rescue window may have passed.</p>'+
        '<p><strong>How it develops:</strong> The team performs infrequent neurologic checks, relies on a single baseline exam, or fails to document findings in a way that makes trends visible. A one-point GCS drop is dismissed as insignificant. A slightly sluggish pupil is not recorded.</p>'+
        '<p><strong>Prevention habit:</strong> Serial trend documentation is mandatory. GCS, pupil size and reactivity, and motor response must be recorded at defined intervals and compared across time points. Any downward trend, however small, triggers a reassessment of the full clinical picture.</p>'+
        '</div>'+

        '<h4>9.8.2 Failing to Treat Hypoxia, Hypotension, and Fever in TBI</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Failing to Treat Hypoxia, Hypotension, and Fever in TBI</div>'+
        '<p><strong>Why dangerous:</strong> Secondary brain injury worsens from poor oxygenation, inadequate perfusion, and elevated temperature. These are modifiable factors that directly affect outcome, and failing to treat them is equivalent to allowing preventable neurologic damage.</p>'+
        '<p><strong>How it develops:</strong> The team focuses on the primary injury and does not treat secondary insult prevention as an active, ongoing therapy. A slightly low SpO2, a borderline blood pressure, or a rising temperature is tolerated rather than corrected.</p>'+
        '<p><strong>Prevention habit:</strong> Treat secondary insult prevention as active therapy, not as a passive hope. Maintain SpO2 above 95%, SBP above 110 mmHg, and normothermia. Monitor and correct these continuously.</p>'+
        '</div>'+

        '<h4>9.8.3 Giving Mannitol in Wrong Hemodynamic Context</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL ERROR</span> Giving Mannitol in Wrong Hemodynamic Context</div>'+
        '<p><strong>Why dangerous:</strong> Mannitol is an osmotic diuretic that can worsen hypotension and intravascular volume depletion, reducing cerebral perfusion pressure &mdash; the opposite of the intended effect. Giving it to a patient who is already hypotensive or hypovolemic can cause harm.</p>'+
        '<p><strong>How it develops:</strong> The provider recognizes signs of rising ICP and reaches for mannitol without first assessing or correcting the hemodynamic situation.</p>'+
        '<p><strong>Prevention habit:</strong> Check the hemodynamic situation before giving mannitol. Ensure adequate blood pressure and intravascular volume. If the patient is hypotensive, consider hypertonic saline as an alternative that supports both ICP reduction and volume status.</p>'+
        '</div>',
      relatedLinks:['algorithms/tbi-management','thresholds/neurologic-tbi','medications/icp-meds','pitfalls/airway-errors','pitfalls/circulation-errors']
    },
    {
      id:'burn-errors',
      title:'Burn Errors',
      severity:'amber',
      content:'<h3>9.9 Burn Errors</h3>'+

        '<h4>9.9.1 Delaying Early Airway Control in Major Burns and Inhalation Injury</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Delaying Early Airway Control in Major Burns and Inhalation Injury</div>'+
        '<p><strong>Why dangerous:</strong> Airway swelling in burn and inhalation injury is progressive. What is a manageable intubation early in the course can become an impossible airway later as edema develops. The window to secure the airway closes over time, not suddenly.</p>'+
        '<p><strong>How it develops:</strong> The team assesses the airway and finds it currently patent. Because the patient is talking and oxygenating, the team delays intubation, not recognizing that the current airway does not predict the future airway.</p>'+
        '<p><strong>Prevention habit:</strong> Anticipate edema progression. Burn airway decisions must be based on what the airway WILL become, not what it looks like now. Signs that should trigger early intubation include facial burns, singed nasal hairs, carbonaceous sputum, stridor, hoarseness, progressive swelling, and significant percentage total body surface area burns with ongoing fluid resuscitation.</p>'+
        '</div>'+

        '<h4>9.9.2 Treating Rule of 10s as Fixed Order Instead of Starting Point</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Treating Rule of 10s as Fixed Order Instead of Starting Point</div>'+
        '<p><strong>Why dangerous:</strong> Using the Rule of 10s as a fixed infusion rate without adjustment leads to either under-resuscitation or fluid creep. Under-resuscitation causes organ hypoperfusion, while fluid creep causes pulmonary edema, airway swelling, compartment syndrome, and worsened tissue injury.</p>'+
        '<p><strong>How it develops:</strong> The team calculates the initial rate, starts the infusion, and then treats that rate as permanent rather than as a starting point that must be titrated to response.</p>'+
        '<p><strong>Prevention habit:</strong> The formula starts resuscitation; it does not replace reassessment. Titrate fluid rate to urine output (target 30&ndash;50 mL/hr in adults), hemodynamic response, and clinical signs. Reassess at defined intervals and adjust up or down based on the patient, not the formula.</p>'+
        '</div>',
      relatedLinks:['algorithms/burn-resuscitation','thresholds/burn-thresholds','pitfalls/airway-errors','procedures/rsi','prolonged-holding/reassessment-rhythm']
    },
    {
      id:'sepsis-errors',
      title:'Sepsis Errors',
      severity:'amber',
      content:'<h3>9.10 Sepsis Errors</h3>'+

        '<h4>9.10.1 Delayed Antibiotic Administration</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Delayed Antibiotic Administration</div>'+
        '<p><strong>Why dangerous:</strong> Every hour of delay in antibiotic administration worsens sepsis progression. Delayed treatment is associated with increased mortality and increased organ dysfunction. Time to antibiotics is one of the most consistently supported interventions in sepsis care.</p>'+
        '<p><strong>How it develops:</strong> The team is busy with other tasks, uncertain about the diagnosis, waiting for cultures, or distracted by other interventions. The antibiotic is ordered but not given, or not ordered because the team is still deciding.</p>'+
        '<p><strong>Prevention habit:</strong> Treat the one-hour treatment window as an operational priority. Once sepsis is suspected, antibiotics become a time-critical intervention. Do not delay for diagnostic certainty when the clinical picture is consistent.</p>'+
        '</div>'+

        '<h4>9.10.2 Giving Aggressive Fluids Without Watching Respiratory Cost</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Giving Aggressive Fluids Without Watching Respiratory Cost</div>'+
        '<p><strong>Why dangerous:</strong> Fluid resuscitation may improve blood pressure and perfusion markers, but at the cost of worsening gas exchange. In a patient with developing respiratory compromise, aggressive fluids can tip the balance toward respiratory failure and the need for intubation.</p>'+
        '<p><strong>How it develops:</strong> The team focuses on perfusion endpoints only. Each bolus improves the blood pressure temporarily, so more fluid is given. Respiratory status is not reassessed after each bolus.</p>'+
        '<p><strong>Prevention habit:</strong> Each fluid bolus must be followed by both a perfusion reassessment AND a respiratory reassessment. Check work of breathing, oxygen requirement, lung sounds, and SpO2 alongside blood pressure and mental status. If respiratory burden is increasing, transition to vasopressor support rather than more fluid.</p>'+
        '</div>',
      relatedLinks:['algorithms/sepsis','thresholds/sepsis-targets','medications/antibiotics','medications/vasopressors','pitfalls/circulation-errors']
    },
    {
      id:'medication-errors',
      title:'Medication Errors',
      severity:'amber',
      content:'<h3>9.11 Medication Errors</h3>'+

        '<h4>9.11.1 Confusing Analgesic and Sedation Doses of Ketamine</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Confusing Analgesic and Sedation Doses of Ketamine</div>'+
        '<p><strong>Why dangerous:</strong> Ketamine has vastly different dose ranges for analgesia and for procedural sedation or RSI. Using a sedation dose when analgesia is intended produces dissociation, excessive sedation, and potential airway compromise. Using an analgesic dose for RSI produces inadequate intubating conditions.</p>'+
        '<p><strong>How it develops:</strong> The provider draws up ketamine without clearly defining the clinical purpose, uses a dose from memory without confirming the indication-specific range, or confuses mg/kg targets across indications.</p>'+
        '<p><strong>Prevention habit:</strong> Pair the drug with the clinical purpose before drawing it up. State the indication, the dose range for that indication, and the expected effect aloud. Analgesic ketamine is typically 0.1&ndash;0.3 mg/kg IV; dissociative/RSI doses are 1&ndash;2 mg/kg IV.</p>'+
        '</div>'+

        '<h4>9.11.2 Pushing Sedatives Too Fast</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Pushing Sedatives Too Fast</div>'+
        '<p><strong>Why dangerous:</strong> Rapid IV push of sedatives can cause apnea, hypotension, chest wall rigidity (especially with fentanyl), and sudden loss of airway protective reflexes. The speed of administration directly affects the severity of side effects.</p>'+
        '<p><strong>How it develops:</strong> The provider pushes the drug quickly to get an immediate effect, especially in an agitated or distressed patient. The urgency of the clinical situation overrides the discipline of controlled administration.</p>'+
        '<p><strong>Prevention habit:</strong> Administration rate is part of the dose. Slow IV push over 60 seconds or longer for most sedatives. State the intended push rate aloud before administration. Watch for respiratory depression, hypotension, and airway compromise during and immediately after the push.</p>'+
        '</div>'+

        '<h4>9.11.3 Dose Stacking During Prolonged Holding</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Dose Stacking During Prolonged Holding</div>'+
        '<p><strong>Why dangerous:</strong> During prolonged holding, repeated doses of analgesics, sedatives, or anxiolytics accumulate. The result is cumulative respiratory depression, progressive hemodynamic compromise, and obscured neurologic examinations. The patient may appear comfortable while physiologically deteriorating.</p>'+
        '<p><strong>How it develops:</strong> Each individual dose seems reasonable, but the total burden over hours is not tracked. Multiple providers may administer doses without awareness of the cumulative total. The patient becomes quieter, which is mistaken for clinical improvement.</p>'+
        '<p><strong>Prevention habit:</strong> Track the exact time, amount, and observed effect for every dose administered. Maintain a running cumulative total. Before each re-dose, review the total given, the time since the last dose, and the current respiratory and neurologic status.</p>'+
        '</div>',
      relatedLinks:['medications/analgesics','medications/sedatives','medications/rsi-airway','thresholds/medication-safety','prolonged-holding/sedation-pain']
    },
    {
      id:'device-errors',
      title:'Device Maintenance Errors',
      severity:'amber',
      content:'<h3>9.12 Device Maintenance Errors</h3>'+

        '<h4>9.12.1 Treating Placement as End of the Job</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Treating Device Placement as End of the Job</div>'+
        '<p><strong>Why dangerous:</strong> A technically successful placement may still fail over time. Endotracheal tubes dislodge. Chest tubes kink or clot. IV lines infiltrate. IO needles displace. Foley catheters obstruct. If the team treats the procedure as complete at the moment of placement, these downstream failures will not be caught until the patient has deteriorated.</p>'+
        '<p><strong>How it develops:</strong> The team is relieved the procedure succeeded, documents the placement, and moves on. No one is assigned to monitor the device. No maintenance schedule is established. The next check happens only when something goes visibly wrong.</p>'+
        '<p><strong>Prevention habit:</strong> Every procedure should end with a maintenance plan. This includes: who is responsible for monitoring the device, what specific checks will be performed (patency, position, securement, output, function), how often those checks will occur, and what findings should trigger intervention or escalation.</p>'+
        '<ul>'+
        '<li><strong>Endotracheal tube:</strong> position at the lip, EtCO2 waveform, securement integrity, cuff pressure if measurable.</li>'+
        '<li><strong>Chest tube:</strong> output volume and character, tidaling or bubbling, system integrity, securement, respiratory status.</li>'+
        '<li><strong>Vascular access (IV/IO):</strong> site inspection for infiltration or extravasation, flow check, securement, flush patency.</li>'+
        '<li><strong>Foley catheter:</strong> urine output trend, drainage bag position, tubing for kinks, securement.</li>'+
        '<li><strong>Vasopressor infusion lines:</strong> site check for extravasation, infusion rate confirmation, connection integrity.</li>'+
        '</ul>'+
        '</div>',
      relatedLinks:['prolonged-holding/device-maintenance','procedures/chest-tube','procedures/io-access','procedures/foley','pitfalls/thoracic-errors']
    },
    {
      id:'documentation-errors',
      title:'Documentation & Handover Errors',
      severity:'amber',
      content:'<h3>9.13 Documentation &amp; Handover Errors</h3>'+

        '<h4>9.13.1 Incomplete Documentation</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Incomplete Documentation</div>'+
        '<p><strong>Why dangerous:</strong> Incomplete documentation leads to duplicate dosing, missed reassessment windows, poor transfer continuity, and inability to recognize trends. When the record does not reflect what actually happened, every subsequent provider is working with incomplete information.</p>'+
        '<p><strong>How it develops:</strong> The team is focused on clinical tasks and defers documentation. Doses are given but not recorded with exact times. Device events such as tube repositioning, line changes, or drainage milestones are not logged. Reassessment findings are remembered but not written down.</p>'+
        '<p><strong>Prevention habit:</strong> Document exact times, exact doses, device events, and observed patient response. If real-time documentation is not possible, assign one team member to record events as they occur. The minimum documentation standard is: what was given or done, when, and what the patient did in response.</p>'+
        '</div>'+

        '<h4>9.13.2 Poor Shift-to-Shift Handover</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Poor Shift-to-Shift Handover</div>'+
        '<p><strong>Why dangerous:</strong> An incoming team that receives a poor handover may repeat mistakes, miss established trends, assume stability that does not exist, or fail to continue a critical monitoring plan. Handover failure is one of the most common causes of preventable deterioration during prolonged holding.</p>'+
        '<p><strong>How it develops:</strong> The outgoing provider gives an informal, incomplete verbal summary. Key details such as cumulative medication totals, trend direction, device status, and escalation triggers are omitted. The incoming provider starts fresh without the context needed to detect change.</p>'+
        '<p><strong>Prevention habit:</strong> Use a structured handover every time. The handover must include: what happened to the patient, what was done, what changed during the holding period, what is currently being watched, and what specific triggers should prompt escalation or re-contact with higher support.</p>'+
        '</div>',
      relatedLinks:['team/handover','team/documentation','prolonged-holding/reassessment-rhythm','pitfalls/medication-errors']
    },
    {
      id:'do-not-miss',
      title:'Do Not Miss Situations',
      severity:'red',
      content:'<h3>9.14 Do Not Miss Situations</h3>'+
        '<p>The following clinical situations carry a narrow rescue window and high mortality if missed. Each one can be subtle in its early presentation but catastrophic if recognition is delayed.</p>'+

        '<h4>9.14.1 Impending Cerebral Herniation</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">DO NOT MISS</span> Impending Cerebral Herniation</div>'+
        '<p><strong>Presentation:</strong> Falling level of consciousness, unilateral dilated pupil (or bilateral fixed dilated pupils), Cushing physiology (hypertension, bradycardia, irregular respirations), abrupt neurologic decline in a patient with known or suspected TBI.</p>'+
        '<p><strong>Why critical:</strong> The rescue window for impending herniation is extremely narrow. Once herniation is established, reversibility drops rapidly. This is the highest-urgency neurologic emergency.</p>'+
        '<p><strong>Action required:</strong> Elevate head of bed to 30 degrees. Ensure adequate ventilation targeting EtCO2 of approximately 30 mmHg as a temporary rescue measure only. Administer hyperosmolar therapy (hypertonic saline preferred if hypotensive; mannitol if hemodynamically stable). Avoid hypotension. Avoid hypoxia. Seek immediate neurosurgical consultation or evacuation.</p>'+
        '</div>'+

        '<h4>9.14.2 Recurrent or Persistent Tension Physiology</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">DO NOT MISS</span> Recurrent or Persistent Tension Physiology</div>'+
        '<p><strong>Presentation:</strong> Re-worsening of hypotension, hypoxia, absent breath sounds, and respiratory distress after initial improvement from chest decompression.</p>'+
        '<p><strong>Why critical:</strong> The initial decompression may have been temporarily effective, but the catheter can fail, kink, clot, or dislodge. A patient who improved and then worsens is developing recurrent tension until proven otherwise.</p>'+
        '<p><strong>Action required:</strong> Repeat decompression or proceed to chest tube insertion. Do not assume the first intervention is still working just because it worked initially.</p>'+
        '</div>'+

        '<h4>9.14.3 Occult Deterioration After Sedation</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">DO NOT MISS</span> Occult Deterioration After Sedation</div>'+
        '<p><strong>Presentation:</strong> A patient who becomes calmer or quieter after sedation, but who is actually developing hypoxia, hypoventilation, or hypotension masked by the sedation effect.</p>'+
        '<p><strong>Why critical:</strong> A calmer patient is not necessarily a better patient. Sedation can hide the clinical signs that would normally trigger escalation. The team may interpret the quieter state as clinical improvement when it is actually pharmacologic masking of deterioration.</p>'+
        '<p><strong>Action required:</strong> After every sedation dose, reassess respiratory rate, SpO2, blood pressure, and level of consciousness independently. Do not use calmness as a surrogate for clinical stability.</p>'+
        '</div>'+

        '<h4>9.14.4 Pressor-Dependent Shock With Rising Support Needs</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">DO NOT MISS</span> Pressor-Dependent Shock With Rising Support Needs</div>'+
        '<p><strong>Presentation:</strong> Increasing vasopressor dose requirements over time, worsening urine output despite pressor support, persistent perfusion failure despite escalating intervention.</p>'+
        '<p><strong>Why critical:</strong> A patient who requires progressively more vasopressor support is not stabilizing. Rising pressor needs suggest an uncontrolled source, worsening physiology, or an intervention that is failing. This trajectory predicts arrest if the underlying cause is not identified and corrected.</p>'+
        '<p><strong>Action required:</strong> Reassess for reversible causes: ongoing hemorrhage, undertreated sepsis, missed tension physiology, cardiac dysfunction, adrenal insufficiency. Seek teleconsultation or escalation. Do not simply continue increasing the dose without reassessing the clinical picture.</p>'+
        '</div>'+

        '<h4>9.14.5 Delayed Airway Loss in Burn and Inhalation Injury</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">DO NOT MISS</span> Delayed Airway Loss in Burn and Inhalation Injury</div>'+
        '<p><strong>Presentation:</strong> Progressive rather than abrupt airway compromise. The patient initially has a patent airway but develops worsening stridor, hoarseness, drooling, increasing work of breathing, or visible facial and neck edema over hours.</p>'+
        '<p><strong>Why critical:</strong> Unlike acute airway obstruction, burn-related airway loss is insidious. The patient talks, swallows, and oxygenates initially, but the progressive edema steadily narrows the airway until intubation becomes extremely difficult or impossible. The decision to intubate must be made early, based on the predicted trajectory rather than the current status.</p>'+
        '<p><strong>Action required:</strong> Intubate early when inhalation injury or significant facial burns are present and airway edema is expected to progress. Do not wait for airway failure. Prepare for a potentially difficult intubation and have a surgical airway backup ready.</p>'+
        '</div>',
      relatedLinks:['algorithms/tbi-management','algorithms/chest-decompression','algorithms/airway-failure','thresholds/neurologic-tbi','pitfalls/airway-errors','pitfalls/thoracic-errors','pitfalls/burn-errors','pitfalls/circulation-errors']
    },
    {
      id:'error-prevention',
      title:'Error Prevention Systems',
      severity:'green',
      content:'<h3>9.15 Error Prevention Systems</h3>'+
        '<p>The errors described in this chapter are not random. They develop through identifiable pathways, and they can be interrupted by deliberate safety habits built into routine clinical practice. The following systems are designed to catch errors before they reach the patient.</p>'+

        '<h4>9.15.1 Pre-Procedure Safety Traps</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">PREVENTION</span> Pre-Procedure Safety Traps</div>'+
        '<p>Before every significant procedure, the team should complete the following checks:</p>'+
        '<ul>'+
        '<li><strong>State the indication:</strong> Why are we doing this procedure right now? What clinical problem does it solve?</li>'+
        '<li><strong>Confirm the backup plan:</strong> If this procedure fails, what is the next step? Is the rescue equipment ready?</li>'+
        '<li><strong>Assign roles:</strong> Who is performing, who is assisting, who is monitoring, and who is documenting?</li>'+
        '<li><strong>Check rescue equipment:</strong> Is the backup airway, rescue device, or alternative access immediately available &mdash; not just stocked, but open, checked, and within reach?</li>'+
        '</ul>'+
        '</div>'+

        '<h4>9.15.2 Medication Safety Traps</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">PREVENTION</span> Medication Safety Traps</div>'+
        '<p>Before every medication administration, apply the following checks:</p>'+
        '<ul>'+
        '<li><strong>Read back drug, dose, concentration, route, and indication:</strong> State all five elements aloud before pushing the drug.</li>'+
        '<li><strong>Check last dose time and effect:</strong> When was the last dose of this or a similar drug given, and what was the observed response?</li>'+
        '<li><strong>Track cumulative totals:</strong> Maintain a running total of all analgesics, sedatives, and vasoactive agents given during the holding period.</li>'+
        '<li><strong>Treat administration speed as part of the dose:</strong> A drug pushed over 10 seconds has a different effect profile than the same drug pushed over 60 seconds. State the intended push rate.</li>'+
        '</ul>'+
        '</div>'+

        '<h4>9.15.3 Reassessment Safety Traps</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">PREVENTION</span> Reassessment Safety Traps</div>'+
        '<p>Reassessment is the single most important safety system in prolonged holding care. The following habits prevent drift:</p>'+
        '<ul>'+
        '<li><strong>No intervention is complete without a documented response:</strong> Every dose, every procedure, every adjustment must be followed by a check that confirms whether it worked, partially worked, or failed.</li>'+
        '<li><strong>Build device checks into rounds:</strong> Tube position, line site, drainage function, securement integrity, and infusion rate should be verified at every reassessment interval, not only when a problem is suspected.</li>'+
        '<li><strong>Trend neurologic status, urine output, SpO2, and infusions at set intervals:</strong> Serial data points that are documented and compared are far more useful than isolated checks.</li>'+
        '<li><strong>Escalate early on drift:</strong> If a value, trend, or clinical finding is moving in the wrong direction, escalate before the change becomes critical. Do not wait for the threshold to be crossed when the trajectory is already heading there.</li>'+
        '</ul>'+
        '</div>'+

        '<h4>9.15.4 Handover Safety Traps</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">PREVENTION</span> Handover Safety Traps</div>'+
        '<p>Every handover, whether shift-to-shift, team-to-team, or provider-to-provider, must include the following:</p>'+
        '<ul>'+
        '<li><strong>Hand over the active problem list:</strong> What problems are currently active, what has been done for each, and what is the current status?</li>'+
        '<li><strong>State changes, instability, anticipated next failure, and what to check first:</strong> The incoming team should know what has changed, what is unstable, what is most likely to go wrong next, and where to look first.</li>'+
        '<li><strong>Include exact doses, times, and devices:</strong> Cumulative medication totals, last dose times, device placement times, output volumes, and infusion rates must be explicitly communicated, not assumed.</li>'+
        '<li><strong>Define the trigger for re-contacting higher support:</strong> At what point should the incoming team call back for help, initiate teleconsultation, or request evacuation escalation?</li>'+
        '</ul>'+
        '</div>',
      relatedLinks:['team/core-principles','team/handover','team/documentation','prolonged-holding/reassessment-rhythm','prolonged-holding/teleconsultation','appendices/appendix-e']
    }
  ]
};
