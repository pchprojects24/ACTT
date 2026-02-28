window.ACTT=window.ACTT||{};window.ACTT.checklists={
  id:'checklists',
  title:'Checklists',
  subtitle:'Clinical cognitive aids and operational readiness checklists',
  sections:[
    {
      id:'rsi',
      type:'clinical',
      title:'RSI Cognitive Aid',
      badge:'Clinical \u00b7 Cognitive Aid',
      desc:'Step-by-step sequence checklist for Rapid Sequence Intubation. Run alongside the full RSI procedure.',
      icon:'&#9977;',
      crossLink:'#/procedures/rsi',
      crossLinkTitle:'RSI Full Procedure',
      items:[
        'Confirm indication; assign team roles; state failed airway plan aloud',
        'Position patient (sniffing or ramp); pre-oxygenate with 100% O\u2082 \u00d7 3\u20135 min',
        'Suction ready; clear blood, secretions, or vomit if present',
        'Induction agent drawn, labeled, and immediately accessible',
        'Paralytic drawn, labeled, and immediately accessible',
        'Backup airway device confirmed ready (SGA at hand)',
        'Cricothyrotomy kit open or at arm\u2019s reach before first attempt',
        'Administer induction agent \u2192 wait for effect \u2192 administer paralytic',
        'Laryngoscopy \u2192 advance tube through cords \u2192 inflate cuff \u2192 ventilate',
        'Confirm placement: EtCO\u2082 waveform (primary confirmation)',
        'Confirm: bilateral chest rise and breath sounds',
        'Secure tube; document depth; begin post-intubation sedation'
      ]
    },
    {
      id:'anaphylaxis',
      type:'clinical',
      title:'Anaphylaxis',
      badge:'Clinical \u00b7 Cognitive Aid',
      desc:'Immediate action checklist for anaphylaxis. Epinephrine first \u2014 do not delay.',
      icon:'&#128680;',
      crossLink:'data/ACLS/anaphylaxis.html',
      crossLinkTitle:'Full Anaphylaxis Protocol',
      items:[
        'Call for help; assign roles; prepare for rapid deterioration',
        'Remove or stop trigger (stop infusion, remove stinger)',
        'Position supine; elevate legs if hypotensive',
        'Epinephrine IM: 0.5 mg into mid-anterolateral thigh (adult)',
        'High-flow oxygen applied',
        'IV access established; isotonic crystalloid running if hypotensive',
        'Monitoring: continuous ECG, SpO\u2082, BP',
        'Reassess at 5\u201315 min; repeat Epinephrine IM if ongoing airway or circulation compromise',
        'Airway red flag check: stridor / voice change / progressive oropharyngeal swelling?',
        'Bronchospasm present? \u2192 inhaled beta-agonist (salbutamol)',
        'Document: time, Epi doses given, and clinical response'
      ]
    },
    {
      id:'post-rosc',
      type:'clinical',
      title:'Post-ROSC',
      badge:'Clinical \u00b7 Cognitive Aid',
      desc:'Immediate priorities after return of spontaneous circulation.',
      icon:'&#10084;',
      crossLink:'data/ACLS/post_rosc.html',
      crossLinkTitle:'Full Post-ROSC Protocol',
      items:[
        'Confirm ROSC: palpable pulse + organized rhythm + EtCO\u2082 rise',
        'Airway maintained; oxygen titrated \u2014 avoid both hypoxemia and hyperoxemia',
        'Ventilation confirmed; avoid hyperventilation',
        'IV/IO access confirmed',
        'Hypotension? \u2192 fluid bolus; start vasopressor if persistent',
        '12-lead ECG obtained; evaluate for STEMI or ischemia',
        'Glucose checked and corrected if significantly abnormal',
        'Temperature monitored; fever prevented and treated',
        'Continuous monitoring: ECG, SpO\u2082, ETCO\u2082',
        'Sedation and analgesia provided if ventilated or agitated',
        'Monitoring for recurrent arrest; treat dysrhythmias per ACLS',
        'MEDEVAC triggers reviewed; consultation initiated'
      ]
    },
    {
      id:'medevac',
      type:'clinical',
      title:'MEDEVAC 9-Line',
      badge:'Clinical \u00b7 Reference',
      desc:'Nine-line MEDEVAC request format. Check each line as prepared and transmitted.',
      icon:'&#9992;',
      items:[
        'Line 1 \u2014 Location of pickup site (grid, landmark, or lat/long)',
        'Line 2 \u2014 Radio frequency, call sign, and suffix',
        'Line 3 \u2014 Number of patients by precedence: A-Urgent / B-Urgent Surgical / C-Priority / D-Routine / E-Convenience',
        'Line 4 \u2014 Special equipment required: Hoist / Extraction / Ventilator / None',
        'Line 5 \u2014 Number of patients by type: L-Litter / A-Ambulatory',
        'Line 6 \u2014 Security at pickup site: N-None / P-Possible / E-Enemy / X-Armed escort required',
        'Line 7 \u2014 Method of marking pickup site: A-Panels / B-Pyro / C-Smoke / D-None / E-Other',
        'Line 8 \u2014 Patient nationality and status: A-Military / B-Allied / C-Non-military / D-POW',
        'Line 9 \u2014 NBC contamination: N-None / B-Biological / C-Chemical / R-Radiological / N-Nuclear'
      ]
    },
    {
      id:'mascal',
      type:'clinical',
      title:'MASCAL / Mass Casualty',
      badge:'Clinical \u00b7 Cognitive Aid',
      desc:'Scene management and triage tasks for a mass casualty incident.',
      icon:'&#128681;',
      items:[
        'Call for help; request additional resources; establish incident command',
        'Assign triage officer; designate triage, treatment, and transport roles',
        'Perform START (adult) or JumpSTART (pediatric) triage on ALL patients before treating anyone',
        'Red \u2014 Immediate: airway/life threat correctable now; treat first',
        'Yellow \u2014 Delayed: serious but stable for 4\u20136 hours; treat after Immediate',
        'Green \u2014 Minor: walking wounded; direct to self/buddy aid and hold',
        'Black \u2014 Expectant/Deceased: unsurvivable or deceased; tag and document',
        'Establish and mark Casualty Collection Point (CCP)',
        'Begin treatment of Immediate patients with available resources',
        'Initiate MEDEVAC 9-Line for Immediate and Urgent casualties',
        'Reassess triage categories as resources and patient conditions change',
        'Track and document all casualties: name, triage category, treatment, disposition'
      ]
    },
    {id:'pre-sail',type:'placeholder',title:'Pre-Sail Medical Readiness',badge:'Operational \u00b7 Readiness',desc:'Official pre-sail medical readiness checklist. PDF version pending.',icon:'&#9875;'},
    {id:'equipment-daily',type:'placeholder',title:'Equipment Daily Check',badge:'Operational \u00b7 Equipment',desc:'Daily medical equipment inspection checklist. PDF version pending.',icon:'&#9881;'},
    {id:'equipment-weekly',type:'placeholder',title:'Equipment Weekly Check',badge:'Operational \u00b7 Equipment',desc:'Weekly medical equipment inspection and inventory. PDF version pending.',icon:'&#9881;'},
    {id:'controlled-substances',type:'placeholder',title:'Controlled Substance Count',badge:'Operational \u00b7 Administrative',desc:'Controlled substance accountability checklist. PDF version pending.',icon:'&#128274;'},
    {id:'galley-inspection',type:'placeholder',title:'Galley Inspection',badge:'Operational \u00b7 Env Health',desc:'Galley and food service area inspection checklist. Official form pending.',icon:'&#127859;'},
    {id:'habitability',type:'placeholder',title:'Habitability Rounds',badge:'Operational \u00b7 Env Health',desc:'Habitability and berthing inspection checklist. Official form pending.',icon:'&#127968;'}
  ]
};
