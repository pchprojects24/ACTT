const CACHE_NAME = 'actt-reference-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './scenarios/index.html',
  './scenarios/actt_scenario_01_head_injury.html',
  './scenarios/actt_scenario_02_tension_pneumothorax.html',
  './scenarios/actt_scenario_03_burn_inhalation.html',
  './scenarios/actt_scenario_04_septic_shock.html',
  './scenarios/actt_scenario_05_combative_casualty.html',
  './scenarios/actt_scenario_06_stemi.html',
  './scenarios/actt_scenario_07_hypothermia.html',
  './scenarios/actt_scenario_08_polytrauma.html',
  './scenarios/actt_scenario_09_failed_airway.html',
  './scenarios/actt_scenario_10_shoulder_dislocation.html',
  './scenarios/actt_scenario_11_pressor_shock.html',
  './scenarios/actt_scenario_12_chest_tube_redeteriorates.html',
  './data/chapters-1-2.js',
  './data/domains.js',
  './data/algorithms.js',
  './data/procedures.js',
  './data/medications.js',
  './data/sickbay-meds.js',
  './data/sickbay.js',
  './data/prolonged-holding.js',
  './data/thresholds.js',
  './data/pitfalls.js',
  './data/shipboard.js',
  './data/team.js',
  './data/study.js',
  './data/appendices.js',
  './data/tools.js',
  './data/cross-links.js',
  './data/checklists.js',
  './data/Meds/acetaminophen.html',
  './data/Meds/acetaminophen_with_codeine.html',
  './data/Meds/acyclovir.html',
  './data/Meds/alginic_acid_with_aluminum.html',
  './data/Meds/aluminum_hydroxide_with_magnesium_hydroxide_and_simethicone_chewable.html',
  './data/Meds/amoxicillin.html',
  './data/Meds/amoxicillin_clavulanate.html',
  './data/Meds/ampicillin.html',
  './data/Meds/antacid_with_simethicone.html',
  './data/Meds/aspirin.html',
  './data/Meds/azithromycin.html',
  './data/Meds/bacitracin_zinc.html',
  './data/Meds/beclomethasone.html',
  './data/Meds/benzocaine.html',
  './data/Meds/benzoyl_peroxide.html',
  './data/Meds/benztropine.html',
  './data/Meds/betamethasone_valerate.html',
  './data/Meds/bisacodyl.html',
  './data/Meds/bismuth_subsalicylate.html',
  './data/Meds/cefazolin.html',
  './data/Meds/cefixime.html',
  './data/Meds/cefoxitin.html',
  './data/Meds/ceftriaxone.html',
  './data/Meds/cephalexin.html',
  './data/Meds/cetirizine.html',
  './data/Meds/chlorhexidine.html',
  './data/Meds/ciprofloxacin.html',
  './data/Meds/citalopram.html',
  './data/Meds/clindamycin.html',
  './data/Meds/clopidogrel.html',
  './data/Meds/clotrimazole.html',
  './data/Meds/cyanide_antidote_kit.html',
  './data/Meds/dexamethasone.html',
  './data/Meds/dextromethorphan.html',
  './data/Meds/dimenhydrinate.html',
  './data/Meds/diphenhydramine.html',
  './data/Meds/doxycycline.html',
  './data/Meds/epinephrine.html',
  './data/Meds/erythromycin.html',
  './data/Meds/escitalopram.html',
  './data/Meds/eucerin.html',
  './data/Meds/famotidine.html',
  './data/Meds/fluconazole.html',
  './data/Meds/fluoxetine.html',
  './data/Meds/fluticasone.html',
  './data/Meds/folic_acid.html',
  './data/Meds/furosemide.html',
  './data/Meds/gentamicin.html',
  './data/Meds/glycerin.html',
  './data/Meds/haloperidol.html',
  './data/Meds/hydrocortisone.html',
  './data/Meds/hydromorphone.html',
  './data/Meds/ibuprofen.html',
  './data/Meds/index.html',
  './data/Meds/insulin_regular.html',
  './data/Meds/ketorolac.html',
  './data/Meds/lactulose.html',
  './data/Meds/levonorgestrel.html',
  './data/Meds/loperamide.html',
  './data/Meds/loratadine.html',
  './data/Meds/magnesium_hydroxide.html',
  './data/Meds/meclizine.html',
  './data/Meds/metformin.html',
  './data/Meds/methoxyflurane.html',
  './data/Meds/metoclopramide.html',
  './data/Meds/metoprolol.html',
  './data/Meds/miconazole.html',
  './data/Meds/mometasone.html',
  './data/Meds/naproxen.html',
  './data/Meds/nitroglycerin.html',
  './data/Meds/nystatin.html',
  './data/Meds/olanzapine.html',
  './data/Meds/ondansetron.html',
  './data/Meds/oxymetazoline.html',
  './data/Meds/pantoprazole.html',
  './data/Meds/permethrin.html',
  './data/Meds/phenazopyridine.html',
  './data/Meds/polysporin.html',
  './data/Meds/povidone_iodine.html',
  './data/Meds/prednisone.html',
  './data/Meds/pseudoephedrine.html',
  './data/Meds/quetiapine.html',
  './data/Meds/salbutamol.html',
  './data/Meds/senna.html',
  './data/Meds/silver_sulfadiazine.html',
  './data/Meds/sodium_bicarbonate.html',
  './data/Meds/sodium_chloride.html',
  './data/Meds/sodium_phosphate.html',
  './data/Meds/sulfamethoxazole_trimethoprim.html',
  './data/Meds/tetanus_diphtheria_vaccine.html',
  './data/Meds/thiamine.html',
  './data/Meds/tramadol.html',
  './data/Meds/tranexamic_acid.html',
  './data/Meds/triamcinolone.html',
  './data/Meds/valacyclovir.html',
  './data/Meds/valsartan.html',
  './data/Meds/zinc_oxide.html',
  './data/Meds/zopiclone.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
