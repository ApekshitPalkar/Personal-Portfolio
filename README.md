# Apekshit Palkar — Personal Portfolio

A responsive personal portfolio for presenting my background, current technical skills, selected work, learning record and contact details.

The visual direction combines **editorial brutalism**, **industrial design** and **blueprint-inspired details**. The design uses a restrained graphite, warm ivory, copper and muted-olive palette, strong typography, technical labels and grid-based decoration.

## Built with

- **HTML5** for the page structure and semantic sections.
- **CSS3** for the visual system, responsive layouts, typography, cards, decorative blueprint elements and reduced-motion handling.
- **Vanilla JavaScript** for the live footer year and active-section highlighting in the navigation.
- **Git and GitHub** for version control and hosting through GitHub Pages.

There are no frontend frameworks, animation libraries, external images, API keys or build tools required.

## Project files

```text
Personal-Portfolio/
├── index.html   # Portfolio content and semantic page structure
├── style.css    # Design system, components and responsive breakpoints
├── script.js    # Small progressive enhancements
└── README.md    # Project overview and setup instructions
```

## Website sections

1. **Hero** — introduction, study focus and calls to action.
2. **About** — short background and approach to learning.
3. **Skills** — a qualitative skills map. Labels such as Foundations, Basic, Academic and Introductory Literacy are intentionally used instead of unsupported percentage scores.
4. **Selected Work** — the Hospital Billing Management System project, with a project summary, real repository link and a clearly labelled illustrative receipt based on fictional test values.
5. **Learning Record** — course credentials currently listed in my resume. Provider names, dates and credential links can be added after verification.
6. **Contact** — email and GitHub profile links.

## Local preview

No installation is needed. Clone or download this repository, then open `index.html` in a browser.

For a local development server, run this command from the repository folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## How the site is put together

### HTML

`index.html` contains the content and meaningful page landmarks (`header`, `nav`, `main`, `section` and `footer`). Navigation and calls to action use normal anchor links to section IDs, so the main navigation still works without JavaScript.

### CSS

`style.css` defines reusable colour and typography variables in `:root`, then styles each section and component. CSS Grid and Flexbox are used for the desktop composition. Media queries adapt the header, hero, skills grid, project card and contact area for tablets and phones. A `prefers-reduced-motion` rule reduces transitions for visitors who request less motion. The blueprint-style artwork is made with CSS rather than external image assets.

### JavaScript

`script.js` is deliberately small:

- Updates the footer year automatically.
- Uses `IntersectionObserver` to highlight the navigation link for the section currently in view.

The site does not depend on JavaScript for its core content or navigation.

## Featured project: Hospital Billing Management System

This is an educational Java desktop application built with Java AWT, JDBC, MariaDB, Maven and SQL. It handles fictional patient details, sample billing calculations, input validation, saving and retrieving billing records, and keyboard focus navigation.

The project reports 22 automated billing-service validation checks and a GitHub Actions workflow. Those automated checks exercise the billing service; they do not prove every GUI interaction or a full database failure scenario.

**Project source:** https://github.com/ApekshitPalkar/hospital-billing-management-system

**Important:** This is a student educational prototype, not production hospital software. Ward/procedure amounts and tax values are illustrative, not actual hospital rates or statutory GST. Do not enter real patient information. The portfolio's receipt graphic is an illustration based on a documented fictional sample calculation; it is not a screenshot of the application.

Parts of the project's implementation, restructuring and documentation were AI-assisted. My hands-on contributions included the original Enter-key navigation idea, project requirements, Fedora/MariaDB setup, schema configuration, running the application and verifying saved records using SQL. The portfolio describes these contributions rather than claiming that every line was independently authored.

## Deployment with GitHub Pages

1. Push the website files (`index.html`, `style.css`, `script.js` and `README.md`) to the root of the repository's `main` branch.
2. Open the repository on GitHub and select **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. After GitHub Pages finishes publishing, open the Pages URL shown in Settings → Pages.

Whenever the website files are updated on the selected branch, GitHub Pages will publish the updated static site.

## Future improvements

- Add further projects when they are complete and documented.
- Add verified certificate providers, completion dates and credential links.
- Add a downloadable, current CV after the CV has been reviewed.
- Consider a portfolio Q&A chatbot later. Any AI API key must remain on a secure backend and must never be placed in public frontend JavaScript.
