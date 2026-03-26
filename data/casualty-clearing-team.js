window.ACTT=window.ACTT||{};
window.ACTT.cct={
  id:'cct',
  title:'Casualty Clearing Team',
  subtitle:'Repository content map for support-team training build-out (draft organization)',
  intro:'<p>This section is intentionally a <strong>content map</strong>, not final teaching text. It consolidates existing repository material that can be re-used for the Casualty Clearing Team audience and sorts it under the new submenu structure.</p><p>Each topic identifies what is directly useful now, what needs simplification, and what should remain flagged as advanced. Use this as the build scaffold for the next authoring pass.</p>',
  sections:[
    {
      id:'role-responsibilities',
      title:'Role and Responsibilities',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+ 
        '<li><strong>Directly useful:</strong> Team lead ownership, role assignment, role drift prevention, and sustained 24–72 h team rhythm in <a href="#/team/role-assignment">Team & Communication</a> and <a href="#/team/sustained-performance">Team Performance During Holding</a>.</li>'+
        '<li><strong>Partially useful:</strong> MASCAL command-role checklist can be adapted for small CCT staffing models: <a href="#/checklists/mascal">MASCAL checklist</a>.</li>'+
        '<li><strong>Cross-link opportunity:</strong> Pair role expectations with <a href="#/shipboard/core-realities">Shipboard realities</a> and <a href="#/prolonged-holding/stabilization-checklist">stabilization checklist</a> so role limits are explicit.</li>'+
        '</ul>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">ADVANCED</span> Items to keep out of entry-level CCT delivery</div><p>High-autonomy leadership content tied to RSI/chest tube/pericardiocentesis decision authority should remain advanced unless local scope explicitly includes it.</p></div>'+ 
        '<p><em>Placeholder for next task:</em> convert this map into concise “what CCT member does in first 10 minutes / first hour / handover” role cards.</p>',
      relatedLinks:['team/core-principles','team/role-assignment','team/sustained-performance','shipboard/core-realities','checklists/mascal']
    },
    {
      id:'primary-assessment',
      title:'Primary Assessment',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> <a href="#/algorithms/atls-trauma-survey">ATLS trauma survey algorithm</a>, <a href="#/domains/domain-3-specialized-trauma">trauma assessment framework</a>, and airway/circulation threshold triggers in <a href="#/thresholds/airway-respiratory">Critical Numbers</a>.</li>'+
        '<li><strong>Partially useful:</strong> ACLS standalone pages can support non-trauma first-pass checks when collapse/cardiac patterns dominate.</li>'+
        '<li><strong>Cross-link opportunity:</strong> Bridge assessment findings to action checklists (RSI, sepsis screening, DKA, chest pain) for CCT handoff accuracy.</li>'+
        '</ul>'+
        '<p><em>Placeholder for next task:</em> add a CCT-focused XABCDE quick sequence with “what to report immediately” prompts.</p>',
      relatedLinks:['algorithms/atls-trauma-survey','domains/domain-3-specialized-trauma','thresholds/airway-respiratory','checklists/sepsis-screening','checklists/chest-pain-assessment']
    },
    {
      id:'reporting-communication',
      title:'Reporting and Communication',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> Closed-loop communication, critical change callouts, handover structure, and teleconsultation frameworks in <a href="#/team/acute-communication">acute communication</a>, <a href="#/team/handover">handover</a>, and <a href="#/team/teleconsultation">teleconsultation</a>.</li>'+
        '<li><strong>Directly useful:</strong> <a href="#/checklists/medevac">MEDEVAC 9-line checklist</a> and <a href="#/checklists/transfer-evacuation">transfer/evacuation checklist</a> for standard reporting outputs.</li>'+
        '<li><strong>Cross-link opportunity:</strong> Use documentation module from prolonged holding to reduce information loss across watch changes.</li>'+
        '</ul>'+
        '<p><em>Placeholder for next task:</em> add one-page CCT handover template (casualty state, interventions, trends, pending risks).</p>',
      relatedLinks:['team/acute-communication','team/handover','team/teleconsultation','prolonged-holding/documentation-continuity','checklists/medevac','checklists/transfer-evacuation']
    },
    {
      id:'equipment',
      title:'Equipment',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> Device pages in <a href="data/Equipment/index.html">Equipment (standalone)</a> for Zoll EMV, monitor, suction, i-STAT, Infusomat, Belmont buddy lite, oxygen concentrator.</li>'+
        '<li><strong>Directly useful:</strong> Readiness checklists for airway and monitor function (<a href="#/checklists/emergency-airway-equipment">airway equipment</a>, <a href="#/checklists/defibrillator-monitor-function">defib/monitor</a>).</li>'+
        '<li><strong>Partially useful:</strong> Appendix P source bundle surfaces transport-monitoring references and IFUs; useful for job aids.</li>'+
        '</ul>'+
        '<p><em>Placeholder for next task:</em> split equipment into “CCT operator checks” vs “advanced clinician setup” check blocks.</p>',
      relatedLinks:['checklists/emergency-airway-equipment','checklists/defibrillator-monitor-function','appendices/appendix-p','appendices/appendix-o']
    },
    {
      id:'patient-movement',
      title:'Patient Movement',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> <a href="#/shipboard/location-movement">location and movement at sea</a>, <a href="#/shipboard/triage-prioritization">shipboard triage/prioritization</a>, and <a href="#/team/handover">handover/transfer risks</a>.</li>'+
        '<li><strong>Directly useful:</strong> Transfer prep items in <a href="#/checklists/transfer-evacuation">transfer/evacuation checklist</a> and MEDEVAC 9-line.</li>'+
        '<li><strong>Cross-link opportunity:</strong> Pull selected CCT Pocket / Annex C references from Appendix P into movement doctrine notes.</li>'+
        '</ul>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">ADVANCED</span> Keep as advanced references</div><p>Full critical-care transport doctrine documents (CCT Pocket, CCTT Pacific, Annex C) are valuable but too dense for baseline CCT onboarding; keep as advanced annex links.</p></div>'+ 
        '<p><em>Placeholder for next task:</em> add a “move/no-move now” decision aid tied to airway and hemodynamic stability checks.</p>',
      relatedLinks:['shipboard/location-movement','shipboard/triage-prioritization','team/handover','checklists/transfer-evacuation','checklists/medevac','appendices/appendix-p']
    },
    {
      id:'injuries-medical-emergencies',
      title:'Injuries and Medical Emergencies',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> High-frequency algorithms (burns, TBI, sepsis, hypothermia, chest decompression, seizure, DKA, STEMI, combative casualty).</li>'+
        '<li><strong>Directly useful:</strong> Scenario package (12 ACTT scenarios) provides practical context for CCT response sequences.</li>'+
        '<li><strong>Partially useful:</strong> Some procedure pages assume clinician-level intervention; CCT extracts should focus on prep/assist/escalate triggers.</li>'+
        '</ul>'+
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">ADVANCED</span> Not baseline CCT procedural scope</div><p>Surgical cricothyrotomy, pericardiocentesis, fibrinolysis dosing strategy, and full ventilator titration logic should remain advanced unless specifically required by role scope.</p></div>'+ 
        '<p><em>Placeholder for next task:</em> create CCT “recognize-support-escalate” cards per emergency type.</p>',
      relatedLinks:['algorithms/burn-resuscitation','algorithms/tbi-management','algorithms/sepsis','algorithms/hypothermia','algorithms/chest-decompression','algorithms/seizure-management','algorithms/dka','algorithms/stemi','algorithms/combative-patient']
    },
    {
      id:'monitoring-vital-signs',
      title:'Monitoring and Vital Signs',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> Thresholds chapter (airway, hemodynamic, neurologic, burn, sepsis, reassessment numbers) for trend triggers.</li>'+
        '<li><strong>Directly useful:</strong> Prolonged holding reassessment rhythm, device maintenance, and documentation continuity sections.</li>'+
        '<li><strong>Directly useful:</strong> Checklists: sepsis screen, post-ROSC, post-fibrinolysis monitoring, DKA hyperglycemia.</li>'+
        '</ul>'+
        '<p><em>Placeholder for next task:</em> draft a CCT vitals-trending board template (time, trend, trigger reached, action taken).</p>',
      relatedLinks:['thresholds/reassessment-numbers','thresholds/hemodynamic','thresholds/airway-respiratory','prolonged-holding/reassessment-rhythm','prolonged-holding/documentation-continuity','checklists/sepsis-screening','checklists/post-rosc']
    },
    {
      id:'quick-reference',
      title:'Quick Reference',
      content:
        '<h3>Existing Material Mapped Here</h3>'+
        '<ul>'+
        '<li><strong>Directly useful:</strong> Appendices A–P, especially med-tech quick cards, oxygen quick reference, and supplemental transport/monitoring references.</li>'+
        '<li><strong>Directly useful:</strong> Clinical tools (GCS, burn, dose calc, reassessment timer, interactions, differential diagnosis) for at-bedside use.</li>'+
        '<li><strong>Cross-link opportunity:</strong> Add one CCT launcher page that points to the most-used 10 references for casualty clearing workflows.</li>'+
        '</ul>'+
        '<p><em>Placeholder for next task:</em> produce compact CCT quick-reference bundle and trim duplicate source docs.</p>',
      relatedLinks:['appendices/appendix-n','appendices/appendix-o','appendices/appendix-p','tools/gcs','tools/burn','tools/dosecalc','tools/timer']
    }
  ]
};
