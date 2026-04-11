# ACTT App — Content & UX Audit Report

Branch: `claude/audit-content-ux-kfQqW`

## 1. Scope

The ACTT app is a single-page reference for Royal Canadian Navy Physician
Assistants covering acute care team training — airway, trauma, burns, STEMI,
sepsis, DKA, environmental, procedures, medications, devices, i-STAT,
transport/prolonged holding, and course admin. It ships as a static bundle with
a service worker for offline use, eighteen `window.ACTT.*` data modules,
twelve interactive scenarios, standalone ACLS / Equipment / Lab / Procedures /
Meds folders, and 82 source PDFs/decks in `DL information/`.

This audit set out to make sure *every* meaningful piece of course material
is represented, discoverable, and navigable from the main app, and to raise
UX quality for three personas: first-time learner, rapid clinician, and deep
reference user.

## 2. Repository & Content Inventory

### Code layout
- `index.html` — monolithic shell: all CSS, HTML scaffolding, and ~900 lines of
  inline JS (routing, rendering, search, checklists, quiz, tools).
- `data/*.js` — ACTT content modules (`domains`, `algorithms`, `procedures`,
  `medications`, `sickbay`, `sickbay-meds`, `prolonged-holding`, `thresholds`,
  `pitfalls`, `shipboard`, `team`, `casualty-clearing-team`, `study`,
  `appendices`, `tools`, `cross-links`, `checklists`, and new `library`).
- `data/ACLS/`, `data/Equipment/`, `data/Lab/`, `data/Procedures/`, `data/Meds/`
  — standalone HTML pages using `data/sickbay-shared.css`.
- `scenarios/` — twelve interactive scenario HTML players plus an index page.
- `DL information/` — 82 source PDFs and slide decks.
- `sw.js` — explicit asset manifest for offline use.

### Content sources discovered
- **82 source documents** in `DL information/`: airway (12), trauma/burns (11),
  cardiac/STEMI (8), DKA/endocrine (4), sepsis/shock (5),
  seizure/neuro/mental-health (4), environmental/maritime (2), procedures (13),
  medications/infusions (7), devices (3), i-STAT (3), casualty clearing &
  transport (6), team/course (3), plus four featured top-level manuals
  (Prep Manual, Scenario Companion, ACTT Reference for PAs, Candidates Schedule).
- **12 scenarios**: head injury, tension pneumothorax, burn/inhalation, septic
  shock, combative casualty, STEMI, hypothermia, polytrauma, failed airway,
  shoulder dislocation, pressor-dependent shock, chest tube redeterioration.
- **Standalone HTML pages** seeded for search: 12 ACLS, 13 Equipment, 14 Lab,
  12 Procedure quick guides, plus meds and sickbay inventory.

## 3. Gap Analysis (before → after)

| # | Gap | State before | State after |
|---|-----|--------------|-------------|
| 1 | 82 source PDFs only partially reachable via two appendix pages | Partial: appendix-m/appendix-p listed a subset | **Fixed** — new `data/library.js` surfaces all 86 items in 13 clinical categories with a dedicated `#/library` route and filter |
| 2 | Interactive Scenarios lived only as an external HTML under `scenarios/` | Users left the SPA shell to browse them | **Fixed** — new in-shell `#/scenarios` route mirrors the launcher as cards; sidebar and home card now link in-shell; external player is still reachable via the submenu |
| 3 | Standalone ACLS / Equipment / Lab / Procedures pages were not in the header search index | Unreachable from search | **Fixed** — 51 static entries seeded into `buildSearchIndex`; search results now open standalone pages in a new tab via `goToSearchResult()` |
| 4 | `casualty-clearing-team.js` was not cached by the service worker | Missing from offline cache | **Fixed** — added to `sw.js` manifest, cache bumped to `actt-reference-v7` |
| 5 | `data/library.js` was not cached by the service worker | N/A (new file) | Added to `sw.js` manifest |
| 6 | First-time learners had no obvious entry point; home page started with "Immediate Algorithms" which suits clinicians but overwhelms learners | Single hero CTA row | **Fixed** — new "Start Where You Are" role-based strip with four shortcuts (First time through / Rapid clinical answer / Deep reference / Checklists & inspection) placed directly under the hero |
| 7 | Reference Library had no home-page card | Not reachable from home | **Fixed** — added Reference Library card to Supporting Reference grid |
| 8 | Search result click only worked for hash paths | Broken for external pages | **Fixed** — `goToSearchResult(path)` routes hash paths via `window.location.hash` and external paths via `window.open(..., '_blank', 'noopener')` |
| 9 | Reference Library categories need sidebar presence for discoverability | Not in sidebar | **Fixed** — `library` nav entry emits a submenu of all 13 categories under "Supporting Reference" |

## 4. Implementation — specific code changes

### New file
- `data/library.js` — 86 documents across 13 categories, plus 4 featured items.
  Each entry carries `{title, file, note?, tag?, basePath?}`. Default `basePath`
  is `DL information/`; root-level manuals use `basePath:''`. All 86 file
  references were verified to resolve against the filesystem.

### `index.html`
1. Added `<script src="data/library.js"></script>` alongside other data modules.
2. Added nav entry for `#/library` under the Supporting Reference group, with a
   submenu rendered dynamically from `ACTT.library.categories`.
3. Converted the Interactive Scenarios nav entry to an in-shell route
   (`#/scenarios`) with a submenu for the full external player.
4. Extended `handleRoute` switch with `library` and `scenarios` cases.
5. Added `libraryFileHref`, `libraryItemCard`, `renderLibrary`, `filterLibrary`
   — category browse, featured strip, chip filter by id, client-side text
   filter across all cards.
6. Added `SCENARIO_INDEX`, `scenarioHref`, `renderScenariosList` — card grid
   matching the external launcher page, linking to the full-screen scenario
   player pages.
7. Added `STATIC_SEARCH_ENTRIES` (51 entries) and `seedLibrarySearchEntries()`
   and extended `buildSearchIndex` to push them, topic-tagged for filter
   compatibility.
8. Replaced the search result inline onclick with `goToSearchResult(path)` so
   results can target either hash routes or external HTML/PDF files.
9. Added a role-based "Start Where You Are" quick-start strip to `renderHome`.
10. Added a Reference Library card to the home Supporting Reference grid.
11. Updated the Interactive Scenarios home card to link to `#/scenarios`.
12. Added CSS for `.lib-*`, `.scn-*`, `.role-*`, `.u-section-heading`, and
    `.visually-hidden`.

### `sw.js`
- Bumped cache from `actt-reference-v6` to `actt-reference-v7`.
- Added `./data/casualty-clearing-team.js` (previously missed — would break
  offline loading of the CCT section).
- Added `./data/library.js`.

## 5. Content Coverage Checklist

Every source document in `DL information/` is now reachable via the
Reference Library. Top-level course manuals are featured.

### Fully represented (direct link + clinical context elsewhere in app)
- Airway, Ventilation & Oxygen (12/12): ACTT 2026-01 Airway, Airway Resources &
  Pearls, Airway Handout, RSI Check List & Intubation, RSI Resource, Intubation
  of the Critically Ill, Cricothyroidotomy, Med Tech Airway (i-gel), Ventilator
  PERLs, Oxygen Endurance, Zoll EMV+ Quick Guide, Zoll EMV+ Quick Guide AMTRP
  FiO₂, Zoll EMV Plus Full Reference, Zoll EMV Guide (root).
- Trauma, Burns & ATLS (11/11): ACTT 2026-01 ATLS, Trauma Acute Care Clinical
  Record, Resus Record, Burn Management PFC, Burns — Dr Papp, Burn Fluid
  Resuscitation Flowsheet, TBSA Burn Estimation Chart, VCH Major Burn 24hr
  Orders, Med Tech Burn Protocol, First 8 Hours, 8-Hour Check.
- Cardiac, ACS & STEMI (8/8): ACLS Guidelines 2020, Acute Chest Pain Protocol,
  ACS Feb 2026, Adjunct Medications for Acute MI, Fibrinolytic Checklist,
  STEMI Fibrinolytic Therapy Orders, Tenecteplase IFU, ECG Cheat Sheet.
- DKA & Endocrine Emergencies (4/4).
- Sepsis, Shock & Vasoactives (5/5).
- Seizure, Neuro & Mental Health (4/4).
- Environmental & Maritime (2/2).
- Procedures & Access (13/13).
- Medications & Infusions (7/7).
- Devices & Equipment (3/3).
- i-STAT & POC Lab (3/3).
- Casualty Clearing, Transport & Prolonged Hold (6/6).
- Team Dynamics & Course Admin (3/3).

### Featured top-level
- ACTT Preparation Manual Chapters 1–13 (Combined).
- ACTT Scenario Companion (Combined).
- ACTT Reference for PAs.
- ACTT 2026-01 Candidates Schedule.

### Partially represented (content is in app modules but source doc only now
linked, not paraphrased)
- Several slide decks (`.pptx` — ACS, DKA, Sepsis, Seizure) open as downloads
  since they cannot render inline. Their clinical content is covered in the
  corresponding `ACTT.algorithms` / `ACTT.domains` modules; users now have the
  raw deck reachable from the library.

### Missing (nothing identified)
- Every file under `DL information/` is referenced by the library data module.
- Every scenario HTML is linked from the new in-shell scenarios page.
- Every standalone HTML quick guide is reachable both from its own index and
  from header search.

## 6. UX Improvements

1. **Role-based home entry** — first-time users no longer land on an
   algorithms-first hero. "Start Where You Are" offers four clear paths
   appropriate for learner / clinician / reference / inspection use.
2. **Reference Library page** — 13 categorised topics + featured strip +
   instant filter. Every card shows file extension badge, optional tag, short
   note, and full path for transparency. Filter also hides empty categories
   to reduce scroll noise.
3. **Sidebar discoverability** — Reference Library sub-menu lists all
   categories by id, and the existing group label "Supporting Reference"
   already fits it semantically.
4. **In-shell scenarios** — users stay in the SPA shell with bookmarks, dark
   mode, and search available while choosing a scenario. The external launcher
   remains reachable for users who want the full screen player immediately.
5. **Search completeness** — standalone pages (ACLS, Equipment, Lab,
   Procedures, scenarios) and all 86 library documents are now searchable
   from the header search. Results correctly route to hash pages or open
   external targets in new tabs.
6. **Home card set** — added a Reference Library card and pointed the
   Interactive Scenarios card at the in-shell route.

## 7. Functional Fixes

- Service worker: missing `casualty-clearing-team.js` added, new
  `library.js` added, cache bumped so installed clients re-fetch the manifest.
- Search click: inline `window.location.hash=...` replaced with
  `goToSearchResult()` which handles both `#/...` and external `data/.../*.html`
  or `DL information/*.pdf` targets. Results list now closes and clears input
  on navigation; mobile search drawer closes automatically.
- All inline JavaScript passes a static `new Function()` syntax check
  (83 kB of inline JS). `data/library.js` and `sw.js` parse cleanly.
- All 86 file paths in `data/library.js` verified to resolve against the
  working tree.

## 8. Assumptions

- `.pptx` decks are treated as downloadable attachments (browsers handle them
  via OS, not inline). This is consistent with the existing Source Document
  Library pattern in appendix-m.
- The existing search filter dropdown retains its current categories; new
  `topic: 'library'` and `topic: 'scenarios'` entries only appear when the
  filter is set to "All", which matches how other data modules are indexed.
- The featured items on the library page use the top-level root files where
  they exist (Prep Manual and Candidates Schedule are root-level) and fall
  back to `DL information/` otherwise.
- No code for scenarios inside the SPA shell — they continue to launch the
  standalone scenario player HTMLs in the same tab, as before.

## 9. Recommended Next Improvements

1. Add a home-page "Featured Downloads" card that deep-links to the Prep
   Manual and Scenario Companion PDFs for new candidates.
2. Cross-link the Sick Bay medication cards to the corresponding
   standalone `data/Meds/*.html` pages (or vice versa) so the two med
   surfaces are not silos.
3. Consider adding the 82 source PDFs to the service worker manifest under
   a lazy-cache strategy — currently they are served over the network only.
   At ~150 MB total, caching all of them by default is probably too much; a
   "Download for offline" button in the library would be a better fit.
4. Rename the "(Standalone)" sub-labels in the Sick Bay nav group for
   consistency now that standalone pages are linkable from search.
5. Progress tracker widget on home that uses `state.learnerProgress.visited`
   to show "library sections opened" and "scenarios completed".
