# AGENTS.md — Tekniksvar Operating Manual

This document serves as the permanent operating manual for AI agents (including Jules) working on the Tekniksvar codebase and editorial content. All future tasks must adhere strictly to these guidelines.

---

## 1. Core Principles & Editorial Integrity

* **Swedish Language Standard (sv-SE):** All user-facing content must be written in natural, fluent Swedish. Avoid generic translation artifacts or repetitive AI phrasing (e.g., "I dagens digitala värld", "Teknik utvecklas i rasande takt").
* **Accuracy Before Speed:** Factual correctness is paramount. Never rush content creation at the expense of verified technical facts.
* **Readers Before SEO:** Write for human readers seeking solutions to practical problems. Do not pad articles with filler or repeat introductory paragraphs to hit artificial word counts.
* **No Mass-Generated Low-Value Content:** Every article or page must serve a clear user need. Thin SEO pages, mass automated content, and generic AI dumps are strictly forbidden.
* **Author Integrity & Credentials:** Do not fabricate author credentials, professional certifications, degrees, or employment history. Aram Anwar is the founder and editor. Bio details must remain modest and factual.
* **No Fake Product Testing or Experiences:** Never invent first-hand experiences, lab testing, benchmark results, star ratings, or product scores. If a product was not physically tested, do not claim it was.
* **No Scraping or Plagiarism:** Do not copy, scrape, or spin content from competitors (e.g., Teknikguiden, Red Reactions). Write original explanations based on primary documentation.

---

## 2. Source Verification & Image Rights

* **Source Quality:** Prioritize primary sources (e.g., official support documentation from Microsoft, Google, OpenAI, Anthropic, Apple).
* **Image Rights:**
  * Use local assets or approved open licenses.
  * Never use scraped competitor images, uncredited editorial stock, or generic low-quality AI graphics for every article.
  * Always provide accurate `alt` text for images. Credit sources when required.

---

## 3. Monetization & Transparency

* **Affiliate Transparency:** Disclose qualifying affiliate links clearly when added in the future. Never invent partner IDs, tracking codes, or fake discount codes.
* **AdSense Safety:** Maintain clean layout structures capable of ad integration. Do not insert AdSense scripts, publisher IDs, or empty placeholder ad boxes until official ad accounts are configured.

---

## 4. Architecture & Technical Rules

* **Content Coverage Check:** Before creating a new article URL, inspect existing coverage in `src/content/articles/` to avoid duplicate intent or cannibalization.
* **No Unnecessary Dependencies:** Keep the application lightweight using Astro static HTML and minimal client-side JavaScript. Do not add heavy frameworks (React/Vue/Svelte) unless strictly required for complex UI.
* **Browser-First Tools:** All free tools (`/verktyg/`) must execute 100% client-side without external API backend requirements or user data transmission.

---

## 5. Development & Git Discipline

* **Build Validation:** Run full build validation (`npm run build`) before completing any task. Ensure 0 errors, 0 warnings, and 0 hints.
* **Strict Git Discipline:**
  * Inspect `git status` and `git diff` carefully before staging files.
  * Do not stage temporary research files, caches, or editor artifacts.
  * Never use `git push --force` or modify git history unsafely.
  * Keep commits clean, concise, and focused on specific task scope.
