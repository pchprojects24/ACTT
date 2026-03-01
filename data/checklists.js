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
    {
      id:'equipment-daily',
      type:'inspection',
      title:'Equipment Daily Check',
      badge:'Operational \u00b7 Equipment',
      desc:'Daily readiness verification for critical sick bay equipment.',
      icon:'&#9881;',
      preamble:'Complete this quick check at start of day and prior to high-risk evolutions. Mark each item completed and document deficiencies in the watch log.',
      groups:[
        {
          id:'life-support-daily',
          title:'Life Support and Monitoring',
          section:'LIFE SUPPORT AND MONITORING',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ed1',serial:1,label:'Defibrillator powers on, self-test passes, and spare pads are in date.'},
            {id:'ed2',serial:2,label:'Suction unit tested with canister/tubing connected; backup suction available.'},
            {id:'ed3',serial:3,label:'Oxygen delivery system pressure adequate; regulators and key present.'},
            {id:'ed4',serial:4,label:'Pulse oximeter and NIBP monitor function check complete.'}
          ]
        },
        {
          id:'airway-daily',
          title:'Airway and Procedure Readiness',
          section:'AIRWAY AND PROCEDURE READINESS',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ed5',serial:5,label:'BVM, masks, OPAs/NPAs, and ETCO2 supplies present and accessible.'},
            {id:'ed6',serial:6,label:'Laryngoscope/video airway device checked and batteries charged.'},
            {id:'ed7',serial:7,label:'IV/IO start kit stocked with flushes, dressings, and sharps container available.'},
            {id:'ed8',serial:8,label:'Crash/response bag sealed or inventory spot-check completed.'}
          ]
        },
        {
          id:'environment-daily',
          title:'Environment and Documentation',
          section:'ENVIRONMENT AND DOCUMENTATION',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ed9',serial:9,label:'Fridge and ambient medication temperatures recorded and within range.'},
            {id:'ed10',serial:10,label:'Biohazard and regular waste removed; cleaning supplies available.'},
            {id:'ed11',serial:11,label:'Power cables, charging stations, and extension leads are safe and intact.'},
            {id:'ed12',serial:12,label:'Deficiencies and corrective actions entered in the daily log.'}
          ]
        }
      ]
    },
    {
      id:'equipment-weekly',
      type:'inspection',
      title:'Equipment Weekly Check',
      badge:'Operational \u00b7 Equipment',
      desc:'Weekly in-depth inspection and inventory of clinical equipment and consumables.',
      icon:'&#9881;',
      preamble:'Conduct weekly with full drawer and locker verification. Record out-of-stock, expired, and unserviceable items for replenishment.',
      groups:[
        {
          id:'inventory-weekly',
          title:'Inventory and Expiry Control',
          section:'INVENTORY AND EXPIRY CONTROL',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ew1',serial:1,label:'Emergency drug kit count completed; expiring items flagged for replacement.'},
            {id:'ew2',serial:2,label:'Airway consumables (tubes, blades, filters, capnography supplies) restocked to par.'},
            {id:'ew3',serial:3,label:'IV fluids and blood sampling supplies counted and reordered as required.'},
            {id:'ew4',serial:4,label:'Dressings, splints, and burn care materials checked for quantity and integrity.'}
          ]
        },
        {
          id:'function-weekly',
          title:'Functional Equipment Checks',
          section:'FUNCTIONAL EQUIPMENT CHECKS',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ew5',serial:5,label:'Defibrillator pacing/sync controls reviewed and ECG cable inspected.'},
            {id:'ew6',serial:6,label:'Infusion pumps run self-test and alarm test with sample setup.'},
            {id:'ew7',serial:7,label:'Portable oxygen cylinders inspected (hydro date/condition/pressure).'},
            {id:'ew8',serial:8,label:'Portable diagnostic equipment (glucometer, thermometer, otoscope) calibrated or QC checked per policy.'}
          ]
        },
        {
          id:'readiness-weekly',
          title:'Readiness and Safety',
          section:'READINESS AND SAFETY',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'ew9',serial:9,label:'Backup batteries and chargers labeled, charged, and rotation date updated.'},
            {id:'ew10',serial:10,label:'Equipment cleaning/decontamination log up to date.'},
            {id:'ew11',serial:11,label:'Medical gas and suction accessories secured for sea state.'},
            {id:'ew12',serial:12,label:'Weekly discrepancies reported to Coxn/XO and supply chain task opened.'}
          ]
        }
      ]
    },
    {
      id:'controlled-substances',
      type:'inspection',
      title:'Controlled Substance Count',
      badge:'Operational \u00b7 Administrative',
      desc:'Shift or daily controlled medication accountability and security audit.',
      icon:'&#128274;',
      preamble:'Complete at every required handover and whenever seal integrity is in doubt. Any discrepancy triggers immediate escalation per ship protocol.',
      groups:[
        {
          id:'vault-check',
          title:'Security and Access',
          section:'SECURITY AND ACCESS',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'cs1',serial:1,label:'Controlled drug safe/locker physically secure with no evidence of tampering.'},
            {id:'cs2',serial:2,label:'Access keys/accountability tokens present and signed to authorized custodian.'},
            {id:'cs3',serial:3,label:'Witness present for count in accordance with local policy.'}
          ]
        },
        {
          id:'count-reconcile',
          title:'Count and Reconciliation',
          section:'COUNT AND RECONCILIATION',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'cs4',serial:4,label:'Each controlled medication physically counted and matched to running balance.'},
            {id:'cs5',serial:5,label:'Partials, wastage, and breakages reconciled with witness signatures.'},
            {id:'cs6',serial:6,label:'Expiry dates verified; near-expiry items isolated for replacement.'}
          ]
        },
        {
          id:'docs-escalation',
          title:'Documentation and Escalation',
          section:'DOCUMENTATION AND ESCALATION',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'cs7',serial:7,label:'Controlled drug register updated with date/time, both signatures, and totals.'},
            {id:'cs8',serial:8,label:'Any discrepancy reported immediately to chain of command and medical authority.'},
            {id:'cs9',serial:9,label:'Corrective action entry initiated and retained with watch turnover records.'}
          ]
        }
      ]
    },
    {
      id:'pmed-inspection',
      type:'inspection',
      title:'HMCS PA PMED Inspection',
      badge:'Operational \u00b7 Env Health',
      desc:'PA-led environmental health inspection of galley, serveries, mess areas, fridges, accommodations, heads, and laundry. Complete 30 days prior to sailing or when requested by Ship CoC.',
      icon:'&#128270;',
      preamble:'To be completed by the PA of a ship 30 days prior to sailing to allow ships staff to correct problems, and whenever requested by Ship CoC. The goal is to do random, unannounced, serial evaluations of the facilities under normal conditions of use. A copy is to be forwarded to Fleet Surg and Fleet Sr PA when complete.',
      groups:[
        {
          id:'galley',
          title:'Galley',
          section:'GALLEY',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'g1',serial:1,label:'General cleanliness of work surfaces. Check cleaning agent used.'},
            {id:'g2',serial:2,label:'Fridges are correct temperature (2 to 3\u00b0C), Freezer temp (\u221218 to \u221215\u00b0C). Logs outside each filled in correctly, thermometers are inside fridges.'},
            {id:'g3',serial:3,label:'All previously prepared food is correctly labeled, to include date prepared or when it will expire.'},
            {id:'g4',serial:4,label:'Hand washing station is identified and properly supplied.'},
            {id:'g5',serial:5,label:'Random water testing is done. When?'},
            {id:'g6',serial:6,label:'Grease traps have been cleaned out. When?'},
            {id:'g7',serial:7,label:'When was the last time the galley was professionally steam cleaned?'},
            {id:'g8',serial:8,label:'Baking area containers covered when not being used.'},
            {id:'g9',serial:9,label:'Food being thawed is being thawed properly. Either in food safe bins in the fridge, or in cold running water just prior to cooking.'},
            {id:'g10',serial:10,label:'Steam line maintains food at 60\u00b0C or higher, clean work surfaces. Water changed frequently.'},
            {id:'g11',serial:11,label:'Garbage removed frequently.'}
          ]
        },
        {
          id:'serveries',
          title:'Serveries',
          section:'SERVERIES',
          columns:[
            {id:'mainCrew',label:'Main Crew'},
            {id:'cPos',label:'C & POs'},
            {id:'captSO',label:'Capt & SO'},
            {id:'wrdm',label:'Wrdm'}
          ],
          items:[
            {id:'s12',serial:12,label:'Dishwasher has correct solutions attached to the correct lines (many are mislabelled or not connected). Solutions are being consumed in the machine. A dishwasher needs three things: soap, sanitizer, and rinse agent. (Sanitizer can be substituted with very high temp water if you can measure a temp of 165\u00b0F / 74\u00b0C on a plate just removed. On CPFs the dishwashers should have a water temp booster. Check temp on a plate after a wash cycle.)'},
            {id:'s13',serial:13,label:'Grease traps cleaned. When?'},
            {id:'s14',serial:14,label:'Food prep surfaces cleaned with approved cleaner that is properly labeled. Not vinegar and water!'},
            {id:'s15',serial:15,label:'Check under sink areas for broken pipes and water collection under the sink. Backed up sewage water can collect here.'},
            {id:'s16',serial:16,label:'Fridges are correct temperature (2 to 3\u00b0C), logs outside each filled in correctly, thermometers are inside fridges.'},
            {id:'s17',serial:17,label:'Counter surfaces are cleaned with approved cleaner in properly labelled container.'},
            {id:'s18',serial:18,label:'Hand wash station available with appropriate hand cleaner.'},
            {id:'s19',serial:19,label:'Steam line maintains food at 60\u00b0C or higher, clean work surfaces. Water changed frequently.'},
            {id:'s20',serial:20,label:'Check Galley AC Plant in C and POs Servery for cleanliness/grease/mould.'}
          ]
        },
        {
          id:'eating-mess',
          title:'Eating Mess Area',
          section:'EATING MESS AREA',
          columns:[
            {id:'cafe',label:'Caf\u00e9'},
            {id:'cPos',label:'C & POs'},
            {id:'wrdm',label:'Wrdm'}
          ],
          items:[
            {id:'e21',serial:21,label:'General cleanliness.'},
            {id:'e22',serial:22,label:'Counter surfaces cleaned with appropriate cleaner.'},
            {id:'e23',serial:23,label:'Fridges are correct temperature (2 to 3\u00b0C), logs outside each filled in correctly, thermometers are inside fridges (2 of them, one at front and one at back).'},
            {id:'e24',serial:24,label:'Food stored appropriately. Condiments requiring refrigeration are being stored in the fridge. No food stored directly on decks. Covers or containers for cereal.'},
            {id:'e25',serial:25,label:'Hand washing is available prior to entering steam line.'},
            {id:'e26',serial:26,label:'Silverware stored handle up.'},
            {id:'e27',serial:27,label:'Milk dispensers (2 to 3\u00b0C) need fridge logs, and should be free of milk debris around the nozzles and the seals of the container should be inspected for debris and cracking.'}
          ]
        },
        {
          id:'fridge-flats',
          title:'Fridge Flats (Fridges/Freezers/Cool Storage and Dry Stores)',
          section:'FRIDGE FLATS',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'f28',serial:28,label:'Food stored off the deck (air needs to flow under) and secure for sea.'},
            {id:'f29',serial:29,label:'Thawing, if present, is being done correctly.'},
            {id:'f30',serial:30,label:'Fridges are correct temperature (2 to 3\u00b0C), logs outside each filled in correctly, thermometers are inside fridges. Stores safely secured for sea.'},
            {id:'f31',serial:31,label:'Freezers are correct temperature (\u221218\u00b0C to \u221215\u00b0C), logs outside each filled in correctly, thermometers are inside fridges. Stores safely secured for sea.'},
            {id:'f32',serial:32,label:'Check that food is being rotated (first stuff in is first stuff out).'}
          ]
        },
        {
          id:'messes-cabins',
          title:'Messes (Accommodation) and Cabins',
          section:'MESSES (ACCOMMODATION) AND CABINS',
          columns:[
            {id:'messes',label:'Messes'},
            {id:'cabins',label:'Cabins'}
          ],
          items:[
            {id:'m33',serial:33,label:'Beds made, linen clean.'},
            {id:'m34',serial:34,label:'General cleanliness, odour, and mold, paying particular attention to mattresses below Fan Coil Units.'},
            {id:'m35',serial:35,label:'No food in accommodations.'},
            {id:'m36',serial:36,label:'Floors clear of debris, and excess footwear.'},
            {id:'m37',serial:37,label:'Filters clean in heating and cooling units.'},
            {id:'m38',serial:38,label:'Random check of mattresses for mold.'}
          ]
        },
        {
          id:'heads-washplaces',
          title:'Heads and Washplaces',
          section:'HEADS AND WASHPLACES',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'h39',serial:39,label:'Surfaces cleaned with approved cleaners.'},
            {id:'h40',serial:40,label:'Showers clean, no soap scum, mold.'},
            {id:'h41',serial:41,label:'Check for dripping taps/faucets.'},
            {id:'h42',serial:42,label:'Check lint traps in trunking around laundry units as well as the lint trap in the dryer itself.'},
            {id:'h43',serial:43,label:'Soap dispensers and paper towels full.'},
            {id:'h44',serial:44,label:'Garbage removed frequently.'}
          ]
        },
        {
          id:'laundry-linen',
          title:'Laundry and Linen Stores',
          section:'LAUNDRY AND LINEN STORES',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'l45',serial:45,label:'Clean and organized. Clean laundry physically separated from dirty. Clean laundry kept off the deck.'},
            {id:'l46',serial:46,label:'No bad odour in washer, seals clean.'}
          ]
        }
      ]
    },
    {
      id:'habitability',
      type:'inspection',
      title:'Habitability Rounds',
      badge:'Operational \u00b7 Env Health',
      desc:'Routine ship habitability inspection for accommodations, hygiene, and environmental controls.',
      icon:'&#127968;',
      preamble:'Perform rounds at least weekly and after major weather/engineering events. Note deficiencies and assign corrective actions to responsible departments.',
      groups:[
        {
          id:'berthing-habitability',
          title:'Berthing and Accommodation',
          section:'BERTHING AND ACCOMMODATION',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'hb1',serial:1,label:'Berthing decks clean, dry, and free of standing water or trip hazards.'},
            {id:'hb2',serial:2,label:'Mattresses, linens, and lockers free from mould, pests, and foul odour.'},
            {id:'hb3',serial:3,label:'Ventilation and fan-coil units operational with visible filters in acceptable condition.'}
          ]
        },
        {
          id:'sanitation-habitability',
          title:'Heads, Showers, and Laundry',
          section:'HEADS, SHOWERS, AND LAUNDRY',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'hb4',serial:4,label:'Heads and shower spaces cleaned with approved products; no sewage backup signs.'},
            {id:'hb5',serial:5,label:'Soap, paper products, and hand hygiene stations stocked and functional.'},
            {id:'hb6',serial:6,label:'Laundry spaces clean; lint management and machine condition checks complete.'}
          ]
        },
        {
          id:'environment-habitability',
          title:'Environmental Health Controls',
          section:'ENVIRONMENTAL HEALTH CONTROLS',
          columns:[{id:'completed',label:'Completed'}],
          items:[
            {id:'hb7',serial:7,label:'Potable water access points clean and protected from contamination.'},
            {id:'hb8',serial:8,label:'Garbage handling areas secure, clean, and emptied on schedule.'},
            {id:'hb9',serial:9,label:'Noise/heat complaints reviewed; high-risk spaces flagged for mitigation.'},
            {id:'hb10',serial:10,label:'Habitability deficiencies logged with department owner and due date.'}
          ]
        }
      ]
    }
  ]
};
