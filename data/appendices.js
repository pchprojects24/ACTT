window.ACTT=window.ACTT||{};
window.ACTT.appendices={
  id:'appendices',
  title:'Quick Reference Appendices',
  subtitle:'Chapter 13 — Rapid-Access Reference Tools',
  chapter:13,
  intro:'<p>This chapter converts the detailed manual into a fast-use toolkit. The intent is to reduce scan time during preparation, scenario work, and real clinical events by presenting the material in compact forms: algorithm cards, procedure checklists, drug tables, threshold tables, prolonged-hold checklists, and shipboard aids. It is designed for rapid retrieval, not full teaching.</p>' +
    '<p><strong>How to Use These Appendices:</strong> Use these pages when you need the exact trigger, the next step, the dose, the reminder for setup, or the immediate reassessment target. They support quick refresh before a skill station, fast reference during a long hold, and structured handover preparation. They do not replace the detailed chapters; they distill them.</p>' +
    '<p><strong>Design Rules for Fast Retrieval:</strong> Every appendix should answer one operational question quickly. Keep attention on what changes decisions: thresholds, actions, doses, cautions, and what must be checked next. If the patient is unstable, use the appendix to orient action, then return to the detailed chapter if time permits.</p>',
  sections:[
    {
      id:'appendix-a',
      title:'Appendix A — Algorithm Summary Cards',
      content:
        '<p>These summary sheets are compressed action maps. Each one should be read as: recognize, intervene, reassess, escalate.</p>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Algorithm</th><th>Entry Trigger</th><th>Immediate Actions</th><th>Branch Points</th><th>Reassess</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>ATLS trauma survey</strong></td>' +
          '<td>Any blunt, penetrating, blast, crush, or burn trauma with possible associated injury</td>' +
          '<td>XABCDE: control exsanguinating hemorrhage, then airway, breathing, circulation, disability, expose and prevent hypothermia</td>' +
          '<td>Do not enter the secondary survey until immediate threats are controlled or temporized; branch to airway, chest decompression, TBI, burn, or shock pathways as needed</td>' +
          '<td>Repeat XABCDE after every intervention, move, or deterioration; then trend AMPLE history, head-to-toe findings, vitals, urine output, and device function</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Airway failure / severe AMS</strong></td>' +
          '<td>GCS 8 or less, inability to protect airway, major facial trauma, complete or impending obstruction</td>' +
          '<td>Oxygen, suction, positioning, monitor, preoxygenate, prepare RSI or go directly to surgical airway if oral route is not viable</td>' +
          '<td>Difficult airway: one attempt. Non-difficult airway: two attempts if oxygenation holds. Failed airway moves immediately to rescue/surgical airway</td>' +
          '<td>EtCO\u2082, chest rise, bilateral breath sounds, tube depth, post-intubation sedation, ventilation target</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Combative patient</strong></td>' +
          '<td>Unsafe agitation, violent behavior, severe AMS interfering with care</td>' +
          '<td>Verbal de-escalation first, then physical control if required, obtain O\u2082 and monitoring if possible, check glucose when feasible</td>' +
          '<td>Chemical restraint if unsafe despite verbal control. Escalate to airway pathway if still dangerous or cannot maintain safety</td>' +
          '<td>Airway, breathing, SpO\u2082, sedation effect, occult causes such as hypoxia, hypoglycemia, TBI, sepsis</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>TBI management</strong></td>' +
          '<td>Suspected head injury with reduced GCS, abnormal pupils, seizure, worsening LOC</td>' +
          '<td>Protect airway if needed, avoid hypoxia, maintain SBP above 110 mmHg, elevate head, treat fever and seizures, avoid hypotonic fluids</td>' +
          '<td>If herniation signs appear, brief hyperventilation to EtCO\u2082 around 30 mmHg plus hypertonic saline or mannitol if appropriate</td>' +
          '<td>Serial GCS, pupils, BP, oxygenation, EtCO\u2082, seizure recurrence, neurologic trend</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Burn management</strong></td>' +
          '<td>Large TBSA burn, inhalation injury, circumferential burn, electrical burn</td>' +
          '<td>Assess airway early, estimate TBSA, start Rule of 10s, consider Foley, target urine output, protect temperature, control pain</td>' +
          '<td>Increase or decrease fluids by 25 percent based on urine output. Early airway for major inhalation injury or greater than 40 percent TBSA</td>' +
          '<td>Urine output, airway swelling, distal perfusion, edema progression, temperature, respiratory status</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Hypothermia</strong></td>' +
          '<td>Cold exposure with reduced temperature, altered consciousness, or arrest</td>' +
          '<td>Prevent further heat loss, handle gently, stage by core temperature, start appropriate rewarming</td>' +
          '<td>Stage IV arrest uses modified arrest logic with limited epinephrine/defibrillation until meaningful rewarming</td>' +
          '<td>Core temperature, rhythm, perfusion, rewarming progress, transport options including ECMO window</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Sepsis / septic shock</strong></td>' +
          '<td>Suspected infection plus poor perfusion, hypotension, or mental status change</td>' +
          '<td>Access, initial crystalloid if tolerated, early antibiotics, source-directed assessment, pressor preparation if refractory</td>' +
          '<td>Stop reflex fluid if respiratory burden rises. Start norepinephrine when hypotension persists after initial resuscitation</td>' +
          '<td>MAP, urine output, perfusion, oxygen need, fever curve, pressor requirement</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>STEMI / fibrinolysis</strong></td>' +
          '<td>Ischemic symptoms plus STEMI ECG and PCI delay beyond practical window</td>' +
          '<td>Confirm ECG pattern, screen contraindications, prepare tenecteplase, give adjunct antiplatelet and anticoagulant therapy</td>' +
          '<td>If fibrinolysis contraindicated, shift to supportive care and urgent evacuation planning</td>' +
          '<td>Bleeding, neurologic change, reperfusion arrhythmias, persistent ischemia</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Tension pneumothorax</strong></td>' +
          '<td>Respiratory distress with unilateral absent breath sounds, hypotension, JVD, or arrest concern</td>' +
          '<td>Immediate needle thoracostomy if suspicion is high, do not wait for perfect confirmation</td>' +
          '<td>If no improvement, reassess site, device, and alternate causes. If temporary improvement only, proceed to chest tube</td>' +
          '<td>Breathing, BP, breath sounds, repeat tension signs, chest tube readiness</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[],
      sources:[
        {title:'ACTT 2026-01 ATLS.pdf',file:'ACTT 2026-01 ATLS.pdf'},
        {title:'Trauma Acute Care Clinical Record.pdf',file:'Trauma Acute Care Clinical Record.pdf'},
        {title:'ACTT 2026-01 Airway.pdf',file:'ACTT 2026-01 Airway .pdf'},
        {title:'Burns - Dr Papp - AMTRP 0045.pdf',file:'Burns - Dr Papp - AMTRP 0045.pdf'},
        {title:'Hypothermia and Drowning Jerome 2026-02.pdf',file:'Hypothermia and Drowning Jerome 2026-02.pdf'},
        {title:'Sepsis ACTT feb 2026.pptx',file:'Sepsis ACTT feb 2026.pptx'},
        {title:'Acute chest pain Protocol.pdf',file:'Acute chest pain Protocol.pdf'}
      ]
    },
    {
      id:'appendix-b',
      title:'Appendix B — Procedure Checklists',
      content:
        '<p>These checklists are built as Ready \u2013 Perform \u2013 Confirm \u2013 Maintain tools. They are not substitutes for training, but they help preserve sequence discipline.</p>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Procedure</th><th>Ready / Perform Essentials</th><th>Confirm / Maintain</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>RSI</strong></td>' +
          '<td>Indication confirmed; team roles assigned; suction, oxygen, laryngoscopy, tube, bougie, rescue airway ready; meds drawn up; attempt limit and failed-airway trigger stated</td>' +
          '<td>EtCO\u2082, chest rise, breath sounds, tube depth, secure tube, begin ongoing sedation and ventilatory targeting</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Surgical cricothyroidotomy</strong></td>' +
          '<td>Rescue airway indication, landmarks identified, scalpel/hook/tube/suction ready</td>' +
          '<td>Ventilate, confirm with EtCO\u2082 and chest rise, secure firmly, monitor bleeding and patency</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Needle cricothyroidotomy</strong></td>' +
          '<td>Temporary cannot-intubate/cannot-oxygenate bridge only; 14G catheter and adapter ready</td>' +
          '<td>Confirm oxygenation response and move immediately toward definitive airway</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Needle thoracostomy</strong></td>' +
          '<td>Tension suspected, 14G 3.25-inch catheter, correct site identified</td>' +
          '<td>Look for decompression effect, reassess vitals and breath sounds, prepare chest tube</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Chest tube thoracostomy</strong></td>' +
          '<td>Indication, correct tube size, sterile supplies, drainage system, local anesthesia/sedation if time allows</td>' +
          '<td>Check drainage, bubbling/output, tube position, securement, ongoing function checks</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>IO access</strong></td>' +
          '<td>2 failed IV attempts or time-critical access need, proper site identified, flush and securement ready</td>' +
          '<td>Easy flush, no extravasation, pressure-assist if needed, monitor site and pain</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Foley catheter</strong></td>' +
          '<td>Need for strict urine output or retention relief, no urethral injury concern</td>' +
          '<td>Urine return, balloon in correct position, secured drainage bag, output charting</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Pericardiocentesis</strong></td>' +
          '<td>Strong tamponade concern, best approach selected, ultrasound if available</td>' +
          '<td>Aspiration with hemodynamic response, continued monitoring, urgent transfer planning</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Shoulder reduction</strong></td>' +
          '<td>Neurovascular exam first, analgesia/sedation plan, chosen technique and backup</td>' +
          '<td>Reduction confirmed clinically, repeat neurovascular check, sling/immobilize, pain control</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[],
      sources:[
        {title:'RSI Check List and Intubation.pdf',file:'RSI Check List and Intubation.pdf'},
        {title:'Cricothyroidotomy.pdf',file:'Cricothyroidotomy.pdf'},
        {title:'ACTT 2026-01 Procedural Sedation.pdf',file:'ACTT 2026-01 Procedural Sedation.pdf'},
        {title:'EZIO.pdf',file:'EZIO.pdf'},
        {title:'Setup - Pleurevac.pdf',file:'Setup - Pleurevac.pdf'}
      ]
    },
    {
      id:'appendix-c',
      title:'Appendix C — Drug Quick-Reference Tables',
      content:
        '<p>The drug tables below are built around the bedside questions: why am I giving this, how much, how do I give it, and what do I need to watch?</p>' +

        '<h4>Sedation and Analgesia</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>Primary Use</th><th>Adult Dose</th><th>Administration</th><th>Key Caution</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Ketamine</strong></td>' +
          '<td>Analgesia, procedural sedation, combative patient, induction</td>' +
          '<td>Pain: 0.1\u20130.2 mg/kg IV/IO slow. Sedation: 1 mg/kg IV/IO or 4\u20135 mg/kg IM</td>' +
          '<td>Slow IV push. Differentiate pain dose from dissociative dose</td>' +
          '<td>Airway, SpO\u2082, EtCO\u2082, BP/HR. Rapid IV push can depress breathing; avoid using alone for RSI</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Midazolam</strong></td>' +
          '<td>Sedation, anxiolysis, seizure rescue, ketamine adjunct</td>' +
          '<td>Sedation: 1\u20132.5 mg IV/IO. Seizure: 5 mg IV/IO/IM q5 min until controlled</td>' +
          '<td>Slow IV push; may repeat based on response</td>' +
          '<td>Respiratory depression, hypotension, cumulative sedation, especially with opioids</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Hydromorphone</strong></td>' +
          '<td>Preferred prolonged-care opioid for moderate/severe pain</td>' +
          '<td>0.5\u20131 mg IV for opioid-naive adults; reassess before repeat dosing</td>' +
          '<td>Titrate slowly in small increments</td>' +
          '<td>Respiratory depression, oversedation, hypotension; track cumulative effect</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Fentanyl</strong></td>' +
          '<td>Rapid analgesia, short-acting pain control</td>' +
          '<td>25\u2013100 mcg IV/IO</td>' +
          '<td>Give slowly; OTFC only for selected awake patients if applicable</td>' +
          '<td>Fast push can cause respiratory depression or chest wall rigidity</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Morphine</strong></td>' +
          '<td>Alternative opioid when other options unavailable</td>' +
          '<td>2.5\u201310 mg IV/IO depending on patient and context</td>' +
          '<td>Slow titration</td>' +
          '<td>Higher hypotension and histamine/pruritus burden</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>RSI and Airway Medications</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Medication</th><th>Role</th><th>Use</th><th>Practical Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Ketamine</strong></td>' +
          '<td>Induction</td>' +
          '<td>1 mg/kg IV/IO typical ACTT reference point</td>' +
          '<td>Hemodynamically useful induction option; pair with paralytic in RSI</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Succinylcholine</strong></td>' +
          '<td>Paralysis</td>' +
          '<td>Follow local directive / weight-based dosing</td>' +
          '<td>Rapid onset, shorter duration; check major contraindications</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Rocuronium</strong></td>' +
          '<td>Paralysis</td>' +
          '<td>Follow local directive / weight-based dosing</td>' +
          '<td>Longer duration; useful when succinylcholine not suitable</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Post-intubation sedation</strong></td>' +
          '<td>Maintain comfort and tube tolerance</td>' +
          '<td>Continue ketamine / midazolam / analgesia as indicated</td>' +
          '<td>Do not leave newly intubated patient unsedated</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Pressor and Hemodynamic Support</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>When Used</th><th>Dose / Start Point</th><th>Key Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Norepinephrine</strong></td>' +
          '<td>First-line pressor in septic/vasodilatory shock</td>' +
          '<td>2\u20134 mcg/min to start, titrate to effect</td>' +
          '<td>Infusion pump required; monitor MAP, perfusion, and IV site closely; extravasation can cause tissue injury</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Epinephrine</strong></td>' +
          '<td>Anaphylaxis, cardiac arrest, infusion for shock, or push-dose bridge for sudden hypotension</td>' +
          '<td>0.3\u20130.5 mg IM for anaphylaxis; 1 mg IV q3\u20135 min arrest; infusion 2\u201310 mcg/min; push-dose 5\u201320 mcg q2\u20135 min</td>' +
          '<td>Avoid concentration confusion; say the indication out loud before giving any dose</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Vasopressin</strong></td>' +
          '<td>Add-on in septic or vasodilatory shock when catecholamine needs are rising</td>' +
          '<td>0.02\u20130.04 units/min</td>' +
          '<td>Non-adrenergic vasoconstrictor; adjunct, not the fast titration drug</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Dopamine</strong></td>' +
          '<td>Fallback mixed inotrope/pressor when preferred agents are unavailable</td>' +
          '<td>2\u201310 mcg/kg/min, titrate up to 20 mcg/kg/min</td>' +
          '<td>More arrhythmogenic and less predictable than norepinephrine</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Dobutamine</strong></td>' +
          '<td>Low-output / cardiogenic picture when contractility support is needed</td>' +
          '<td>2\u201310 mcg/kg/min, titrate to response</td>' +
          '<td>Inotrope with mild vasodilation; hypotension may worsen if pressure is not already supported</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Push-dose epinephrine</strong></td>' +
          '<td>Transient peri-intubation, RSI, or sedation-related hypotension while fixing the cause or preparing an infusion</td>' +
          '<td>10 mcg/mL syringe; 0.5\u20132 mL IV push q2\u20135 min</td>' +
          '<td>Bridge only. Do not give the 1 mg cardiac arrest dose to a patient with a pulse</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Phentolamine</strong></td>' +
          '<td>Extravasation rescue</td>' +
          '<td>5\u201310 mg diluted for local infiltration</td>' +
          '<td>Use promptly if vasopressor extravasation occurs</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +
        '<p><strong>Bedside choice:</strong> vasodilated and hypotensive usually means norepinephrine first; weak pump with acceptable pressure points toward dobutamine; push-dose epinephrine is a temporary bridge, not a long-term shock plan.</p>' +
        '<h4>Push-Dose Epinephrine Mixing Aid</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Step</th><th>Action</th></tr></thead>' +
        '<tbody>' +
        '<tr><td>1</td><td>Place 9 mL normal saline in a 10 mL syringe.</td></tr>' +
        '<tr><td>2</td><td>Add 1 mL of cardiac epinephrine 0.1 mg/mL (1:10,000).</td></tr>' +
        '<tr><td>3</td><td>Final concentration = 10 mcg/mL. Label the syringe.</td></tr>' +
        '<tr><td>4</td><td>Give 0.5\u20132 mL (5\u201320 mcg) slow IV push every 2\u20135 min to effect, with reassessment after each dose.</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Neuro, Seizure, and ICP Medications</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>Trigger</th><th>Dose</th><th>Key Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Midazolam</strong></td>' +
          '<td>Active seizure termination</td>' +
          '<td>5 mg IV/IO/IM q5 min until seizure stops</td>' +
          '<td>Protect airway and reassess for repeat seizure</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Levetiracetam</strong></td>' +
          '<td>Seizure loading / maintenance support</td>' +
          '<td>2000 mg IV/IO over about 15 min</td>' +
          '<td>Useful after acute seizure control in TBI or recurrent seizure risk</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Hypertonic saline 3%</strong></td>' +
          '<td>ICP support / impending herniation</td>' +
          '<td>250 mL bolus over about 20 min</td>' +
          '<td>Monitor sodium and neurologic response</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Mannitol</strong></td>' +
          '<td>Alternative ICP-lowering agent</td>' +
          '<td>1 g/kg IV over about 20 min</td>' +
          '<td>Avoid when hypotensive or actively bleeding</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Cardiovascular Emergency Medications</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>Use</th><th>Dose</th><th>Key Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Tenecteplase</strong></td>' +
          '<td>STEMI with delayed PCI and no absolute contraindication</td>' +
          '<td>30/35/40/45/50 mg by weight band</td>' +
          '<td>Reconstitute gently; do not shake; IV push over 5 seconds</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Enoxaparin</strong></td>' +
          '<td>Adjunct after fibrinolysis</td>' +
          '<td>30 mg IV bolus then 1 mg/kg SQ q12h in appropriate patients</td>' +
          '<td>Check age and renal caveats</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Heparin</strong></td>' +
          '<td>Alternative adjunct anticoagulation</td>' +
          '<td>Weight-based bolus then infusion</td>' +
          '<td>If monitored, target PTT about 50\u201370 seconds</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Clopidogrel</strong></td>' +
          '<td>Antiplatelet adjunct</td>' +
          '<td>300 mg PO load, or 75 mg in selected previously-treated patients</td>' +
          '<td>Account for bleeding risk and timing</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Sepsis and Antibiotic Quick Reference</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Scenario</th><th>Regimen</th><th>Timing</th><th>Key Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Unknown source</strong></td>' +
          '<td>Ceftriaxone 2 g IV q24h + Metronidazole 500 mg IV q12h</td>' +
          '<td>Start within 1 hour in severe sepsis / shock</td>' +
          '<td>Good broad initial coverage while source remains unclear</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Pneumonia</strong></td>' +
          '<td>Ceftriaxone 2 g IV q24h + Azithromycin 500 mg IV q24h</td>' +
          '<td>Start early once suspected source established</td>' +
          '<td>Monitor respiratory burden and ongoing sepsis response</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>CNS / meningitis</strong></td>' +
          '<td>Ceftriaxone 2 g IV q12h + Ampicillin 2 g IV q4h + Dexamethasone + Acyclovir</td>' +
          '<td>High consequence; do not delay without reason</td>' +
          '<td>Track neuro status closely</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Skin / soft tissue</strong></td>' +
          '<td>Cefazolin 2 g IV q8h or Clindamycin 300 mg IV q6h in selected purulent cases</td>' +
          '<td>Choose regimen by presentation</td>' +
          '<td>Reassess source control needs</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Open / penetrating TBI</strong></td>' +
          '<td>Ertapenem 1 g IV q24h + Moxifloxacin 400 mg PO q24h, or ceftriaxone-based alternative</td>' +
          '<td>Special contamination-focused pathway</td>' +
          '<td>Useful to flag when course knowledge exceeds current stock</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Reversal and Rescue Medications</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>Role</th><th>Dose</th><th>Key Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Naloxone</strong></td>' +
          '<td>Opioid reversal</td>' +
          '<td>0.4\u20132 mg IV/IM/IN; titrate slowly if possible</td>' +
          '<td>Avoid abrupt full reversal when partial reversal will restore breathing</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Flumazenil</strong></td>' +
          '<td>Selected benzodiazepine reversal only</td>' +
          '<td>0.2 mg IV over 15 seconds initially</td>' +
          '<td>Avoid in chronic benzodiazepine users due to seizure risk</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Protamine</strong></td>' +
          '<td>Heparin / partial enoxaparin reversal</td>' +
          '<td>Dose by amount and timing of anticoagulant exposure</td>' +
          '<td>Use when bleeding complication makes reversal necessary</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Ondansetron</strong></td>' +
          '<td>Nausea / vomiting control</td>' +
          '<td>4 mg ODT/IV/IM</td>' +
          '<td>Useful after opioids, ketamine, or systemic illness</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Diphenhydramine</strong></td>' +
          '<td>Allergy, pruritus, dystonia</td>' +
          '<td>25\u201350 mg IV/IM/PO</td>' +
          '<td>Adds sedation burden; use deliberately</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:['medications/vasopressors','algorithms/sepsis','appendices/appendix-l','thresholds/hemodynamic','prolonged-holding/reassessment-rhythm'],
      sources:[
        {title:'Med Tech Ketamine for Pain.pdf',file:'Med Tech Ketamine for Pain.pdf'},
        {title:'Vasoactive Medication V2 Hnatiuk 2026.pdf',file:'Vasoactive Medication V2 Hnatiuk 2026 .pdf'},
        {title:'Fibrinolytic Checklist.pdf',file:'Fibrinolytic Checklist.pdf'},
        {title:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf',file:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf'}
      ]
    },
    {
      id:'appendix-d',
      title:'Appendix D — Threshold and Target Tables',
      content:
        '<p>All numeric thresholds and targets used across the ACTT manual, consolidated for rapid reference.</p>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Parameter</th><th>Target / Threshold</th><th>Why It Matters / Action</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>GCS</strong></td><td>8 or less</td><td>Prepare for definitive airway / airway reassessment</td></tr>' +
        '<tr><td><strong>SpO\u2082</strong></td><td>Above 95 percent in key neuro-risk patients</td><td>Increase oxygen support; reassess airway / ventilation</td></tr>' +
        '<tr><td><strong>EtCO\u2082 (TBI target)</strong></td><td>35\u201340 mmHg</td><td>Adjust ventilation to neuroprotective range</td></tr>' +
        '<tr><td><strong>EtCO\u2082 (herniation rescue)</strong></td><td>About 30 mmHg, temporary only</td><td>Brief rescue hyperventilation while applying other ICP measures</td></tr>' +
        '<tr><td><strong>Tidal volume</strong></td><td>6 mL/kg predicted body weight (range 5\u20138)</td><td>Set lung-protective ventilation</td></tr>' +
        '<tr><td><strong>SBP in TBI</strong></td><td>Above 110 mmHg</td><td>Support cerebral perfusion</td></tr>' +
        '<tr><td><strong>MAP in septic shock</strong></td><td>65 mmHg or higher</td><td>Titrate pressor support</td></tr>' +
        '<tr><td><strong>ONSD</strong></td><td>Greater than 5.2 mm</td><td>Supports concern for elevated ICP in context</td></tr>' +
        '<tr><td><strong>Serum sodium with hypertonic therapy</strong></td><td>145\u2013160 mmol/L</td><td>Guide ICP-support strategy, avoid overcorrection</td></tr>' +
        '<tr><td><strong>Rule of 10s</strong></td><td>TBSA percent \u00d7 10 = mL/hr, plus 100 mL/hr per 10 kg above 80 kg</td><td>Set initial burn fluid rate</td></tr>' +
        '<tr><td><strong>Urine output, adult burn</strong></td><td>30\u201350 mL/hr</td><td>Titrate burn fluids</td></tr>' +
        '<tr><td><strong>Urine output, electrical / crush burn</strong></td><td>70\u2013100 mL/hr</td><td>Higher target to protect kidneys</td></tr>' +
        '<tr><td><strong>Burn fluid adjustment</strong></td><td>25 percent up or down</td><td>Change rate based on urine output response</td></tr>' +
        '<tr><td><strong>Major burn airway trigger</strong></td><td>More than 40 percent TBSA or major inhalation injury</td><td>Plan early airway control</td></tr>' +
        '<tr><td><strong>Hypothermia stages</strong></td><td>I: 32\u201335\u00b0C; II: 28\u201332\u00b0C; III: below 28\u00b0C with vitals; IV: absent vitals</td><td>Stage drives management</td></tr>' +
        '<tr><td><strong>Warmed IV fluids</strong></td><td>About 38\u201342\u00b0C</td><td>Support active rewarming</td></tr>' +
        '<tr><td><strong>ECMO transfer benchmark</strong></td><td>Within 6 hours in salvageable hypothermic arrest</td><td>May justify prolonged resuscitation</td></tr>' +
        '<tr><td><strong>Sepsis crystalloid start</strong></td><td>30 mL/kg over first 3 hours if appropriate</td><td>Initial septic resuscitation, then reassess</td></tr>' +
        '<tr><td><strong>Antibiotic window</strong></td><td>Within 1 hour in severe sepsis / shock</td><td>Do not delay unnecessarily</td></tr>' +
        '<tr><td><strong>STEMI threshold</strong></td><td>ST elevation over 1 mm in 2 contiguous leads plus ischemic symptoms</td><td>Activate STEMI pathway</td></tr>' +
        '<tr><td><strong>PCI delay threshold</strong></td><td>More than 90 minutes</td><td>Fibrinolysis becomes practical option if eligible</td></tr>' +
        '<tr><td><strong>Acetaminophen maximum</strong></td><td>4000 mg per day</td><td>Avoid hepatotoxic total dosing</td></tr>' +
        '<tr><td><strong>Needle thoracostomy device</strong></td><td>14G, 3.25-inch catheter</td><td>Use appropriate decompression equipment</td></tr>' +
        '<tr><td><strong>Chest tube suction setup</strong></td><td>Negative 20 cm H\u2082O</td><td>Standard Pleurivac reference point</td></tr>' +
        '<tr><td><strong>IO switch rule</strong></td><td>After 2 failed IV attempts or more than 90 seconds in urgent need</td><td>Do not lose time pursuing failed peripheral access</td></tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[],
      sources:[
        {title:'Burn Fluid Resus Flowsheet.pdf',file:'Burn Fluid Resus Flowsheet.pdf'},
        {title:'Hypothermia and Drowning Jerome 2026-02.pdf',file:'Hypothermia and Drowning Jerome 2026-02.pdf'},
        {title:'Sepsis ACTT feb 2026.pptx',file:'Sepsis ACTT feb 2026.pptx'},
        {title:'Acute chest pain Protocol.pdf',file:'Acute chest pain Protocol.pdf'},
        {title:'EZIO.pdf',file:'EZIO.pdf'}
      ]
    },
    {
      id:'appendix-e',
      title:'Appendix E — Critical Errors and Do Not Miss Lists',
      content:
        '<p>These lists capture the highest-consequence mistakes and the situations that must not be overlooked during ACTT care.</p>' +

        '<h4>Critical Error Pitfalls</h4>' +

        '<h5>Airway Pitfalls</h5>' +
        '<ul>' +
          '<li>Repeated intubation attempts beyond the declared limit</li>' +
          '<li>No backup plan</li>' +
          '<li>Incomplete tube confirmation</li>' +
          '<li>No post-intubation sedation</li>' +
          '<li>Weak securement in movement or burns</li>' +
        '</ul>' +

        '<h5>Resuscitation Pitfalls</h5>' +
        '<ul>' +
          '<li>Blind repeated fluid boluses</li>' +
          '<li>Wrong fluid choice in TBI</li>' +
          '<li>Starting pressors before clarifying shock physiology</li>' +
          '<li>Trusting a better blood pressure while perfusion worsens elsewhere</li>' +
        '</ul>' +

        '<h5>TBI Pitfalls</h5>' +
        '<ul>' +
          '<li>Untreated hypoxia, hypotension, or fever</li>' +
          '<li>Routine hyperventilation</li>' +
          '<li>Missed subtle neurologic decline</li>' +
          '<li>Weak seizure follow-up</li>' +
        '</ul>' +

        '<h5>Burn Pitfalls</h5>' +
        '<ul>' +
          '<li>Delayed airway control in inhalation injury</li>' +
          '<li>Treating the Rule of 10s as a fixed order</li>' +
          '<li>Poor urine output tracking</li>' +
          '<li>Missed circumferential compromise</li>' +
        '</ul>' +

        '<h5>Medication Pitfalls</h5>' +
        '<ul>' +
          '<li>Wrong dose for the indication</li>' +
          '<li>Administration too fast</li>' +
          '<li>Dose stacking</li>' +
          '<li>Missing cumulative totals</li>' +
          '<li>Concentration confusion during fatigue</li>' +
        '</ul>' +

        '<h5>Prolonged-Hold Pitfalls</h5>' +
        '<ul>' +
          '<li>No reassessment rhythm</li>' +
          '<li>No device maintenance plan</li>' +
          '<li>Poor handover</li>' +
          '<li>Slow deterioration missed because no one owns the trend</li>' +
        '</ul>' +

        '<h4>Do Not Miss High-Consequence Situations</h4>' +
        '<ul>' +
          '<li><strong>Impending cerebral herniation:</strong> falling LOC, pupil asymmetry, Cushing-type change</li>' +
          '<li><strong>Recurrent or persistent tension physiology</strong> after partial improvement</li>' +
          '<li><strong>Occult deterioration after sedation:</strong> a quieter patient may be hypoxic, hypoventilating, or hypotensive</li>' +
          '<li><strong>Pressor-dependent shock</strong> with rising support needs and worsening urine output</li>' +
          '<li><strong>Delayed airway loss in burn / inhalation injury</strong> as edema progresses</li>' +
          '<li><strong>A long-hold patient who looks stable</strong> but is drifting in trend data</li>' +
        '</ul>',
      relatedLinks:[]
    },
    {
      id:'appendix-f',
      title:'Appendix F — Prolonged Holding Checklists',
      content:
        '<p>These tools convert initial stabilization into a 24\u201372 hour maintenance plan.</p>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Checklist</th><th>Critical Items</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Initial hold conversion</strong></td>' +
          '<td>Airway status, breathing plan, perfusion plan, pain/sedation plan, active problem list, monitoring plan, escalation triggers</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Reassessment cycle</strong></td>' +
          '<td>Mental status, airway, breathing, SpO\u2082 / EtCO\u2082 if available, HR/BP/perfusion, temperature, urine output, pain/agitation, device function, trend review</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Device maintenance</strong></td>' +
          '<td>Airway device checks, line checks, IO/IV site checks, chest tube checks, Foley checks, dressing and wound checks</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Medication continuity</strong></td>' +
          '<td>Last dose, next dose due, infusion settings, cumulative totals, remaining stock, adverse effects, monitoring burden</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Escalation triggers</strong></td>' +
          '<td>Worsening oxygen need, rising pressor need, neuro decline, recurrent tension signs, uncontrolled pain/agitation, recurrent seizure, inability to monitor safely</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[]
    },
    {
      id:'appendix-g',
      title:'Appendix G — Shipboard Application Aids',
      content:
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Aid</th><th>Quick Rule</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Care location selection</strong></td>' +
          '<td>Does the location provide oxygen, suction, lighting, monitoring access, space to work, and safety in ship movement?</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Casualty movement</strong></td>' +
          '<td>Secure every line, tube, and drain; assign movement roles; pre-brief the route; bring rescue gear; reassess before and after movement.</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Resource sustainability</strong></td>' +
          '<td>Estimate oxygen endurance, medication stock, infusion pump availability, suction access, and staffing for ongoing observation.</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Shipboard adaptation rules</strong></td>' +
          '<td>Simplify to what changes outcomes; secure everything; trend everything important; escalate early; choose sustainable care over ideal but unsustainable care.</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[]
    },
    {
      id:'appendix-h',
      title:'Appendix H — Team and Communication Tools',
      content:
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Tool</th><th>Contents</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Pre-procedure brief</strong></td>' +
          '<td>What is being done, why now, who performs, what is the backup plan, what is the failure trigger, what must be monitored afterward</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Acute care roles</strong></td>' +
          '<td>Lead, airway, med/procedure support, monitor/recorder, runner/support. In small teams, one person may carry more than one role, but each role still needs to be named.</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Handover template</strong></td>' +
          '<td>Who the patient is; what happened; what was done; current status; what may fail next; what must be checked next</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Teleconsultation call template</strong></td>' +
          '<td>Problem summary, key trends, current interventions, onboard limits, specific question or requested decision support</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[]
    },
    {
      id:'appendix-i',
      title:'Appendix I — Study and Rapid Review Tools',
      content:
        '<h4>High-Yield First-Pass Review</h4>' +
        '<ul>' +
          '<li>Airway</li>' +
          '<li>Shock</li>' +
          '<li>TBI</li>' +
          '<li>Burns</li>' +
          '<li>Sedation</li>' +
          '<li>Prolonged holding</li>' +
          '<li>Major thresholds</li>' +
        '</ul>' +

        '<h4>One-Minute Review</h4>' +
        '<ul>' +
          '<li>Critical airway triggers</li>' +
          '<li>Top shock targets</li>' +
          '<li>Highest-risk drug doses</li>' +
          '<li>Red-flag pitfalls</li>' +
        '</ul>' +

        '<h4>Five-Minute System Reviews</h4>' +
        '<ul>' +
          '<li>TBI</li>' +
          '<li>Burns</li>' +
          '<li>Sepsis</li>' +
          '<li>RSI</li>' +
          '<li>Sedation</li>' +
          '<li>Prolonged holding</li>' +
        '</ul>' +

        '<h4>Scenario Prompts</h4>' +
        '<ul>' +
          '<li>What is the next action?</li>' +
          '<li>What threshold is driving this?</li>' +
          '<li>What could fail next?</li>' +
          '<li>What must be reassessed?</li>' +
        '</ul>',
      relatedLinks:[]
    },
    {
      id:'appendix-j',
      title:'Appendix J — Onboard Stock and Substitute Cross-Reference',
      content:
        '<p>Use this appendix to bridge ideal ACTT knowledge with current Sick Bay resources. This is not meant to narrow learning to onboard stock only; it is meant to make gaps visible and help with substitution planning.</p>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Category</th><th>Reference Note</th></tr></thead>' +
        '<tbody>' +
        '<tr>' +
          '<td><strong>Confirmed onboard examples from uploaded formulary</strong></td>' +
          '<td>Acetaminophen, Acyclovir, Ampicillin, Azithromycin IV, Cefazolin, Ceftriaxone, Clopidogrel, Dexamethasone, Enoxaparin, Lidocaine 2%, Metronidazole IV, Ondansetron, Protamine, Sodium bicarbonate, among others</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Important ACTT drugs not clearly confirmed onboard</strong></td>' +
          '<td>Examples may include Tenecteplase, Norepinephrine infusion stock, Hypertonic saline 3%, Mannitol, Levetiracetam, selected induction/paralytic agents, depending on actual loadout</td>' +
        '</tr>' +
        '<tr>' +
          '<td><strong>Substitution rule</strong></td>' +
          '<td>If a preferred drug is unavailable, note the substitute, what changes in monitoring burden, and what clinical limitations that substitute introduces</td>' +
        '</tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:[]
    },
    {
      id:'appendix-k',
      title:'Appendix K — ECG Interpretation Quick Reference',
      content:
        '<p>Use this appendix for fast pattern recognition at the bedside. It is built from the DL ECG cheat sheet and aligned to ACTT priorities: STEMI recognition, unstable bradycardia, unstable tachycardia, arrest rhythm routing, and hyperkalemia-pattern ECG change.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">FAST USE</span> Read Every ECG in This Order</div>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Step</th><th>What to Look For</th><th>Why It Matters</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>1. Rate</strong></td><td>If using a standard 10-second strip, count QRS complexes and multiply by 6; confirm the printed time span first</td><td>Confirms whether the tracing fits a clinically important brady or tachy pattern</td></tr>' +
        '<tr><td><strong>2. Rhythm</strong></td><td>Is it regular? Are P waves present? Is there a fixed relationship between P waves and QRS complexes?</td><td>Separates sinus rhythm from AV block, AF/flutter, SVT, or ventricular rhythm</td></tr>' +
        '<tr><td><strong>3. Width</strong></td><td>Narrow QRS is under 0.12 seconds; wide QRS is 0.12 seconds or more</td><td>Wide rhythms need higher concern for VT, conduction block, or hyperkalemia</td></tr>' +
        '<tr><td><strong>4. Ischemia</strong></td><td>Measure ST shift at the J point and compare contiguous leads</td><td>Supports STEMI recognition and helps localize the infarct territory</td></tr>' +
        '<tr><td><strong>5. Electrolytes / Red flags</strong></td><td>Peaked T waves, PR prolongation, QRS widening, loss of P waves, sine-wave pattern</td><td>Suggests hyperkalemia and the need for immediate stabilization and potassium-lowering therapy</td></tr>' +
        '</tbody>' +
        '</table></div></div>' +

        '<h4>Contiguous Leads and Infarct Territory</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Territory</th><th>Key Leads</th><th>Bedside Note</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Septal</strong></td><td>V1, V2</td><td>Often travels with anterior infarction</td></tr>' +
        '<tr><td><strong>Anterior</strong></td><td>V3, V4</td><td>Think LAD territory; V1&ndash;V4 is the common anteroseptal pattern</td></tr>' +
        '<tr><td><strong>Lateral</strong></td><td>I, aVL, V5, V6</td><td>I and aVL are high lateral; V5 and V6 are low lateral</td></tr>' +
        '<tr><td><strong>Inferior</strong></td><td>II, III, aVF</td><td>RCA is common; watch for hypotension or right-sided involvement</td></tr>' +
        '<tr><td><strong>Posterior clue</strong></td><td>V1, V2, V3</td><td>Dominant R waves with horizontal ST depression and upright tall T waves suggest posterior MI</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">CRITICAL</span> STEMI Recognition Trigger</div>' +
        '<p>ST elevation greater than 1 mm at the J point in 2 contiguous leads, in the right ischemic clinical context, should activate the STEMI pathway. Repeat ECGs if symptoms persist and the first tracing is nondiagnostic.</p></div>' +

        '<h4>Bradycardia Patterns That Change Management</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Pattern</th><th>Typical ECG Features</th><th>Route in ACTT</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Sinus bradycardia / junctional slow rhythm</strong></td><td>Slow rate; sinus rhythm has a P before each QRS, junctional rhythm may not</td><td>If hypotension, shock, ischemic discomfort, acute heart failure, or AMS is present, move to the bradycardia pathway</td></tr>' +
        '<tr><td><strong>High-grade AV block</strong></td><td>Dropped beats, AV dissociation, or a slow escape rhythm; wide QRS increases concern for infranodal disease</td><td>Expect atropine to work poorly; prepare pacing and vasoactive support early</td></tr>' +
        '<tr><td><strong>Hyperkalemic brady / wide rhythm</strong></td><td>Peaked T waves progressing to PR prolongation, QRS widening, loss of P waves, then sine-wave appearance</td><td>Treat the potassium problem now; calcium and shifting therapy take priority alongside ACLS support</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Tachycardia Patterns That Change Management</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Pattern</th><th>Typical ECG Features</th><th>Route in ACTT</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Regular narrow-complex tachycardia</strong></td><td>QRS under 0.12 seconds and regular rhythm</td><td>If stable, vagal maneuvers then adenosine are reasonable for likely SVT; if unstable, synchronize early</td></tr>' +
        '<tr><td><strong>Irregular narrow-complex tachycardia</strong></td><td>Often AF or flutter with variable block</td><td>Think rate control and underlying cause; do not default to adenosine as treatment for an irregular rhythm</td></tr>' +
        '<tr><td><strong>Regular wide-complex tachycardia</strong></td><td>QRS 0.12 seconds or more with a regular rhythm</td><td>Treat as VT until proven otherwise; if unstable, synchronized cardioversion is the fast route</td></tr>' +
        '<tr><td><strong>Irregular wide-complex tachycardia</strong></td><td>Consider polymorphic VT, AF with aberrancy, or pre-excited AF</td><td>High-risk rhythm; if the patient is deteriorating or pulseless, move immediately to the shock / arrest pathway</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Shockable vs Non-Shockable Arrest Rhythms</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Rhythm Group</th><th>Recognition</th><th>Immediate Route</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Shockable</strong></td><td>Ventricular fibrillation or pulseless ventricular tachycardia</td><td>Defibrillate and follow the shockable arrest sequence without delay</td></tr>' +
        '<tr><td><strong>Non-shockable</strong></td><td>PEA or asystole</td><td>CPR, epinephrine, and aggressive search for reversible causes; do not waste time trying to sync or shock asystole</td></tr>' +
        '<tr><td><strong>Organized rhythm with no pulse</strong></td><td>Electrical activity is present but there is no perfusing pulse</td><td>Treat as PEA, not ROSC</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>High-Yield Ischemia and Electrolyte Clues</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Finding</th><th>Why It Matters</th><th>Bedside Reminder</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>T-wave inversion in contiguous leads</strong></td><td>Supports ischemia when the clinical picture fits</td><td>Do not dismiss ongoing symptoms just because there is no obvious ST elevation</td></tr>' +
        '<tr><td><strong>Peaked T waves</strong></td><td>Early hyperkalemia clue</td><td>Trend the tracing; worsening PR/QRS change means the patient is getting less electrically stable</td></tr>' +
        '<tr><td><strong>QRS widening with disappearing P waves</strong></td><td>Late hyperkalemia warning</td><td>Think pre-arrest hyperkalemia and treat before the rhythm collapses</td></tr>' +
        '<tr><td><strong>Posterior MI pattern</strong></td><td>Can be missed if only looking for obvious anterior ST elevation</td><td>In V1&ndash;V3, a dominant R wave plus ST depression and upright tall T waves is a posterior infarct clue</td></tr>' +
        '</tbody>' +
        '</table></div>',
      relatedLinks:['algorithms/stemi','thresholds/stemi-thresholds','checklists/fibrinolysis-screening','checklists/post-rosc','medications/tenecteplase']
    },
    {
      id:'appendix-l',
      title:'Appendix L — IV Compatibility and Infusion Quick Reference',
      content:
        '<p>Use this appendix when multiple infusions must share limited access. It is intentionally narrow: only combinations and rates clearly supported by the DL June 2022 critical care Y-site chart and the TOH infusion sheet are included here. If a pair is not clearly supported below, use a separate lumen or line.</p>' +

        '<div class="severity-card red"><div class="sc-title"><span class="sc-label">FAST USE</span> Y-Site Legend</div>' +
        '<ul>' +
          '<li><strong>C</strong> = compatible at TOH standard concentrations.</li>' +
          '<li><strong>C?</strong> = compatible only at lower-than-standard TOH concentrations; do not assume standard-concentration compatibility.</li>' +
          '<li><strong>X</strong>, <strong>ND</strong>, or blank / unlisted pair = do not mix via Y-site.</li>' +
          '<li><strong>Concentration-dependent entries</strong> in the full June 2022 chart should stay on a separate lumen unless pharmacy confirmation is available.</li>' +
        '</ul></div>' +

        '<h4>Common Vasoactive Infusions (TOH Standard Setup)</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>TOH Mix / Concentration</th><th>Pump Units</th><th>Usual Bedside Rate</th><th>Operational Note</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Norepinephrine</strong></td><td>8 mg in 250 mL NS = 32 mcg/mL</td><td>mcg/min</td><td>Infusion 8&ndash;12 mcg/min; usual maintenance 2&ndash;4 mcg/min</td><td>Use large vein when peripheral; extravasation hazard.</td></tr>' +
        '<tr><td><strong>Epinephrine</strong></td><td>1 mg in 250 mL D5W or NS = 4 mcg/mL</td><td>mcg/min</td><td>Infusion 2&ndash;10 mcg/min</td><td>TOH push-dose option: 1 mg in 100 mL NS = 10 mcg/mL.</td></tr>' +
        '<tr><td><strong>Phenylephrine</strong></td><td>100 mg in 250 mL NS = 400 mcg/mL</td><td>mcg/min</td><td>Start 100&ndash;180 mcg/min</td><td>TOH push-dose option: 10 mg in 100 mL D5W or NS = 100 mcg/mL.</td></tr>' +
        '<tr><td><strong>Dobutamine</strong></td><td>500 mg in 500 mL D5W or NS = 1 mg/mL</td><td>mcg/kg/min</td><td>Infusion 2&ndash;20 mcg/kg/min</td><td>Best when contractility support is needed and pressure is tolerable.</td></tr>' +
        '<tr><td><strong>Dopamine</strong></td><td>Premixed 400 mg in 250 mL D5W = 1600 mcg/mL</td><td>mcg/kg/min</td><td>Initial 1&ndash;5 mcg/kg/min; titrate by 1&ndash;4 mcg/kg/min every 10&ndash;30 min up to 20&ndash;50 mcg/kg/min</td><td>More arrhythmogenic and less predictable than norepinephrine.</td></tr>' +
        '<tr><td><strong>Vasopressin</strong></td><td>20 units in 250 mL D5W or NS = 0.1 unit/mL</td><td>unit/min</td><td>Infusion 0.01&ndash;0.1 units/min</td><td>Add-on agent rather than minute-to-minute titration drug.</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Continuous Sedation / Support Infusions (TOH Standard Setup)</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug</th><th>TOH Mix / Concentration</th><th>Pump Units</th><th>Usual Bedside Rate</th><th>Operational Note</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Fentanyl</strong></td><td>Premixed 5 mg in 100 mL = 50 mcg/mL</td><td>mcg/hr</td><td>Infusion 25&ndash;200 mcg/hr</td><td>Useful when fast titration and shorter duration are desired.</td></tr>' +
        '<tr><td><strong>Hydromorphone</strong></td><td>20 mg in 100 mL D5W or NS = 200 mcg/mL</td><td>mcg/hr</td><td>Start 200 mcg/hr; usual 500&ndash;3000 mcg/hr</td><td>Track cumulative dose during long holds.</td></tr>' +
        '<tr><td><strong>Midazolam</strong></td><td>100 mg in 100 mL D5W or NS = 1 mg/mL</td><td>mg/hr</td><td>Infusion 1&ndash;20 mg/hr</td><td>Upper hard limit 30 mg/hr on the TOH sheet.</td></tr>' +
        '<tr><td><strong>Ketamine</strong></td><td>400 mg in 100 mL D5W or NS = 4 mg/mL</td><td>mg/hr</td><td>Analgesia / sedation infusion 0.05&ndash;1.2 mg/kg/hr</td><td>Convert weight-based order to mg/hr before starting the pump.</td></tr>' +
        '<tr><td><strong>Propofol</strong></td><td>Ready-to-use 1000 mg / 100 mL = 10 mg/mL</td><td>mg/kg/hr</td><td>Infusion 0.3&ndash;3 mg/kg/hr</td><td>Use vented, non-filtered tubing; pair with an analgesia plan.</td></tr>' +
        '<tr><td><strong>Insulin</strong></td><td>50 units in 50 mL NS = 1 unit/mL</td><td>units/hr</td><td>Usual starting dose 0.1 units/kg/hr (often 5&ndash;10 units/hr)</td><td>TOH notes dual sign-off.</td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<h4>Critical Care Y-Site Quick Reference</h4>' +
        '<div class="table-wrapper"><table>' +
        '<thead><tr><th>Drug / Group</th><th>Y-Site status supported by TOH bedside subset</th><th>Keep separate unless specifically confirmed</th></tr></thead>' +
        '<tbody>' +
        '<tr><td><strong>Norepinephrine</strong></td><td>C with dobutamine, dopamine, epinephrine, fentanyl, hydromorphone, phenylephrine, propofol, and vasopressin</td><td>If another drug is not listed here, treat it as separate-line until confirmed in the full chart.</td></tr>' +
        '<tr><td><strong>Hydromorphone</strong></td><td>C with dobutamine, dopamine, epinephrine, fentanyl, norepinephrine, phenylephrine, propofol, and vasopressin</td><td>Do not generalize beyond the TOH subset.</td></tr>' +
        '<tr><td><strong>Fentanyl</strong></td><td>C with dobutamine, dopamine, epinephrine, hydromorphone, and norepinephrine</td><td>Phenylephrine, propofol, and vasopressin are marked <strong>C?</strong> rather than standard-concentration compatible.</td></tr>' +
        '<tr><td><strong>Midazolam</strong></td><td>C with dopamine, epinephrine, fentanyl, hydromorphone, norepinephrine, phenylephrine, and vasopressin</td><td><strong>X with dobutamine.</strong> Propofol is not clearly confirmed in the TOH subset shown.</td></tr>' +
        '<tr><td><strong>Phenylephrine</strong></td><td>C with dobutamine, dopamine, epinephrine, hydromorphone, midazolam, norepinephrine, and vasopressin</td><td>Fentanyl and propofol are marked <strong>C?</strong>.</td></tr>' +
        '<tr><td><strong>Propofol</strong></td><td>C with dobutamine, dopamine, epinephrine, hydromorphone, and norepinephrine</td><td>Fentanyl and phenylephrine are <strong>C?</strong>; <strong>ND with vasopressin.</strong></td></tr>' +
        '<tr><td><strong>Vasopressin</strong></td><td>C with dobutamine, dopamine, epinephrine, hydromorphone, midazolam, norepinephrine, and phenylephrine</td><td>Fentanyl is <strong>C?</strong>; <strong>ND with propofol.</strong></td></tr>' +
        '</tbody>' +
        '</table></div>' +

        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">CAUTION</span> Bedside Line Rule</div>' +
        '<p>When access is limited, keep the pressor on the most reliable line and avoid unsupported three-drug improvisation. If the pair is marked C?, X, ND, blank, or not listed here, separate the infusions and reassess whether current access is adequate for the care plan.</p></div>',
      relatedLinks:['medications/vasopressors','algorithms/sepsis','appendices/appendix-c','prolonged-holding/fluid-management','prolonged-holding/sedation-pain']
    },
    {
      id:'appendix-m',
      title:'Appendix M — Documentation Templates & Flow Sheets',
      content:
        '<p>Use these DL forms as the default templates for documentation during resuscitation, trauma care, prolonged holding, and transfer. Keep blank copies staged at the resuscitation bay and holding spaces so the recorder can capture events in real time.</p>'+
        '<div class="table-wrapper"><table>'+
        '<thead><tr><th>Template</th><th>Use</th><th>Capture</th><th>Operational Tip</th></tr></thead>'+
        '<tbody>'+
        '<tr><td><strong>Resuscitation Record</strong></td><td>Cardiac arrest or high-acuity resuscitation</td><td>Exact times for CPR cycles, rhythm changes, defibrillation, airway steps, medications, fluids, and response</td><td>Assign a recorder; timestamp every intervention to support handover and teleconsultation.</td></tr>'+
        '<tr><td><strong>Trauma Acute Care Clinical Record</strong></td><td>Structured primary/secondary survey and early trauma management</td><td>Mechanism, injuries found, airway/breathing/circulation status, analgesia/procedures, serial vitals, transfer plan</td><td>Use it as the backbone for the secondary survey so injuries, devices, and reassessments are not missed.</td></tr>'+
        '<tr><td><strong>PCC Nursing Care Plan</strong></td><td>Initial nursing plan for prolonged holding</td><td>Problem list, goals, planned interventions, monitoring frequency, safety checks</td><td>Update after each major change so the plan matches the active problems and staffing reality.</td></tr>'+
        '<tr><td><strong>PCC Nursing Care Tracker</strong></td><td>Bedside trend sheet during shifts</td><td>Vitals, neuro checks, medication times and doses, infusion rates, fluid balance, lines/tubes, turns/repositioning</td><td>Keep it at the bedside to prevent dose stacking, missed device checks, or undocumented reassessments.</td></tr>'+
        '<tr><td><strong>8-Hour Check / First 8 Hours / Burn Fluid Resuscitation Flowsheet</strong></td><td>Burn or high-volume resuscitation trending</td><td>Start time, fluids delivered, projected totals, urine output by interval, rate changes, triggers for escalation</td><td>Record every rate change and compare against the 24-hour projection; flag over- or under-resuscitation early.</td></tr>'+
        '<tr><td><strong>Critical Care 24-hr Hold Requirements</strong></td><td>Prolonged hold and transfer readiness</td><td>Monitoring cadence, medication/infusion accountability, device checks, escalation thresholds, evacuation preparation items</td><td>Pair with the handover structure so MEDEVAC teams receive a concise trend plus current risks.</td></tr>'+
        '</tbody></table></div>'+
        '<p>Link each template to the standard handover frame: what happened, what was done, current status, active threats, and what to watch next.</p>',
      relatedLinks:['team/documentation','team/handover','prolonged-holding/documentation-continuity','prolonged-holding/reassessment-rhythm','checklists/burn-8-hour-check'],
      sources:[
        {title:'Resus Record.pdf',file:'Resus Record.pdf'},
        {title:'Trauma Acute Care Clinical Record.pdf',file:'Trauma Acute Care Clinical Record.pdf'},
        {title:'PCC-Nursing-Care-Plan_fillable.pdf',file:'PCC-Nursing-Care-Plan_fillable.pdf'},
        {title:'PCC_Nursing_Care_Tracker.pdf',file:'PCC_Nursing_Care_Tracker.pdf'},
        {title:'8-Hour-Check.pdf',file:'8-Hour-Check.pdf'},
        {title:'First8Hours.pdf',file:'First8Hours.pdf'},
        {title:'Burn Fluid Resus Flowsheet.pdf',file:'Burn Fluid Resus Flowsheet.pdf'},
        {title:'Critical Care Requirements for 24hr Patient Hold.pdf',file:'Critical Care Requirements for 24hr Patient Hold.pdf'}
      ]
    },
    {
      id:'appendix-n',
      title:'Appendix N — Med Tech Simplified Protocols',
      content:
        '<p>Condensed Med Tech quick cards for airway, burn resuscitation, combative patient control, IO access, and ketamine analgesia. These are operational shortcuts; defer to the supervising PA/MO for scope changes.</p>'+
        '<div class="table-wrapper"><table>'+
        '<thead><tr><th>Protocol</th><th>When to Use</th><th>Immediate Actions</th><th>Dose / Device Cue</th><th>Watch / Escalate</th></tr></thead>'+
        '<tbody>'+
        '<tr><td><strong>Airway — i-gel®</strong></td><td>GCS ≤8, absent gag, or arrest when rapid supraglottic airway is appropriate</td><td>Position and suction; select correct size; insert gently; ventilate with low pressure</td><td>Keep peak pressure &lt;40 cm H<sub>2</sub>O; single-use only; remove within 4 hours</td><td>Does not protect from aspiration; secure well; convert to definitive airway if oxygenation/ventilation inadequate</td></tr>'+
        '<tr><td><strong>Burn Fluids</strong></td><td>&gt;20% TBSA burn without hemorrhagic shock</td><td>Estimate TBSA; start LR using Rule of Ten (adult) or Parkland (peds); titrate hourly to urine output</td><td>Target UOP 30–50 ml/hr (adult); adjust fluids ±25% per hour; max 1500 ml/hr x2 hrs or 250 ml/kg/24h</td><td>If UOP &gt;50 ml/hr decrease 25%; if &lt;30 ml/hr increase 25%; oral rehydration acceptable &lt;30% TBSA when no IV</td></tr>'+
        '<tr><td><strong>Combative Patient</strong></td><td>Unsafe agitation despite verbal control attempts</td><td>Assess reversible causes; verbal de-escalation; physical control if required; chemical restraint when still unsafe</td><td>Haloperidol 5 mg IM/IV/IO + Midazolam 2 mg IM/IV/IO; may repeat once after 10 minutes if still dangerous</td><td>Have 5-point team hold if sedating; monitor airway/respirations; treat dystonia with Diphenhydramine 50 mg IM/IV; notify PA/MO</td></tr>'+
        '<tr><td><strong>IO Access</strong></td><td>Need rapid access after failed/delayed IV</td><td>Select site (sternal FAST1 or tibial/humeral); insert; flush brisk 10 ml to clear marrow; secure</td><td>Use through burns if bone intact; avoid sites with fracture, infection, prior IO &lt;48 hrs; device usable up to 24 hrs</td><td>Monitor for infiltration/compartment syndrome, especially peds; reassess stability with edema or movement</td></tr>'+
        '<tr><td><strong>Ketamine for Pain</strong></td><td>Moderate–severe pain when opioid-sparing approach preferred</td><td>If no shock airway risk: IM/IN; if monitored access: IV/IO; reassess after each dose</td><td>IM/IN 50 mg q30 min x2 max; IV/IO 25 mg q20 min x4 within 2 hrs; endpoint pain control or nystagmus</td><td>Expect secretions; be ready to reposition/suction; manage laryngospasm with BVM; treat emergence/combative response with Midazolam 2 mg IM/IV/IO q10 min (max 4 doses)</td></tr>'+
        '</tbody></table></div>'+
        '<p><strong>Operational reminders:</strong> Document AVPU and staffing before sedation; haloperidol and midazolam are compatible when combined; IO meds run as IV equivalents after vigorous flush; contact PA/MO early if repeated sedation or fluid escalation is needed.</p>',
      relatedLinks:['algorithms/airway-failure','algorithms/burn-resuscitation','algorithms/combative-patient','procedures/io-access','medications/analgesics','medications/sedatives','checklists/burn-8-hour-check','team/core-principles'],
      sources:[
        {title:'Med Tech Airway.pdf',file:'Med Tech Airway.pdf',note:'i-gel® insertion principles and cautions.'},
        {title:'Med Tech Burn Protocol.pdf',file:'Med Tech Burn Protocol.pdf',note:'Burn fluid targets and adjustment rules.'},
        {title:'Med Tech Combative patient.pdf',file:'Med Tech Combative patient.pdf',note:'Hostile/violent patient chemical restraint quick card.'},
        {title:'Med Tech IO protocol.pdf',file:'Med Tech IO protocol.pdf',note:'IO indications, contraindications, and flush requirements.'},
        {title:'Med Tech Ketamine for Pain.pdf',file:'Med Tech Ketamine for Pain.pdf',note:'Ketamine analgesia dosing and monitoring.'}
      ]
    }
  ]
};
