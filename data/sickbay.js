window.ACTT=window.ACTT||{};
window.ACTT.sickbay={
  id:'sickbay',
  title:'Sick Bay',
  subtitle:'Shipboard clinical resources and onboard references',
  intro:`<div style="margin-bottom:20px">
    <p style="color:var(--text-secondary);font-size:0.92rem;line-height:1.6">
      Offline-first references for shipboard clinical care. Each section opens as a standalone page and works fully offline.
    </p>
  </div>
  <div class="cards-grid">
    <a class="quick-card" href="#/sickbay-meds">
      <div class="qc-icon">&#128138;</div>
      <div class="qc-title">Sick Bay Meds</div>
      <div class="qc-desc">Medication monograph library — 96 drugs with dosing, indications, and contraindications.</div>
    </a>
    <a class="quick-card" href="data/ACLS/index.html">
      <div class="qc-icon">&#10084;&#65039;</div>
      <div class="qc-title">ACLS</div>
      <div class="qc-desc">12 algorithms — cardiac arrest, arrhythmias, anaphylaxis, stroke, hyperkalemia, opioid toxicity, and more.</div>
    </a>
    <a class="quick-card" href="data/Equipment/index.html">
      <div class="qc-icon">&#9881;</div>
      <div class="qc-title">Equipment</div>
      <div class="qc-desc">11 device guides — monitors, defibrillator, ventilator, infusion pump, oxygen, suction, and more.</div>
    </a>
    <a class="quick-card" href="data/Lab/index.html">
      <div class="qc-icon">&#129514;</div>
      <div class="qc-title">Lab</div>
      <div class="qc-desc">14 references — i-STAT cartridges (CHEM8+, CG4+, troponin, PT/INR), rapid tests, QC, and troubleshooting.</div>
    </a>
    <a class="quick-card" href="data/Procedures/index.html">
      <div class="qc-icon">&#9874;</div>
      <div class="qc-title">Procedures</div>
      <div class="qc-desc">12 step-by-step guides — airway, thoracic, vascular access, and hemorrhage control.</div>
    </a>
    <a class="quick-card" href="data/Sickbay inventory/index.html">
      <div class="qc-icon">&#128230;</div>
      <div class="qc-title">Inventory</div>
      <div class="qc-desc">Master inventory of 900+ items — searchable by NSN, description, and kit membership. Export selected items as CSV.</div>
    </a>
    <a class="quick-card" href="#/checklists">
      <div class="qc-icon">&#9989;</div>
      <div class="qc-title">Checklists</div>
      <div class="qc-desc">Clinical cognitive aids (RSI, Anaphylaxis, Post-ROSC, MEDEVAC 9-Line, MASCAL) and operational readiness checklists.</div>
    </a>
  </div>`,
  sections:[]
};
