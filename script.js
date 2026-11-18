// Small progressive enhancements. All navigation uses real in-page links,
// so the site remains usable even if JavaScript is unavailable.

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Highlight the section currently in view in the primary navigation.
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && navLinks.length && sections.length) {
  const linkById = new Map(navLinks.map((link) => [link.hash.slice(1), link]));
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) link.removeAttribute("aria-current");
      const activeLink = linkById.get(entry.target.id);
      if (activeLink) activeLink.setAttribute("aria-current", "location");
    }
  }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}