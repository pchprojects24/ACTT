window.ACTT=window.ACTT||{};
window.ACTT.shipboard={
  id:'shipboard',
  title:'Shipboard Application',
  subtitle:'Chapter 10 — Adapting ACTT to Naval Operations',
  chapter:10,
  intro:'<p>This chapter converts earlier clinical, procedural, and medication guidance into a shipboard operating framework. The aim is not to restate land-based trauma teaching, but to show how ACTT principles must be adapted when the patient is being managed in a moving naval platform with constrained staff, space, equipment, and evacuation timelines.</p>'+
    '<h3>10.1 Purpose of This Chapter</h3>'+
    '<ul>'+
      '<li>Translate ACTT knowledge into practical shipboard execution.</li>'+
      '<li>Show how ideal trauma and critical care principles change when applied in a naval platform with limited space, limited personnel, ship movement, and delayed evacuation.</li>'+
      '<li>Emphasize adaptation: the correct plan is the one that can be performed safely, monitored reliably, and maintained over time onboard.</li>'+
    '</ul>'+
    '<p>Shipboard medicine changes the margin for error. A plan that is technically correct on land may fail at sea if it depends on constant one-to-one observation, unrestricted equipment access, immediate imaging, or rapid transfer to a higher medical echelon. The shipboard clinician therefore has to convert every intervention into a sustainable onboard plan. That includes choosing where the casualty will be managed, how the casualty will be observed, what equipment must remain attached, and what parts of the standard pathway can realistically be supported for the next several hours.</p>'+
    '<h3>10.2 Why Shipboard Application Deserves Its Own Chapter</h3>'+
    '<ul>'+
      '<li>The environment can create risk even after the correct diagnosis and first intervention have been made.</li>'+
      '<li>Operational constraints affect triage, movement, sedation choices, device securement, monitoring intensity, documentation, and when to seek outside support.</li>'+
      '<li>The shipboard clinician often has to bridge the gap between ideal care and sustainable care.</li>'+
    '</ul>'+
    '<p>A casualty may survive the first airway intervention, chest decompression, or fluid bolus, then deteriorate later because the environment was not accounted for. Examples include accidental extubation during internal ship movement, a pressor infusion that cannot be monitored closely enough across watch turnover, or a chest tube that becomes kinked after transfer into a smaller compartment. The purpose of shipboard adaptation is to identify those failure points before they occur and redesign the plan around them.</p>',
  sections:[
    {
      id:'core-realities',
      title:'Core Shipboard Realities That Change Care',
      content:'<h3>10.3 Core Shipboard Realities That Change Care</h3>'+
        '<div class="shipboard-callout"><strong>Key shipboard realities that alter clinical care:</strong>'+
        '<ul>'+
          '<li>Limited personnel</li>'+
          '<li>Limited diagnostics</li>'+
          '<li>Finite medication and equipment supply</li>'+
          '<li>Delayed MEDEVAC due to distance, weather, or operational posture</li>'+
          '<li>Physical constraints: noise, lighting, ladders, passageways, confined work areas, and ship movement</li>'+
        '</ul></div>'+

        '<h4>10.3.1 Limited Personnel</h4>'+
        '<p>High-acuity care on a ship is rarely delivered with a full land-based trauma team. The PA may have only intermittent assistance, or may need to rely on non-medical personnel for movement, observation, and equipment retrieval. This means the treatment plan must be sized to the available manpower. A drug requiring close titration, a procedure requiring continuous device observation, or a sedation plan that demands constant bedside presence may be technically possible but operationally unsafe if the staffing burden cannot be maintained.</p>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Assign tasks that only the clinician can do first; delegate everything else early.</li>'+
          '<li>If the plan depends on a dedicated observer, identify that person explicitly rather than assuming availability.</li>'+
          '<li>Reduce complexity when staffing is thin: fewer infusions, fewer nonessential monitoring tasks, more emphasis on trend-based checks that change decisions.</li>'+
        '</ul></div>'+

        '<h4>10.3.2 Limited Diagnostics</h4>'+
        '<p>Shipboard decisions are often made with focused examination, repeat vitals, limited point-of-care tools, and trend recognition rather than full diagnostic workups. The clinician should favor information that changes management. Examples include GCS trend, pupil change, work of breathing, urine output, tube function, and response to a fluid challenge. If a test will not change immediate management, it may be lower priority than reassessment and supportive care.</p>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Ask whether a test changes the next action before committing time or manpower to it.</li>'+
          '<li>When diagnostics are limited, document trends clearly enough that deterioration can still be recognized.</li>'+
          '<li>Use practical bedside markers: mental status, pulses, capillary refill, oxygen requirement, EtCO2 if available, and device function.</li>'+
        '</ul></div>'+

        '<h4>10.3.3 Finite Medication and Equipment Supply</h4>'+
        '<p>Shipboard stock is not unlimited, and some ACTT-relevant items may not be available at all. The clinician therefore has to think beyond the immediate dose. Every use of oxygen, sedatives, vasopressors, chest drainage equipment, dressings, and IV access supplies should be considered in the context of possible prolonged holding.</p>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Before committing to a therapy, ask whether it can be safely continued for hours if evacuation slips.</li>'+
          '<li>Use preferred drugs when they are operationally sustainable; use substitutes when the ideal drug is unavailable or creates excessive monitoring burden.</li>'+
          '<li>Track critical consumption early: oxygen, pressor syringes or bags, sedatives, dressings, drainage setup, IV supplies, and backup airway equipment.</li>'+
        '</ul></div>'+

        '<h4>10.3.4 Delayed MEDEVAC and Weather/Distance Constraints</h4>'+
        '<p>At sea, evacuation timing may change after the initial plan is set. Weather, flight limitations, vessel location, deck status, and operational priorities can all delay transfer. The casualty plan must therefore be built on the assumption that transfer may take longer than hoped. Once the patient is initially stabilized, the clinician should deliberately switch from an acute rescue mindset to a sustained holding mindset, with explicit monitoring intervals, re-dosing plans, and handover structure.</p>'+

        '<h4>10.3.5 Physical Environment</h4>'+
        '<p>Physical conditions influence both procedural success and ongoing safety. Confined treatment rooms, difficult lighting, noise, vibration, and ship movement all increase the risk of dropped equipment, poor visualization, failed securement, and accidental dislodgement of lines and tubes. Ladders, tight passageways, and narrow compartment access may also make casualty movement itself a medical hazard.</p>',
      relatedLinks:['prolonged-holding/reassessment','team/resource-management']
    },
    {
      id:'land-to-ship',
      title:'Converting Land-Based Principles to Shipboard',
      content:'<h3>10.4 Converting Land-Based ACTT Principles to Shipboard Practice</h3>'+
        '<p>The central question in shipboard adaptation is not whether the standard principle is correct, but how to preserve its intent under constraints. The clinician should separate care into three categories: what must still happen no matter what, what must be modified, and what may be deferred without harming the patient.</p>'+

        '<h4>10.4.1 What Must Still Happen No Matter What</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Airway compromise must still be addressed early.</li>'+
          '<li>Oxygenation and ventilation remain immediate priorities.</li>'+
          '<li>Tension physiology, severe shock, active seizure, and impending herniation still require time-critical intervention.</li>'+
          '<li>Unsafe agitation that compromises care or transport still requires control.</li>'+
          '<li>Life-saving interventions should not be delayed solely because the shipboard setup is inconvenient.</li>'+
        '</ul></div>'+

        '<h4>10.4.2 What Must Be Modified</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Monitoring may shift from continuous high-resolution monitoring to scheduled, clinically focused reassessment if resources are limited.</li>'+
          '<li>Procedure setup may need staged preparation: secure the essentials first, then add refinements once the immediate threat is addressed.</li>'+
          '<li>Medication choices may shift toward drugs that are easier to dose, monitor, and maintain onboard.</li>'+
          '<li>Documentation must be simplified enough to sustain, but detailed enough to support trend recognition and handover.</li>'+
        '</ul></div>'+

        '<h4>10.4.3 What May Need To Be Deferred</h4>'+
        '<p>Nonessential diagnostics, low-yield interventions, and nonurgent treatments that consume manpower without changing immediate safety can be deferred. Examples include noncritical reorganization tasks, nonurgent comfort measures during an unstable phase, and procedures that can wait until the casualty is in a safer, better-supported location.</p>',
      relatedLinks:['team/task-prioritization','prolonged-holding/monitoring']
    },
    {
      id:'triage-prioritization',
      title:'Shipboard Triage and Prioritization',
      content:'<h3>10.5 Shipboard Triage and Prioritization</h3>'+
        '<p>At sea, not every task can be performed at once. Triage therefore applies not only to patients, but also to tasks. The most dangerous error is allowing lower-yield tasks to consume attention while a higher-risk problem drifts.</p>'+

        '<h4>10.5.1 Immediate Life Threats</h4>'+
        '<div class="shipboard-callout"><strong>Immediate life threats requiring urgent action:</strong>'+
        '<ul>'+
          '<li>Airway loss or progressive airway failure</li>'+
          '<li>Severe hypoxia or ventilatory failure</li>'+
          '<li>Shock with worsening perfusion</li>'+
          '<li>Active seizure or postictal airway risk</li>'+
          '<li>Tension pneumothorax</li>'+
          '<li>Impending cerebral herniation</li>'+
          '<li>Catastrophic agitation creating immediate danger</li>'+
        '</ul></div>'+

        '<h4>10.5.2 High-Risk But Temporarily Controlled Problems</h4>'+
        '<p>These are patients who look better after intervention but remain vulnerable. A recently intubated patient, a chest tube patient, a pressor-supported patient, a large-burn casualty, or a TBI casualty under observation may appear stable and still be one failure away from rapid decline. These patients need assigned reassessment rhythm and clear escalation thresholds.</p>'+

        '<h4>10.5.3 Lower-Priority Tasks That Still Matter</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Documentation, medication preparation for upcoming doses, equipment restocking, comfort care, bedding, and environmental cleanup all remain important.</li>'+
          '<li>These tasks should be done when they do not compete with immediate instability.</li>'+
          '<li>If these tasks are ignored for too long, they later become patient safety issues; the goal is sequencing, not neglect.</li>'+
        '</ul></div>',
      relatedLinks:['team/triage','prolonged-holding/reassessment']
    },
    {
      id:'location-movement',
      title:'Casualty Location and Movement on the Ship',
      content:'<h3>10.6 Casualty Location and Movement on the Ship</h3>'+
        '<p>Where the casualty is managed affects both safety and the ability to continue care. Movement should be deliberate. The best location is the place that gives the highest ratio of access, monitoring, lighting, airway support, and safe securement - not simply the closest location.</p>'+

        '<h4>10.6.1 Choosing the Best Care Location</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Prefer a location with oxygen, suction, monitoring, lighting, room to work, and stable surfaces for equipment.</li>'+
          '<li>Consider whether the location can safely support prolonged holding if evacuation is delayed.</li>'+
          '<li>In rough conditions, choose a location where the patient and equipment can be secured more reliably.</li>'+
        '</ul></div>'+

        '<h4>10.6.2 Movement Risks</h4>'+
        '<p>Movement may worsen bleeding, spinal instability, hemodynamics, or device security. A patient who is already barely oxygenating or perfusing may not tolerate an unnecessary transfer. Move only when the new location clearly improves care capability or safety.</p>'+

        '<h4>10.6.3 Preparing for Movement</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Secure all lines, drains, tubes, and dressings before moving.</li>'+
          '<li>Assign one person to airway, one to lines and drains, one to route and obstacles if enough personnel are available.</li>'+
          '<li>Carry immediate rescue equipment during transfer: oxygen, BVM, suction if feasible, emergency meds, and a means to re-secure critical devices.</li>'+
          '<li>Pre-brief likely problems before the move starts.</li>'+
        '</ul></div>',
      relatedLinks:['team/movement-planning','prolonged-holding/environment']
    },
    {
      id:'airway-at-sea',
      title:'Airway and Breathing at Sea',
      content:'<h3>10.7 Airway and Breathing at Sea</h3>'+

        '<h4>10.7.1 Airway Procedures in Confined or Moving Spaces</h4>'+
        '<p>Intubation, suctioning, or rescue airway procedures may need to occur where the casualty is found if the airway is failing. In confined or moving spaces, pre-position suction, confirm lighting, clear the floor of loose equipment, and bring the failed-airway backup plan physically into the space before the first attempt. If moving the patient would significantly improve airway conditions and the patient can safely tolerate the move, do so early rather than late.</p>'+

        '<h4>10.7.2 Intubated Patient Management at Sea</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Check tube depth and securement after every move, repositioning event, or major agitation episode.</li>'+
          '<li>Secure the tube and circuit so that ship movement cannot transmit traction directly to the airway.</li>'+
          '<li>If ventilating mechanically, ensure the ventilator setup is stable and visible enough for repeated checks.</li>'+
          '<li>If manual ventilation is required, explicitly assign who will perform it and for how long.</li>'+
        '</ul></div>'+

        '<h4>10.7.3 Oxygen and Ventilation Resource Use</h4>'+
        '<p>Oxygen planning becomes a logistics issue during prolonged holding. The clinician should identify which patients need the highest oxygen reserve and which can be safely stepped down after reassessment. Oxygen conservation must never become undertreatment, but casual waste can later eliminate options.</p>'+

        '<h4>10.7.4 Thoracic Devices at Sea</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Chest tubes require aggressive securement, clear drainage positioning, and repeated checks for kinks, clots, and pull tension.</li>'+
          '<li>After movement, reassess for renewed respiratory distress, drainage failure, and recurrent tension physiology.</li>'+
          '<li>In confined spaces, ensure the drainage system remains below the chest when required and is protected from tipping or snagging.</li>'+
        '</ul></div>',
      relatedLinks:['airway/intubation','airway/rescue','prolonged-holding/ventilation']
    },
    {
      id:'circulation-at-sea',
      title:'Circulation and Shock Management at Sea',
      content:'<h3>10.8 Circulation and Shock Management at Sea</h3>'+

        '<h4>10.8.1 Fluid Use in a Shipboard Setting</h4>'+
        '<p>Repeated fluid boluses without reassessment are particularly dangerous at sea because fluid overload increases respiratory burden and may create a problem the ship cannot support. Each bolus should have a reassessment plan linked to perfusion, blood pressure, work of breathing, oxygen requirement, and the overall disease process.</p>'+

        '<h4>10.8.2 Blood Pressure and Perfusion Monitoring</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Use continuous monitoring when the patient is unstable, on pressors, or actively deteriorating.</li>'+
          '<li>When continuous monitoring is not sustainable, schedule serial manual checks that are frequent enough to change the plan before failure becomes obvious.</li>'+
          '<li>Do not rely on blood pressure alone; trend mental status, capillary refill, pulses, skin signs, and urine output.</li>'+
        '</ul></div>'+

        '<h4>10.8.3 Vasopressors at Sea</h4>'+
        '<p>Pressors can stabilize perfusion, but they create a large monitoring burden. Before starting a pressor, confirm that the line can be watched, the pump can be supported, the concentration is clear, and someone is responsible for ongoing reassessment. A pressor plan that cannot be safely monitored is an incomplete plan.</p>'+

        '<h4>10.8.4 Access Management</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Protect IV and IO access during movement with deliberate routing and securement.</li>'+
          '<li>Recheck every access site after transfer, repositioning, or patient agitation.</li>'+
          '<li>If temporary access is being used, decide early whether more durable access is needed and feasible.</li>'+
        '</ul></div>',
      relatedLinks:['circulation/shock','circulation/vasopressors','prolonged-holding/fluid-management']
    },
    {
      id:'medication-shipboard',
      title:'Medication Use in the Shipboard Environment',
      content:'<h3>10.9 Medication Use in the Shipboard Environment</h3>'+

        '<h4>10.9.1 Matching Drug Choice to Monitoring Capacity</h4>'+
        '<p>Medication selection must reflect the ship\'s ability to observe the consequences. A sedative that requires continuous airway vigilance, or a pressor requiring constant titration, may be inappropriate if the watch cannot sustain that observation burden. The best medication plan is not simply the one with the best theoretical pharmacology, but the one that can be administered and followed safely.</p>'+

        '<h4>10.9.2 Matching Drug Choice to Stock</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Know which preferred ACTT drugs are actually onboard.</li>'+
          '<li>If using a substitute, state the trade-offs clearly: slower onset, shorter duration, more hypotension, more respiratory risk, or higher monitoring demand.</li>'+
          '<li>Do not assume a familiar shore-based option will be available in Sick Bay stock.</li>'+
        '</ul></div>'+

        '<h4>10.9.3 Medication Conservation Over Time</h4>'+
        '<p>During prolonged holds, think in total course rather than single dose. Estimate re-dosing needs for analgesia, sedation, antibiotics, and pressors. Avoid wasting critical stock on avoidable duplication, incorrect preparation, or unnecessary PRN use.</p>'+

        '<h4>10.9.4 Medication Safety in Fatigue and Handovers</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Use explicit time-and-dose charting for every administered medication.</li>'+
          '<li>Confirm concentration before starting or changing an infusion.</li>'+
          '<li>At handover, state what was last given, what effect it had, and when the next reassessment or next dose is expected.</li>'+
          '<li>Use read-back for high-risk medications, especially pressors and sedatives.</li>'+
        '</ul></div>',
      relatedLinks:['medications/formulary','medications/sedation','prolonged-holding/medication-rhythm']
    },
    {
      id:'procedures-shipboard',
      title:'Procedures in the Shipboard Context',
      content:'<h3>10.10 Procedures in the Shipboard Context</h3>'+

        '<h4>10.10.1 Before the Procedure</h4>'+
        '<p>Before starting a procedure, ask whether the current location is safe enough, whether there is enough room to complete it correctly, whether the patient can tolerate any delay required to improve setup, and whether the backup plan is physically available. It is often safer to pause for 30 seconds to reposition equipment and people than to start immediately with a compromised setup.</p>'+

        '<h4>10.10.2 During the Procedure</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Expect role compression: one person may have to combine monitoring and procedural assistance.</li>'+
          '<li>Protect the sterile field as much as possible, but do not let perfect sterility block life-saving action in a true emergency.</li>'+
          '<li>Control loose equipment aggressively in a moving environment.</li>'+
          '<li>State each critical step aloud in high-risk procedures so the team remains synchronized.</li>'+
        '</ul></div>'+

        '<h4>10.10.3 After the Procedure</h4>'+
        '<p>At sea, securement and reassessment are often more important than the last technical step of placement. Every procedure should end with a maintenance plan: who checks the device, how often, what counts as failure, and what the rescue response is if the device stops working.</p>',
      relatedLinks:['procedures/chest-tube','procedures/intubation','team/role-assignment']
    },
    {
      id:'formulary-crossref',
      title:'Shipboard Formulary and Capability Cross-Reference',
      content:'<h3>10.11 Shipboard Formulary and Capability Cross-Reference</h3>'+
        '<p>This manual should be used with an explicit awareness of real Sick Bay capability. Confirmed onboard items support current practice, but non-stocked ACTT medications and equipment still matter for course learning, substitution planning, and understanding what the ideal standard would otherwise be.</p>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Cross-reference core ACTT medications and equipment with current Sick Bay stock before major exercises or deployments.</li>'+
          '<li>Identify non-stocked but important items so gaps are understood before a casualty occurs.</li>'+
          '<li>For each gap, define whether there is a reasonable substitute, a procedural workaround, or a hard limitation.</li>'+
        '</ul></div>',
      relatedLinks:['medications/formulary','medications/substitution']
    },
    {
      id:'communication-resources',
      title:'Communication and Team Use of Non-Medical Ship Resources',
      content:'<h3>10.12 Communication and Team Use of Non-Medical Ship Resources</h3>'+

        '<h4>10.12.1 Using Available Ship Personnel</h4>'+
        '<p>Not every useful role requires clinical training. Non-medical personnel may support movement, equipment retrieval, observation of a restrained or sedated casualty, route clearance, and basic practical tasks. These roles should be assigned clearly and supervised appropriately.</p>'+

        '<h4>10.12.2 Communicating With Chain of Command</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>State clinical seriousness in concrete terms: unstable, improving, pressor-dependent, ventilated, likely prolonged hold, or urgent evacuation needed.</li>'+
          '<li>Communicate expected manpower burden and whether a dedicated observer or repeated movement support is required.</li>'+
          '<li>State the likely duration of support needs and the operational implications of a high-acuity casualty onboard.</li>'+
        '</ul></div>'+

        '<h4>10.12.3 Preparing the Ship for Prolonged Casualty Management</h4>'+
        '<p>A prolonged casualty may require more than clinical management. The ship may need to allocate space, observer rotation, movement assistance, extra lighting, heating, or reduced tasking around the treatment area. These preparations should start early when a long hold appears likely.</p>',
      relatedLinks:['team/communication','team/chain-of-command','prolonged-holding/resource-planning']
    },
    {
      id:'teleconsultation',
      title:'Teleconsultation and Shore Support in the Shipboard Setting',
      content:'<h3>10.13 Teleconsultation and Shore Support in the Shipboard Setting</h3>'+

        '<h4>10.13.1 When To Call Early</h4>'+
        '<div class="shipboard-callout"><strong>Call for teleconsultation early in these situations:</strong>'+
        '<ul>'+
          '<li>Unstable or high-acuity casualties</li>'+
          '<li>Prolonged holds likely to exceed initial expectations</li>'+
          '<li>Complex airway, burn, TBI, seizure, or pressor-dependent cases</li>'+
          '<li>Situations where shipboard capability is approaching its limit</li>'+
          '<li>Cases where the diagnosis is uncertain but the trajectory is worsening</li>'+
        '</ul></div>'+

        '<h4>10.13.2 What Information Must Be Ready</h4>'+
        '<div class="shipboard-callout"><strong>Prepare the following before calling:</strong>'+
        '<ul>'+
          '<li>Concise problem list</li>'+
          '<li>Vital sign and neurologic trends</li>'+
          '<li>Interventions already performed and response</li>'+
          '<li>Current medications, last doses, and active infusions</li>'+
          '<li>Current access and devices</li>'+
          '<li>What the ship can and cannot do from this point forward</li>'+
        '</ul></div>'+

        '<h4>10.13.3 How Teleconsultation Changes the Shipboard Plan</h4>'+
        '<p>Remote support should refine goals, clarify thresholds for re-contact, and help determine whether ongoing holding remains acceptable. It is not simply a request for reassurance. A useful teleconsult should produce specific decisions about what to continue, what to stop, what to monitor most closely, and what change means the current plan is no longer safe.</p>',
      relatedLinks:['team/communication','prolonged-holding/escalation']
    },
    {
      id:'sustaining-care',
      title:'Sustaining Safe Care During a Shipboard Hold',
      content:'<h3>10.14 Sustaining Safe Care During a Shipboard Hold</h3>'+

        '<h4>10.14.1 Build a Repeatable Reassessment Rhythm</h4>'+
        '<p>Safe prolonged care depends on rhythm. Assign who checks the airway, who verifies device function, who records vitals, and what interval triggers formal review. If reassessment depends on memory or informal assumption, it will drift under fatigue.</p>'+

        '<h4>10.14.2 Build a Device Check Rhythm</h4>'+
        '<div class="shipboard-callout"><strong>Regular device checks must include:</strong>'+
        '<ul>'+
          '<li>Tube check</li>'+
          '<li>Line and access check</li>'+
          '<li>Chest tube and drainage check</li>'+
          '<li>Foley and urine output check</li>'+
          '<li>Dressings and bleeding check</li>'+
          '<li>Monitor and power source check</li>'+
        '</ul></div>'+

        '<h4>10.14.3 Build a Medication Rhythm</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Scheduled dosing times written clearly</li>'+
          '<li>PRN indication tied to reassessment criteria</li>'+
          '<li>Infusions reviewed at set intervals</li>'+
          '<li>Running totals for opioids, sedatives, fluids, acetaminophen, and key antibiotics</li>'+
        '</ul></div>'+

        '<h4>10.14.4 Build a Handover Rhythm</h4>'+
        '<p>During a long hold, safe care depends on repeated structured handover. Every handover should state what happened, what was done, what is improving, what is drifting, what may fail next, and what must be checked at the next interval.</p>',
      relatedLinks:['prolonged-holding/reassessment','prolonged-holding/device-checks','team/handover']
    },
    {
      id:'failure-points',
      title:'Common Shipboard Failure Points',
      content:'<h3>10.15 Common Shipboard Failure Points</h3>'+

        '<h4>10.15.1 Environmental Failure Points</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Insufficient space to perform or maintain the intervention</li>'+
          '<li>Poor lighting causing procedural or monitoring error</li>'+
          '<li>Equipment too far away when the patient deteriorates</li>'+
          '<li>Device dislodgement during movement or rough conditions</li>'+
        '</ul></div>'+

        '<h4>10.15.2 Staffing Failure Points</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Assuming more observation capacity than actually exists</li>'+
          '<li>Using sedation or infusions that exceed realistic monitoring capability</li>'+
          '<li>Fatigue-related drift in reassessment and charting</li>'+
        '</ul></div>'+

        '<h4>10.15.3 Resource Failure Points</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Oxygen depletion</li>'+
          '<li>Medication depletion</li>'+
          '<li>Insufficient infusion pumps</li>'+
          '<li>Lack of replacement dressing, tubing, or securement supplies</li>'+
        '</ul></div>'+

        '<h4>10.15.4 Organizational Failure Points</h4>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Poor communication with command</li>'+
          '<li>Delayed evacuation request or delayed teleconsultation</li>'+
          '<li>Unclear ownership of reassessment tasks</li>'+
          '<li>Incomplete charting during watch turnover</li>'+
        '</ul></div>',
      relatedLinks:['team/failure-recognition','prolonged-holding/pitfalls']
    },
    {
      id:'adaptation-rules',
      title:'Practical Shipboard Adaptation Rules',
      content:'<h3>10.16 Practical Shipboard Adaptation Rules</h3>'+
        '<div class="shipboard-callout"><strong>Core adaptation rules for shipboard care:</strong>'+
        '<ul>'+
          '<li><strong>Simplify to what changes outcomes.</strong> If an assessment or intervention will not change management, it is lower priority than supportive care and reassessment.</li>'+
          '<li><strong>Secure everything.</strong> At sea, unsecured lines, drains, tubes, and pumps are latent hazards.</li>'+
          '<li><strong>Trend everything important.</strong> One normal value matters less than the direction of change over time.</li>'+
          '<li><strong>Escalate earlier than on land.</strong> Distance and delay narrow the safe margin.</li>'+
          '<li><strong>Choose sustainable care over theoretically perfect care.</strong> The safest plan is the one the ship can continue reliably.</li>'+
        '</ul></div>'+

        '<h3>10.17 What the Learner Should Be Able To Do After This Chapter</h3>'+
        '<div class="shipboard-callout">'+
        '<ul>'+
          '<li>Adapt ACTT principles to real shipboard conditions rather than applying land-based protocols rigidly.</li>'+
          '<li>Choose interventions and monitoring plans that are safe, realistic, and sustainable onboard.</li>'+
          '<li>Organize casualty location, movement, equipment, staffing, and communication around patient safety.</li>'+
          '<li>Recognize when the environment itself is now a major source of risk.</li>'+
          '<li>Build a prolonged care routine that survives watch turnover, fatigue, and delayed evacuation.</li>'+
        '</ul></div>'+

        '<h3>10.18 Bridge to the Next Chapter</h3>'+
        '<p>This chapter focuses on adapting clinical care to the ship. The next chapter shifts to the human and organizational side of making that care run reliably: team structure, communication discipline, operational decision-making, and how to maintain coordinated performance under pressure.</p>'+

        '<h3>Chapter 10 Quick-Use Shipboard Rules</h3>'+
        '<div class="shipboard-callout"><strong>Quick-use rules for immediate reference:</strong>'+
        '<ul>'+
          '<li>Treat the environment as part of the casualty, not just the background.</li>'+
          '<li>If a device is placed, a maintenance plan must be assigned immediately.</li>'+
          '<li>If a drug is started, the monitoring burden must be assigned immediately.</li>'+
          '<li>If the casualty is moved, re-check airway, lines, drains, and perfusion immediately afterward.</li>'+
          '<li>If evacuation may be delayed, convert the plan to a prolonged-hold model early, not late.</li>'+
          '<li>If the plan cannot be monitored safely, it is not yet a complete plan.</li>'+
        '</ul></div>',
      relatedLinks:['team/communication','prolonged-holding/reassessment','prolonged-holding/pitfalls']
    }
  ]
};
