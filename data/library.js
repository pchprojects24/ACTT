window.ACTT=window.ACTT||{};
/*
  ACTT Reference Library
  ----------------------
  Complete, browsable index of every source document shipped with the ACTT
  reference app. Each entry carries a stable category, a short clinical
  description, and the raw filename for direct reference.

  Rendering: see renderLibrary() in index.html. Search integration seeds
  these entries so header search can reach reference PDFs directly.
*/
window.ACTT.library={
  id:'library',
  title:'Reference Library',
  subtitle:'Every source document, organised for fast reference',
  intro:'<p>Every source PDF, slide deck, and technical reference that ships with the ACTT app — organised by clinical topic and device. Use the filter box to find a specific document, or browse a category when building study time or preparing a scenario.</p>'+
    '<p>Files live under <code>DL information/</code> inside the app bundle for direct access. Root-level manuals (e.g. the ACTT Preparation Manual, Scenario Companion) are also listed here.</p>',
  // Top-level featured items pinned at the top of the library
  featured:[
    {
      title:'ACTT Preparation Manual — Chapters 1–13 (Combined)',
      file:'ACTT_Preparation_Manual_Chapters_1-13_Combined.pdf',
      basePath:'',
      note:'The consolidated course manual. Read cover-to-cover for first-time candidates.',
      tag:'Manual'
    },
    {
      title:'ACTT Scenario Companion (Combined)',
      file:'actt_scenario_companion_combined.pdf',
      basePath:'data/',
      note:'Companion guide to the 12 interactive scenarios. Use alongside the in-app scenario player.',
      tag:'Scenarios'
    },
    {
      title:'ACTT Reference for PAs',
      file:'ACTT reference for PAs.pdf',
      note:'Consolidated quick reference compiled for Physician Assistants.',
      tag:'Reference'
    },
    {
      title:'ACTT 2026-01 Candidates Schedule',
      file:'ACTT 2026-01 Candidates Schedule - DRAFT 02 Feb.pdf',
      note:'Course schedule for the current iteration.',
      tag:'Course'
    }
  ],
  // Categories render as accordion groups
  categories:[
    {
      id:'airway',
      label:'Airway, Ventilation & Oxygen',
      desc:'Airway management, RSI, cricothyrotomy, ventilation, supplemental oxygen.',
      items:[
        {title:'ACTT 2026-01 Airway (primary airway teaching package)',file:'ACTT 2026-01 Airway .pdf'},
        {title:'Airway Resources and Pearls',file:'Airway ressources and Pearls.pdf'},
        {title:'Airway Handout',file:'airway handout.pdf'},
        {title:'RSI Check List and Intubation',file:'RSI Check List and Intubation.pdf'},
        {title:'Resource for RSI',file:'Ressource for RSI.pdf'},
        {title:'Intubation of the Critically Ill',file:'Intubation of the critically ill.pdf'},
        {title:'Cricothyroidotomy',file:'Cricothyroidotomy.pdf'},
        {title:'Med Tech Airway (i-gel® quick card)',file:'Med Tech Airway.pdf'},
        {title:'Ventilator PERLs — Student Handout',file:'Ventilator PERLs_Handout for Students.pdf'},
        {title:'Oxygen Endurance Chart',file:'oxygen.pdf'},
        {title:'Zoll EMV+ Quick Guide',file:'EMV Quick guide.pdf'},
        {title:'Zoll EMV+ Quick Guide (AMTRP, FiO₂ table)',file:'EMV Quick guide_AMTRP Apr16_Schmid_ and FiO2 Table Added.pdf'},
        {title:'Zoll EMV Plus — Full Reference',file:'Zoll EMV Plus.pdf'},
        {title:'Zoll EMV Guide (full PDF, root of bundle)',file:'Zoll EMV Guide.pdf',basePath:''}
      ]
    },
    {
      id:'trauma-burns',
      label:'Trauma, Burns & ATLS',
      desc:'Primary survey, polytrauma, burn fluid resuscitation, tranexamic acid.',
      items:[
        {title:'ACTT 2026-01 ATLS',file:'ACTT 2026-01 ATLS.pdf'},
        {title:'Trauma Acute Care Clinical Record',file:'Trauma Acute Care Clinical Record.pdf'},
        {title:'Resuscitation Record',file:'Resus Record.pdf'},
        {title:'Burn Management — PFC (13 Jan 2017)',file:'Burn_Management_PFC_13_Jan_2017_ID57.pdf'},
        {title:'Burns — Dr Papp (AMTRP 0045)',file:'Burns - Dr Papp - AMTRP 0045.pdf'},
        {title:'Burn Fluid Resuscitation Flowsheet',file:'Burn Fluid Resus Flowsheet.pdf'},
        {title:'TBSA Burn Estimation Chart',file:'TBSA__Burn_Estimation_Chart.pdf'},
        {title:'VCH Major Burn — 24 hr Fluid Resuscitation Orders',file:'VCH Major Burn - Initial 24 hr Fluid Resuscitation Orders.pdf'},
        {title:'Med Tech Burn Protocol',file:'Med Tech Burn Protocol.pdf'},
        {title:'First 8 Hours (burn trending)',file:'First8Hours.pdf'},
        {title:'8-Hour Check (burn trending)',file:'8-Hour-Check.pdf'}
      ]
    },
    {
      id:'cardiac',
      label:'Cardiac, ACS & STEMI',
      desc:'ACLS algorithms, chest pain, STEMI fibrinolysis, ECG reference.',
      items:[
        {title:'ACLS Guidelines 2020',file:'ACLS Guidelines 2020.pdf'},
        {title:'Acute Chest Pain Protocol',file:'Acute chest pain Protocol.pdf'},
        {title:'ACS — Feb 2026 Jerome (slide deck)',file:'ACS  - Feb 2026 Jerome.pptx'},
        {title:'Adjunct Medications for Acute MI',file:'Adjunct Medications for Management of Acute MI.pdf'},
        {title:'Fibrinolytic Checklist',file:'Fibrinolytic Checklist.pdf'},
        {title:'STEMI Fibrinolytic Therapy Orders (REGIONAL)',file:'STEMI Fibrinolytic Therapy Orders_REGIONAL_651_dbl sd pg 1-1A_May 2019.pdf'},
        {title:'Tenecteplase — Instructions for Use',file:'Instructions for Use of Tenecteplase.pdf'},
        {title:'ECG Cheat Sheet',file:'ECG Cheat sheet.pdf'}
      ]
    },
    {
      id:'endocrine',
      label:'DKA & Endocrine Emergencies',
      desc:'DKA order sets, hyperglycemic emergency, insulin management.',
      items:[
        {title:'DKA — ACTT Jerome (Feb 2026 slide deck)',file:'DKA_ACTT Jerome - Feb 2026.pptx'},
        {title:'DKA Protocol',file:'DKA Protocol.pdf'},
        {title:'DKA Order Set / Treatment Protocol (TOH 2015)',file:'DKA Order Set_Treatment Protocol_TOH 2015.pdf'},
        {title:'Chapter 15 — Hyperglycemic Emergencies',file:'Ch15_HyperglycemicEmergencies.pdf'}
      ]
    },
    {
      id:'sepsis-shock',
      label:'Sepsis, Shock & Vasoactives',
      desc:'Sepsis recognition, empiric antibiotics, inotropes, push-dose pressors.',
      items:[
        {title:'Sepsis — ACTT Feb 2026 (slide deck)',file:'Sepsis ACTT feb 2026.pptx'},
        {title:'Naval Empiric Antibiotic Selection in Sepsis (2022)',file:'Naval Emperic Abx Seletion in SEPSIS updated 2022.pdf'},
        {title:'Inotrope Comparison Chart',file:'Inotrope comparison chart.pdf'},
        {title:'Vasoactive Medication V2 — Hnatiuk 2026',file:'Vasoactive Medication V2 Hnatiuk 2026 .pdf'},
        {title:'Push-Dose Pressor',file:'Push Dose Pressor.pdf'}
      ]
    },
    {
      id:'seizure-neuro-psych',
      label:'Seizure, Neuro & Mental Health',
      desc:'Seizure management, agitation, combative patient, mental health emergencies.',
      items:[
        {title:'Combative Patient',file:'Combative patient.pdf'},
        {title:'Med Tech Combative Patient',file:'Med Tech Combative patient.pdf'},
        {title:'Agitation in the ED (April 2019)',file:'Agitation in the ED_1073_April 2019.pdf'},
        {title:'MH Emergencies — ACTT 2026',file:'MH Emergencies - ACTT 2026.pdf'}
      ]
    },
    {
      id:'environmental',
      label:'Environmental & Maritime',
      desc:'Hypothermia, drowning, maritime scenarios.',
      items:[
        {title:'Hypothermia and Drowning — Jerome 2026-02',file:'Hypothermia and Drowning Jerome 2026-02.pdf'},
        {title:'NATO TCCC Maritime Scenarios (MedNP update 24 Jun 2020)',file:'NATO TCCC Maritime Scenarios_MedNP_UPDATE 24JUN2020.pdf'}
      ]
    },
    {
      id:'procedures',
      label:'Procedures & Access',
      desc:'IV/IO access, chest drainage, procedural sedation, surgical skills.',
      items:[
        {title:'IV Access',file:'IV.pdf'},
        {title:'5 Rights of IO Access',file:'5 Rights of IO Access.pdf'},
        {title:'Med Tech IO Protocol',file:'Med Tech IO protocol.pdf'},
        {title:'EZ-IO Reference',file:'EZIO.pdf'},
        {title:'Surgical Skills Lab — IO',file:'Surgical Skills Lab_IO.pdf'},
        {title:'Pleurevac / Air Leak Reference',file:'Pleurovac_Air Leak.pdf'},
        {title:'Pleurevac Setup',file:'Setup - Pleurevac.pdf'},
        {title:'SU CST — Pleurevac Air Leak Guide',file:'SU_CST_PE Air Leak Guide_AI_MC001882.pdf'},
        {title:'SU CST — S1100 Setup',file:'SU_CST_S1100Setup_PO_MC000098.pdf'},
        {title:'ACTT 2026-01 Procedural Sedation',file:'ACTT 2026-01 Procedural Sedation.pdf'},
        {title:'PA — Procedural Sedation Medical Directive',file:'PA_Procedural Sedation Med Directive (1).docx'},
        {title:'Med Tech Ketamine for Pain',file:'Med Tech Ketamine for Pain.pdf'}
      ]
    },
    {
      id:'medications',
      label:'Medications & Infusions',
      desc:'Formulary, drug charts, infusion sheets, compatibility.',
      items:[
        {title:'Med Formulary v1.2 (approved 19 Sep 2021)',file:'Med Formulary v1.2 approved 19 Sep 2021.pdf'},
        {title:'CFH Drug Chart (Revised 2020)',file:'1 CFH Drug Chart Revised 2020.pdf'},
        {title:'Common IV Meds Cheat Sheet',file:'Common IV Meds Cheat Sheet.pdf'},
        {title:'Medication Administration — Brown 2026 final',file:'Medication Administration Brown 2026 final.pdf'},
        {title:'Parenteral Drug Therapy Manual — TOH 2021',file:'Parenteral Drug Therapy Manual TOH 2021.pdf'},
        {title:'TOH Infusion Sheets',file:'TOH Infusion Sheets.pdf'},
        {title:'Y-site Compatibility — Critical Care (June 2022)',file:'Y-site Compatibility Critical Care Chart June 2022.pdf'}
      ]
    },
    {
      id:'devices',
      label:'Devices & Equipment',
      desc:'Infusion pumps, ventilators, fluid warmers.',
      items:[
        {title:'Braun Infusomat — 2nd Gen IFU',file:'Infusomat_2ndGen_IFU1.pdf'},
        {title:'Belmont buddy lite — Manual',file:'Belmont Buddy Lite Manual.pdf'},
        {title:'buddy lite (docx)',file:'BUDDY LITE.docx'}
      ]
    },
    {
      id:'lab-poct',
      label:'i-STAT & Point-of-Care Lab',
      desc:'Analyzer manuals, cartridge handling, QC, procedure notes.',
      items:[
        {title:'i-STAT Manual',file:'IStat manual.pdf'},
        {title:'i-STAT ACTT Reference',file:'Istat ACTT.pdf'},
        {title:'NRU Asterix i-STAT Procedure Manual',file:'NRU Asterix i-STAT Procedure Manual.pdf'}
      ]
    },
    {
      id:'transport-cct',
      label:'Casualty Clearing, Transport & Prolonged Hold',
      desc:'Casualty clearing team manuals, transport pockets, nursing plans, 24-hour hold.',
      items:[
        {title:'Annex C — CCT Manual V3 (Final Approved)',file:'Annex C CCT Manual V3  Final Approved.pdf'},
        {title:'CCT Pocket 2022',file:'CCT Pocket 2022.pdf'},
        {title:'CCTT Pacific Version (revised 2021)',file:'CCTT_Pacific Version_revised 2021.pdf'},
        {title:'Critical Care Requirements for 24-hr Patient Hold',file:'Critical Care Requirements for 24hr Patient Hold.pdf'},
        {title:'PCC — Nursing Care Plan (fillable)',file:'PCC-Nursing-Care-Plan_fillable.pdf'},
        {title:'PCC — Nursing Care Tracker',file:'PCC_Nursing_Care_Tracker.pdf'}
      ]
    },
    {
      id:'team-course',
      label:'Team Dynamics & Course Admin',
      desc:'Team dynamics teaching, schedules, course admin.',
      items:[
        {title:'ACTT 01 2026 — Team Dynamics',file:'ACTT 01 2026 -Team Dynamics.pdf'},
        {title:'ACTT 2026-01 Candidates Schedule',file:'ACTT 2026-01 Candidates Schedule - DRAFT 02 Feb.pdf'},
        {title:'ACTT Seizure — Feb 2026 (slide deck, root of bundle)',file:'ACTT Seizure Feb 2026.pptx',basePath:''}
      ]
    }
  ]
};
