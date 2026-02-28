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
    {
      id:'pre-sail',
      type:'operational',
      title:'RCN Pre-Sail Medical Equipment & Stores',
      badge:'Operational \u00b7 Pre-Sail Readiness',
      desc:'Official RCN pre-sail medical equipment and stores checklist. To be completed and verified 2 weeks prior to sailing. One copy forwarded to applicable FSMO and Fleet PA for review.',
      icon:'&#9875;',
      preamble:'To be completed and verified 2 weeks prior to sailing. One copy is to be forwarded to the applicable FSMO and Fleet PA for review before sailing. This list constitutes the minimum equipment required to provide care with a PA or MO onboard RCN Vessels. Variations from this list are subject to written waiver by the applicable FSMO in advance of sailing.',
      groups:[
        {
          id:'equipment',
          title:'Equipment',
          section:'EQUIPMENT',
          items:[
            {id:'defib-aed',label:'Defibrillator/AED',notes:'Check all monitoring functions and alarm settings'},
            {id:'ventilator',label:'Ventilator',notes:'If electrical powered then require O\u2082 concentrator or adequate O\u2082 supply to oxygenate the system.'},
            {id:'iv-infusion-pump',label:'IV Infusion Pump',notes:''},
            {id:'blood-chemistry-analyser',label:'Blood Chemistry Analyser or equivalent POC test',notes:'Need to be able to check: Blood Chemistry, Blood Gas, Cardiac Enzymes. Ensure printer is serviceable and spare batteries are available.'},
            {id:'o2-delivery',label:'O\u2082 Delivery system (Flynn equivalent)',notes:'Needs to be ready for immediate use and have a dedicated wrench to open bottle in kit'},
            {id:'bag-mask-valve',label:'Bag Mask Valve with PEEP Valve',notes:'Squeeze bag and make sure it functions correctly. Replace if required.'},
            {id:'suction-device',label:'Suction device',notes:'In addition to manual suction device in kits'},
            {id:'external-rewarming',label:'External Rewarming Device',notes:'Currently using \u201cBair Hugger\u201d'},
            {id:'iv-solution-warmer',label:'IV Solution Warmer',notes:'Can be Bair Hugger attachment, or standalone device with spare battery.'},
            {id:'ecg-12-lead',label:'12 lead ECG',notes:'Can be internal to Defib/AED or Standalone ECG Machine'},
            {id:'stretcher-transfer',label:'Stretcher capable of transferring a patient \u201cover the guardrails\u201d IAW STANAG 1412',notes:'RCN Currently using Stokes litter'},
            {id:'stretcher-internal',label:'Stretcher capable of moving patient securely inside the ship',notes:'RCN Currently using Ashton-Waters litter'},
            {id:'deployment-bag',label:'One stocked rapid Deployment Bag per PA/MO/Med Tech',notes:'Similar to 6545-CF-002-1002 KIT, TREATMENT, FIELD PACK, MED TECH, BAG and 6545-CF-002-8529 KIT, TREATMENT, MEDICATIONS, MED TECH BAG. Med Techs must have the above bag completely stocked when embarked, as well as a copy of the most current procedure and protocol manual for Med Techs. The above bag is kitted IAW the Med Tech Scope of Practice.'}
          ]
        },
        {
          id:'defib-supplies',
          title:'Defib / AED / Monitor',
          section:'SUPPLIES',
          items:[
            {id:'defib-spare-paper',label:'Spare paper for Defibrillator/AED',notes:''},
            {id:'defib-spare-pads',label:'Spare Defib/Pacing PADs',notes:'Be aware that pacing pads can only be used for specified time before needing changing. Check user manual for details.'},
            {id:'bp-cuffs',label:'Appropriate different sized BP cuffs for monitoring equipment',notes:''},
            {id:'etco2-lines',label:'If monitor has ET CO\u2082 capability, do you have spare lines?',notes:''},
            {id:'electrodes',label:'Electrodes for all monitors',notes:''}
          ]
        },
        {
          id:'ventilator-supplies',
          title:'Ventilator',
          items:[
            {id:'ventilator-hose',label:'Hose to connect to patient',notes:'Need: Hose, Filter (if required), Mask or Tube fitting. Securing device to connect to face and support the tubing if connected to tube'}
          ]
        },
        {
          id:'iv-pump-supplies',
          title:'IV Pump',
          items:[
            {id:'iv-tubing-filters',label:'Tubing and Filters',notes:'Some emergency medications need filter in the line as well as the tubing.'}
          ]
        },
        {
          id:'blood-analyser-supplies',
          title:'Blood Analyser',
          items:[
            {id:'istat-cartridges',label:'Cartridges to analyse blood: Blood Chemistry, Blood Gas, Cardiac Enzymes',notes:'Currently using iStat Cartridges. Need to have a minimum of 4 of each for local area sailing if resupply is not going to be an issue (may be substituted with Qualitative POC rapid tests if available with FSMO Concurrence). iStat Cartridges shall be maintained in the refrigerator, however one of each cartridge shall be left at room temperature for immediate emergency use (and dated as to when it was removed as indicated on the packaging) and replaced as per the package instructions (two of them are 14 days and one is 2 months, it\'s written on the package). Ships are not to sail from any port without at least 4 of each cartridge.'}
          ]
        },
        {
          id:'ecg-supplies',
          title:'ECG Machine / AED',
          items:[
            {id:'ecg-spare-paper',label:'Spare ECG paper',notes:''},
            {id:'ecg-spare-electrodes',label:'Spare electrodes',notes:''}
          ]
        },
        {
          id:'o2-supplies',
          title:'O\u2082 Delivery / Breathing Assists',
          items:[
            {id:'pharyngeal-airways',label:'Pharyngeal Airways',notes:'King LT and/or LMAs of appropriate sizes'},
            {id:'opa-npa',label:'OPA/NPAs',notes:'Appropriate sizes'},
            {id:'et-tubes',label:'ET Tubes',notes:'Appropriate sizes'},
            {id:'laryngoscope',label:'Laryngoscope',notes:''},
            {id:'tube-securing',label:'Tube Securing device',notes:''},
            {id:'etco2-monitor',label:'End Tidal CO\u2082 monitor device',notes:'Continuous preferred through monitor, but qualitative is minimum standard.'},
            {id:'surgical-airway',label:'Surgical Airway kit',notes:''},
            {id:'nrb-masks',label:'Nonrebreather masks',notes:''},
            {id:'nasal-prongs',label:'Nasal Prongs',notes:''},
            {id:'bougie',label:'Bougie',notes:''},
            {id:'gastric-decompression',label:'Gastric decompression tube',notes:''},
            {id:'intubation-drugs',label:'Intubation Drugs',notes:'Per scope of practice/trg'}
          ]
        },
        {
          id:'circulation-supplies',
          title:'Circulation Assists',
          items:[
            {id:'chest-seals',label:'Chest Seals',notes:'Minimum standard is seal with valve. Currently using SAM Brand Seal.'},
            {id:'decompression-catheter',label:'Decompression catheter',notes:''},
            {id:'chest-tubes',label:'Chest Tubes',notes:'Appropriate sizes'},
            {id:'water-seal',label:'Water Seal for Chest tube',notes:'Current Safari PleurEvac \u2013 blood collection and re-infusion system desirable'},
            {id:'iv-tubing-circ',label:'IV Tubing',notes:'Need: Secondary admin sets, Set for general use. Filters (as above for pump)'},
            {id:'burretrol',label:'Burretrol',notes:'For administering precise medication doses and in event of failure of IV Pump'}
          ]
        },
        {
          id:'misc-supplies',
          title:'Misc Equipment',
          items:[
            {id:'saline-lock',label:'Saline lock',notes:''},
            {id:'pelvic-binder',label:'Pelvic binder',notes:''},
            {id:'splinting',label:'Splinting devices for long bone fractures',notes:''},
            {id:'burn-dressings',label:'Burn Dressings',notes:''},
            {id:'cervical-collar',label:'Cervical Collar',notes:''},
            {id:'urinary-catheter',label:'Urinary catheter and collection bag',notes:''}
          ]
        },
        {
          id:'drugs-meds',
          title:'Drugs / Meds',
          items:[
            {id:'iv-solutions',label:'IV Solutions in Bags for ready use',notes:'Need: NS, RL, D5W, Mannitol, Dopamine'},
            {id:'acls-drugs',label:'ACLS Drugs',notes:''},
            {id:'acls-post-resus',label:'ACLS Post Resuscitation Drugs',notes:''},
            {id:'cyanide-antidote',label:'Cyanide Antidote Kit',notes:'Attach RCN protocol to box with amyl nitrate'},
            {id:'txa',label:'TXA',notes:''},
            {id:'tnk',label:'TNK',notes:'Attach CAF TNK policy documents to the box for quick reference.'},
            {id:'tnk-post-admin',label:'TNK Post administration drugs',notes:'Attach CAF TNK policy documents'}
          ]
        }
      ]
    },
    {id:'equipment-daily',type:'placeholder',title:'Equipment Daily Check',badge:'Operational \u00b7 Equipment',desc:'Daily medical equipment inspection checklist. PDF version pending.',icon:'&#9881;'},
    {id:'equipment-weekly',type:'placeholder',title:'Equipment Weekly Check',badge:'Operational \u00b7 Equipment',desc:'Weekly medical equipment inspection and inventory. PDF version pending.',icon:'&#9881;'},
    {id:'controlled-substances',type:'placeholder',title:'Controlled Substance Count',badge:'Operational \u00b7 Administrative',desc:'Controlled substance accountability checklist. PDF version pending.',icon:'&#128274;'},
    {id:'galley-inspection',type:'placeholder',title:'Galley Inspection',badge:'Operational \u00b7 Env Health',desc:'Galley and food service area inspection checklist. Official form pending.',icon:'&#127859;'},
    {id:'habitability',type:'placeholder',title:'Habitability Rounds',badge:'Operational \u00b7 Env Health',desc:'Habitability and berthing inspection checklist. Official form pending.',icon:'&#127968;'}
  ]
};
