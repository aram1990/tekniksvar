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

## 2. Source Verification & Permanent Image Sourcing Policy

* **Source Quality:** Prioritize primary sources (e.g., official support documentation from Microsoft, Google, OpenAI, Anthropic, Apple).
* **Permanent Image Sourcing Rules for Articles:**
  * **No AI-Generated / Custom SVG Hero Images:** DO NOT create AI-generated hero images. DO NOT create generic custom SVG hero illustrations for NEW articles unless explicitly requested. (Existing legacy custom SVGs may remain for now.)
  * **Search the Web First:** Always research the web for a genuinely relevant, real-world image for each article.
  * **Image Source Priority:**
    1. *Official First-Party Sources:* Prefer images from the company/product being discussed (Microsoft, Google, OpenAI, Anthropic, Samsung, Apple, Mozilla, official press kits, media centers, newsrooms, support/documentation). Only use when reuse is reasonably permitted or provided as press/media material.
    2. *Open-License Sources:* If no suitable official image exists, search Wikimedia Commons, Unsplash, Pexels, or Pixabay. Always verify license and usage terms before downloading.
    3. *Real Screenshots:* For instructional articles, real screenshots captured from genuine current UI versions without exposing personal information and legally reasonable to reproduce. Never invent or AI-generate fake screenshots.
  * **Prohibited Sources (NEVER USE):**
    * Google Images search results page (use Google Images ONLY to discover original sources; always open and verify the original source page).
    * Random blogs, competing publications, Reddit, Facebook / Instagram / TikTok.
    * Stock agencies (Getty Images, Shutterstock, Alamy) or copyrighted news agencies.
    * Watermarked images or unknown-license websites.
  * **Image Rights & Source Record:** For every downloaded image, record:
    * Original source URL
    * Source / Creator
    * License or usage basis
    * Date accessed
    * If license or usage rights are unclear: DO NOT USE. It is better to publish without a hero image than to use an image with uncertain rights.
  * **"NO SAFE IMAGE FOUND" Fallback:** If no legally safe and relevant image can be found after searching, report `NO SAFE IMAGE FOUND` and publish the article WITHOUT a hero image rather than inventing one.
  * **Local Asset Hosting & Optimization:**
    * Do not hotlink external images.
    * Download approved assets into `public/images/articles/[article-slug]/` using descriptive filenames.
    * Preferred format: WebP.
    * Target hero dimensions: approximately 1200x675 (16:9 ratio). Avoid unnecessarily large file sizes.
  * **Visible Image Credits:** If attribution is required or appropriate, display a short visible image credit beneath the hero image (e.g., `Bild: Microsoft`, `Foto: [Photographer] / Unsplash`, `Bild: Wikimedia Commons / [Creator], CC BY-SA 4.0`). Do not falsely imply Tekniksvar created the image.
  * **Article Frontmatter Fields:**
    * `heroImage` (optional)
    * `heroImageAlt` (optional)
    * `heroImageCredit` (optional)
    * `heroImageSource` (optional)
  * **SEO / Accessibility:** Every image must have accurate, descriptive alt text without keyword stuffing or misleading text.
  * **Final Report Requirement for Article Tasks:**
    For every article publishing/creation task, report:
    ```
    IMAGE:
    - chosen image:
    - local filename:
    - original source URL:
    - source/creator:
    - license/usage basis:
    - image credit:
    - alt text:
    ```
    If no image was used, explicitly report "NO SAFE IMAGE FOUND" and explain why.

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
