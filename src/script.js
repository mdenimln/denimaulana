let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("#naviget ul a");
let navlinksSpan = document.querySelectorAll("#naviget ul .navilistSpan span");



window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    let current = "";
    let isFirstSectionActive = false;

    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop - 70; // Sesuaikan tinggi navbar
      const sectionHeight = sec.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = sec.getAttribute("id");
        if (current === "about") {
          isFirstSectionActive = true; // Jika berada di section pertama
        }
      }
    });
    navlinks.forEach((link) => {
      link.classList.remove("active", "animate-bounceIn");
    });
    navlinks.forEach((link) => {
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active", "animate-bounceIn");

        if (isFirstSectionActive && !link.classList.contains("animate-bounceIn")) {
          link.classList.add("animate-bounceIn");
        }
      }
    });

    if (!current) {
      navlinks.forEach((link) =>
        link.classList.remove("active", "nimate-bounceIn")
      );
    }
  });
});

// Translate Bahasa
let toggleLanguage = document.querySelector(".toggle-language");
let language = document.querySelector(".language");

toggleLanguage.addEventListener("click", () => {
  if (language.classList.contains("hidden")) {
    language.classList.remove("hidden");
  } else {
    language.classList.add("hidden");
  }
});

