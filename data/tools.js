window.ACTT=window.ACTT||{};
window.ACTT.toolRenderers={

// ===== GCS Calculator =====
gcs: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'GCS Calculator',path:'#/tools/gcs'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">GCS Calculator</div><div class="section-subtitle">Glasgow Coma Scale with automatic airway threshold alert</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<div class="gcs-component"><h4>Eye Opening (E)</h4><div class="gcs-buttons" id="gcsEye">`;
  [{v:4,l:'4 — Spontaneous'},{v:3,l:'3 — To voice'},{v:2,l:'2 — To pain'},{v:1,l:'1 — None'}].forEach(b=>{
    html += `<button class="gcs-btn" data-component="eye" data-value="${b.v}" onclick="selectGCS(this)">${b.l}</button>`;
  });
  html += `</div></div>`;
  html += `<div class="gcs-component"><h4>Verbal Response (V)</h4><div class="gcs-buttons" id="gcsVerbal">`;
  [{v:5,l:'5 — Oriented'},{v:4,l:'4 — Confused'},{v:3,l:'3 — Inappropriate words'},{v:2,l:'2 — Incomprehensible'},{v:1,l:'1 — None'}].forEach(b=>{
    html += `<button class="gcs-btn" data-component="verbal" data-value="${b.v}" onclick="selectGCS(this)">${b.l}</button>`;
  });
  html += `</div></div>`;
  html += `<div class="gcs-component"><h4>Motor Response (M)</h4><div class="gcs-buttons" id="gcsMotor">`;
  [{v:6,l:'6 — Obeys commands'},{v:5,l:'5 — Localizes pain'},{v:4,l:'4 — Withdraws'},{v:3,l:'3 — Abnormal flexion'},{v:2,l:'2 — Extension'},{v:1,l:'1 — None'}].forEach(b=>{
    html += `<button class="gcs-btn" data-component="motor" data-value="${b.v}" onclick="selectGCS(this)">${b.l}</button>`;
  });
  html += `</div></div>`;
  html += `<div id="gcsResult"><div class="gcs-total" id="gcsTotal">—</div><div id="gcsAlert"></div></div>`;
  html += `<div id="gcsLinks" style="margin-top:16px"></div>`;
  html += `</div>`;
  main.innerHTML = html;
  window._gcsValues = {eye:0, verbal:0, motor:0};
},

// ===== Burn Calculator =====
burn: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'Burn Calculator',path:'#/tools/burn'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">Burn Resuscitation Calculator</div><div class="section-subtitle">Rule of 10s fluid rate calculation with adjustment guidance</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<div class="tool-input-group"><label>TBSA Burned (%)</label><input type="number" class="tool-input" id="burnTBSA" placeholder="e.g. 30" min="1" max="100" oninput="calculateBurn()"></div>`;
  html += `<div class="tool-input-group"><label>Patient Weight (kg)</label><input type="number" class="tool-input" id="burnWeight" placeholder="e.g. 80" min="20" max="200" oninput="calculateBurn()"></div>`;
  html += `<div class="tool-input-group"><label>Burn Type</label><select class="tool-input" id="burnType" onchange="calculateBurn()"><option value="standard">Standard Thermal Burn</option><option value="electrical">Electrical / Crush Burn</option></select></div>`;
  html += `<div id="burnResults"></div>`;
  html += `<div class="severity-card amber" style="margin-top:16px"><div class="sc-title"><span class="sc-label">IMPORTANT</span> Adjustment Guidance</div><p>The Rule of 10s provides a <strong>starting rate only</strong>. Adjust by 25% up or down based on urine output response. Reassess hourly.</p><ul><li>If urine output &lt; 30 mL/hr: increase rate by 25%</li><li>If urine output &gt; 50 mL/hr: decrease rate by 25%</li><li>For electrical/crush burns: target urine output 70–100 mL/hr</li></ul></div>`;
  html += `<div style="margin-top:16px"><h4>Target Urine Output</h4>`;
  html += `<div class="table-wrapper"><table><thead><tr><th>Burn Type</th><th>Target</th></tr></thead><tbody>`;
  html += `<tr><td>Standard thermal burn (adult)</td><td style="font-weight:700">30–50 mL/hr</td></tr>`;
  html += `<tr><td>Electrical / crush burn</td><td style="font-weight:700">70–100 mL/hr</td></tr>`;
  html += `</tbody></table></div></div>`;
  html += `<div class="related-content" style="margin-top:24px"><h3>Related Content</h3><div class="related-links"><a class="related-link" href="#/algorithms/burn-resuscitation">Burn Resuscitation Algorithm</a><a class="related-link" href="#/thresholds/burn-thresholds">Burn Thresholds</a><a class="related-link" href="#/pitfalls/burn-errors">Burn Pitfalls</a></div></div>`;
  html += `</div>`;
  main.innerHTML = html;
},

// ===== Medication Dose Calculator =====
dosecalc: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'Dose Calculator',path:'#/tools/dosecalc'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">Medication Dose Calculator</div><div class="section-subtitle">Weight-based dose calculations for key ACTT medications</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<div class="tool-input-group"><label>Patient Weight (kg)</label><input type="number" class="tool-input" id="doseWeight" placeholder="e.g. 80" min="20" max="200" oninput="calculateDoses()"></div>`;
  html += `<div id="doseResults"></div>`;
  html += `</div>`;
  main.innerHTML = html;
},

// ===== Reassessment Timer =====
timer: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'Reassessment Timer',path:'#/tools/timer'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">Reassessment Timer</div><div class="section-subtitle">Configurable interval reminders with context-specific reassessment checklists</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">`;
  html += `<input type="text" class="tool-input" id="timerPatientName" placeholder="Patient identifier" style="max-width:200px">`;
  html += `<select class="tool-input" id="timerInterval" style="max-width:200px"><option value="15">Every 15 minutes</option><option value="30" selected>Every 30 minutes</option><option value="60">Every 1 hour</option></select>`;
  html += `<button class="btn btn-primary" onclick="startTimer()">Start Prolonged Hold</button>`;
  html += `</div>`;
  html += `<div id="timerPatients"></div>`;
  html += `<div class="severity-card green" style="margin-top:16px"><div class="sc-title"><span class="sc-label">INFO</span> Reassessment Checklist Items</div>`;
  html += `<ul><li><strong>Mental status</strong> — GCS, responsiveness, pupil response</li>`;
  html += `<li><strong>Airway</strong> — Tube position, depth marks, cuff, securement</li>`;
  html += `<li><strong>Breathing</strong> — SpO2, EtCO2 if available, work of breathing, chest rise</li>`;
  html += `<li><strong>Circulation</strong> — HR, BP, perfusion, cap refill, skin signs</li>`;
  html += `<li><strong>Temperature</strong> — Core if available, environmental exposure</li>`;
  html += `<li><strong>Urine output</strong> — Volume since last check, trend</li>`;
  html += `<li><strong>Pain / Agitation</strong> — Current level, medication timing</li>`;
  html += `<li><strong>Device function</strong> — All lines, drains, tubes, dressings</li>`;
  html += `<li><strong>Medications</strong> — Last dose, next dose due, infusion rates, cumulative totals</li>`;
  html += `<li><strong>Trend review</strong> — Improving, stable, or drifting?</li></ul></div>`;
  html += `</div>`;
  main.innerHTML = html;
},

// ===== Drug Interaction Checker =====
interactions: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'Drug Interactions',path:'#/tools/interactions'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">Drug Interaction Checker</div><div class="section-subtitle">Check for known cautions and compounding risks between ACTT medications</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<p style="color:var(--text-secondary);margin-bottom:12px">Select two or more medications to check for interactions:</p>`;
  html += `<div class="drug-select-grid" id="drugSelectGrid">`;
  const drugs = ['Ketamine','Midazolam','Morphine','Fentanyl','Hydromorphone','Succinylcholine','Rocuronium','Norepinephrine','Epinephrine','Phenylephrine','Mannitol','Hypertonic Saline 3%','Levetiracetam','Tenecteplase','Enoxaparin','Heparin','Clopidogrel','ASA','Naloxone','Flumazenil','Protamine','Ceftriaxone','Metronidazole','Azithromycin','Ondansetron','Diphenhydramine','Acetaminophen'];
  drugs.forEach(d => {
    html += `<button class="drug-select-btn" onclick="toggleDrugSelect(this)" data-drug="${d}">${d}</button>`;
  });
  html += `</div>`;
  html += `<button class="btn btn-primary" style="margin-top:12px" onclick="checkInteractions()">Check Interactions</button>`;
  html += `<div id="interactionResults" style="margin-top:16px"></div>`;
  html += `</div>`;
  main.innerHTML = html;
},

// ===== Differential Diagnosis Helper =====
ddx: function(main) {
  const crumbs = [{title:'Home',path:'#/'},{title:'Clinical Tools',path:'#/tools'},{title:'Differential Diagnosis',path:'#/tools/ddx'}];
  let html = '';
  html += `<div class="breadcrumbs">${crumbs.map((c,i)=>i===crumbs.length-1?`<span class="bc-current">${c.title}</span>`:`<a href="${c.path}">${c.title}</a><span class="bc-sep">&#8250;</span>`).join('')}</div>`;
  html += `<div class="section-header"><div><div class="section-title">Differential Diagnosis Helper</div><div class="section-subtitle">Symptom-based differential with prioritized rule-out list</div></div></div>`;
  html += `<div class="tool-container">`;
  html += `<p style="color:var(--text-secondary);margin-bottom:12px">Select presenting signs and symptoms:</p>`;
  html += `<div class="symptom-grid" id="symptomGrid">`;
  const symptoms = ['Agitation','Confusion','Unresponsive','Hypotension','Tachycardia','Bradycardia','Hypoxia','Fever','Hypothermia','Seizure','Pupil Asymmetry','Widened Pulse Pressure','JVD','Absent Breath Sounds','Tachypnea','Decreased Urine Output','Peripheral Edema','Cool Extremities','Chest Pain','Dyspnea','Vomiting','Facial/Neck Swelling','Burns','External Hemorrhage','Signs of Internal Bleeding','Rash/Urticaria','Stridor','Muffled Heart Sounds','Focal Neurologic Deficit','Diaphoresis','Neck Stiffness','Abdominal Pain/Rigidity','Cyanosis'];
  symptoms.forEach(s => {
    html += `<button class="symptom-btn" onclick="toggleSymptom(this)" data-symptom="${s}">${s}</button>`;
  });
  html += `</div>`;
  html += `<button class="btn btn-primary" style="margin-top:12px" onclick="generateDDx()">Generate Differential</button>`;
  html += `<div id="ddxResults" style="margin-top:16px"></div>`;
  html += `</div>`;
  main.innerHTML = html;
}

};

// ===== Tool Functions =====

// GCS
window._gcsValues = {eye:0, verbal:0, motor:0};
function selectGCS(btn) {
  const component = btn.dataset.component;
  const value = parseInt(btn.dataset.value);
  window._gcsValues[component] = value;
  btn.parentElement.querySelectorAll('.gcs-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  updateGCSTotal();
}
function updateGCSTotal() {
  const g = window._gcsValues;
  if (!g.eye || !g.verbal || !g.motor) { document.getElementById('gcsTotal').textContent = '—'; document.getElementById('gcsAlert').innerHTML = ''; return; }
  const total = g.eye + g.verbal + g.motor;
  const el = document.getElementById('gcsTotal');
  el.textContent = total + ' / 15';
  el.className = 'gcs-total';
  let alertHtml = '';
  if (total <= 8) {
    el.classList.add('critical');
    alertHtml = '<div class="tool-alert red">CRITICAL: GCS \u2264 8 — Airway protection threshold reached. Consider definitive airway management. Prepare RSI or surgical airway.</div>';
    alertHtml += '<div class="related-links" style="margin-top:8px"><a class="related-link" href="#/algorithms/airway-failure">Airway Failure Algorithm</a><a class="related-link" href="#/algorithms/tbi-management">TBI Management</a><a class="related-link" href="#/procedures/rsi">RSI Procedure</a></div>';
  } else if (total <= 12) {
    el.classList.add('moderate');
    alertHtml = '<div class="tool-alert amber">MODERATE: GCS 9\u201312 — Close monitoring required. Reassess frequently for further decline. Consider airway preparation.</div>';
  } else {
    el.classList.add('mild');
    alertHtml = '<div class="tool-alert green">MILD: GCS 13\u201315 — Continue monitoring. Reassess at regular intervals.</div>';
  }
  document.getElementById('gcsAlert').innerHTML = alertHtml;
}

// Burn Calculator
function calculateBurn() {
  const tbsa = parseFloat(document.getElementById('burnTBSA')?.value) || 0;
  const weight = parseFloat(document.getElementById('burnWeight')?.value) || 0;
  const type = document.getElementById('burnType')?.value || 'standard';
  if (tbsa <= 0 || weight <= 0) { document.getElementById('burnResults').innerHTML = ''; return; }
  // Rule of 10s: TBSA% x 10 = mL/hr for 40-80kg patients. Add 100 mL/hr per 10 kg above 80 kg.
  let rate = tbsa * 10;
  let weightAdj = 0;
  if (weight > 80) {
    weightAdj = Math.floor((weight - 80) / 10) * 100;
    rate += weightAdj;
  }
  const rateUp = Math.round(rate * 1.25);
  const rateDown = Math.round(rate * 0.75);
  const targetUO = type === 'electrical' ? '70\u2013100 mL/hr' : '30\u201350 mL/hr';
  let html = '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">';
  html += `<div class="tool-result"><div class="tr-label">Initial Fluid Rate</div><div class="tr-value">${rate} mL/hr</div><div class="tr-note">Rule of 10s: ${tbsa}% \u00d7 10 = ${tbsa*10} mL/hr${weightAdj > 0 ? ' + ' + weightAdj + ' mL/hr (weight adj)' : ''}</div></div>`;
  html += `<div class="tool-result"><div class="tr-label">If UO Low (\u2191 25%)</div><div class="tr-value">${rateUp} mL/hr</div><div class="tr-note">Increase if urine output below target</div></div>`;
  html += `<div class="tool-result"><div class="tr-label">If UO High (\u2193 25%)</div><div class="tr-value">${rateDown} mL/hr</div><div class="tr-note">Decrease if urine output above target</div></div>`;
  html += '</div>';
  html += `<div class="tool-result" style="margin-top:12px"><div class="tr-label">Target Urine Output</div><div class="tr-value" style="font-size:1.4rem">${targetUO}</div><div class="tr-note">${type === 'electrical' ? 'Higher target for electrical/crush burns to protect kidneys' : 'Standard adult burn target'}</div></div>`;
  if (tbsa >= 40) {
    html += '<div class="tool-alert red">ALERT: TBSA \u2265 40% — Plan early airway control. Major inhalation injury likely. Consider early intubation before progressive edema.</div>';
  }
  if (tbsa >= 20) {
    html += '<div class="tool-alert amber">Consider Foley catheter for strict urine output monitoring in burns \u2265 20% TBSA.</div>';
  }
  document.getElementById('burnResults').innerHTML = html;
}

// Dose Calculator
function calculateDoses() {
  const weight = parseFloat(document.getElementById('doseWeight')?.value) || 0;
  if (weight <= 0) { document.getElementById('doseResults').innerHTML = ''; return; }
  const drugs = [
    {name:'Ketamine (Analgesic IV)', dose: `${(weight*0.1).toFixed(1)}\u2013${(weight*0.2).toFixed(1)} mg`, route:'IV/IO slow push', note:'Low-dose analgesia. Do not confuse with dissociative dose.'},
    {name:'Ketamine (Dissociative IV)', dose: `${(weight*1).toFixed(0)} mg`, route:'IV/IO', note:'Full dissociation / RSI induction dose. Pair with paralytic for RSI.'},
    {name:'Ketamine (IM)', dose: `${(weight*4).toFixed(0)}\u2013${(weight*5).toFixed(0)} mg`, route:'IM', note:'IM route for combative patient or no IV access.'},
    {name:'Morphine', dose: `2.5\u201310 mg`, route:'IV/IO slow titration', note:'Higher hypotension risk. Titrate carefully.'},
    {name:'Fentanyl', dose: `25\u2013100 mcg`, route:'IV/IO slow push', note:'Fast push can cause chest wall rigidity. Short acting.'},
    {name:'Hydromorphone', dose: `0.5\u20131 mg`, route:'IV slow titration', note:'Preferred prolonged-care opioid. Track cumulative total.'},
    {name:'Succinylcholine', dose: `${(weight*1.5).toFixed(0)} mg`, route:'IV/IO', note:'Rapid onset paralysis. Check contraindications (burns >24h, crush, hyperkalemia risk).'},
    {name:'Rocuronium', dose: `${(weight*1.2).toFixed(0)} mg`, route:'IV/IO', note:'Longer duration paralysis. Use when succinylcholine contraindicated.'},
    {name:'Midazolam (Seizure)', dose: `5 mg q5min`, route:'IV/IO/IM', note:'Repeat until seizure stops. Monitor respiratory depression.'},
    {name:'Midazolam (Sedation)', dose: `1\u20132.5 mg`, route:'IV/IO slow push', note:'Cumulative sedation risk especially with opioids.'},
    {name:'Mannitol', dose: `${(weight*1).toFixed(0)} g (${(weight*5).toFixed(0)} mL of 20%)`, route:'IV over 20 min', note:'ICP reduction. AVOID if hypotensive or actively bleeding.'},
    {name:'Hypertonic Saline 3%', dose: `250 mL`, route:'IV over 20 min', note:'ICP support. Monitor sodium (target 145\u2013160 mmol/L).'},
    {name:'Levetiracetam', dose: `2000 mg`, route:'IV/IO over 15 min', note:'Seizure maintenance after acute control with midazolam.'},
    {name:'Norepinephrine', dose: `2\u20134 mcg/min start`, route:'IV infusion', note:'First-line vasopressor. Requires pump and close monitoring.'},
    {name:'Sepsis Crystalloid', dose: `${(weight*30).toFixed(0)} mL`, route:'IV over 3 hours', note:'Initial sepsis resuscitation. Reassess respiratory tolerance.'},
    {name:'Burn Fluid (Rule of 10s)', dose: `${Math.round(parseFloat(document.getElementById('burnTBSA')?.value||0)*10 + (weight>80?Math.floor((weight-80)/10)*100:0))} mL/hr`, route:'IV', note:'Requires TBSA input. Adjust by 25% based on urine output.'},
  ];
  // Tenecteplase by weight band
  let tnkDose = '';
  if (weight < 60) tnkDose = '30 mg';
  else if (weight < 70) tnkDose = '35 mg';
  else if (weight < 80) tnkDose = '40 mg';
  else if (weight < 90) tnkDose = '45 mg';
  else tnkDose = '50 mg';
  drugs.push({name:'Tenecteplase', dose: tnkDose, route:'IV push over 5 sec', note:`Weight band: ${weight} kg. Reconstitute gently \u2014 do NOT shake. Screen contraindications first.`});

  let html = '<div class="dose-results">';
  drugs.forEach(d => {
    html += `<div class="dose-card"><div class="dc-drug">${d.name}</div><div class="dc-dose">${d.dose}</div><div class="dc-route">${d.route}</div><div class="dc-note">${d.note}</div></div>`;
  });
  html += '</div>';
  document.getElementById('doseResults').innerHTML = html;
}

// Timer
function startTimer() {
  const name = document.getElementById('timerPatientName')?.value || ('Patient ' + (state.timers.length + 1));
  const interval = parseInt(document.getElementById('timerInterval')?.value) || 30;
  const timer = {
    id: Date.now(),
    name: name,
    interval: interval,
    startTime: Date.now(),
    checks: [],
    nextCheck: Date.now() + interval * 60000
  };
  // Generate check times
  for (let i = 1; i <= 48; i++) {
    timer.checks.push({
      time: timer.startTime + i * interval * 60000,
      completed: false,
      label: `${i * interval} min`
    });
  }
  state.timers.push(timer);
  // Set interval for updates
  state.timerIntervals[timer.id] = setInterval(() => updateTimerDisplay(), 10000);
  updateTimerDisplay();
}
function updateTimerDisplay() {
  const container = document.getElementById('timerPatients');
  if (!container) return;
  const now = Date.now();
  let html = '';
  state.timers.forEach(timer => {
    const elapsed = Math.floor((now - timer.startTime) / 60000);
    html += `<div class="timer-patient"><div class="tp-header"><span class="tp-name">${timer.name}</span><span style="color:var(--text-muted)">Started ${elapsed} min ago | Interval: ${timer.interval} min</span><button class="btn btn-outline btn-sm" onclick="removeTimer(${timer.id})">Stop</button></div>`;
    html += `<div class="timer-checks">`;
    const visibleChecks = timer.checks
      .map((check, index) => ({ check, index }))
      .filter(({ check }) => !check.completed && check.time <= now + timer.interval * 60000 * 2)
      .slice(0, 10);
    visibleChecks.forEach(({ check, index }) => {
      const isDue = check.time <= now;
      const isUpcoming = check.time > now;
      const timeLeft = Math.max(0, Math.ceil((check.time - now) / 60000));
      html += `<div class="timer-check ${isDue ? 'due' : ''} ${check.completed ? 'completed' : ''}">`;
      html += `<span class="tc-time">${check.label}</span>`;
      html += `<span>${isDue ? 'REASSESSMENT DUE NOW' : isUpcoming ? `In ${timeLeft} min` : 'Completed'}</span>`;
      html += `<span class="tc-status">`;
      if (isDue) {
        html += `<button class="btn btn-primary btn-sm" onclick="completeCheck(${timer.id},${index})">Complete</button>`;
      } else if (check.completed) {
        html += '\u2713';
      } else {
        html += '\u23F3';
      }
      html += `</span></div>`;
    });
    html += `</div></div>`;
  });
  if (state.timers.length === 0) {
    html = '<div style="padding:20px;color:var(--text-muted);text-align:center">No active timers. Start a prolonged hold above.</div>';
  }
  container.innerHTML = html;
  // Audio alert for due checks
  state.timers.forEach(timer => {
    timer.checks.forEach(check => {
      if (!check.completed && check.time <= now && !check.alerted) {
        check.alerted = true;
        playAlert();
      }
    });
  });
}
function completeCheck(timerId, checkIdx) {
  const timer = state.timers.find(t => t.id === timerId);
  if (timer && timer.checks[checkIdx]) { timer.checks[checkIdx].completed = true; updateTimerDisplay(); }
}
function removeTimer(timerId) {
  state.timers = state.timers.filter(t => t.id !== timerId);
  if (state.timerIntervals[timerId]) { clearInterval(state.timerIntervals[timerId]); delete state.timerIntervals[timerId]; }
  updateTimerDisplay();
}
function playAlert() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 800; osc.type = 'sine';
    gain.gain.value = 0.3;
    osc.start(); osc.stop(ctx.currentTime + 0.3);
    setTimeout(() => {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2); gain2.connect(ctx.destination);
      osc2.frequency.value = 1000; osc2.type = 'sine';
      gain2.gain.value = 0.3;
      osc2.start(); osc2.stop(ctx.currentTime + 0.3);
    }, 400);
  } catch(e) {}
}

// Drug Interaction Checker
function toggleDrugSelect(btn) { btn.classList.toggle('selected'); }
function checkInteractions() {
  const selected = Array.from(document.querySelectorAll('.drug-select-btn.selected')).map(b => b.dataset.drug);
  if (selected.length < 2) {
    document.getElementById('interactionResults').innerHTML = '<div class="tool-alert amber">Select at least 2 medications to check interactions.</div>';
    return;
  }
  const interactions = [
    {drugs:['Ketamine','Midazolam'],severity:'amber',title:'Sedation Stacking',desc:'Combined sedation risk. Both agents contribute to respiratory depression and oversedation. Monitor airway closely. Consider reduced doses when using together.',monitoring:'Continuous SpO2, respiratory rate, airway patency, level of consciousness'},
    {drugs:['Ketamine','Morphine'],severity:'amber',title:'Sedation + Analgesia Stacking',desc:'Ketamine and opioids together increase sedation depth and respiratory depression risk. Cumulative effect over time in prolonged holding.',monitoring:'Respiratory rate, SpO2, level of consciousness, cumulative dose tracking'},
    {drugs:['Ketamine','Fentanyl'],severity:'amber',title:'Sedation + Analgesia Stacking',desc:'Combined respiratory depression risk. Fentanyl fast push with ketamine can compound airway and ventilatory depression.',monitoring:'Respiratory rate, SpO2, level of consciousness'},
    {drugs:['Ketamine','Hydromorphone'],severity:'amber',title:'Sedation + Opioid Stacking',desc:'Hydromorphone with ketamine increases cumulative sedation burden. Track total doses especially during prolonged holding.',monitoring:'Respiratory rate, SpO2, level of consciousness, cumulative dose log'},
    {drugs:['Midazolam','Morphine'],severity:'red',title:'HIGH RISK: Respiratory Depression',desc:'Benzodiazepine + opioid combination significantly increases risk of respiratory depression, apnea, and airway loss. Use with extreme caution.',monitoring:'Continuous SpO2, respiratory rate, airway readiness, naloxone/flumazenil availability'},
    {drugs:['Midazolam','Fentanyl'],severity:'red',title:'HIGH RISK: Respiratory Depression',desc:'Benzodiazepine + opioid combination. Fentanyl rapid push can cause chest wall rigidity; combined with midazolam increases apnea risk.',monitoring:'Continuous SpO2, respiratory rate, airway readiness'},
    {drugs:['Midazolam','Hydromorphone'],severity:'red',title:'HIGH RISK: Respiratory Depression',desc:'Benzodiazepine + opioid. Cumulative respiratory depression especially dangerous during prolonged holding with multiple re-dosing.',monitoring:'Continuous SpO2, respiratory rate, cumulative dose tracking'},
    {drugs:['Morphine','Fentanyl'],severity:'amber',title:'Opioid Stacking',desc:'Multiple opioids increase cumulative respiratory depression. Generally avoid using both simultaneously.',monitoring:'Respiratory rate, SpO2, pain assessment, cumulative opioid total'},
    {drugs:['Norepinephrine','Epinephrine'],severity:'amber',title:'Dual Vasopressor',desc:'Compounding vasopressor effects. Both agents increase afterload and myocardial oxygen demand. Increased arrhythmia risk.',monitoring:'Continuous ECG, BP, HR, line site inspection'},
    {drugs:['Ketamine','Succinylcholine'],severity:'green',title:'RSI Sequence',desc:'Standard RSI combination. Ketamine induction followed by succinylcholine paralysis. Ensure proper sequence and timing.',monitoring:'SpO2, EtCO2 post-intubation, hemodynamics'},
    {drugs:['Ketamine','Rocuronium'],severity:'green',title:'RSI Sequence',desc:'Alternative RSI combination. Ketamine induction with rocuronium paralysis (longer duration). Suitable when succinylcholine contraindicated.',monitoring:'SpO2, EtCO2 post-intubation, hemodynamics, plan for prolonged paralysis'},
    {drugs:['Tenecteplase','Enoxaparin'],severity:'red',title:'HIGH RISK: Bleeding',desc:'Fibrinolytic + anticoagulant. Expected combination for STEMI but carries major bleeding risk. Follow weight and age adjustments for enoxaparin.',monitoring:'Bleeding assessment, neurologic status, access sites, vital signs'},
    {drugs:['Tenecteplase','Heparin'],severity:'red',title:'HIGH RISK: Bleeding',desc:'Fibrinolytic + anticoagulant combination. Major hemorrhagic complication risk. Monitor closely for any bleeding.',monitoring:'PTT target 50\u201370s, bleeding assessment, neurologic checks'},
    {drugs:['Tenecteplase','Clopidogrel'],severity:'red',title:'HIGH RISK: Bleeding',desc:'Fibrinolytic + antiplatelet. Increased hemorrhagic risk. Weigh benefit against bleeding risk in each patient.',monitoring:'Bleeding assessment q15min initially, neurologic status'},
    {drugs:['Heparin','Enoxaparin'],severity:'red',title:'Dual Anticoagulation',desc:'Do not use both simultaneously. Choose one anticoagulant strategy.',monitoring:'If switching, account for overlap period'},
    {drugs:['Naloxone','Morphine'],severity:'amber',title:'Opioid Reversal',desc:'Naloxone reverses morphine. Titrate slowly to restore breathing without full reversal to avoid acute withdrawal and pain crisis.',monitoring:'Respiratory rate, pain level, hemodynamics, re-sedation risk'},
    {drugs:['Naloxone','Fentanyl'],severity:'amber',title:'Opioid Reversal',desc:'Naloxone reverses fentanyl. Fentanyl is short-acting so re-dosing of naloxone may be needed. Titrate to respiratory effort.',monitoring:'Respiratory rate, re-sedation risk due to naloxone shorter half-life'},
    {drugs:['Flumazenil','Midazolam'],severity:'amber',title:'Benzodiazepine Reversal',desc:'Flumazenil reverses midazolam. AVOID in chronic benzodiazepine users (seizure risk). Use only for iatrogenic oversedation.',monitoring:'Seizure watch, re-sedation risk, respiratory status'},
    {drugs:['Mannitol','Norepinephrine'],severity:'amber',title:'Hemodynamic Conflict',desc:'Mannitol can worsen hypotension through osmotic diuresis. If patient requires vasopressor support, prefer hypertonic saline 3% over mannitol for ICP management.',monitoring:'Blood pressure, urine output, sodium levels, volume status'},
    {drugs:['Succinylcholine','Rocuronium'],severity:'amber',title:'Dual Paralytic',desc:'Do not combine. Choose one paralytic agent. If succinylcholine fails, consider rocuronium as rescue or move to surgical airway.',monitoring:'Duration of paralysis, ventilation adequacy'},
  ];

  let found = [];
  interactions.forEach(ix => {
    const match = ix.drugs.every(d => selected.includes(d));
    if (match) found.push(ix);
  });

  // Check for general sedation stacking
  const sedatives = selected.filter(d => ['Ketamine','Midazolam','Morphine','Fentanyl','Hydromorphone','Diphenhydramine'].includes(d));
  if (sedatives.length >= 3) {
    found.unshift({severity:'red',title:'CRITICAL: Multi-Agent Sedation Stacking',desc:`${sedatives.join(', ')} — Three or more sedating agents selected. Extreme risk of cumulative respiratory depression, airway loss, and hemodynamic compromise. Each additional sedating agent exponentially increases risk.`,monitoring:'Continuous airway monitoring, SpO2, respiratory rate, dedicated observer required, reversal agents immediately available'});
  }

  let html = '';
  if (found.length === 0) {
    html = '<div class="tool-alert green">No specific interactions found for the selected combination. Standard monitoring applies.</div>';
  } else {
    found.forEach(ix => {
      html += `<div class="severity-card ${ix.severity}" style="margin-bottom:12px">`;
      html += `<div class="sc-title"><span class="sc-label">${ix.severity==='red'?'HIGH RISK':ix.severity==='amber'?'CAUTION':'INFO'}</span> ${ix.title}</div>`;
      html += `<p>${ix.desc}</p>`;
      if (ix.monitoring) html += `<p><strong>Monitoring:</strong> ${ix.monitoring}</p>`;
      html += `</div>`;
    });
  }
  document.getElementById('interactionResults').innerHTML = html;
}

// Differential Diagnosis Helper
function toggleSymptom(btn) { btn.classList.toggle('selected'); }
function generateDDx() {
  const selected = Array.from(document.querySelectorAll('.symptom-btn.selected')).map(b => b.dataset.symptom);
  if (selected.length === 0) {
    document.getElementById('ddxResults').innerHTML = '<div class="tool-alert amber">Select at least one symptom to generate differential.</div>';
    return;
  }
  const conditions = [
    {name:'Tension Pneumothorax',priority:'high',symptoms:['Hypotension','Hypoxia','Tachycardia','Absent Breath Sounds','JVD','Dyspnea','Tachypnea','Cyanosis'],desc:'Obstructive shock from pressure. Clinical diagnosis \u2014 do not delay decompression for imaging.',links:[{title:'Chest Decompression Algorithm',path:'#/algorithms/chest-decompression'},{title:'Needle Thoracostomy',path:'#/procedures/needle-thoracostomy'}]},
    {name:'Traumatic Brain Injury',priority:'high',symptoms:['Confusion','Unresponsive','Pupil Asymmetry','Agitation','Seizure','Widened Pulse Pressure','Bradycardia','Vomiting','Focal Neurologic Deficit'],desc:'Protect airway if GCS \u2264 8. Maintain SBP > 110 mmHg. Avoid hypoxia and hypotension.',links:[{title:'TBI Algorithm',path:'#/algorithms/tbi-management'},{title:'TBI Thresholds',path:'#/thresholds/neurologic-tbi'}]},
    {name:'Hemorrhagic Shock',priority:'high',symptoms:['Hypotension','Tachycardia','Cool Extremities','Confusion','Unresponsive','Decreased Urine Output','External Hemorrhage','Signs of Internal Bleeding','Diaphoresis'],desc:'Volume resuscitation priority. Consider blood products. Identify and control source.',links:[{title:'Shock Management',path:'#/domains/domain-2'},{title:'Resuscitation Pitfalls',path:'#/pitfalls/circulation-errors'}]},
    {name:'Septic Shock',priority:'high',symptoms:['Hypotension','Tachycardia','Fever','Confusion','Unresponsive','Decreased Urine Output','Tachypnea'],desc:'Early antibiotics within 1 hour. Fluid resuscitation then vasopressors. Source control.',links:[{title:'Sepsis Algorithm',path:'#/algorithms/sepsis'},{title:'Antibiotic Reference',path:'#/medications/antibiotics'}]},
    {name:'Cardiac Tamponade',priority:'high',symptoms:['Hypotension','JVD','Tachycardia','Dyspnea','Cool Extremities','Muffled Heart Sounds'],desc:'Beck triad: hypotension, JVD, muffled heart sounds. Consider pericardiocentesis.',links:[{title:'Pericardiocentesis',path:'#/procedures/pericardiocentesis'}]},
    {name:'Impending Cerebral Herniation',priority:'high',symptoms:['Unresponsive','Pupil Asymmetry','Widened Pulse Pressure','Bradycardia','Vomiting'],desc:'Cushing triad indicates brainstem compression. Immediate neuroprotection required.',links:[{title:'TBI Algorithm',path:'#/algorithms/tbi-management'},{title:'ICP Medications',path:'#/medications/icp-meds'}]},
    {name:'STEMI',priority:'high',symptoms:['Chest Pain','Hypotension','Tachycardia','Dyspnea','Diaphoresis'],desc:'12-lead ECG. If STEMI confirmed and PCI >90 min, consider fibrinolysis.',links:[{title:'STEMI Algorithm',path:'#/algorithms/stemi'},{title:'Tenecteplase Reference',path:'#/medications/fibrinolytics'}]},
    {name:'Anaphylaxis',priority:'high',symptoms:['Hypotension','Tachycardia','Dyspnea','Facial/Neck Swelling','Tachypnea','Rash/Urticaria','Stridor'],desc:'Epinephrine 0.3\u20130.5 mg IM immediately. Repeat q5\u201315 min as needed.',links:[{title:'Epinephrine Reference',path:'#/medications/vasopressors'}]},
    {name:'Inhalation Injury / Airway Burn',priority:'high',symptoms:['Dyspnea','Facial/Neck Swelling','Burns','Hypoxia','Tachypnea','Stridor'],desc:'Early airway control before progressive edema makes intubation impossible.',links:[{title:'Burn Algorithm',path:'#/algorithms/burn-resuscitation'},{title:'Airway Procedures',path:'#/procedures/rsi'}]},
    {name:'Severe Hypothermia',priority:'high',symptoms:['Hypothermia','Confusion','Unresponsive','Bradycardia'],desc:'Handle gently. Active rewarming. Modified arrest protocols for stage IV.',links:[{title:'Hypothermia Algorithm',path:'#/algorithms/hypothermia'},{title:'Hypothermia Staging',path:'#/thresholds/hypothermia-staging'}]},
    {name:'Status Epilepticus',priority:'high',symptoms:['Seizure','Unresponsive','Confusion','Agitation','Tachycardia'],desc:'Midazolam 5 mg IV/IM q5min. Protect airway. Load levetiracetam for maintenance.',links:[{title:'Seizure Medications',path:'#/medications/seizure-meds'}]},
    {name:'Hypoglycemia',priority:'high',symptoms:['Confusion','Unresponsive','Agitation','Seizure','Tachycardia','Cool Extremities','Diaphoresis'],desc:'Check glucose when feasible. D50W or oral glucose if conscious.',links:[{title:'Combative Patient Algorithm',path:'#/algorithms/combative-patient'}]},
    {name:'Opioid Overdose',priority:'high',symptoms:['Unresponsive','Hypotension','Hypoxia','Bradycardia','Cyanosis'],desc:'Naloxone 0.4\u20132 mg IV/IM/IN. Titrate to respiratory effort. Short half-life \u2014 may need repeat dosing.',links:[{title:'Naloxone Reference',path:'#/medications/reversal-agents'}]},
    {name:'Acute Ischemic Stroke',priority:'high',symptoms:['Focal Neurologic Deficit','Confusion','Unresponsive','Pupil Asymmetry'],desc:'Sudden onset focal deficit. Note time of onset. Protect airway if declining. Consider fibrinolytic eligibility if within treatment window.',links:[]},
    {name:'Meningitis',priority:'high',symptoms:['Fever','Neck Stiffness','Confusion','Unresponsive','Seizure','Rash/Urticaria','Vomiting'],desc:'Empiric antibiotics urgently. Consider dexamethasone before or with first antibiotic dose. Isolate if meningococcal suspected.',links:[{title:'Antibiotic Reference',path:'#/medications/antibiotics'}]},
    {name:'Upper Airway Obstruction',priority:'high',symptoms:['Stridor','Dyspnea','Hypoxia','Cyanosis','Agitation'],desc:'Identify cause (foreign body, edema, trauma). Prepare for surgical airway if obstruction not relieved. Do not delay intervention.',links:[{title:'Airway Failure Algorithm',path:'#/algorithms/airway-failure'},{title:'Cricothyroidotomy',path:'#/procedures/cricothyroidotomy'}]},
    {name:'Heat Stroke',priority:'high',symptoms:['Fever','Confusion','Unresponsive','Tachycardia','Hypotension','Diaphoresis'],desc:'Core temp > 40\u00B0C with CNS dysfunction. Aggressive cooling (cold IV fluids, ice packs to groin/axillae). Mortality increases with delay in cooling.',links:[]},
    {name:'Pulmonary Embolism',priority:'moderate',symptoms:['Hypotension','Tachycardia','Hypoxia','Dyspnea','Chest Pain','JVD'],desc:'Consider in immobilized patients. Supportive care and anticoagulation if available.',links:[]},
    {name:'Burn Shock',priority:'moderate',symptoms:['Hypotension','Tachycardia','Burns','Decreased Urine Output'],desc:'Rule of 10s fluid resuscitation. Foley for strict urine output. Adjust hourly.',links:[{title:'Burn Calculator',path:'#/tools/burn'},{title:'Burn Algorithm',path:'#/algorithms/burn-resuscitation'}]},
    {name:'Drug-Induced Hypotension',priority:'moderate',symptoms:['Hypotension','Tachycardia','Confusion'],desc:'Review recent medications \u2014 induction agents, sedatives, and vasodilators can compound hypotension.',links:[{title:'Medication Errors',path:'#/pitfalls/medication-errors'}]},
    {name:'Fluid Overload',priority:'moderate',symptoms:['Dyspnea','Hypoxia','Peripheral Edema','Tachypnea'],desc:'Stop further fluid. Consider diuresis if available. Positive pressure ventilation if severe.',links:[{title:'Resuscitation Errors',path:'#/pitfalls/circulation-errors'}]},
    {name:'Acute Abdomen',priority:'moderate',symptoms:['Abdominal Pain/Rigidity','Fever','Tachycardia','Vomiting','Hypotension'],desc:'Peritoneal signs suggest surgical pathology. Broad-spectrum antibiotics. IV fluid resuscitation. Urgent surgical consultation or evacuation.',links:[{title:'Antibiotic Reference',path:'#/medications/antibiotics'}]},
  ];

  let matches = conditions.filter(c => {
    const overlap = c.symptoms.filter(s => selected.includes(s));
    return overlap.length >= Math.min(2, c.symptoms.length);
  }).sort((a, b) => {
    const aMatch = a.symptoms.filter(s => selected.includes(s)).length / a.symptoms.length;
    const bMatch = b.symptoms.filter(s => selected.includes(s)).length / b.symptoms.length;
    const aPriority = a.priority === 'high' ? 1 : 0;
    const bPriority = b.priority === 'high' ? 1 : 0;
    return (bPriority - aPriority) || (bMatch - aMatch);
  });

  let html = '';
  if (matches.length === 0) {
    html = '<div class="tool-alert amber">No matching conditions found. Consider broadening symptom selection or reassessing clinically.</div>';
  } else {
    html += `<p style="color:var(--text-secondary);margin-bottom:12px">${matches.length} possible condition(s) identified. Rule out high-priority items first.</p>`;
    matches.forEach(m => {
      const matchedSymptoms = m.symptoms.filter(s => selected.includes(s));
      html += `<div class="ddx-result ${m.priority==='high'?'high-priority':''}">`;
      html += `<div class="ddx-title">${m.priority==='high'?'<span style="color:var(--severity-red)">\u26A0</span> ':''}<strong>${m.name}</strong> <span style="font-size:0.8rem;color:var(--text-muted)">(${matchedSymptoms.length}/${m.symptoms.length} symptoms match)</span></div>`;
      html += `<div class="ddx-desc">${m.desc}</div>`;
      if (m.links && m.links.length > 0) {
        html += '<div class="related-links" style="margin-top:8px">';
        m.links.forEach(l => { html += `<a class="related-link" href="${l.path}">${l.title}</a>`; });
        html += '</div>';
      }
      html += `</div>`;
    });
  }
  document.getElementById('ddxResults').innerHTML = html;
}
