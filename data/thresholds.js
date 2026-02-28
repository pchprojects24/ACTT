window.ACTT=window.ACTT||{};
window.ACTT.thresholds={
  id:'thresholds',
  title:'Critical Numbers & Thresholds',
  subtitle:'Chapter 8 — Clinical Targets and Trigger Values',
  chapter:8,
  intro:'<p>This chapter consolidates the bedside numbers that most often change action in ACTT-relevant care. It is designed as a rapid operational reference: each value is linked to what it means, what it should trigger, and what must be reassessed after intervention. These values should support judgment, not replace it. Numbers are most useful when interpreted in trend, in context, and in relation to the whole patient.</p>'+
    '<h3>8.1 Purpose of This Chapter</h3>'+
    '<p>The purpose of this chapter is to gather the memorization-critical values that repeatedly drive decisions during trauma, critical care, and prolonged holding. In practice, many errors do not come from failing to recognize the disease process. They come from failing to remember the trigger threshold, using the wrong target, or not linking the number to a next step.</p>'+
    '<ul><li>Identify trigger values that demand action now.</li>'+
    '<li>Identify target ranges that should be maintained over time.</li>'+
    '<li>Separate temporary rescue targets from longer-term maintenance targets.</li>'+
    '<li>Support rapid review during ACTT and practical use during delayed MEDEVAC.</li></ul>'+
    '<h3>8.2 How to Use Numeric Targets Safely</h3>'+
    '<p>Each value in this chapter should be used as part of a short operational loop: identify the number, decide what it means in the current patient, act, and then reassess to determine whether the intervention changed the trend in the right direction.</p>'+
    '<ol>'+
    '<li><strong>Confirm the number is reliable.</strong> Check probe position, cuff size, waveform, technique, or source of the value if accuracy is in doubt.</li>'+
    '<li><strong>Interpret the number in context.</strong> A single threshold may not have the same meaning in TBI, burns, sepsis, or deep sedation.</li>'+
    '<li><strong>Link the number to action.</strong> A trigger without a response plan is not clinically useful.</li>'+
    '<li><strong>Reassess after intervention.</strong> Every target value must be paired with a follow-up check to confirm benefit or detect harm.</li>'+
    '<li><strong>Trend over time.</strong> In delayed evacuation, the direction of change often matters more than any single reading.</li>'+
    '</ol>'+
    '<h3>8.3 Standard Format for Threshold Entries</h3>'+
    '<div class="table-wrapper"><table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody>'+
    '<tr><td>Parameter</td><td>Trigger threshold or target range</td></tr>'+
    '<tr><td>Clinical meaning</td><td>What the value indicates about the patient</td></tr>'+
    '<tr><td>Immediate action triggered</td><td>What must be done when the threshold is reached</td></tr>'+
    '<tr><td>Major cautions or common traps</td><td>Errors to avoid</td></tr>'+
    '<tr><td>What must be reassessed afterward</td><td>Follow-up checks to confirm benefit or detect harm</td></tr>'+
    '<tr><td>Why it matters during prolonged holding at sea</td><td>Relevance to sustained maritime care</td></tr>'+
    '</tbody></table></div>',
  sections:[
    {
      id:'airway-respiratory',
      title:'Airway & Respiratory Thresholds',
      content:'<h3>8.4 Airway and Respiratory Thresholds</h3>'+

        '<h4>8.4.1 Glasgow Coma Scale and Airway Risk</h4>'+
        '<p>A Glasgow Coma Scale of 8 or less is the most important airway threshold in this chapter. It should immediately raise the question of whether the patient can protect their airway, maintain ventilation, and tolerate transport without aspiration or sudden deterioration.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> GCS &le; 8 &mdash; Airway Protection Threshold</div>'+
        '<p>GCS of 8 or less demands immediate airway planning. Do not delay just because oxygen saturation is temporarily acceptable.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>GCS</td><td style="font-weight:700;color:var(--severity-red)">&le; 8</td><td>Severe brain injury or severe depressed consciousness with unreliable airway protection</td><td>Prepare for a definitive airway, usually RSI unless oral intubation is clearly impossible or inappropriate</td><td>Delaying airway planning just because oxygen saturation is temporarily acceptable</td><td>EtCO2, SpO2, chest rise, breath sounds, tube position, blood pressure, and sedation depth</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.4.2 Oxygen Saturation Targets</h4>'+
        '<p>In the ACTT context, hypoxia is treated aggressively because it worsens almost every major syndrome in this manual, especially TBI, shock, burns, and sedation-related respiratory depression.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TARGET</span> SpO2 &gt; 95% in High-Risk Patients</div>'+
        '<p>Persistent or falling saturation despite oxygen delivery demands escalation. Always confirm with work of breathing, mental status, and chest findings.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>SpO2</td><td style="font-weight:700;color:var(--severity-amber)">&gt; 95%</td><td>Hypoxia worsens TBI, shock, burns, and sedation-related respiratory depression</td><td>Increase oxygen support, reassess airway patency, reassess ventilation, reassess chest pathology, and decide whether definitive airway control is needed</td><td>Treating the monitor only. Always confirm with work of breathing, mental status, and chest findings</td><td>Oxygen requirement trend, respiratory effort, mental status, and response to intervention</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.4.3 End-Tidal CO2 Targets</h4>'+
        '<p>EtCO2 is both a ventilation target and a monitoring tool. In ACTT it is especially important in intubated patients, sedated patients, and neurocritical care.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> EtCO2 Ventilation Targets</div>'+
        '<p>Hypocapnia below target can reduce cerebral blood flow; hypercapnia above target can worsen intracranial pressure. Hyperventilation to 30 mmHg is a short bridge only, not a maintenance strategy.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>EtCO2 (controlled ventilation, TBI)</td><td style="font-weight:700;color:var(--severity-amber)">35&ndash;40 mmHg</td><td>Maintenance ventilation target for neuroprotection</td><td>Adjust bagging rate or ventilator settings</td><td>Prolonged hypocapnia that worsens cerebral ischemia</td><td>Repeat EtCO2, chest rise, hemodynamics, and neurologic status</td></tr>'+
        '<tr><td>EtCO2 (temporary rescue, suspected impending herniation)</td><td style="font-weight:700;color:var(--severity-red)">&asymp; 30 mmHg</td><td>Temporary rescue target only &mdash; reduces ICP by reducing cerebral blood flow</td><td>Use only during suspected impending herniation as a short bridge</td><td>Using as a maintenance strategy; hyperventilation to 30 mmHg is a short bridge only</td><td>Neurologic exam, hemodynamics, transition to definitive ICP management</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.4.4 Mechanical Ventilation Tidal Volume</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">TARGET</span> Lung-Protective Ventilation</div>'+
        '<p>6 mL/kg predicted body weight is the standard lung-protective target. Permissive hypercapnia may be acceptable in some patients, but not when tight neuroprotection is required.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Caveat</th></tr></thead><tbody>'+
        '<tr><td>Tidal Volume</td><td style="font-weight:700;color:var(--severity-green)">6 mL/kg PBW</td><td>Lung-protective ventilation reduces the risk of ventilator-induced injury</td><td>Set or adjust ventilator tidal volume during ongoing ventilatory support</td><td>Large-volume ventilation by habit, especially in already injured lungs</td><td>Permissive hypercapnia may be acceptable in some patients, but not when tight neuroprotection is required</td></tr>'+
        '<tr><td>Acceptable Range</td><td style="font-weight:700">5&ndash;8 mL/kg PBW</td><td>Acceptable variation around the target</td><td>Titrate based on clinical response</td><td>Exceeding 8 mL/kg without clear indication</td><td>Context-dependent adjustment</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.4.5 Needle Cricothyroidotomy Time Limit</h4>'+
        '<p>A needle cricothyroidotomy is a temporary bridge, not a durable long-term airway.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TIME-LIMITED</span> Needle Cricothyroidotomy &mdash; 20 to 30 Minutes</div>'+
        '<p>This is not a durable long-term airway. Move to a definitive airway as soon as feasible. Do not be falsely reassured because oxygenation improved briefly.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Needle Cricothyroidotomy Duration</td><td style="font-weight:700;color:var(--severity-amber)">&asymp; 20&ndash;30 min</td><td>Temporary bridge only &mdash; not a durable long-term airway</td><td>Move to a definitive airway as soon as feasible</td><td>False reassurance because oxygenation improved briefly</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/airway','medications/ketamine','procedures/cricothyroidotomy']
    },
    {
      id:'hemodynamic',
      title:'Hemodynamic Targets',
      content:'<h3>8.5 Hemodynamic and Shock Targets</h3>'+

        '<h4>8.5.1 Systolic Blood Pressure in TBI</h4>'+
        '<p>TBI management depends on protecting cerebral perfusion. Even a single hypotensive episode can worsen outcome, so the threshold is intentionally conservative.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> SBP &gt; 110 mmHg in TBI</div>'+
        '<p>Even a single hypotensive episode can worsen outcome in TBI. Lower pressures increase the risk of secondary brain injury. This threshold is intentionally conservative.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>SBP (TBI)</td><td style="font-weight:700;color:var(--severity-red)">&gt; 110 mmHg</td><td>Lower pressures increase the risk of secondary brain injury</td><td>Volume support with blood or isotonic fluid as appropriate, followed by vasoactive support if needed</td><td>Hypotonic fluids and delayed escalation when blood pressure remains below target</td><td>BP trend, mental status, pupils, perfusion, and EtCO2</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.5.2 Mean Arterial Pressure in Septic Shock</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> MAP &ge; 65 mmHg in Septic Shock</div>'+
        '<p>Minimum perfusion goal in vasodilatory shock. Do not continue blind fluid loading while the patient develops pulmonary overload.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>MAP (Septic Shock)</td><td style="font-weight:700;color:var(--severity-red)">&ge; 65 mmHg</td><td>Minimum perfusion goal in vasodilatory shock</td><td>Titrate norepinephrine after initial resuscitation when fluid alone is not enough</td><td>Continuing blind fluid loading while the patient develops pulmonary overload</td><td>MAP, urine output, peripheral perfusion, mental status, and respiratory burden</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.5.3 Capillary Refill and Perfusion Flags</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> Capillary Refill &gt; 3 Seconds</div>'+
        '<p>Impaired peripheral perfusion, especially in shock or sepsis. Not a standalone diagnostic test &mdash; use with other perfusion indicators.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>Capillary Refill</td><td style="font-weight:700;color:var(--severity-amber)">&gt; 3 seconds is concerning</td><td>Impaired peripheral perfusion, especially in shock or sepsis</td><td>Reassess circulatory state, not just the blood pressure</td><td>Treating capillary refill as a standalone diagnostic test</td><td>Trend capillary refill with skin temperature, pulses, mentation, and urine output</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.5.4 Passive Leg Raise as a Functional Threshold</h4>'+
        '<p>Passive leg raise is not a static number but a bedside maneuver that helps determine whether more fluid is likely to improve forward flow. In ACTT-relevant care, it is useful because it can reduce unnecessary fluid loading when resources, ventilation, or time are limited.</p>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">ASSESSMENT</span> Passive Leg Raise (PLR)</div>'+
        '<p>Dynamic assessment of fluid responsiveness. Supports the decision to give or withhold additional fluid bolus. Do not repeat fluid boluses without evidence of benefit.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Passive Leg Raise (PLR)</td><td style="font-weight:700;color:var(--severity-green)">Dynamic test &mdash; not a static number</td><td>Dynamic assessment of fluid responsiveness</td><td>Supports the decision to give or withhold additional fluid bolus</td><td>Repeating fluid boluses without evidence of benefit</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/shock','medications/norepinephrine','algorithms/tbi']
    },
    {
      id:'neurologic-tbi',
      title:'TBI-Specific Targets',
      content:'<h3>8.6 Neurologic and TBI Targets</h3>'+

        '<h4>8.6.1 Optic Nerve Sheath Diameter (ONSD)</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">WARNING</span> ONSD &gt; 5.2 mm &mdash; Elevated ICP Concern</div>'+
        '<p>Suggests elevated intracranial pressure in the right clinical setting. Do not treat ONSD as a diagnosis by itself &mdash; use it with exam findings and clinical deterioration.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>ONSD</td><td style="font-weight:700;color:var(--severity-amber)">&gt; 5.2 mm is concerning</td><td>Suggests elevated intracranial pressure in the right clinical setting</td><td>Increase neurologic surveillance and consider ICP-lowering measures if the full picture supports it</td><td>Treating ONSD as a diagnosis by itself. Use it with exam findings and clinical deterioration</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.6.2 Serum Sodium During Hypertonic Therapy</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TARGET RANGE</span> Sodium 145&ndash;160 mmol/L During Hypertonic Therapy</div>'+
        '<p>Controlled therapeutic hypernatremia may support ICP management. Do not give repeated hypertonic doses without trend review.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>Serum Sodium (hypertonic therapy)</td><td style="font-weight:700;color:var(--severity-amber)">145&ndash;160 mmol/L</td><td>Controlled therapeutic hypernatremia may support ICP management</td><td>Monitor sodium and avoid uncontrolled overcorrection</td><td>Repeated hypertonic dosing without trend review</td><td>Neurologic exam, sodium level if available, and overall volume status</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.6.3 Hyperventilation Limit in Herniation</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">TIME-LIMITED</span> Hyperventilation &mdash; ~20 Minutes Maximum</div>'+
        '<p>A short rescue measure while other interventions are being applied. Use only in suspected impending herniation, not as routine ventilation. Prolonged hypocapnia worsens cerebral ischemia.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Hyperventilation Duration (herniation rescue)</td><td style="font-weight:700;color:var(--severity-red)">&asymp; 20 min max</td><td>A short rescue measure while other interventions are being applied</td><td>Use only in suspected impending herniation, not as routine ventilation</td><td>Prolonged hypocapnia that worsens cerebral ischemia</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.6.4 Temperature Goals in TBI</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TARGET RANGE</span> Temperature 96&deg;F to 99.5&deg;F in TBI</div>'+
        '<p>Fever increases metabolic demand and can worsen secondary brain injury. Do not overlook low-grade fever drift during prolonged holding.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Temperature (TBI)</td><td style="font-weight:700;color:var(--severity-amber)">96&deg;F&ndash;99.5&deg;F</td><td>Fever increases metabolic demand and can worsen secondary brain injury</td><td>Antipyretics and cooling measures when elevated</td><td>Overlooking low-grade fever drift during prolonged holding</td></tr>'+
        '</tbody></table></div>',
      severity:'amber',
      relatedLinks:['algorithms/tbi','medications/hypertonic-saline','procedures/onsd-ultrasound']
    },
    {
      id:'burn-thresholds',
      title:'Burn Resuscitation Values',
      content:'<h3>8.7 Burn Resuscitation Thresholds</h3>'+

        '<h4>8.7.1 Rule of 10s Starting Rate</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Rule of 10s &mdash; Initial Burn Fluid Resuscitation</div>'+
        '<p>Starting formula for adults 40 to 80 kg: percent TBSA &times; 10 = mL/hr. Add 100 mL/hr for every 10 kg above 80 kg. This is the initial estimate only, not the final maintenance rate.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Burn Fluid Start Rate (40&ndash;80 kg adults)</td><td style="font-weight:700;color:var(--severity-red)">%TBSA &times; 10 = mL/hr</td><td>Initial estimate only, not the final maintenance rate</td><td>Start isotonic crystalloid and begin structured reassessment</td><td>Treating the formula as fixed once the pump is started</td></tr>'+
        '<tr><td>Add-on for &gt; 80 kg</td><td style="font-weight:700">+100 mL/hr per 10 kg above 80 kg</td><td>Weight-adjusted correction for heavier adults</td><td>Apply correction at initiation</td><td>Ignoring weight adjustment in larger patients</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.7.2 Adult Urine Output Target in Burns</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TARGET</span> Urine Output 30&ndash;50 mL/hr in Burn Resuscitation</div>'+
        '<p>Best practical bedside indicator of adequate burn resuscitation. Titrate fluid rate according to trend. Do not chase hypotension alone while ignoring urine output.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Urine Output (adult burn)</td><td style="font-weight:700;color:var(--severity-amber)">30&ndash;50 mL/hr</td><td>Best practical bedside indicator of adequate burn resuscitation</td><td>Titrate fluid rate according to trend</td><td>Chasing hypotension alone while ignoring urine output</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.7.3 Electrical or Crush Burn Urine Output Target</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Urine Output 70&ndash;100 mL/hr for Pigment Injury</div>'+
        '<p>Higher output target may help reduce kidney injury risk. Do not apply the standard burn urine target when rhabdomyolysis risk is obvious.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Urine Output (electrical/crush burn with pigment injury)</td><td style="font-weight:700;color:var(--severity-red)">70&ndash;100 mL/hr</td><td>Higher output target may help reduce kidney injury risk</td><td>More aggressive fluid support with closer monitoring</td><td>Applying the standard burn urine target when rhabdomyolysis risk is obvious</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.7.4 Burn Fluid Rate Adjustment</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TITRATION</span> Adjust Fluid Rate by &asymp; 25%</div>'+
        '<p>Structured repeated titration prevents both under- and over-resuscitation. Increase rate when output remains low; decrease when output overshoots target.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Reassess</th></tr></thead><tbody>'+
        '<tr><td>Burn Fluid Rate Adjustment</td><td style="font-weight:700;color:var(--severity-amber)">&asymp; 25% change based on UO trend</td><td>Structured repeated titration prevents both under- and over-resuscitation</td><td>Increase rate when output remains low; decrease when output overshoots target</td><td>Urine output, edema, respiratory status, and perfusion</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.7.5 Early Airway Threshold in Major Burns</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> &gt; 40% TBSA or Major Inhalation Injury &mdash; Early Airway</div>'+
        '<p>Airway edema can progress quickly and make later intubation much harder. Plan early definitive airway rather than waiting for crisis. Do not delay airway control in a patient whose anatomy is predictably worsening.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Early Airway Trigger (major burns)</td><td style="font-weight:700;color:var(--severity-red)">&gt; 40% TBSA or major inhalation injury</td><td>Airway edema can progress quickly and make later intubation much harder</td><td>Early definitive airway planning rather than waiting for crisis</td><td>Delaying airway control in a patient whose anatomy is predictably worsening</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/burns','procedures/escharotomy','medications/crystalloid']
    },
    {
      id:'hypothermia-staging',
      title:'Hypothermia Staging Values',
      content:'<h3>8.8 Hypothermia Thresholds</h3>'+

        '<h4>8.8.1 Core Temperature Staging</h4>'+
        '<p>Stage determines rewarming intensity, transport urgency, and arrest logic.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Hypothermia Staging &mdash; Core Temperature</div>'+
        '<p>Correct staging is essential. Stage determines rewarming intensity, transport urgency, and arrest logic.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Stage</th><th>Core Temperature</th><th>Clinical Features</th><th>Severity</th></tr></thead><tbody>'+
        '<tr><td style="font-weight:700">HT I</td><td style="font-weight:700;color:var(--severity-amber)">32&ndash;35&deg;C</td><td>Mild hypothermia &mdash; shivering, conscious</td><td style="color:var(--severity-amber)">Moderate concern</td></tr>'+
        '<tr><td style="font-weight:700">HT II</td><td style="font-weight:700;color:var(--severity-amber)">28&ndash;32&deg;C</td><td>Moderate hypothermia &mdash; decreased consciousness, may stop shivering</td><td style="color:var(--severity-amber)">Significant concern</td></tr>'+
        '<tr><td style="font-weight:700">HT III</td><td style="font-weight:700;color:var(--severity-red)">&lt; 28&deg;C with vital signs present</td><td>Severe hypothermia &mdash; unconscious, vital signs present</td><td style="color:var(--severity-red)">Critical</td></tr>'+
        '<tr><td style="font-weight:700">HT IV</td><td style="font-weight:700;color:var(--severity-red)">Absent vital signs or cardiac arrest</td><td>Severe hypothermia with cardiac arrest &mdash; no vital signs</td><td style="color:var(--severity-red)">Life-threatening</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.8.2 Deep Hypothermia Arrest Restrictions</h4>'+
        '<p>Standard resuscitation dosing logic changes in deep hypothermia.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Arrest Medication Limits in Severe Hypothermia</div>'+
        '<p>In severe hypothermia: limit to up to 3 doses of epinephrine and up to 3 defibrillation attempts before meaningful rewarming. Do not declare futility too early in a potentially salvageable cold arrest.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Epinephrine (deep hypothermia arrest)</td><td style="font-weight:700;color:var(--severity-red)">Up to 3 doses before meaningful rewarming</td><td>Standard resuscitation dosing logic changes in deep hypothermia</td><td>Continue high-quality resuscitation while prioritizing rewarming and destination planning</td><td>Declaring futility too early in a potentially salvageable cold arrest</td></tr>'+
        '<tr><td>Defibrillation (deep hypothermia arrest)</td><td style="font-weight:700;color:var(--severity-red)">Up to 3 attempts before meaningful rewarming</td><td>Defibrillation is less effective in a cold myocardium</td><td>Limit attempts and focus on rewarming</td><td>Repeated shocks without rewarming</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.8.3 Warmed Fluid Temperature</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">TARGET</span> Warmed IV Fluids &mdash; 38&ndash;42&deg;C</div>'+
        '<p>Supports active rewarming without adding cold stress. Warm fluids whenever capability exists.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Warmed IV Fluid Temperature</td><td style="font-weight:700;color:var(--severity-green)">&asymp; 38&ndash;42&deg;C</td><td>Supports active rewarming without adding cold stress</td><td>Warm fluids whenever capability exists</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.8.4 ECMO or Bypass Access Window</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TIME WINDOW</span> ECMO/Bypass &mdash; Within ~6 Hours</div>'+
        '<p>Prolonged resuscitation may remain appropriate if advanced rewarming is realistically reachable. Continue efforts and coordinate destination early.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>ECMO/Bypass Access (hypothermic arrest)</td><td style="font-weight:700;color:var(--severity-amber)">Meaningful access within &asymp; 6 hours</td><td>Prolonged resuscitation may remain appropriate if advanced rewarming is realistically reachable</td><td>Continue efforts and coordinate destination early</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/hypothermia','algorithms/cardiac-arrest','procedures/rewarming']
    },
    {
      id:'sepsis-targets',
      title:'Sepsis and Infectious Disease Targets',
      content:'<h3>8.9 Sepsis and Infectious Disease Targets</h3>'+

        '<h4>8.9.1 Initial Crystalloid Volume</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> 30 mL/kg Crystalloid Over 3 Hours</div>'+
        '<p>Initial resuscitation benchmark, not a rigid requirement in every patient. Do not force completion of the volume target when crackles, respiratory distress, or worsening oxygenation develop.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Initial Crystalloid (sepsis)</td><td style="font-weight:700;color:var(--severity-red)">30 mL/kg over first 3 hours</td><td>Initial resuscitation benchmark, not a rigid requirement in every patient</td><td>Begin structured fluid resuscitation and reassess repeatedly</td><td>Forcing completion of the volume target when crackles, respiratory distress, or worsening oxygenation develop</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.9.2 Antibiotic Timing</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Antibiotics Within 1 Hour</div>'+
        '<p>Within 1 hour of recognizing severe sepsis or septic shock. Delay can worsen outcome. Do not wait for perfect diagnostic certainty before treating obvious septic instability.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>First Antibiotic Dose (sepsis/septic shock)</td><td style="font-weight:700;color:var(--severity-red)">Within 1 hour of recognition</td><td>Delay can worsen outcome</td><td>Prioritize first-dose antibiotic delivery early, ideally after cultures if this does not delay therapy</td><td>Waiting for perfect diagnostic certainty before treating obvious septic instability</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.9.3 FEAST-Related Caution</h4>'+
        '<p>There is no single bedside number here, but the chapter should force the learner to remember that aggressive fluid bolusing can worsen mortality in specific low-resource conditions, especially when advanced respiratory support is unavailable. The practical threshold is the point at which respiratory work, crackles, or oxygenation worsen.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> FEAST Trial Lessons &mdash; Fluid Bolus Harm</div>'+
        '<p>Aggressive fluid bolusing can worsen mortality in specific low-resource conditions, especially when advanced respiratory support is unavailable. The practical threshold is the point at which respiratory work, crackles, or oxygenation worsen. Stop and reassess fluid strategy when respiratory burden increases.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>FEAST-Related Fluid Caution</td><td style="font-weight:700;color:var(--severity-amber)">Stop when respiratory burden increases</td><td>Aggressive fluid bolusing can worsen mortality when advanced respiratory support is unavailable</td><td>Stop and reassess fluid strategy when respiratory burden increases</td><td>Applying generic fluid algorithms without regard to actual capability</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/sepsis','medications/antibiotics','medications/norepinephrine']
    },
    {
      id:'stemi-thresholds',
      title:'STEMI Time Thresholds',
      content:'<h3>8.10 STEMI and Fibrinolysis Targets</h3>'+

        '<h4>8.10.1 ECG Trigger for STEMI</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> ST Elevation &gt; 1 mm in &ge; 2 Contiguous Leads</div>'+
        '<p>Activates the STEMI pathway. Confirm symptom pattern, evaluate reperfusion options, and screen contraindications.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>ECG STEMI Trigger</td><td style="font-weight:700;color:var(--severity-red)">ST elevation &gt; 1 mm in &ge; 2 contiguous leads</td><td>Activates the STEMI pathway in the right clinical context</td><td>Confirm symptom pattern, evaluate reperfusion options, and screen contraindications</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.10.2 Symptom Duration</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">THRESHOLD</span> Ischemic Symptoms &gt; 20 Minutes</div>'+
        '<p>Supports true ongoing ischemia rather than brief transient discomfort. Proceed with urgent ECG-based evaluation and treatment.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Symptom Duration</td><td style="font-weight:700;color:var(--severity-amber)">&gt; 20 minutes</td><td>Supports true ongoing ischemia rather than brief transient discomfort</td><td>Proceed with urgent ECG-based evaluation and treatment</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.10.3 PCI Delay Threshold</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> &gt; 90 Minutes to PCI &mdash; Consider Fibrinolysis</div>'+
        '<p>When primary PCI is more than 90 minutes away, fibrinolysis becomes the practical reperfusion option if not contraindicated.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>PCI Delay</td><td style="font-weight:700;color:var(--severity-red)">&gt; 90 minutes to primary PCI</td><td>Fibrinolysis becomes the practical reperfusion option if not contraindicated</td><td>Tenecteplase screening and preparation</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.10.4 Tenecteplase Weight Bands</h4>'+
        '<p>Exact dosing is critical and errors can cause treatment failure or major bleeding.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Tenecteplase &mdash; Weight-Based Dosing</div>'+
        '<p>Exact dosing is critical. Errors can cause treatment failure or major bleeding. Confirm weight and select the correct dose band.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Weight</th><th>Tenecteplase Dose</th></tr></thead><tbody>'+
        '<tr><td>&lt; 60 kg</td><td style="font-weight:700;color:var(--severity-red)">30 mg</td></tr>'+
        '<tr><td>60&ndash;69 kg</td><td style="font-weight:700;color:var(--severity-red)">35 mg</td></tr>'+
        '<tr><td>70&ndash;79 kg</td><td style="font-weight:700;color:var(--severity-red)">40 mg</td></tr>'+
        '<tr><td>80&ndash;89 kg</td><td style="font-weight:700;color:var(--severity-red)">45 mg</td></tr>'+
        '<tr><td>&ge; 90 kg</td><td style="font-weight:700;color:var(--severity-red)">50 mg</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.10.5 Heparin Therapeutic Goal</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TARGET</span> PTT 50&ndash;70 Seconds</div>'+
        '<p>Therapeutic anticoagulation goal. Adjust infusion when monitoring is available. Do not give bolus and infusion without tracking bleeding risk or cumulative anticoagulant burden.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>PTT (heparin therapy)</td><td style="font-weight:700;color:var(--severity-amber)">&asymp; 50&ndash;70 seconds</td><td>Therapeutic anticoagulation goal</td><td>Adjust infusion when monitoring is available</td><td>Giving bolus and infusion without tracking bleeding risk or cumulative anticoagulant burden</td></tr>'+
        '</tbody></table></div>',
      severity:'red',
      relatedLinks:['algorithms/stemi','medications/tenecteplase','medications/heparin']
    },
    {
      id:'medication-safety',
      title:'Medication Safety Numbers',
      content:'<h3>8.11 Medication Safety Numbers</h3>'+

        '<h4>8.11.1 Ketamine Analgesic Range</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">ANALGESIC DOSE</span> Ketamine 0.1&ndash;0.2 mg/kg IV/IO</div>'+
        '<p>Pain control, not dissociative sedation. Use low-dose analgesia for painful but not airway-threatening situations. Do not confuse this with full sedation dosing.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Ketamine (analgesic)</td><td style="font-weight:700;color:var(--severity-green)">0.1&ndash;0.2 mg/kg IV or IO</td><td>Pain control, not dissociative sedation</td><td>Use low-dose analgesia for painful but not airway-threatening situations</td><td>Confusing this with full sedation dosing</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.11.2 Ketamine Sedation and Restraint Range</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Ketamine Sedation &mdash; ~1 mg/kg IV/IO or 4&ndash;5 mg/kg IM</div>'+
        '<p>This is full sedation territory. Requires airway monitoring and a plan for loss of protective reflexes or respiratory compromise. Do not give sedative doses without adequate staff, suction, oxygen, and monitoring.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Ketamine (dissociative/restraint, IV/IO)</td><td style="font-weight:700;color:var(--severity-red)">&asymp; 1 mg/kg IV or IO</td><td>Full sedation territory</td><td>Requires airway monitoring and a plan for loss of protective reflexes or respiratory compromise</td><td>Giving sedative doses without adequate staff, suction, oxygen, and monitoring</td></tr>'+
        '<tr><td>Ketamine (dissociative/restraint, IM)</td><td style="font-weight:700;color:var(--severity-red)">4&ndash;5 mg/kg IM</td><td>Full sedation territory via intramuscular route</td><td>Requires same airway readiness as IV dosing</td><td>Assuming IM route is inherently safer &mdash; full sedation precautions apply</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.11.3 Midazolam Seizure Dosing</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Midazolam 5 mg IV/IO/IM q5 min Until Seizure Stops</div>'+
        '<p>Repeated rescue pattern, not a one-time single push only. Continue airway monitoring between doses and plan maintenance therapy if seizures recur.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Midazolam (seizure rescue)</td><td style="font-weight:700;color:var(--severity-red)">5 mg IV, IO, or IM every 5 minutes until seizure stops</td><td>Repeated rescue pattern, not a one-time single push only</td><td>Continue airway monitoring between doses and plan maintenance therapy if seizures recur</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.11.4 Acetaminophen Maximum</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">SAFETY LIMIT</span> Acetaminophen Maximum 4,000 mg/day</div>'+
        '<p>Exceeding this increases hepatotoxicity risk. Total all sources, especially combination products.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Acetaminophen (maximum daily dose)</td><td style="font-weight:700;color:var(--severity-amber)">4,000 mg total per day</td><td>Exceeding this increases hepatotoxicity risk</td><td>Total all sources, especially combination products</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.11.5 Naloxone Cumulative Ceiling</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CEILING</span> Naloxone &mdash; Up to ~10 mg Cumulative</div>'+
        '<p>Repeat doses may be given up to a cumulative total of about 10 mg during reversal attempts. Lack of response should prompt reconsideration of diagnosis, severity, or coingestants.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Avoid</th></tr></thead><tbody>'+
        '<tr><td>Naloxone (cumulative ceiling)</td><td style="font-weight:700;color:var(--severity-amber)">&asymp; 10 mg cumulative</td><td>Lack of response should prompt reconsideration of diagnosis, severity, or coingestants</td><td>Reassess diagnosis if no response after cumulative dosing</td><td>Repeated blind dosing without airway support or reassessment</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.11.6 Flumazenil Initial Dose</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CAUTION</span> Flumazenil 0.2 mg IV Over 15 Seconds</div>'+
        '<p>Cautious titrated reversal only. Major caution: this can precipitate seizures in chronic benzodiazepine users or mixed overdoses.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th><th>Major Caution</th></tr></thead><tbody>'+
        '<tr><td>Flumazenil (initial dose)</td><td style="font-weight:700;color:var(--severity-red)">0.2 mg IV over 15 seconds</td><td>Cautious titrated reversal only</td><td>Administer slowly with seizure readiness</td><td>Can precipitate seizures in chronic benzodiazepine users or mixed overdoses</td></tr>'+
        '</tbody></table></div>',
      severity:'amber',
      relatedLinks:['medications/ketamine','medications/midazolam','medications/naloxone','medications/acetaminophen']
    },
    {
      id:'procedure-numbers',
      title:'Procedure-Linked Numeric Rules',
      content:'<h3>8.12 Procedure-Linked Numeric Rules</h3>'+

        '<h4>8.12.1 Needle Thoracostomy Equipment Standard</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> 14G, 3.25-inch Catheter for Needle Thoracostomy</div>'+
        '<p>Equipment length matters because short catheters may fail to reach the pleural space. Confirm the actual device before attempting decompression.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Needle Thoracostomy Device</td><td style="font-weight:700;color:var(--severity-red)">14G, 3.25-inch catheter</td><td>Equipment length matters because short catheters may fail to reach the pleural space</td><td>Confirm the actual device before attempting decompression</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.12.2 Chest Tube Size Ranges</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">SIZING</span> Chest Tube Selection by Indication</div>'+
        '<p>Tube size should match expected drainage burden. Hemothorax requires larger tubes than simple pneumothorax.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Indication</th><th>Chest Tube Size</th><th>Rationale</th></tr></thead><tbody>'+
        '<tr><td>Hemothorax</td><td style="font-weight:700;color:var(--severity-red)">36&ndash;38 Fr</td><td>Larger tube needed for blood drainage</td></tr>'+
        '<tr><td>Simple Pneumothorax</td><td style="font-weight:700;color:var(--severity-amber)">24&ndash;32 Fr</td><td>Smaller tube adequate for air evacuation</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.12.3 Drainage Suction Setting</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">SETTING</span> Pleurivac at &minus;20 cm H2O</div>'+
        '<p>Standard reference point for tube drainage system setup. Confirm the system is actually assembled to the intended setting.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Pleurivac Suction Setting</td><td style="font-weight:700;color:var(--severity-green)">&minus;20 cm H2O</td><td>Standard reference point for tube drainage system setup</td><td>Confirm the system is actually assembled to the intended setting</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.12.4 IO Lidocaine Dose</h4>'+
        '<p>IO infusion can be extremely painful and pain control improves tolerance and function.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">PAIN CONTROL</span> IO Lidocaine Before Painful Flush</div>'+
        '<p>IO infusion can be extremely painful. Pain control improves tolerance and function. Administer lidocaine before painful IO flush in conscious patients.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Population</th><th>IO Lidocaine Dose</th><th>Meaning</th></tr></thead><tbody>'+
        '<tr><td>Adults (conscious)</td><td style="font-weight:700;color:var(--severity-amber)">20&ndash;40 mg</td><td>Administer before painful IO flush</td></tr>'+
        '<tr><td>Pediatrics (under relevant weight threshold)</td><td style="font-weight:700;color:var(--severity-amber)">&asymp; 0.5 mg/kg</td><td>Weight-based dosing for children</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.12.5 IO Access Time Rule</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Switch to IO After 2 Failed IVs or &gt; 90 Seconds</div>'+
        '<p>Do not waste critical time persisting with unsuccessful peripheral IV placement. Move to faster reliable access when time matters.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>IO Access Decision Point</td><td style="font-weight:700;color:var(--severity-red)">After 2 failed IV attempts or &gt; 90 seconds trying</td><td>Do not waste critical time persisting with unsuccessful peripheral IV placement</td><td>Move to faster reliable access when time matters</td></tr>'+
        '</tbody></table></div>',
      severity:'amber',
      relatedLinks:['procedures/needle-thoracostomy','procedures/chest-tube','procedures/io-access']
    },
    {
      id:'reassessment-numbers',
      title:'Reassessment Numbers During Prolonged Holding',
      content:'<h3>8.13 Reassessment Numbers During Prolonged Holding</h3>'+
        '<p>Many of the most important numbers in delayed MEDEVAC are not single static thresholds. They are repeated intervals, cumulative totals, and trends that tell you whether the patient is drifting or holding.</p>'+

        '<h4>8.13.1 Time-Based Rechecks After Major Intervention</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">MANDATORY</span> Reassess After Every Major Intervention</div>'+
        '<p>Reassess after every fluid bolus, sedative dose, pressor change, airway intervention, and chest intervention. A technically correct intervention can still produce immediate harm or fail to solve the problem.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Target</th><th>Meaning</th><th>Action</th></tr></thead><tbody>'+
        '<tr><td>Post-Intervention Recheck</td><td style="font-weight:700;color:var(--severity-amber)">After every: fluid bolus, sedative dose, pressor change, airway intervention, chest intervention</td><td>A technically correct intervention can still produce immediate harm or fail to solve the problem</td><td>Check whether the intended target was reached and whether a new complication appeared</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.13.2 Monitoring Intervals</h4>'+
        '<p>Time intervals are themselves operational thresholds.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">STRUCTURED</span> Monitoring Interval Requirements</div>'+
        '<p>Use frequent documented reassessment after sedation, procedure, or medication changes. Use scheduled neurologic checks in TBI or altered mental status. Record urine output in a repeatable time-based pattern, not occasionally. Time intervals are themselves operational thresholds.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Monitoring Type</th><th>Requirement</th><th>Rationale</th></tr></thead><tbody>'+
        '<tr><td>Post-sedation / post-procedure / post-medication</td><td style="font-weight:700">Frequent documented reassessment</td><td>Detect complications early and confirm therapeutic effect</td></tr>'+
        '<tr><td>Neurologic checks (TBI / altered mental status)</td><td style="font-weight:700">Scheduled neurologic checks</td><td>Detect deterioration before it becomes irreversible</td></tr>'+
        '<tr><td>Urine output</td><td style="font-weight:700">Repeatable time-based pattern recording</td><td>Trend data is only useful if collected consistently</td></tr>'+
        '</tbody></table></div>'+

        '<h4>8.13.3 Running Totals</h4>'+
        '<p>Cumulative values often become the true decision drivers in 24 to 72 hour holding.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">TRACKING</span> Running Totals for Prolonged Holding</div>'+
        '<p>Cumulative values often become the true decision drivers in 24 to 72 hour holding. Track these running totals continuously.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Running Total</th><th>What to Track</th><th>Why It Matters</th></tr></thead><tbody>'+
        '<tr><td>Total fluids in</td><td style="font-weight:700">Cumulative IV and oral intake</td><td>Guides ongoing resuscitation and detects overload risk</td></tr>'+
        '<tr><td>Total urine out</td><td style="font-weight:700">Cumulative measured output</td><td>Key indicator of perfusion and kidney function</td></tr>'+
        '<tr><td>Total sedative and opioid burden</td><td style="font-weight:700">Cumulative doses of all sedatives and analgesics</td><td>Prevents cumulative toxicity and guides weaning</td></tr>'+
        '<tr><td>Fever trend</td><td style="font-weight:700">Temperature over time</td><td>New or rising fever may signal infection or missed injury</td></tr>'+
        '<tr><td>Chest tube output trend</td><td style="font-weight:700">Volume and character over time</td><td>Guides decisions about ongoing hemorrhage or re-exploration</td></tr>'+
        '</tbody></table></div>'+

        '<h3>8.14 Common Errors With Numeric Targets</h3>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">PITFALLS</span> Common Errors With Numeric Targets</div>'+
        '<p>These are the most frequent errors providers make when using numeric thresholds in clinical practice.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>#</th><th>Common Error</th></tr></thead><tbody>'+
        '<tr><td>1</td><td>Memorizing the number but not the action it should trigger</td></tr>'+
        '<tr><td>2</td><td>Using one threshold in every context without adjusting for the syndrome</td></tr>'+
        '<tr><td>3</td><td>Chasing a single value while missing the overall patient trend</td></tr>'+
        '<tr><td>4</td><td>Treating a formula as fixed when it should be titrated</td></tr>'+
        '<tr><td>5</td><td>Using a temporary rescue target as though it were a long-term maintenance target</td></tr>'+
        '<tr><td>6</td><td>Failing to recheck after intervention and therefore missing deterioration</td></tr>'+
        '</tbody></table></div>'+

        '<h3>8.15 Practical At-Sea Application</h3>'+
        '<p>In the shipboard environment, these thresholds become even more important because diagnostics, personnel, and specialist backup may be limited. A reliable trigger number can simplify decision-making, but only if it is tied to a realistic action plan that can be sustained with the resources on hand.</p>'+
        '<ul>'+
        '<li>Use thresholds to simplify when to escalate, not to oversimplify the patient.</li>'+
        '<li>Trend the values that actually change decisions: oxygenation, ventilation, blood pressure, urine output, neurologic status, and device output.</li>'+
        '<li>Write down target values clearly when handing over a prolonged-hold patient so the next provider knows what must be maintained.</li>'+
        '</ul>'+

        '<h3>8.16 End State</h3>'+
        '<p>After this chapter, the learner should be able to recall the major ACTT-critical thresholds, identify what each one should trigger, and distinguish between trigger values, goal ranges, danger values, and temporary rescue targets. The goal is not memorization for its own sake. The goal is to turn numbers into faster, safer, and more consistent bedside action during both initial resuscitation and prolonged holding.</p>',
      severity:'amber',
      relatedLinks:['algorithms/prolonged-hold','algorithms/reassessment','procedures/documentation']
    }
  ]
};
