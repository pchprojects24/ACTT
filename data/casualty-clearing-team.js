window.ACTT = window.ACTT || {};

const casualtyClearingTeamSection = {
  id: 'casualty-clearing-team',
  title: 'Casualty Clearing Team',
  subtitle: 'Practical support-team workflow for casualty clearing, stabilization, movement, and handover.',
  intro:
    '<p>This section is built for <strong>support-team execution</strong>: what to do first, what to report, and what to prepare next. It intentionally avoids advanced clinician-only doctrine unless needed for escalation.</p>'+ 
    '<p>Use the submenu topics as a sequence: role setup, primary assessment, communication, equipment, movement, and ongoing monitoring.</p>',
  sections: [
    {
      id: 'role-and-responsibilities',
      title: 'Role and Responsibilities',
      content:
        '<h3>Role setup in the first minutes</h3>'+ 
        '<ul>'+ 
        '<li>Assign lead, airway support, circulation/support, recorder, and runner roles immediately.</li>'+ 
        '<li>Confirm role boundaries early to prevent role drift during high workload periods.</li>'+ 
        '<li>Reconfirm who owns escalation calls, external communication, and transfer preparation.</li>'+ 
        '</ul>'+ 
        '<h3>Support-team scope (baseline)</h3>'+ 
        '<p>Baseline CCT actions focus on <strong>recognize, support, prepare, and escalate</strong>. Advanced procedures remain clinician-directed unless local scope specifically authorizes independent performance.</p>'+ 
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">ADVANCED</span> Keep outside baseline onboarding</div><p>High-autonomy decisions for surgical airway, chest tube insertion decisions, and other invasive specialist procedures should remain advanced references.</p></div>'+ 
        '<h3>Quick role reset prompt</h3>'+ 
        '<p><strong>Every handover or watch change:</strong> Who leads? Who documents? Who calls out deterioration? Who coordinates movement?</p>',
      relatedLinks: ['team/core-principles','team/role-assignment','team/sustained-performance','prolonged-holding/stabilization-checklist','checklists/mascal']
    },
    {
      id: 'primary-assessment',
      title: 'Primary Assessment',
      content:
        '<h3>CCT primary pass (XABCDE)</h3>'+ 
        '<ol>'+ 
        '<li><strong>Immediate threats:</strong> major hemorrhage, airway compromise, severe respiratory failure.</li>'+ 
        '<li><strong>Stabilization actions:</strong> oxygenation, hemorrhage control, temperature control, and rapid trend baseline.</li>'+ 
        '<li><strong>Escalation trigger check:</strong> identify thresholds that require immediate clinician review or transfer planning.</li>'+ 
        '</ol>'+ 
        '<h3>What to report immediately</h3>'+ 
        '<ul>'+ 
        '<li>Airway status and respiratory effort changes.</li>'+ 
        '<li>Perfusion/pressure trend direction (not just one value).</li>'+ 
        '<li>Mental-status change or new focal neurologic concern.</li>'+ 
        '<li>Interventions already performed and response.</li>'+ 
        '</ul>',
      relatedLinks: ['algorithms/atls-trauma-survey','domains/domain-3-specialized-trauma','thresholds/airway-respiratory','thresholds/hemodynamic','checklists/sepsis-screening']
    },
    {
      id: 'reporting-and-communication',
      title: 'Reporting and Communication',
      content:
        '<h3>Communication standard</h3>'+ 
        '<p>Use concise, closed-loop updates with a repeat-back for tasking and critical values.</p>'+ 
        '<h3>Minimum handover bundle</h3>'+ 
        '<ul>'+ 
        '<li>Casualty identifiers and mechanism/problem summary.</li>'+ 
        '<li>Current status: airway, breathing, circulation, neuro trend, temperature.</li>'+ 
        '<li>Interventions with times and response.</li>'+ 
        '<li>Current concerns, pending risks, and next expected deterioration trigger.</li>'+ 
        '</ul>'+ 
        '<h3>When preparing transfer</h3>'+ 
        '<p>Start MEDEVAC and transfer checklist elements early to reduce delay once movement is approved.</p>',
      relatedLinks: ['team/acute-communication','team/handover','team/teleconsultation','checklists/medevac','checklists/transfer-evacuation','prolonged-holding/documentation-continuity']
    },
    {
      id: 'equipment',
      title: 'Equipment',
      content:
        '<h3>Operator-first equipment checks</h3>'+ 
        '<ul>'+ 
        '<li><strong>Airway/oxygen:</strong> suction, oxygen source, BVM, airway adjunct readiness.</li>'+ 
        '<li><strong>Monitoring:</strong> monitor power, leads/cables, trend capture reliability.</li>'+ 
        '<li><strong>Access/infusion:</strong> IV/IO supplies and infusion setup readiness.</li>'+ 
        '<li><strong>Transport:</strong> battery/endurance, secured lines, movement-safe packaging.</li>'+ 
        '</ul>'+ 
        '<p>Keep checks short and repeatable. If a device fails readiness, escalate and assign a backup immediately.</p>',
      relatedLinks: ['checklists/emergency-airway-equipment','checklists/defibrillator-monitor-function','appendices/appendix-o','appendices/appendix-p']
    },
    {
      id: 'patient-movement',
      title: 'Patient Movement',
      content:
        '<h3>Move / no-move framing</h3>'+ 
        '<ul>'+ 
        '<li><strong>Do not move yet:</strong> uncontrolled airway or hemodynamic instability without immediate mitigation.</li>'+ 
        '<li><strong>Move now:</strong> destination offers clearly higher safety or required intervention capacity.</li>'+ 
        '<li><strong>Before movement:</strong> secure tubes/lines, pre-brief route, assign hazards and stop points.</li>'+ 
        '</ul>'+ 
        '<h3>Transfer handoff discipline</h3>'+ 
        '<p>Give a short movement brief before departure, then a structured handoff on arrival without omitting trend data.</p>',
      relatedLinks: ['shipboard/location-movement','shipboard/triage-prioritization','team/handover','checklists/transfer-evacuation','checklists/medevac']
    },
    {
      id: 'injuries-and-medical-emergencies',
      title: 'Injuries and Medical Emergencies',
      content:
        '<h3>High-frequency emergency set</h3>'+ 
        '<p>Prioritize response familiarity for burns, TBI, sepsis, chest syndromes, DKA/hyperglycemia, seizure, hypothermia, and agitation/combative casualty pathways.</p>'+ 
        '<h3>Support-team expectations</h3>'+ 
        '<ul>'+ 
        '<li>Recognize early pattern and announce likely pathway.</li>'+ 
        '<li>Prepare equipment/medication support for clinician-directed interventions.</li>'+ 
        '<li>Track response and deterioration triggers for rapid escalation.</li>'+ 
        '</ul>'+ 
        '<div class="severity-card amber"><div class="sc-title"><span class="sc-label">SCOPE NOTE</span> Keep baseline practical</div><p>Use this section for sequence control and prep support. Reserve specialist-only procedural detail for advanced references.</p></div>',
      relatedLinks: ['algorithms/burn-resuscitation','algorithms/tbi-management','algorithms/sepsis','algorithms/stemi','algorithms/dka','algorithms/seizure-management','algorithms/combative-patient']
    },
    {
      id: 'monitoring-and-vital-signs',
      title: 'Monitoring and Vital Signs',
      content:
        '<h3>Trend-first monitoring approach</h3>'+ 
        '<ul>'+ 
        '<li>Record time-stamped trends, not isolated values.</li>'+ 
        '<li>Document trigger thresholds reached and action taken.</li>'+ 
        '<li>Use reassessment rhythm appropriate to casualty acuity and trajectory.</li>'+ 
        '</ul>'+ 
        '<h3>Minimum tracking board fields</h3>'+ 
        '<p><strong>Time | vital trend | trigger reached | intervention | response | next review time</strong></p>',
      relatedLinks: ['thresholds/reassessment-numbers','thresholds/hemodynamic','thresholds/airway-respiratory','prolonged-holding/reassessment-rhythm','checklists/post-rosc','checklists/sepsis-screening']
    },
    {
      id: 'quick-reference',
      title: 'Quick Reference',
      content:
        '<h3>Recommended launch set (most-used)</h3>'+ 
        '<ul>'+ 
        '<li>Primary assessment algorithm and airway/hemodynamic threshold pages.</li>'+ 
        '<li>MEDEVAC + transfer/evacuation checklists.</li>'+ 
        '<li>Handover communication page and documentation continuity page.</li>'+ 
        '<li>At-bedside tools: GCS, burn calculator, dose calculator, reassessment timer.</li>'+ 
        '</ul>'+ 
        '<h3>Use this page for fast jump navigation</h3>'+ 
        '<p>If content appears duplicated elsewhere, keep this section as the concise launcher and defer full detail to source pages.</p>',
      relatedLinks: ['algorithms/atls-trauma-survey','thresholds/airway-respiratory','thresholds/hemodynamic','team/handover','checklists/medevac','checklists/transfer-evacuation','appendices/appendix-n','tools/gcs','tools/burn','tools/dosecalc','tools/timer']
    }
  ]
};

window.ACTT.casualtyClearingTeam = casualtyClearingTeamSection;
window.ACTT.cct = casualtyClearingTeamSection;
