window.ACTT=window.ACTT||{};
window.ACTT.domains={
  id:'domains',
  title:'Clinical Domains',
  subtitle:'Chapter 3 — The 8 ACTT Clinical Domains',
  chapter:3,
  intro:'<p>This chapter provides the clinical map for the rest of the manual. Its job is to organize the ACTT content into major operational domains so that later chapters can be studied and recalled more efficiently. For an RCN Physician Assistant working at sea, this domain structure matters because real patients rarely present as neat textbook problems. They present as combinations of airway compromise, shock, pain, altered mental status, environmental exposure, infection risk, and delayed evacuation constraints.</p>'+
    '<h3>3.1 Purpose of This Chapter</h3>'+
    '<ul>'+
    '<li>Define the major ACTT-relevant clinical domains.</li>'+
    '<li>Show how those domains overlap in actual shipboard casualties.</li>'+
    '<li>Identify the core tasks that sit inside each domain.</li>'+
    '<li>Create a mental framework that supports later algorithms, procedures, medication use, and prolonged holding decisions.</li>'+
    '</ul>'+
    '<h3>3.2 How the Clinical Domains Are Organized</h3>'+
    '<p>The domain model is not meant to separate patients into isolated boxes. It is meant to help you think in layers. A casualty may require immediate action in one domain while carrying hidden risk in another. For example, a patient with severe burns may primarily look like a burn patient, but early airway edema, fluid shifts, pain control, hypothermia, and prolonged care demands can all emerge at the same time.</p>'+
    '<p>For ACTT purposes, domain-based thinking helps with three things: first-pass recognition, choice of immediate priorities, and structured reassessment over time. It also helps you determine which problems can be stabilized locally, which demand immediate intervention, and which require remote guidance or urgent transfer when evacuation is delayed.</p>'+
    '<ul>'+
    '<li><strong>Single-domain problem:</strong> a focused issue such as an isolated shoulder dislocation or uncomplicated pneumothorax.</li>'+
    '<li><strong>Multi-system trauma:</strong> several domains active at once, such as TBI plus hemorrhagic shock plus respiratory compromise.</li>'+
    '<li><strong>Prolonged-care patient:</strong> a casualty whose initial stabilization is only the beginning, requiring repeated reassessment for hours.</li>'+
    '</ul>',
  sections:[
    {
      id:'domain-1-airway',
      title:'Domain 1: Airway and Respiratory Management',
      content:'<h3>3.3 Domain 1: Airway and Respiratory Management</h3>'+
        '<p>Airway and respiratory management is one of the highest-priority ACTT domains because failure here kills quickly. The learner must be able to identify airway compromise early, maintain oxygenation, control ventilation, and transition rapidly from basic support to definitive rescue when needed.</p>'+
        '<h4>3.3.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Airway assessment and recognition of impending failure.</li>'+
        '<li>Predictors of difficult intubation and difficult bag-mask ventilation.</li>'+
        '<li>Indications for definitive airway control.</li>'+
        '<li>Rescue airway planning, including failed airway pathways.</li>'+
        '<li>Ventilation strategy after intubation or rescue airway placement.</li>'+
        '<li>Recognition of thoracic causes of respiratory collapse.</li>'+
        '</ul>'+
        '<h4>3.3.2 Operational Tasks</h4>'+
        '<p>Within this domain, the course expects rapid task performance rather than abstract theory. The practical sequence is assessment, preparation, intervention, confirmation, and monitoring. That means not only placing a tube or decompressing a chest, but also anticipating failure, checking placement, adjusting ventilation, and watching for deterioration.</p>'+
        '<ul>'+
        '<li>Assess whether the patient can maintain and protect their airway.</li>'+
        '<li>Choose between basic airway adjuncts, RSI, or surgical airway.</li>'+
        '<li>Maintain SpO2 and use EtCO2 to guide ventilation when available.</li>'+
        '<li>Recognize tension pneumothorax and other immediately reversible thoracic threats.</li>'+
        '<li>Reassess after every intervention instead of assuming the problem is fixed.</li>'+
        '</ul>'+
        '<h4>3.3.3 Why This Matters at Sea</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>In the naval setting, airway and chest interventions may have to carry the patient for far longer than intended. A technically successful intubation or decompression is only the first step. Securement, ventilator strategy, sedation, oxygen use, tube patency, and repeated confirmation become part of prolonged care rather than short transfer medicine.</p>'+
        '</div></div>',
      relatedLinks:['algorithms/airway-failure','procedures/rsi','procedures/surgical-airway','procedures/needle-decompression']
    },
    {
      id:'domain-2-hemodynamics',
      title:'Domain 2: Hemodynamics, Shock, and Resuscitation',
      content:'<h3>3.4 Domain 2: Hemodynamics, Shock, and Resuscitation</h3>'+
        '<p>This domain focuses on restoring and maintaining perfusion. In ACTT, this includes recognition of shock, selection of the correct resuscitative strategy, and continuous reassessment of response. The same low blood pressure does not mean the same thing in trauma, burns, sepsis, or combined injury patterns.</p>'+
        '<h4>3.4.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Recognition of shock states and early perfusion failure.</li>'+
        '<li>Use of clinical signs to judge perfusion when invasive monitoring is limited.</li>'+
        '<li>Selection of fluid, blood, or vasopressors according to the underlying problem.</li>'+
        '<li>Recognition that over-resuscitation can be as dangerous as under-resuscitation.</li>'+
        '<li>Monitoring endpoints such as mental status, urine output, capillary refill, temperature gradient, and trend in vital signs.</li>'+
        '</ul>'+
        '<h4>3.4.2 Operational Tasks</h4>'+
        '<p>Operationally, this domain is about making the correct next move with imperfect information. The learner must identify whether the patient is underfilled, bleeding, distributive, or mixed. From there, the task is to choose the least harmful effective intervention, watch for a measurable response, and escalate if the patient fails to improve.</p>'+
        '<ul>'+
        '<li>Distinguish trauma, septic, burn, and mixed shock patterns.</li>'+
        '<li>Decide when fluid is appropriate, when blood is preferred, and when vasopressors are necessary.</li>'+
        '<li>Avoid reflexive large-volume fluid where that may worsen the patient.</li>'+
        '<li>Use trend monitoring rather than a single normal or abnormal value.</li>'+
        '</ul>'+
        '<h4>3.4.3 Why This Matters at Sea</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>At sea, delayed MEDEVAC means resuscitation cannot be treated as a brief bridge. A patient may need many hours of pressure support, fluid adjustment, output monitoring, and careful reassessment. That shifts this domain from a one-time intervention model to a sustained management model.</p>'+
        '</div></div>',
      relatedLinks:['algorithms/hemorrhagic-shock','algorithms/septic-shock','procedures/io-access','procedures/blood-administration']
    },
    {
      id:'domain-3-specialized-trauma',
      title:'Domain 3: Specialized Trauma — TBI, Burns, Ortho/Spinal',
      content:'<h3>3.5 Domain 3: Specialized Trauma</h3>'+
        '<p>Specialized trauma includes injuries with management priorities that differ from standard resuscitation logic. These injuries often demand tighter physiologic targets, more specific monitoring, and greater awareness of secondary injury.</p>'+
        '<h4>3.5.1 Traumatic Brain Injury</h4>'+
        '<p>TBI is repeatedly emphasized in the source material because secondary brain injury is often preventable. The learner must know how to classify severity, protect the airway when indicated, support cerebral perfusion, manage ventilation carefully, identify signs of rising intracranial pressure, and recognize impending herniation. In this domain, inappropriate fluids, excessive hypotension, or careless ventilation can worsen outcome rapidly.</p>'+
        '<h4>3.5.2 Burn Injury</h4>'+
        '<p>Burn management requires early attention to airway risk, fluid strategy, urine output, pain, temperature control, and the possibility of delayed complications. The course appears to emphasize that burn resuscitation is not simply about starting fluids. It is about using a starting formula, then repeatedly adjusting treatment based on output and clinical response while also addressing airway and skin-related complications.</p>'+
        '<h4>3.5.3 Orthopedic and Spinal Injury</h4>'+
        '<p>Orthopedic injuries are often less immediately fatal but can still affect function, pain burden, transport safety, and later care. Joint reductions, immobilization, neurovascular checks, and repeated neurologic reassessment matter more in prolonged holding situations, where the patient may remain under your care much longer than usual.</p>',
      relatedLinks:['algorithms/tbi-management','algorithms/burn-resuscitation','procedures/joint-reduction','procedures/spinal-immobilization']
    },
    {
      id:'domain-4-environmental',
      title:'Domain 4: Environmental — Hypothermia',
      content:'<h3>3.6 Domain 4: Environmental Injury</h3>'+
        '<p>Environmental injury is especially relevant in naval operations. Cold exposure, wet exposure, and temperature loss can change both physiology and clinical priorities. This domain reminds the learner that environment can be the primary problem or a major modifier of every other problem.</p>'+
        '<h4>3.6.1 Hypothermia</h4>'+
        '<p>Hypothermia requires stage-based thinking. A mildly cold patient and a profoundly hypothermic patient in arrest are not managed the same way. The course material emphasizes cautious handling, active rewarming, modified arrest protocols, and the principle that severe hypothermia can preserve neurologic viability even when vital signs are absent.</p>'+
        '<h4>3.6.2 Operational Relevance</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Cold environments affect monitoring accuracy, IV access, medication handling, patient packaging, and team endurance. This means the environmental domain is not separate from trauma care; it directly affects how procedures are performed and how long the patient can be safely maintained.</p>'+
        '</div></div>',
      relatedLinks:['algorithms/hypothermia-staging','procedures/active-rewarming','algorithms/cardiac-arrest-hypothermia']
    },
    {
      id:'domain-5-infectious-disease',
      title:'Domain 5: Infectious Disease and Sepsis',
      content:'<h3>3.7 Domain 5: Infectious Disease and Sepsis</h3>'+
        '<p>Although ACTT is trauma-focused, sepsis and serious infection remain critical because early recognition and treatment are highly time-sensitive, and the austere setting changes how aggressively some standard pathways can be applied.</p>'+
        '<h4>3.7.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Recognition of sepsis and septic shock using bedside signs and available data.</li>'+
        '<li>Antibiotic timing, with early administration as a central priority.</li>'+
        '<li>Source-based empiric antibiotic selection.</li>'+
        '<li>Balancing fluid resuscitation against the risk of respiratory deterioration.</li>'+
        '<li>Escalation to vasopressors when fluids are no longer enough.</li>'+
        '</ul>'+
        '<h4>3.7.2 Why This Matters at Sea</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>Shipboard care may involve delayed transfer, finite antibiotics, limited diagnostics, and evolving clinical pictures. A patient who is only mildly ill at first assessment may become significantly more unstable over several hours. For that reason, the learner must treat sepsis as an evolving management problem rather than a single dose-and-transfer event.</p>'+
        '</div></div>',
      relatedLinks:['algorithms/sepsis-management','medications/antibiotics','procedures/blood-cultures','algorithms/vasopressor-selection']
    },
    {
      id:'domain-6-cardiovascular',
      title:'Domain 6: Cardiovascular Emergencies',
      content:'<h3>3.8 Domain 6: Cardiovascular Emergencies</h3>'+
        '<p>Cardiovascular emergencies are not the dominant ACTT theme, but they are high-consequence and highly time-sensitive when they occur. The key focus is recognition of actionable ECG patterns, decision-making around reperfusion, and monitoring for deterioration after treatment.</p>'+
        '<h4>3.8.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Recognition of STEMI in the correct clinical context.</li>'+
        '<li>Decision point where PCI delay makes fibrinolysis relevant.</li>'+
        '<li>Contraindications to fibrinolysis.</li>'+
        '<li>Adjunctive antiplatelet and anticoagulation strategies.</li>'+
        '<li>Monitoring for reperfusion complications and bleeding.</li>'+
        '</ul>'+
        '<h4>3.8.2 Why This Matters at Sea</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>At sea, timely PCI may not be possible. This makes the decision window for fibrinolysis more important than in many shore-based settings. The learner must be able to act within time-sensitive limits while also recognizing when fibrinolysis is unsafe.</p>'+
        '</div></div>',
      relatedLinks:['algorithms/stemi-management','algorithms/fibrinolysis-decision','medications/anticoagulants','procedures/ecg-interpretation']
    },
    {
      id:'domain-7-diagnostics',
      title:'Domain 7: Diagnostics and Point-of-Care',
      content:'<h3>3.9 Domain 7: Diagnostics and Point-of-Care Interventions</h3>'+
        '<p>In ACTT, diagnostics are bedside, focused, and action-oriented. The aim is not a complete workup. The aim is to answer targeted questions that change management.</p>'+
        '<h4>3.9.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Focused physical exam and repeated reassessment.</li>'+
        '<li>Use of vital signs and trends to guide action.</li>'+
        '<li>Interpretation of ECG for urgent conditions.</li>'+
        '<li>Interpretation of key laboratory values where available, such as ABG, lactate, sodium, and base deficit.</li>'+
        '<li>Use of point-of-care ultrasound for targeted clinical questions.</li>'+
        '</ul>'+
        '<h4>3.9.2 Practical Examples</h4>'+
        '<p>Examples from the source set include optic nerve sheath diameter measurement to support ICP assessment, ultrasound guidance for emergency pericardiocentesis, and the use of EtCO2, urine output, and serial vital signs as trend markers in prolonged care. The common principle is that bedside data should change what you do next.</p>',
      relatedLinks:['procedures/pocus','procedures/ecg-interpretation','procedures/abg-interpretation','algorithms/icp-assessment']
    },
    {
      id:'domain-8-non-technical',
      title:'Domain 8: Non-Technical Skills and Operational Practice',
      content:'<h3>3.10 Domain 8: Non-Technical Skills and Operational Practice</h3>'+
        '<p>This domain applies across every clinical problem. ACTT is not only testing whether a clinician knows a dose or can describe a procedure. It also tests whether the clinician can organize a team, communicate clearly, anticipate failure, and maintain continuity over time.</p>'+
        '<h4>3.10.1 Core Learning Areas</h4>'+
        '<ul>'+
        '<li>Leadership and role assignment.</li>'+
        '<li>Pre-procedure briefing and contingency planning.</li>'+
        '<li>Closed-loop communication during high-risk tasks.</li>'+
        '<li>Clear casualty handover.</li>'+
        '<li>Teleconsultation and remote support when local capability is limited.</li>'+
        '<li>Documentation that supports continuity of care over 24\u201372 hours.</li>'+
        '</ul>'+
        '<h4>3.10.2 Why This Matters at Sea</h4>'+
        '<div class="shipboard-callout"><div class="shipboard-callout-header" onclick="this.classList.toggle(\'expanded\');this.nextElementSibling.classList.toggle(\'expanded\')"><span>&#9875;</span> At-Sea Considerations<span class="sc-chevron">&#9654;</span></div><div class="shipboard-callout-body">'+
        '<p>In a shipboard environment, the same small team may receive, stabilize, monitor, reassess, re-brief, and hand over the same patient over an extended period. Poor organization creates preventable error. Good communication reduces missed reassessment, medication duplication, line dislodgement, and delay in escalation.</p>'+
        '</div></div>',
      relatedLinks:['procedures/casualty-handover','procedures/teleconsultation','procedures/documentation','algorithms/team-organization']
    },
    {
      id:'domain-intersections',
      title:'Domain Intersections in Real Patients',
      content:'<h3>3.11 Domain Intersections in Real Patients</h3>'+
        '<p>Real casualties often sit in several domains at once. This is where ACTT-level thinking becomes more than memorizing separate topics. The clinician must understand that one intervention may help one domain while harming another, and that priorities can shift as the patient evolves.</p>'+
        '<ul>'+
        '<li><strong>TBI plus hemorrhagic shock:</strong> cerebral perfusion targets may conflict with permissive hypotension concepts.</li>'+
        '<li><strong>Burns plus airway edema plus fluid resuscitation:</strong> airway timing and fluid strategy interact closely.</li>'+
        '<li><strong>Sepsis plus respiratory compromise:</strong> fluid can help perfusion but worsen breathing.</li>'+
        '<li><strong>Combative patient plus hypoxia, hypoglycemia, or TBI:</strong> behavior may be a sign, not the diagnosis.</li>'+
        '<li><strong>Hypothermia plus cardiac arrest:</strong> standard termination logic may not apply.</li>'+
        '<li><strong>Polytrauma plus delayed evacuation:</strong> the burden shifts from rescue to sustained organized management.</li>'+
        '</ul>'+
        '<p>This is why reassessment is the linking principle across all domains. Domain knowledge tells you what to look for. Reassessment tells you whether your intervention is helping, harming, or no longer enough.</p>'+
        '<h3>3.12 How These Domains Guide the Rest of the Manual</h3>'+
        '<p>This chapter is the map. The later chapters are the working instructions. Algorithms, procedures, medications, prolonged holding, pitfalls, and quick-reference tables all sit inside these domains. If this chapter is understood well, later details become easier to organize and recall under pressure.</p>'+
        '<ul>'+
        '<li>Chapter 4 will convert this domain map into major algorithms and decision pathways.</li>'+
        '<li>Later procedure chapters will show how to execute the interventions that sit inside the airway, thoracic, vascular, and monitoring domains.</li>'+
        '<li>Medication sections will link each drug back to the clinical problem it is meant to solve.</li>'+
        '<li>The prolonged holding chapter will show how domain priorities change when the patient stays with you for many hours.</li>'+
        '</ul>'+
        '<h3>3.13 End State for the Learner</h3>'+
        '<p>After this chapter, the learner should be able to name the major ACTT clinical domains, describe the core tasks inside each domain, recognize common overlap patterns, and use the domain framework to organize both study and bedside recall. The immediate goal is not mastery of every procedure yet. The immediate goal is a clear structure for thinking.</p>'+
        '<h3>3.14 Bridge to Chapter 4</h3>'+
        '<p>The next chapter moves from broad domain recognition to concrete action. Once the learner understands the map, the next step is to work through the major algorithms and decision pathways that define what to do first, what to do next, and what to avoid.</p>',
      relatedLinks:['domain-1-airway','domain-2-hemodynamics','domain-3-specialized-trauma','domain-4-environmental','domain-5-infectious-disease','domain-6-cardiovascular','domain-7-diagnostics','domain-8-non-technical']
    }
  ]
};
