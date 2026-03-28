# ACTT Web App Repository Review (Practical Course-Focused Critique)

## 1) Executive summary

This repository delivers a **highly content-rich ACTT reference app** with substantial clinical material, practical checklists, decision-support tools, and interactive scenarios. It is already valuable as a field-ready cognitive aid and course companion.

The strongest elements are:
- broad domain coverage (algorithms, procedures, meds, thresholds, checklists, scenarios);
- practical orientation for shipboard delayed-evacuation realities;
- offline-first support through service worker caching;
- interactive checklists and scenario branching.

The biggest constraints are architectural and product-level rather than pure content volume:
- a large single-page inline architecture (`index.html`) with many inline handlers;
- duplicated scenario templates across many large standalone HTML files;
- inconsistent IA between SPA routes and standalone pages;
- accessibility and keyboard affordance gaps in dynamic controls;
- limited pedagogical progression (little adaptive feedback/competency tracking).

Overall: **excellent foundation, but needs consolidation, accessibility hardening, and learning design upgrades** to become a modern, maintainable educational platform.

---

## 2) Top 10 recommendations ranked by impact

1. **Refactor into modular front-end architecture (highest impact).**
   Break `index.html` into componentized JS/CSS modules and route-specific view files. This reduces fragility and improves testability/reviewability.

2. **Unify navigation experience between SPA and standalone pages.**
   Keep users in one shell when entering scenarios, ACLS, equipment, and lab content (or provide consistent breadcrumb/back behavior + context-preserving links).

3. **Introduce competency-based learning layer.**
   Add mastery tracking by domain, retrieval prompts, scenario performance history, and “what to study next” recommendations.

4. **Accessibility remediation pass (WCAG-focused).**
   Replace clickable div patterns where needed, add robust keyboard interactions for all dynamic widgets, focus-visible states, and ARIA/live-region support for result updates.

5. **Scenario engine standardization.**
   Convert per-scenario static pages into one reusable renderer with JSON scenario definitions. This cuts duplication and enables analytics, easier updates, and versioned curriculum.

6. **Clinical governance and content freshness workflow.**
   Add explicit metadata per content block: source date, review date, reviewer, and validity horizon. Make stale content visibly flagged.

7. **Improve mobile ergonomics for in-scenario decisioning and checklist use.**
   Increase tap target spacing, persistent progress HUD, and one-hand-friendly layout for high-pressure use.

8. **Expand simulation/debrief tooling.**
   Add post-scenario debrief templates (advocacy-inquiry prompts, timeline playback, errors-to-anchors mapping), team role reflection, and remediation links.

9. **Strengthen technical quality controls.**
   Add linting, formatting, basic E2E smoke tests, and CI checks for broken links and duplicate IDs/content issues.

10. **Curate content IA by role and context.**
   Add role-based quick-start paths (PA, Med Tech, team lead), and context shortcuts (resus, prolonged hold, pre-evac, inspection).

---

## 3) Quick wins (1–2 weeks)

- Add a **global “Last reviewed / Source age” banner** on high-risk pages.
- Add **keyboard support + focus ring improvements** for scenario stage toggles and dynamic cards.
- Add **“Resume where you left off”** for scenarios/checklists (local storage state).
- Add **micro-quizzes** at the end of key chapters (3–5 questions each).
- Add **“Top mistakes” callout** to each algorithm/procedure page (some exist; make universal pattern).
- Add **search filters** (Algorithms / Procedures / Meds / Checklists / Scenarios / Source docs).
- Add **single-tap “Print/Export debrief summary”** for scenario outcomes.
- Add **critical-action timing hints** (e.g., first antibiotic clock, first airway attempt timer cue).

---

## 4) Add / Remove / Keep

### Add
- Adaptive quizzes and spaced-repetition review queues.
- Scenario score breakdown by domain (airway, shock, meds, communication).
- Debrief toolkit with structured prompts and role feedback cards.
- Role-based dashboard presets (PA vs Med Tech vs support team).
- Content governance metadata + stale-content warning system.

### Remove
- Redundant or overlapping standalone pages once unified under a shared rendering engine.
- Obsolete reference entries lacking review metadata or superseded by newer protocols.
- UI patterns that require mouse-only interaction for core learning flows.

### Keep
- Strong practical checklists and operational inspection workflows.
- Shipboard/prolonged-hold emphasis (major differentiator).
- Offline-ready posture and broad emergency domain coverage.
- Scenario-driven decision practice concept (expand, don’t replace).

---

## 5) Detailed findings by category

### A. Functionality
**What works well**
- Broad in-app routing and section rendering covers most ACTT domains in one hub.
- Search, bookmarks, print, dark mode, font scaling, and checklist state persistence are useful and pragmatic.
- Clinical tools (GCS, burn, dose, timers, interactions, differential helper) support immediate bedside review.

**What should improve**
- Cross-surface transitions (SPA → standalone scenario/acls/lab/equipment pages) fragment context and can interrupt learning flow.
- Add persistent learner state: “last visited section,” progress by topic, scenario history, and weak-area prompts.
- Add reliability affordances around tool outputs (e.g., clear caveat banners and review-source links adjacent to outputs).

### B. UX/UI
**What works well**
- Clear dark clinical aesthetic, dense-but-readable cards, and practical CTA hierarchy.
- Home page operational flow framing (recognize → execute → sustain) is pedagogically coherent.

**What should improve**
- Too much dense text in some sections; scanning could improve with summaries, keyline callouts, and “1-minute version.”
- Standalone scenarios use a different visual system than the main app, reducing coherence.
- Add “sticky context bar” in long pages (current section, completion, next recommended action).

### C. Accessibility
**Strengths**
- Some ARIA attributes and focus management are present in navigation/sidebar patterns.

**Gaps**
- Heavy use of inline `onclick` patterns and clickable non-button containers creates uneven keyboard/screen-reader ergonomics.
- Dynamic result areas (search, scenario feedback) should expose stronger semantic announcements.
- Need structured a11y audit (color contrast, keyboard-only path, SR announcements, focus order).

### D. Mobile responsiveness
**Strengths**
- Mobile breakpoints exist; sidebar overlay and mobile search handling are implemented.
- Scenario cards and list patterns generally collapse cleanly.

**Gaps**
- Long dense pages still feel desktop-first in cognitive load.
- Need bigger spacing/tap zones for stress-use contexts and faster mobile task completion patterns.
- Add compressed “critical mode” view for rapid operational use.

### E. Technical quality
**Strengths**
- Offline service worker and large cache manifest support disconnected use.
- Data-driven content pattern (`window.ACTT.*`) already centralizes substantial educational content.

**Gaps**
- Monolithic `index.html` and repeated large scenario files increase maintenance risk.
- Inline event handlers and DOM-string rendering reduce testability and raise regression risk.
- No visible automated checks/CI quality gates.

### F. Content organization
**Strengths**
- Content breadth is excellent and aligned to high-acuity course needs.
- Checklists and source-document linking are practical and field-friendly.

**Gaps**
- Navigation taxonomy is rich but can overwhelm first-time learners.
- Need “learn by pathway” mode (e.g., Airway week, Shock week, Prolonged Hold week) in addition to encyclopedic browsing.
- Introduce canonical mapping between chapter concepts ↔ scenario objectives ↔ checklist items.

### G. Educational effectiveness
**Strengths**
- Scenario-based self-testing and checklist practice are high-yield methods.
- Many pages emphasize action sequences and pitfalls, not just facts.

**Gaps**
- Minimal adaptive learning loop (no personalized remediation).
- Quizzing exists indirectly via scenarios but not as fast retrieval sets across all modules.
- No explicit objective mastery indicators tied to course outcomes.

### H. Clinical relevance
**Strengths**
- Strong maritime/shipboard realism and prolonged-hold framing.
- Practical bedside orientation (dosing, sequence, monitoring, pitfalls).

**Gaps**
- Add explicit version control and review dates for clinical governance confidence.
- Highlight potentially time-sensitive references and provide current-policy validation checklist.
- Add red-team review path for high-risk algorithm steps.

### I. Modernization opportunities
- Migrate to modular app architecture (component-based views + shared design tokens).
- Convert scenario content into structured data + reusable player.
- Add analytics-ready instrumentation (local-first, optional export).
- Add educational telemetry dashboard for instructors (cohort weak spots, common decision errors).
- Add optional sync mode (if network available) with secure learner profiles.

---

## 6) 3-phase roadmap

### Phase 1 (0–6 weeks): Stabilize and harden
- Accessibility baseline pass (keyboard/screen-reader/focus).
- Quick IA improvements and search filters.
- Add content metadata (review dates/sources).
- Add lightweight quizzes for top domains.
- Add “resume” and progress persistence across scenarios.

### Phase 2 (6–14 weeks): Re-architect and unify learning flow
- Split monolith into modules.
- Build reusable scenario engine with JSON content.
- Unify standalone content under common shell and navigation.
- Implement objective mapping and learner progress dashboard.

### Phase 3 (14–28 weeks): Optimize educational outcomes
- Adaptive recommendations + spaced repetition.
- Instructor debrief tooling and cohort analytics.
- Simulation packs (role-based scripts, injects, debrief rubrics).
- Governance workflow for periodic clinical content verification.

---

## 7) 15-item prioritized action list

1. Break `index.html` script/styles into modular files with clear ownership.
2. Create reusable scenario renderer and migrate all 12 scenarios to data-driven format.
3. Add a11y keyboard parity for all interactive elements and dynamic announcements.
4. Add metadata fields: `lastReviewed`, `reviewer`, `sourceDate`, `expiryNotice`.
5. Add chapter-end micro-quiz framework (initially Algorithms, Procedures, Medications).
6. Add learner progress model (completed sections, quiz score, scenario performance).
7. Add “recommended next step” engine based on weak areas.
8. Unify standalone pages (ACLS/Lab/Equipment/Scenarios) into consistent shell/nav.
9. Add search facet filters and synonym support (e.g., RSI/intubation/airway).
10. Add rapid mode UI preset for emergency bedside use on mobile.
11. Implement debrief export templates per scenario (clinical + teamwork).
12. Add automated link checker and basic smoke tests in CI.
13. Add content duplicate detector and stale-source alerts.
14. Add role-based quick-start dashboards (PA, Med Tech, Team Lead).
15. Remove/merge redundant pages after scenario and shell unification to reduce maintenance load.

