window.ACTT=window.ACTT||{};
window.ACTT.medications={
  id:'medications',
  title:'Medication Reference',
  subtitle:'Chapter 6 — Practical Bedside Medication Guide',
  chapter:6,
  intro:'<p>This chapter is a practical bedside medication guide built to answer the questions that matter during high-acuity care: when to give the drug, how much to give, how to prepare it, how to administer it, what to monitor, what can go wrong, and what to do next. Every entry is written for use at the point of care, during course preparation, and during shipboard adaptation where medication planning must account for delayed evacuation over a 24 to 72 hour holding period.</p>'+
    '<h3>6.1 Purpose of This Chapter</h3>'+
    '<p>The purpose of this chapter is to convert pharmacology into operational bedside decisions. Every drug entry is structured to support the clinician who is already managing a sick patient, not to teach pharmacology from first principles. The emphasis is on execution: correct dose, correct route, correct speed, correct monitoring, and correct follow-through.</p>'+
    '<h3>6.2 Intended Uses</h3>'+
    '<ul>'+
      '<li>Bedside use during high-acuity care.</li>'+
      '<li>Course preparation and study.</li>'+
      '<li>Shipboard adaptation and medication planning.</li>'+
      '<li>Medication planning during delayed evacuation and 24&ndash;72 hour holding.</li>'+
    '</ul>'+
    '<h3>6.3 Standard Entry Format</h3>'+
    '<p>For consistency, each medication entry follows the same structure so the clinician can find any answer quickly under pressure:</p>'+
    '<ul>'+
      '<li><strong>Clinical role:</strong> what the drug does and when it belongs in the plan.</li>'+
      '<li><strong>Contraindications:</strong> situations where the drug must not be used.</li>'+
      '<li><strong>Adult dosing:</strong> dose, route, frequency, and weight-based adjustments where applicable.</li>'+
      '<li><strong>Preparation, dilution, concentration, and administration rate:</strong> how to draw it up, mix it, and push or infuse it safely.</li>'+
      '<li><strong>Onset and duration:</strong> when to expect effect and when it wears off.</li>'+
      '<li><strong>Monitoring:</strong> what to watch during and after administration.</li>'+
      '<li><strong>Common errors:</strong> mistakes that occur in practice and how to avoid them.</li>'+
      '<li><strong>Shipboard availability:</strong> whether the drug is confirmed in Sick Bay stock or must be assumed unavailable.</li>'+
      '<li><strong>Extended care considerations:</strong> how to plan for repeated dosing, infusion maintenance, or transition during a prolonged hold.</li>'+
    '</ul>'+
    '<h3>6.4 How to Use This Chapter</h3>'+
    '<p>This chapter is organized by clinical role rather than alphabetically. The sections follow the same sequence the clinician encounters during resuscitation: analgesia and sedation, airway medications, vasopressors, seizure and neurocritical agents, procedural support, cardiovascular emergency drugs, sepsis and antibiotics, and reversal agents. Each entry is self-contained so it can be used independently during care.</p>'+
    '<h3>6.5 Shipboard Cross-Reference Snapshot</h3>'+
    '<p>The following table summarizes which ACTT-relevant medications are confirmed onboard RCN vessels and which are not confirmed. This cross-reference should be verified against current Sick Bay stock before major exercises or deployments.</p>'+
    '<div class="table-wrapper"><table><thead><tr><th>Category</th><th>Confirmed Onboard</th><th>Not Confirmed / Assume Unavailable</th></tr></thead><tbody>'+
    '<tr><td><strong>Analgesia &amp; Sedation</strong></td><td>Acetaminophen, Acetaminophen w/ Codeine, Lidocaine 2%, Methoxyflurane, Haloperidol</td><td>Ketamine, Midazolam, Hydromorphone, Fentanyl, Morphine</td></tr>'+
    '<tr><td><strong>Airway / RSI</strong></td><td>Lidocaine 2%, Lidocaine w/ Epinephrine</td><td>Succinylcholine, Rocuronium, Ketamine</td></tr>'+
    '<tr><td><strong>Hemodynamic</strong></td><td>Enoxaparin, Protamine Sulfate</td><td>Norepinephrine, Epinephrine Infusion, Phentolamine</td></tr>'+
    '<tr><td><strong>Neurocritical</strong></td><td>Dexamethasone Injection, Sodium Bicarbonate</td><td>Hypertonic Saline 3%, Mannitol, Levetiracetam</td></tr>'+
    '<tr><td><strong>Cardiovascular</strong></td><td>Clopidogrel, Nitroglycerin Patch, Enoxaparin</td><td>Tenecteplase, Heparin Infusion Kits</td></tr>'+
    '<tr><td><strong>Sepsis / Antibiotics</strong></td><td>Ampicillin, Azithromycin IV, Cefazolin, Ceftriaxone, Ciprofloxacin IV, Metronidazole IV, Acyclovir</td><td>Ertapenem, Moxifloxacin</td></tr>'+
    '</tbody></table></div>'+
    '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Stock Planning<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
    '<p>Cross-reference core ACTT medications with current Sick Bay stock before major exercises or deployments. For each gap, define whether there is a reasonable substitute, a procedural workaround, or a hard limitation. Non-stocked but important items should be understood before a casualty occurs so that workarounds can be planned in advance.</p>'+
    '</div></div>',
  sections:[
    {
      id:'analgesics',
      title:'Analgesia and Sedation',
      severity:'amber',
      sectionNumber:'6.6',
      content:'<h3>6.6 Analgesia and Sedation</h3>'+

        '<div class="drug-card">'+
        '<h4>6.6.1 Ketamine</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Most Versatile ACTT Drug</div>'+
        '<p>Ketamine is the most versatile medication in ACTT. It serves multiple roles: severe pain management, painful bedside procedures, control of the combative patient, and induction for airway control. Its ability to preserve blood pressure and airway reflexes at appropriate doses makes it the default first-line agent across many ACTT scenarios.</p></div>'+

        '<p><strong>Clinical Role:</strong> Analgesia (sub-dissociative), procedural sedation (dissociative), induction agent for RSI, continuous sedation for intubated or non-intubated patients.</p>'+
        '<p><strong>Indications:</strong> Severe pain, painful bedside procedures, combative patient requiring chemical restraint, induction for airway control.</p>'+

        '<h4>Adult Dosing</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Indication</th><th>Dose</th><th>Route</th><th>Notes</th></tr></thead><tbody>'+
        '<tr><td>Pain (sub-dissociative)</td><td>0.1&ndash;0.2 mg/kg</td><td>IV/IO slow push</td><td>Usually 10&ndash;20 mg per dose. Repeat every 10&ndash;30 minutes as needed.</td></tr>'+
        '<tr><td>Procedural sedation</td><td>1 mg/kg</td><td>IV/IO over 60 seconds</td><td>Full dissociation expected. Patient may still have airway reflexes but requires continuous monitoring.</td></tr>'+
        '<tr><td>Procedural sedation (no IV)</td><td>4&ndash;5 mg/kg</td><td>IM</td><td>Use when IV access is delayed. Onset is slower and less predictable.</td></tr>'+
        '<tr><td>Continuous sedation (non-intubated)</td><td>1 mg/kg/hr</td><td>IV infusion</td><td>Requires tight monitoring. Non-intubated patients on ketamine infusions are at higher risk.</td></tr>'+
        '<tr><td>Continuous sedation (post-intubation)</td><td>1&ndash;2 mg/kg/hr</td><td>IV infusion</td><td>Titrate to sedation depth target. Pair with ongoing monitoring of SpO2, EtCO2, BP.</td></tr>'+
        '</tbody></table></div>'+

        '<p><strong>Preparation:</strong> Draw dose carefully and label the syringe. Administer by slow push. Rapid IV push increases the risk of apnea and laryngospasm.</p>'+

        '<p><strong>Monitoring:</strong> Continuous SpO2, cardiac monitoring, blood pressure, EtCO2 when available. Reassess mental status and respiratory effort every few minutes during and after administration.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Ketamine Cautions</div>'+
        '<ul>'+
        '<li><strong>Emergence reactions:</strong> dysphoria, hallucinations, agitation on waking. More common in adults. Midazolam may blunt these.</li>'+
        '<li><strong>Hypersalivation:</strong> increased oral secretions can threaten the airway in sedated patients. Suction must be immediately available.</li>'+
        '<li><strong>Rare laryngospasm:</strong> especially with rapid IV push. Manage with positive pressure ventilation and repositioning; rarely requires succinylcholine.</li>'+
        '<li><strong>Dose stacking:</strong> repeated sub-dissociative doses can accumulate to dissociative levels without the clinician intending full sedation.</li>'+
        '<li><strong>Dysphoric range:</strong> the mid-range dose of 0.3&ndash;0.8 mg/kg creates dysphoria without full dissociation. This range should be avoided. Use either low-dose analgesia or full dissociative dosing.</li>'+
        '</ul></div>'+

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Availability<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Ketamine is not clearly listed in standard Sick Bay stock. If unavailable, substitute with available alternatives: local anesthetic for wound and procedural pain, haloperidol for agitation, benzodiazepines for anxiolysis and seizures, opioid-based analgesia for severe pain. Each substitute carries different risk profiles and monitoring requirements.</p>'+
        '</div></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.6.2 Midazolam</h4>'+
        '<p><strong>Clinical Role:</strong> Anxiolysis, adjunctive sedation, seizure termination, blunting ketamine emergence reactions, post-intubation sedation maintenance.</p>'+
        '<p><strong>Indications:</strong> Anxiety requiring pharmacologic management, adjunct to ketamine or opioid sedation, active seizures, post-intubation sedation when ketamine alone is insufficient.</p>'+

        '<h4>Adult Dosing</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Indication</th><th>Dose</th><th>Route</th><th>Notes</th></tr></thead><tbody>'+
        '<tr><td>Sedation / Anxiolysis</td><td>1&ndash;2.5 mg</td><td>IV/IO slowly</td><td>Give in small increments. Reassess before repeating. Onset 2&ndash;5 minutes IV.</td></tr>'+
        '<tr><td>Agitation / Seizure (no IV)</td><td>5 mg</td><td>IM</td><td>Use when IV access is delayed and patient is agitated or actively seizing. Onset slower IM.</td></tr>'+
        '<tr><td>Active seizure</td><td>5 mg</td><td>IV/IO/IM</td><td>Repeat every 5 minutes until seizure stops. Prepare for airway management if repeated doses needed.</td></tr>'+
        '</tbody></table></div>'+

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Midazolam Administration Warning</div>'+
        '<p>Slow IV push is essential. Fast IV push can cause apnea, hypotension, and loss of airway control. When combining with opioids, reduce the midazolam dose because respiratory depression is synergistic and can be severe. Always have airway equipment immediately available.</p></div>'+

        '<p><strong>Monitoring:</strong> Respiratory rate, SpO2, EtCO2, blood pressure, and level of consciousness. Continue monitoring for at least 30 minutes after the last dose.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Common Error: Stacking</div>'+
        '<p>The most common midazolam error is stacking doses before allowing sufficient time for the previous dose to take effect. IV onset takes several minutes. IM onset is slower still. Impatient redosing leads to sudden deep sedation and airway compromise.</p></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.6.3 Opioids</h4>'+

        '<h4>Hydromorphone</h4>'+
        '<p><strong>Clinical Role:</strong> Preferred prolonged-care opioid in ACTT. Longer duration of action than fentanyl and less histamine release than morphine make it a practical choice for sustained analgesia during delayed evacuation.</p>'+
        '<p><strong>Dosing:</strong> 0.5&ndash;1 mg IV slowly. Titrate to effect. Allow adequate time between doses to assess response.</p>'+

        '<h4>Fentanyl</h4>'+
        '<p><strong>Clinical Role:</strong> Fast onset, short duration opioid. Useful when rapid pain control is needed and the clinician wants the effect to dissipate quickly for reassessment.</p>'+
        '<p><strong>Dosing:</strong> 25&ndash;100 mcg IV/IO slowly. Titrate carefully.</p>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Fentanyl Rapid Push Risk</div>'+
        '<p>Rapid IV push of fentanyl can cause chest wall rigidity (wooden chest syndrome), making ventilation impossible until the rigidity resolves or is treated. Always administer slowly.</p></div>'+

        '<h4>Morphine</h4>'+
        '<p><strong>Clinical Role:</strong> Less favored in ACTT due to higher risk of hypotension, nausea, and pruritus compared to alternatives. Use in small IV doses slowly when other opioids are unavailable.</p>'+

        '<h4>Acetaminophen</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Acetaminophen</div>'+
        '<p>Acetaminophen is confirmed in Sick Bay stock. Use as a baseline analgesic and antipyretic. Dose: 650&ndash;1000 mg PO every 6 hours. Maximum 4 g per 24 hours. Avoid cumulative overdose by accounting for acetaminophen hidden in combination products (e.g., acetaminophen with codeine).</p></div>'+
        '</div>',
      relatedLinks:['algorithms/combative-patient','algorithms/airway-failure','procedures/rsi','procedures/procedural-sedation','medications/rsi-airway','thresholds/medication-safety','pitfalls/medication-errors','prolonged-holding/sedation-pain','shipboard/medication-shipboard','tools/dosecalc'],
      sources:[
        {title:'Med Tech Ketamine for Pain.pdf',file:'Med Tech Ketamine for Pain.pdf',note:'Primary ACTT ketamine analgesia reference.'},
        {title:'ACTT 2026-01 Procedural Sedation.pdf',file:'ACTT 2026-01 Procedural Sedation.pdf'},
        {title:'Common IV Meds Cheat Sheet.pdf',file:'Common IV Meds Cheat Sheet.pdf'}
      ]
    },
    {
      id:'rsi-airway',
      title:'RSI & Airway Medications',
      severity:'red',
      sectionNumber:'6.7',
      content:'<h3>6.7 RSI and Airway Medications</h3>'+

        '<div class="drug-card">'+
        '<h4>6.7.1 Induction Agent: Ketamine</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Primary ACTT Induction Agent</div>'+
        '<p>Ketamine is the primary induction agent for RSI in ACTT. It preserves blood pressure and sympathetic tone, which is essential in trauma, shock, and TBI patients who are already hemodynamically compromised. Give a full induction dose, then move immediately to the paralytic agent. After tube placement, restart sedation early to prevent awareness during paralysis.</p></div>'+

        '<p><strong>RSI Induction Dose:</strong> 1&ndash;2 mg/kg IV/IO. Administer as a full induction dose. Do not give ketamine alone as a substitute for complete RSI. Ketamine without a paralytic increases laryngospasm risk and does not provide the jaw relaxation needed for optimal intubating conditions.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.7.2 Paralytic Agents</h4>'+

        '<h4>Succinylcholine</h4>'+
        '<p><strong>Clinical Role:</strong> Depolarizing neuromuscular blocker with rapid onset and short duration. Provides a brief paralysis window for intubation.</p>'+
        '<p><strong>Dosing:</strong> 1&ndash;1.5 mg/kg IV/IO.</p>'+
        '<p><strong>Onset:</strong> 30&ndash;60 seconds. <strong>Duration:</strong> 5&ndash;10 minutes.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Succinylcholine Contraindications</div>'+
        '<ul>'+
        '<li>Hyperkalemia or suspected hyperkalemia.</li>'+
        '<li>Major crush injury (after the initial phase).</li>'+
        '<li>Severe burns after the early phase (risk of hyperkalemic cardiac arrest).</li>'+
        '<li>Known neuromuscular disease or denervation injury.</li>'+
        '<li>If any of these apply, use rocuronium instead.</li>'+
        '</ul></div>'+

        '<h4>Rocuronium</h4>'+
        '<p><strong>Clinical Role:</strong> Non-depolarizing neuromuscular blocker. Slower onset than succinylcholine but longer duration and fewer hyperkalemic concerns.</p>'+
        '<p><strong>Dosing:</strong> 1&ndash;1.2 mg/kg IV/IO for RSI.</p>'+
        '<p><strong>Onset:</strong> 60&ndash;90 seconds. <strong>Duration:</strong> 30&ndash;60 minutes.</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Rocuronium Tradeoff</div>'+
        '<p>The tradeoff with rocuronium is that if the airway attempt fails, the patient will remain paralyzed much longer than with succinylcholine. A failed airway with rocuronium means a prolonged cannot-oxygenate situation unless a rescue airway is ready. The rescue plan must be established before rocuronium is given.</p></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.7.3 Execution Rule</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Ketamine Alone Is NOT Complete RSI</div>'+
        '<p>Ketamine alone is not complete RSI. A proper RSI sequence requires an induction agent paired with a paralytic agent plus a strict attempt-limit strategy. Omitting the paralytic or proceeding without a rescue plan converts RSI into a disorganized, high-risk airway attempt.</p></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.7.3 Post-Intubation Sedation</h4>'+
        '<p>After successful intubation, sedation and analgesia must be restarted immediately. The patient will regain consciousness and awareness as the induction agent and paralytic wear off. Inadequate post-intubation sedation causes patient distress, fighting the ventilator, hemodynamic instability, and risk of self-extubation.</p>'+

        '<p><strong>Options:</strong></p>'+
        '<ul>'+
        '<li><strong>Ketamine infusion:</strong> 1&ndash;2 mg/kg/hr IV. Maintains sedation and hemodynamic stability.</li>'+
        '<li><strong>Intermittent or infusion benzodiazepines:</strong> midazolam boluses or infusion for ongoing sedation.</li>'+
        '<li><strong>Opioid analgesia:</strong> fentanyl or hydromorphone for pain control, especially if the patient has concurrent injuries.</li>'+
        '</ul>'+

        '<p><strong>Monitoring after intubation rises significantly:</strong> sedation depth assessment, blood pressure, SpO2, EtCO2, tube position, and ongoing neurologic status must all be tracked continuously or at frequent intervals.</p>'+
        '</div>',
      relatedLinks:['procedures/rsi','procedures/surgical-cric','algorithms/airway-failure','medications/analgesics','thresholds/airway-respiratory','pitfalls/airway-errors','shipboard/airway-at-sea','tools/dosecalc'],
      sources:[
        {title:'ACTT 2026-01 Airway.pdf',file:'ACTT 2026-01 Airway .pdf',note:'Primary ACTT RSI medication source.'},
        {title:'RSI Check List and Intubation.pdf',file:'RSI Check List and Intubation.pdf'},
        {title:'Ressource for RSI.pdf',file:'Ressource for RSI.pdf'}
      ]
    },
    {
      id:'vasopressors',
      title:'Vasopressors',
      severity:'red',
      sectionNumber:'6.8',
      content:'<h3>6.8 Vasopressors</h3>'+

        '<div class="drug-card">'+
        '<h4>6.8.1 Norepinephrine</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> First-Line Vasopressor</div>'+
        '<p>Norepinephrine is the first-line vasopressor for persistent hypotension after fluid resuscitation, particularly in septic and vasodilatory shock. Do not delay initiation while waiting for a central line if the patient remains hypotensive after adequate volume resuscitation.</p></div>'+

        '<p><strong>Clinical Role:</strong> Alpha-1 and beta-1 adrenergic agonist. Increases vascular tone and blood pressure. Primary vasopressor in ACTT for vasodilatory and septic shock.</p>'+

        '<h4>Dosing and Administration</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Detail</th></tr></thead><tbody>'+
        '<tr><td>Starting dose</td><td>2&ndash;4 mcg/min IV infusion</td></tr>'+
        '<tr><td>Titration target</td><td>MAP &ge; 65 mmHg</td></tr>'+
        '<tr><td>Route</td><td>Central line preferred. Peripheral IV acceptable in emergency with frequent site checks.</td></tr>'+
        '<tr><td>Peripheral IV precautions</td><td>Check for blanching and swelling frequently. If extravasation occurs, stop the infusion immediately and treat.</td></tr>'+
        '</tbody></table></div>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Extravasation</div>'+
        '<p>Extravasation of norepinephrine through a peripheral IV causes local tissue necrosis. Monitor the infusion site frequently. If blanching or swelling appears, stop the infusion and consider phentolamine injection at the site if available.</p></div>'+

        '<p><strong>Extravasation rescue:</strong> Phentolamine, if available, injected into the affected area.</p>'+

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Operational Burden<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Norepinephrine creates a significant staffing task. It requires continuous blood pressure trending, line site monitoring, pump management, and ongoing patient response assessment. Before starting a pressor at sea, confirm that the monitoring burden can be sustained. A pressor plan that cannot be safely monitored is an incomplete plan.</p>'+
        '</div></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.8.2 Epinephrine</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Concentration-Sensitive &mdash; Most Common Error Is Wrong Concentration</div>'+
        '<p>Epinephrine is used across multiple indications at very different concentrations and doses. The most common and most dangerous error is using the wrong concentration for the wrong indication. State the indication out loud and confirm the concentration before giving any dose of epinephrine.</p></div>'+

        '<h4>Indication-Specific Dosing</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Indication</th><th>Dose</th><th>Route</th><th>Concentration</th><th>Notes</th></tr></thead><tbody>'+
        '<tr><td>Anaphylaxis</td><td>0.3&ndash;0.5 mg</td><td>IM (lateral thigh)</td><td>1 mg/mL (1:1,000)</td><td>Repeat every 5 minutes if needed. IM into lateral thigh for fastest absorption.</td></tr>'+
        '<tr><td>Cardiac arrest</td><td>1 mg</td><td>IV</td><td>0.1 mg/mL (1:10,000)</td><td>Every 3&ndash;5 minutes during arrest. Do not use 1:1,000 concentration IV for arrest.</td></tr>'+
        '<tr><td>Shock infusion</td><td>2&ndash;10 mcg/min</td><td>IV infusion</td><td>Diluted per protocol</td><td>Requires pump and continuous monitoring. Useful when norepinephrine is unavailable or when added inotropic support is needed with hypotension.</td></tr>'+
        '<tr><td>Push-dose bridge</td><td>5&ndash;20 mcg (0.5&ndash;2 mL)</td><td>Slow IV push every 2&ndash;5 min</td><td>10 mcg/mL</td><td>Short bridge for sudden peri-intubation / sedation-related hypotension or while an infusion is being prepared. Never give the 1 mg arrest dose to a patient with a pulse.</td></tr>'+
        '</tbody></table></div>'+

        '<p><strong>Execution rule:</strong> Before every dose of epinephrine, state the indication out loud and confirm the concentration. This verbal confirmation step prevents the single most dangerous epinephrine error.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.8.3 Vasoactive Bedside Comparison</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">DECISION AID</span> Match the drug to the hemodynamic problem</div>'+
        '<p>Use norepinephrine for vasodilatory shock, add vasopressin when catecholamine needs are climbing, choose dobutamine when the pump is weak and the blood pressure can tolerate it, and reserve push-dose epinephrine for short bridging during sudden hypotension.</p></div>'+
        '<div class="table-wrapper"><table><thead><tr><th>Agent</th><th>When to consider</th><th>Typical ACTT reference dose</th><th>Point-of-care distinction</th></tr></thead><tbody>'+
        '<tr><td><strong>Norepinephrine</strong></td><td>Persistent hypotension after initial resuscitation, especially septic or vasodilatory shock</td><td>2&ndash;4 mcg/min start; titrate to MAP &ge; 65 mmHg</td><td>Best default first-line pressor. Strong vasoconstrictor with some beta-1 support.</td></tr>'+
        '<tr><td><strong>Epinephrine infusion</strong></td><td>Need both pressor and inotropic effect, or norepinephrine unavailable</td><td>2&ndash;10 mcg/min</td><td>Mixed alpha/beta effects. Higher arrhythmia and concentration-error risk; state the indication before use.</td></tr>'+
        '<tr><td><strong>Vasopressin</strong></td><td>Adjunct for septic or vasodilatory shock when catecholamine requirements are escalating</td><td>0.02&ndash;0.04 units/min</td><td>Non-adrenergic vasoconstrictor. Add-on agent, not the minute-to-minute titration drug.</td></tr>'+
        '<tr><td><strong>Dopamine</strong></td><td>When premixed stock is available and preferred agents are unavailable or impractical</td><td>2&ndash;10 mcg/kg/min, titrate up to 20 mcg/kg/min</td><td>Dose-dependent inotrope/pressor with more arrhythmias and less predictable bedside behavior than norepinephrine.</td></tr>'+
        '<tr><td><strong>Dobutamine</strong></td><td>Low-output state or cardiogenic shock when contractility is the main problem and blood pressure is supported</td><td>2&ndash;10 mcg/kg/min, titrate up to 20 mcg/kg/min if needed</td><td>Inotrope with mild vasodilation. Can worsen hypotension if used without enough pressure reserve.</td></tr>'+
        '<tr><td><strong>Push-dose epinephrine</strong></td><td>Sudden transient hypotension during RSI, peri-intubation, procedural sedation, or while an infusion is being mixed</td><td>5&ndash;20 mcg IV push every 2&ndash;5 min</td><td>Bridge only. Fast onset and short duration; fix the cause and transition to infusion if instability persists.</td></tr>'+
        '</tbody></table></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.8.4 Push-Dose Epinephrine Preparation</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Use only the dilute push-dose concentration for a patient with a pulse</div>'+
        '<p>Push-dose epinephrine is a short bridge for sudden hypotension. It is not the 1 mg cardiac arrest dose, and it does not replace preparing a durable infusion plan when shock persists.</p></div>'+
        '<ol>'+
        '<li><strong>State the indication:</strong> sudden peri-intubation, RSI, or sedation-related hypotension, or immediate bridge while an infusion pressor is being prepared.</li>'+
        '<li><strong>Prepare the syringe:</strong> place 9 mL of normal saline in a 10 mL syringe.</li>'+
        '<li><strong>Add epinephrine:</strong> draw up 1 mL from the cardiac epinephrine ampule (0.1 mg/mL, 1:10,000) into that syringe.</li>'+
        '<li><strong>Confirm the final concentration:</strong> 10 mL total at 10 mcg/mL. Label the syringe before bedside use.</li>'+
        '<li><strong>Administer carefully:</strong> give 0.5&ndash;2 mL (5&ndash;20 mcg) slow IV push every 2&ndash;5 minutes to effect.</li>'+
        '<li><strong>Reassess after each dose:</strong> blood pressure, heart rate/rhythm, perfusion, and whether an infusion or another intervention is now required.</li>'+
        '</ol>'+
        '<div class="table-wrapper"><table><thead><tr><th>Parameter</th><th>Reference</th></tr></thead><tbody>'+
        '<tr><td>Onset</td><td>About 1 minute</td></tr>'+
        '<tr><td>Duration</td><td>About 5&ndash;10 minutes</td></tr>'+
        '<tr><td>Best use</td><td>Bridge while treating the cause of hypotension or while an infusion is being mixed</td></tr>'+
        '<tr><td>Do not do this</td><td>Do not give 1 mg arrest-dose epinephrine to a patient who still has a pulse</td></tr>'+
        '</tbody></table></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.8.5 Other Vasoactive Notes</h4>'+
        '<p>Norepinephrine remains the default first-line vasopressor in ACTT for vasodilatory and septic shock. Epinephrine infusion is the most practical alternative when both pressure and pump support are needed. Vasopressin is an add-on rather than a rescue push. Dopamine and dobutamine can be useful in selected low-output states, but they demand tighter rhythm and blood pressure surveillance because their bedside effect is less predictable.</p>'+
        '</div>',
      relatedLinks:['algorithms/sepsis','algorithms/stemi','thresholds/hemodynamic','procedures/io-access','medications/antibiotics','pitfalls/circulation-errors','prolonged-holding/reassessment-rhythm','shipboard/circulation-at-sea','appendices/appendix-c','appendices/appendix-l','tools/dosecalc'],
      sources:[
        {title:'Vasoactive Medication V2 Hnatiuk 2026.pdf',file:'Vasoactive Medication V2 Hnatiuk 2026 .pdf',note:'Primary ACTT vasoactive medication reference.'},
        {title:'Push Dose Pressor.pdf',file:'Push Dose Pressor.pdf'},
        {title:'Inotrope comparison chart.pdf',file:'Inotrope comparison chart.pdf'}
      ]
    },
    {
      id:'seizure-meds',
      title:'Seizure Medications',
      severity:'red',
      sectionNumber:'6.9',
      content:'<h3>6.9 Seizure and Neurocritical Medications</h3>'+

        '<div class="drug-card">'+
        '<h4>6.9.1 Midazolam for Active Seizure</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> First-Line Seizure Termination</div>'+
        '<p>Midazolam 5 mg IV/IO/IM every 5 minutes until seizure activity stops. After seizure control is achieved, move immediately to definitive airway planning if respiratory status is compromised, check glucose, and plan for a longer-acting antiepileptic agent to prevent recurrence.</p></div>'+

        '<p><strong>Dosing:</strong> 5 mg IV/IO/IM. Repeat every 5 minutes until seizure stops.</p>'+
        '<p><strong>Post-seizure steps:</strong></p>'+
        '<ul>'+
        '<li>Plan for definitive airway control if respiratory effort is inadequate or GCS remains low.</li>'+
        '<li>Check blood glucose immediately. Hypoglycemia is a reversible cause of seizures.</li>'+
        '<li>Transition to a longer-acting antiepileptic (levetiracetam) to prevent recurrence.</li>'+
        '</ul>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.9.2 Levetiracetam</h4>'+
        '<p><strong>Clinical Role:</strong> Seizure loading and prophylaxis, particularly in traumatic brain injury. Does not replace benzodiazepine rescue for active seizures but helps prevent seizure recurrence after initial control.</p>'+

        '<p><strong>Dosing:</strong> 2 g (2000 mg) IV/IO over approximately 15 minutes.</p>'+
        '<p><strong>Administration:</strong> Ensure a patent IV/IO line before infusion. Infuse over 15 minutes to reduce infusion-related side effects.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Levetiracetam Does Not Replace Benzo Rescue</div>'+
        '<p>Levetiracetam is a maintenance and prophylactic agent. It does not work fast enough to terminate an active seizure. If a seizure is ongoing, use midazolam first. Levetiracetam is the follow-through to prevent the next seizure.</p></div>'+

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Availability<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Levetiracetam is not confirmed in standard Sick Bay stock. If unavailable, seizure prophylaxis may need to rely on repeated benzodiazepine dosing, which carries higher sedation and respiratory depression risk and creates a larger monitoring burden.</p>'+
        '</div></div>'+
        '</div>',
      relatedLinks:['algorithms/seizure-management','algorithms/tbi-management','medications/icp-meds','medications/analgesics','thresholds/neurologic-tbi','pitfalls/neurologic-errors','prolonged-holding/reassessment-rhythm','tools/gcs']
    },
    {
      id:'icp-meds',
      title:'ICP Medications',
      severity:'red',
      sectionNumber:'6.9',
      content:'<h3>6.9.3&ndash;6.9.4 Osmotic Therapy for Elevated Intracranial Pressure</h3>'+

        '<div class="drug-card">'+
        '<h4>6.9.3 Hypertonic Saline 3%</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Osmotic Therapy for Elevated ICP / Impending Herniation</div>'+
        '<p>Hypertonic saline 3% is the primary osmotic therapy for elevated intracranial pressure and impending cerebral herniation. Give when neurologic deterioration occurs, when a pupil becomes fixed and dilated, or when clinical signs suggest rising ICP that is progressing toward herniation.</p></div>'+

        '<p><strong>Clinical Role:</strong> Reduces cerebral edema by osmotic gradient. Draws fluid out of the brain parenchyma into the intravascular space.</p>'+
        '<p><strong>Dosing:</strong> 250 mL of 3% hypertonic saline IV over approximately 20 minutes.</p>'+
        '<p><strong>Indication triggers:</strong></p>'+
        '<ul>'+
        '<li>Neurologic deterioration in a TBI patient.</li>'+
        '<li>New or worsening unilateral pupil dilation.</li>'+
        '<li>Clinical signs of impending herniation: posturing, loss of brainstem reflexes, rapid GCS decline.</li>'+
        '</ul>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Hypertonic Saline Cautions</div>'+
        '<ul>'+
        '<li>Check sodium levels when possible. Avoid overcorrection of sodium.</li>'+
        '<li>Document the neurologic exam before and after administration to assess response.</li>'+
        '<li>Hypertonic saline is a temporizing measure. It does not fix the underlying pathology.</li>'+
        '</ul></div>'+

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Availability<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Hypertonic saline 3% is not confirmed in standard Sick Bay stock. If unavailable, mannitol may be an alternative if the patient is not hypotensive or volume-depleted. The absence of both osmotic agents is a hard limitation for ICP management at sea.</p>'+
        '</div></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.9.4 Mannitol</h4>'+
        '<p><strong>Clinical Role:</strong> Alternative osmotic agent for elevated ICP. Reduces intracranial pressure through osmotic diuresis.</p>'+
        '<p><strong>Dosing:</strong> 1 g/kg IV over approximately 20 minutes.</p>'+

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Mannitol Contraindications</div>'+
        '<ul>'+
        '<li><strong>Avoid when hypotensive:</strong> mannitol causes osmotic diuresis and can worsen hypovolemia.</li>'+
        '<li><strong>Avoid when actively bleeding:</strong> volume depletion from diuresis compounds hemorrhagic shock.</li>'+
        '<li><strong>Avoid when volume-depleted:</strong> the patient must have adequate intravascular volume before mannitol is safe to use.</li>'+
        '</ul>'+
        '<p>In the hypotensive or bleeding TBI patient, hypertonic saline is preferred because it does not cause diuresis.</p></div>'+

        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> Shipboard Availability<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Mannitol is not confirmed in standard Sick Bay stock. If neither hypertonic saline nor mannitol is available, ICP management is limited to positioning, ventilation control, seizure prevention, and avoiding secondary insults.</p>'+
        '</div></div>'+
        '</div>',
      relatedLinks:['algorithms/tbi-management','medications/seizure-meds','thresholds/neurologic-tbi','pitfalls/neurologic-errors','prolonged-holding/reassessment-rhythm','tools/gcs']
    },
    {
      id:'sedatives',
      title:'Procedural Support Medications',
      severity:'amber',
      sectionNumber:'6.10',
      content:'<h3>6.10 Procedural Support</h3>'+

        '<div class="drug-card">'+
        '<h4>6.10.1 Lidocaine</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Lidocaine 2%</div>'+
        '<p>Lidocaine 2% is confirmed in Sick Bay stock, including lidocaine with epinephrine. Available for IO pain control and local infiltration before procedures.</p></div>'+

        '<p><strong>IO Pain Control:</strong> 20&ndash;40 mg preservative-free 2% lidocaine administered slowly through the IO needle before infusion or medication administration. IO access without lidocaine is extremely painful in the conscious patient.</p>'+
        '<p><strong>Local Infiltration:</strong> Infiltrate the procedure site before incision, drain placement, or chest tube insertion when the clinical situation allows time for local anesthesia.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Lidocaine Dose Limits</div>'+
        '<p>Total lidocaine dose must not exceed safe limits. Without epinephrine: 4.5 mg/kg. With epinephrine: 7 mg/kg. Toxicity manifests as perioral numbness, tinnitus, confusion, seizures, and cardiac arrhythmia.</p></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.10.2 Ondansetron</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Ondansetron</div>'+
        '<p>Ondansetron is confirmed in Sick Bay stock.</p></div>'+

        '<p><strong>Clinical Role:</strong> Antiemetic. Prevention of vomiting during airway management, sedation, and transport. Vomiting in a sedated, supine, or restrained patient is an aspiration risk.</p>'+
        '<p><strong>Dosing:</strong> 4 mg IV/IM or orally disintegrating tablet (ODT).</p>'+
        '<p><strong>Note:</strong> Particularly important before transport and during post-procedural recovery in patients with reduced airway protection.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.10.3 Diphenhydramine</h4>'+
        '<p><strong>Clinical Role:</strong> Antihistamine for pruritus, allergic reactions, and treatment of dystonic reactions from other medications.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Sedation Risk</div>'+
        '<p>Diphenhydramine adds sedation, which can be hazardous in patients with borderline airway protection. In a patient who is already sedated or has reduced consciousness, the added sedation from diphenhydramine may compromise the airway. Use with caution and monitor respiratory status.</p></div>'+
        '</div>',
      relatedLinks:['procedures/io-access','procedures/chest-tube','medications/analgesics','medications/rsi-airway','thresholds/medication-safety','pitfalls/medication-errors','shipboard/medication-shipboard']
    },
    {
      id:'fibrinolytics',
      title:'Cardiovascular Emergency Medications',
      severity:'red',
      sectionNumber:'6.11',
      content:'<h3>6.11 Cardiovascular Emergency Medications</h3>'+

        '<div class="drug-card">'+
        '<h4>6.11.1 Tenecteplase</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> STEMI Fibrinolysis When PCI Is Not Available Within 90 Minutes</div>'+
        '<p>Tenecteplase is a fibrinolytic agent used for STEMI reperfusion when percutaneous coronary intervention (PCI) cannot be achieved within 90 minutes. This is a high-stakes, irreversible intervention. Use a structured contraindication screen and precise dosing.</p></div>'+

        '<h4>Absolute Contraindications</h4>'+
        '<ul>'+
        '<li>Any history of intracranial hemorrhage; known intracranial AVM or neoplasm.</li>'+
        '<li>Ischemic stroke within 3 months (except acute stroke within 4.5 hours).</li>'+
        '<li>Suspected aortic dissection or active major bleeding/bleeding diathesis.</li>'+
        '<li>Significant head or facial trauma within 3 months; intracranial or intraspinal surgery within 2 months.</li>'+
        '<li>Severe uncontrolled hypertension despite emergency therapy.</li>'+
        '</ul>'+

        '<h4>Relative Risks</h4>'+
        '<ul>'+
        '<li>Severe uncontrolled hypertension on presentation (SBP &gt; 180 or DBP &gt; 110) until treated.</li>'+
        '<li>Prior ischemic stroke &gt; 3 months, dementia, or other intracranial pathology not captured above.</li>'+
        '<li>Traumatic or prolonged CPR (&gt; 10 minutes) or major surgery within 3 weeks.</li>'+
        '<li>Recent internal bleeding within 2&ndash;4 weeks or non-compressible vascular puncture.</li>'+
        '<li>Pregnancy, active peptic ulcer, or current anticoagulant use/elevated INR (bleeding risk rises with higher INR).</li>'+
        '</ul>'+

        '<h4>Preparation and Administration</h4>'+
        '<ol>'+
        '<li>Confirm symptom onset, weight, and that aspirin/adjuncts are staged.</li>'+
        '<li>If dextrose has been running in the IV, stop and flush with normal saline.</li>'+
        '<li>Using the supplied device, withdraw 10 mL sterile water and inject into the vial; gentle swirl, do not shake. Final concentration is 5 mg/mL; label time and refrigerate up to 8 hours if delayed.</li>'+
        '<li>Draw the exact volume for the weight band, recap the cannula safely, and discard unused solution.</li>'+
        '<li>Administer as a single IV push over 5 seconds, then flush with normal saline.</li>'+
        '<li>Start anticoagulant within 5 minutes (see below) and complete P2Y12 plan.</li>'+
        '</ol>'+

        '<h4>Weight-Based Dosing</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Patient Weight</th><th>Tenecteplase Dose</th><th>Volume (5 mg/mL)</th></tr></thead><tbody>'+
        '<tr><td>&lt; 60 kg</td><td>30 mg</td><td>6 mL</td></tr>'+
        '<tr><td>60&ndash;69 kg</td><td>35 mg</td><td>7 mL</td></tr>'+
        '<tr><td>70&ndash;79 kg</td><td>40 mg</td><td>8 mL</td></tr>'+
        '<tr><td>80&ndash;89 kg</td><td>45 mg</td><td>9 mL</td></tr>'+
        '<tr><td>&ge; 90 kg</td><td>50 mg</td><td>10 mL</td></tr>'+
        '</tbody></table></div>'+

        '<p><strong>Adjuncts:</strong> Anticoagulation within 5 minutes: enoxaparin 30 mg IV then 1 mg/kg SC q12h (max 100 mg) if age &le; 75 and eGFR &ge; 30; otherwise use unfractionated heparin with low-PTT target. Clopidogrel: 300 mg load if naive, 75 mg if on &gt; 7 days; defer loading if age &gt; 75.</p>'+

        '<p><strong>Monitoring and Follow-Through:</strong> 12-lead at ~75 minutes for &ge; 50% ST resolution; continuous rhythm monitoring for reperfusion arrhythmias; neuro vital signs hourly x 4 then Q4H for the first 24 hours; bleeding surveillance with avoidance of new punctures for 24 hours. Define rescue PCI triggers (persistent ST elevation/pain, shock/worsening heart failure, refractory ventricular arrhythmia).</p>'+

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Common Tenecteplase Errors</div>'+
        '<ul>'+
        '<li>Wrong weight band or volume selection.</li>'+
        '<li>Incomplete contraindication screening or failure to treat severe hypertension first.</li>'+
        '<li>Reconstituting in or flushing with dextrose solutions; shaking the vial.</li>'+
        '<li>Skipping adjunctive anticoagulant/antiplatelet therapy or delaying it beyond 5 minutes.</li>'+
        '<li>Missing neurologic decline, bleeding, or reperfusion arrhythmias after administration.</li>'+
        '</ul></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.11.2 Enoxaparin</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Enoxaparin</div>'+
        '<p>Enoxaparin is confirmed in Sick Bay stock.</p></div>'+

        '<p><strong>Clinical Role:</strong> Low-molecular-weight heparin. Anticoagulant adjunct in STEMI fibrinolysis and venous thromboembolism prophylaxis.</p>'+
        '<p><strong>STEMI dosing (age &le; 75 with eGFR &ge; 30):</strong> 30 mg IV bolus, then 1 mg/kg subcutaneous every 12 hours (max 100 mg per dose).</p>'+
        '<p><strong>Modifications:</strong> Avoid enoxaparin when eGFR &lt; 30 or if age &gt; 75 (use unfractionated heparin instead). Renal impairment or low body weight may require extended interval or dose reduction.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.11.3 Heparin</h4>'+
        '<p><strong>Clinical Role:</strong> Infusion-based anticoagulation. Used when unfractionated heparin is the selected anticoagulant strategy.</p>'+
        '<p><strong>Administration:</strong> Requires deliberate setup with clear concentration labeling, documented rate, and scheduled rate checks. Follow the low-PTT target protocol after fibrinolysis.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Heparin Infusion Safety</div>'+
        '<p>Heparin infusions require clear labeling of concentration, documented infusion rate, and scheduled rate checks. Concentration errors and rate errors are among the most common high-risk medication mistakes. Use a standardized setup and read-back confirmation before starting.</p></div>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.11.4 Clopidogrel</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Clopidogrel</div>'+
        '<p>Clopidogrel is confirmed in Sick Bay stock.</p></div>'+

        '<p><strong>Clinical Role:</strong> Antiplatelet agent. Used as part of the adjunctive therapy package in STEMI fibrinolysis. Timing of administration is important and should follow the fibrinolysis protocol sequence.</p>'+
        '<p><strong>Dosing cues:</strong> 300 mg load if not previously on clopidogrel; 75 mg if already taking for &gt; 7 days; consider deferring the load if age &gt; 75 and bleeding risk is high.</p>'+
        '</div>',
      relatedLinks:['algorithms/stemi','checklists/fibrinolysis-screening','checklists/post-fibrinolysis-monitoring','thresholds/stemi-thresholds','medications/reversal-agents','pitfalls/circulation-errors','pitfalls/medication-errors','shipboard/medication-shipboard','appendices/appendix-c'],
      sources:[
        {title:'Fibrinolytic Checklist.pdf',file:'Fibrinolytic Checklist.pdf',note:'Primary ACTT fibrinolysis medication reference.'},
        {title:'Instructions for Use of Tenecteplase.pdf',file:'Instructions for Use of Tenecteplase.pdf'},
        {title:'STEMI Fibrinolytic Therapy Orders_REGIONAL_651_dbl sd pg 1-1A_May 2019.pdf',file:'STEMI Fibrinolytic Therapy Orders_REGIONAL_651_dbl sd pg 1-1A_May 2019.pdf'}
      ]
    },
    {
      id:'antibiotics',
      title:'Sepsis & Antibiotics',
      severity:'amber',
      sectionNumber:'6.12',
      content:'<h3>6.12 Sepsis and Antibiotics</h3>'+

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Do Not Delay the First Antibiotic Dose</div>'+
        '<p>Antibiotic administration is time-critical in severe sepsis and septic shock. The first dose should be given within 1 hour of recognition. Do not delay for diagnostic workup, imaging, or source confirmation when the clinical picture is clear. Every hour of delay worsens outcomes.</p></div>'+

        '<h4>Source-Based Empiric Regimens</h4>'+
        '<div class="table-wrapper"><table><thead><tr><th>Suspected Source</th><th>Empiric Regimen</th><th>Notes</th></tr></thead><tbody>'+
        '<tr><td>Unknown / Intra-abdominal</td><td>Ceftriaxone + Metronidazole</td><td>Broad-spectrum coverage including anaerobes.</td></tr>'+
        '<tr><td>Pneumonia</td><td>Ceftriaxone + Azithromycin</td><td>Covers typical and atypical respiratory pathogens.</td></tr>'+
        '<tr><td>CNS / Meningitis</td><td>Ceftriaxone + Ampicillin, &plusmn; Dexamethasone, &plusmn; Acyclovir</td><td>Ampicillin covers Listeria. Dexamethasone before or with first antibiotic dose for bacterial meningitis. Add acyclovir if viral encephalitis is suspected.</td></tr>'+
        '<tr><td>Skin / Soft Tissue</td><td>Cefazolin (non-purulent)</td><td>Clindamycin as alternative if cefazolin allergy or purulent infection suggesting MRSA.</td></tr>'+
        '<tr><td>Open / Penetrating TBI</td><td>Ertapenem + Moxifloxacin</td><td>Ceftriaxone as fallback if ertapenem and moxifloxacin are unavailable.</td></tr>'+
        '</tbody></table></div>'+

        '<h4>Key Antibiotic Entries</h4>'+

        '<div class="drug-card">'+
        '<h4>Ceftriaxone</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Ceftriaxone</div>'+
        '<p>Ceftriaxone is confirmed in Sick Bay stock. It is the backbone of most ACTT empiric regimens due to its broad-spectrum coverage, once-daily dosing, and availability.</p></div>'+
        '<p><strong>Clinical Role:</strong> Third-generation cephalosporin with broad gram-negative and gram-positive coverage. Central to most sepsis regimens in this chapter.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Metronidazole</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Metronidazole IV</div>'+
        '<p>Metronidazole IV is confirmed in Sick Bay stock.</p></div>'+
        '<p><strong>Clinical Role:</strong> Anaerobic coverage. Combined with ceftriaxone for intra-abdominal and unknown-source infections where anaerobic pathogens are likely.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Azithromycin</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Azithromycin IV</div>'+
        '<p>Azithromycin IV is confirmed in Sick Bay stock.</p></div>'+
        '<p><strong>Clinical Role:</strong> Atypical pathogen coverage for pneumonia. Combined with ceftriaxone to cover both typical and atypical respiratory organisms in community-acquired pneumonia.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Ampicillin</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Ampicillin</div>'+
        '<p>Ampicillin is confirmed in Sick Bay stock.</p></div>'+
        '<p><strong>Clinical Role:</strong> Provides Listeria coverage in CNS infections. Added to ceftriaxone in meningitis regimens, especially in patients at risk for Listeria (elderly, immunocompromised).</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Cefazolin</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Cefazolin</div>'+
        '<p>Cefazolin is confirmed in Sick Bay stock.</p></div>'+
        '<p><strong>Clinical Role:</strong> First-generation cephalosporin for skin and soft tissue infections, particularly non-purulent cellulitis and surgical wound prophylaxis.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Acyclovir</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Acyclovir Injection</div>'+
        '<p>Acyclovir injection is confirmed in Sick Bay stock.</p></div>'+
        '<p><strong>Clinical Role:</strong> Antiviral agent for suspected viral encephalitis. Added to the CNS infection regimen when herpes simplex encephalitis cannot be excluded.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>Ertapenem and Moxifloxacin</h4>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">NOT CONFIRMED</span> Ertapenem and Moxifloxacin</div>'+
        '<p>Neither ertapenem nor moxifloxacin is confirmed in standard Sick Bay stock. These agents are preferred for open and penetrating TBI but may not be available. Ceftriaxone is the fallback if these agents are unavailable.</p></div>'+
        '</div>',
      relatedLinks:['algorithms/sepsis','thresholds/sepsis-targets','medications/vasopressors','pitfalls/sepsis-errors','prolonged-holding/reassessment-rhythm','shipboard/medication-shipboard','appendices/appendix-c'],
      sources:[
        {title:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf',file:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf',note:'Primary ACTT sepsis antibiotic reference.'},
        {title:'Med Formulary v1.2 approved 19 Sep 2021.pdf',file:'Med Formulary v1.2 approved 19 Sep 2021.pdf'}
      ]
    },
    {
      id:'reversal-agents',
      title:'Reversal Agents',
      severity:'amber',
      sectionNumber:'6.13',
      content:'<h3>6.13 Reversal Agents</h3>'+

        '<div class="drug-card">'+
        '<h4>6.13.1 Naloxone</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Titrated Reversal &mdash; Do Not Give Full Dose Empirically</div>'+
        '<p>Naloxone reverses opioid toxicity but must be titrated carefully. A full rapid dose can precipitate acute withdrawal, severe vomiting, agitation, hypertension, and return of severe pain. The goal is to restore respiratory drive, not to fully reverse all opioid effect.</p></div>'+

        '<p><strong>Clinical Role:</strong> Opioid receptor antagonist. Reverses respiratory depression, sedation, and apnea caused by opioids.</p>'+

        '<h4>Titration Method</h4>'+
        '<ol>'+
        '<li>Dilute 0.4 mg naloxone in 10 mL normal saline (concentration: 0.04 mg/mL).</li>'+
        '<li>Administer small aliquots (1&ndash;2 mL at a time) IV slowly.</li>'+
        '<li>Reassess respiratory rate and effort after each aliquot.</li>'+
        '<li>Redose every 2&ndash;3 minutes until respiratory drive improves.</li>'+
        '<li>Stop when the patient is breathing adequately, not when fully awake.</li>'+
        '</ol>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Naloxone Duration Warning</div>'+
        '<p>Naloxone may wear off before the opioid does. After successful reversal, the patient must be monitored for re-sedation and recurrent respiratory depression. This is especially important with long-acting opioids such as morphine and hydromorphone. Re-dosing may be necessary.</p></div>'+

        '<p><strong>Be ready for:</strong> Vomiting (position patient to protect airway), agitation, acute pain return, and hemodynamic changes.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.13.2 Flumazenil</h4>'+
        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> Narrow Role &mdash; Risk of Seizures</div>'+
        '<p>Flumazenil is a benzodiazepine antagonist with a very narrow clinical role. It can precipitate seizures in patients who are chronic benzodiazepine users or who have co-ingested proconvulsant agents. In ACTT, it should be reserved for rare, selective rescue situations where the benefit clearly outweighs the seizure risk.</p></div>'+

        '<p><strong>Clinical Role:</strong> Reverses benzodiazepine-induced sedation and respiratory depression in carefully selected patients.</p>'+
        '<p><strong>Use:</strong> Rare and selective. Do not use empirically in unknown overdose or in patients with chronic benzodiazepine use.</p>'+
        '</div>'+

        '<div class="drug-card">'+
        '<h4>6.13.3 Protamine</h4>'+
        '<div class="severity-card green"><div class="sc-title"><span class="sc-label">CONFIRMED ONBOARD</span> Protamine Sulfate</div>'+
        '<p>Protamine sulfate is confirmed in Sick Bay stock.</p></div>'+

        '<p><strong>Clinical Role:</strong> Reversal agent for heparin anticoagulation. Provides partial reversal for enoxaparin. Used when life-threatening bleeding occurs in a patient receiving heparin or enoxaparin.</p>'+

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Protamine Administration</div>'+
        '<ul>'+
        '<li>Deliberate dosing is required. The dose depends on how much heparin was given and how recently.</li>'+
        '<li>Administer slowly. Rapid administration causes hypotension and hypersensitivity reactions.</li>'+
        '<li>Watch for hypotension, bradycardia, and allergic reactions during and after infusion.</li>'+
        '<li>Reversal of enoxaparin is only partial. Protamine does not fully neutralize the anti-Xa activity of low-molecular-weight heparin.</li>'+
        '</ul></div>'+
        '</div>',
      relatedLinks:['medications/analgesics','medications/fibrinolytics','thresholds/medication-safety','pitfalls/medication-errors','prolonged-holding/sedation-pain','appendices/appendix-c']
    },
    {
      id:'medication-errors-extended',
      title:'Medication Errors and Extended Care',
      severity:'amber',
      sectionNumber:'6.14',
      content:'<h3>6.14 Medication Use Over 24&ndash;72 Hours (Extended Care)</h3>'+
        '<p>When evacuation is delayed, medication management shifts from single-dose acute care to sustained pharmacologic support. This requires planning for repeat dosing, supply tracking, line surveillance, and clear documentation that survives watch turnover.</p>'+

        '<h4>Extended Care Principles</h4>'+
        '<ul>'+
        '<li><strong>Repeat dosing documentation:</strong> Every dose must be recorded with time, amount, route, and response. During prolonged holds, memory alone is not reliable.</li>'+
        '<li><strong>Transition to maintenance:</strong> After acute stabilization, reassess whether the current dose and frequency remain appropriate or whether the patient can be transitioned to a lower-intensity maintenance regimen.</li>'+
        '<li><strong>Avoid stacking:</strong> During extended care, repeated PRN dosing without clear reassessment intervals leads to dose stacking, excessive sedation, and respiratory compromise.</li>'+
        '<li><strong>Track supply:</strong> Count remaining stock of critical medications early and project needs based on current dosing frequency. If supply will be exhausted before evacuation, adjust the plan now rather than later.</li>'+
        '<li><strong>Line surveillance:</strong> Prolonged IV or IO use increases the risk of infiltration, infection, and line failure. Include line site checks in every reassessment cycle.</li>'+
        '</ul>'+

        '<h4>Good Delayed MEDEVAC Medication Plan</h4>'+
        '<p>Every medication administered during a prolonged hold should have a documented plan that includes:</p>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">PLANNING</span> Required Elements for Each Medication</div>'+
        '<ul>'+
        '<li><strong>Indication:</strong> Why the drug is being given.</li>'+
        '<li><strong>Current dose:</strong> What was last given, when, and by what route.</li>'+
        '<li><strong>Next planned dose:</strong> When the next dose is due and what triggers early redosing.</li>'+
        '<li><strong>Hold parameters:</strong> Under what conditions the medication should be withheld (e.g., hold sedation if RR &lt; 10, hold pressor if SBP &gt; target).</li>'+
        '<li><strong>Rescue medication:</strong> What to give if the primary drug causes a complication (e.g., naloxone for opioid over-sedation, phentolamine for pressor extravasation).</li>'+
        '<li><strong>Monitoring burden:</strong> What must be observed because this drug is running, and who is responsible.</li>'+
        '</ul></div>'+

        '<h3>6.15 Common Medication Errors</h3>'+
        '<p>The following errors are the most commonly observed medication mistakes in high-acuity care. Each is preventable with discipline, verification, and structured practice.</p>'+

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> High-Risk Medication Errors</div>'+
        '<ul>'+
        '<li><strong>Right drug, wrong indication:</strong> Giving the correct medication for the wrong clinical reason. Example: epinephrine at the arrest dose for anaphylaxis, or naloxone in a non-opioid overdose.</li>'+
        '<li><strong>Dose by memory, not calculation:</strong> Relying on remembered doses rather than weight-based or protocol-based calculation. This leads to over- or under-dosing, especially with less familiar medications.</li>'+
        '<li><strong>Wrong concentration:</strong> Using the wrong vial concentration. Epinephrine is the most dangerous example: 1:1,000 versus 1:10,000 concentration errors can be fatal.</li>'+
        '<li><strong>Correct dose, too fast:</strong> Administering the right dose at the wrong rate. Rapid IV push of fentanyl (chest wall rigidity), midazolam (apnea), or vancomycin (red man syndrome) can cause serious harm even at correct doses.</li>'+
        '<li><strong>Failure to reassess:</strong> Giving a medication and not checking whether it worked, caused harm, or needs adjustment. Every dose must be followed by reassessment.</li>'+
        '<li><strong>Failure to anticipate airway consequences:</strong> Giving sedatives, opioids, or paralytics without a plan for airway management if respiratory depression occurs.</li>'+
        '<li><strong>No continuation plan:</strong> Treating the acute problem and then not planning what happens next: when to redose, what to monitor, and when to stop.</li>'+
        '<li><strong>No documentation:</strong> If the dose is not recorded, the next provider cannot safely continue care. Undocumented medication use during prolonged holds is a patient safety emergency.</li>'+
        '</ul></div>',
      relatedLinks:['pitfalls/medication-errors','pitfalls/documentation-errors','pitfalls/error-prevention','prolonged-holding/sedation-pain','prolonged-holding/reassessment-rhythm','prolonged-holding/device-maintenance','team/handover','team/documentation','shipboard/medication-shipboard','tools/dosecalc']
    }
  ]
};
