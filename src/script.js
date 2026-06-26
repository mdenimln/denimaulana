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
let langId = document.querySelector(".lang-id");
let langEn = document.querySelector(".lang-en");

const translations = {
  en: {
    "header.resume": "Resume",
    "nav.about": "ABOUT ME",
    "nav.portfolio": "PORTFOLIO",
    "nav.resume": "RESUME",
    "nav.creative": "CREATIVE",
    "about.eyebrow": "// ABOUT ME",
    "about.title": "Web Designer (FrontEnd)",
    "about.description":
      "Hello! I'm Deni, a dedicated vocational student majoring in Information Systems with more than 2 years of experience in creating digital solutions. I specialize in creating user-centric interfaces and conducting research to optimize the user experience. I want to learn and express my creativity and work with a team to bring ideas to life.",
    "about.stats.years": "Years Learn Digital",
    "about.stats.hours": "Hours of Expertise",
    "about.stats.projects": "Projects Done",
    "about.social.art": "Instagram Art",
    "licenses.eyebrow": "// LICENSES & CERTIFICATIONS",
    "portfolio.eyebrow": "// PORTFOLIO",
    "portfolio.title": "My Latest Work",
    "portfolio.description":
      "Developing an idea for creativity through digital and design, creating new innovations and turning user problems into opportunities with design!",
    "portfolio.filters.all": "Show All",
    "portfolio.filters.web": "Web Design",
    "portfolio.filters.logic": "Logic Programming",
    "portfolio.items.1": "Express Students` Attacks Creatively.",
    "portfolio.items.2": "School Information And News.",
    "portfolio.items.3": "Learn Communication by Reading an Article.",
    "portfolio.items.4": "Personal Blog and About Me.",
    "resume.eyebrow": "// RESUME",
    "resume.title": "Education & Experience",
    "resume.description":
      "With experience in programming, graphic design and product development and entrepreneurship, I bring a comprehensive skill set to every project.",
    "creative.eyebrow": "// CREATIVE",
    "creative.title": "Creative Space",
    "creative.description":
      "Explore my creative space where each piece reflects my passion for blending artistry and technology to create visually compelling work.",
  },
  id: {
    "header.resume": "Resume",
    "nav.about": "TENTANG",
    "nav.portfolio": "PORTOFOLIO",
    "nav.resume": "RESUME",
    "nav.creative": "KREATIF",
    "about.eyebrow": "// TENTANG SAYA",
    "about.title": "Desainer Web (FrontEnd)",
    "about.description":
      "Halo! Saya Deni, seorang siswa SMK jurusan Sistem Informasi dengan pengalaman lebih dari 2 tahun dalam menciptakan solusi digital. Saya berfokus pada pembuatan antarmuka yang berpusat pada pengguna dan melakukan riset untuk mengoptimalkan pengalaman pengguna. Saya ingin terus belajar, mengekspresikan kreativitas, dan bekerja bersama tim untuk mewujudkan ide.",
    "about.stats.years": "Tahun Belajar Digital",
    "about.stats.hours": "Jam Keahlian",
    "about.stats.projects": "Proyek Selesai",
    "about.social.art": "Instagram Seni",
    "licenses.eyebrow": "// LISENSI & SERTIFIKASI",
    "portfolio.eyebrow": "// PORTOFOLIO",
    "portfolio.title": "Karya Terbaru Saya",
    "portfolio.description":
      "Mengembangkan ide menjadi karya kreatif melalui digital dan desain, menciptakan inovasi baru, serta mengubah masalah pengguna menjadi peluang lewat desain!",
    "portfolio.filters.all": "Semua",
    "portfolio.filters.web": "Desain Web",
    "portfolio.filters.logic": "Pemrograman Logika",
    "portfolio.items.1": "Mengekspresikan Serangan Siswa Secara Kreatif.",
    "portfolio.items.2": "Informasi dan Berita Sekolah.",
    "portfolio.items.3": "Belajar Komunikasi dengan Membaca Artikel.",
    "portfolio.items.4": "Blog Pribadi dan Tentang Saya.",
    "resume.eyebrow": "// RESUME",
    "resume.title": "Pendidikan & Pengalaman",
    "resume.description":
      "Dengan pengalaman di bidang pemrograman, desain grafis, pengembangan produk, dan kewirausahaan, saya membawa keterampilan yang menyeluruh ke setiap proyek.",
    "creative.eyebrow": "// KREATIF",
    "creative.title": "Ruang Kreatif",
    "creative.description":
      "Jelajahi ruang kreatif saya, tempat setiap karya mencerminkan semangat saya dalam memadukan seni dan teknologi menjadi hasil visual yang menarik.",
  },
};

const typedStrings = {
  en: ["HI THERE!", "I'M DENI"],
  id: ["HALO!", "SAYA DENI"],
};

function updateTypedText(lang) {
  if (window.typed) {
    window.typed.destroy();
  }

  window.typed = new Typed(".auto-type", {
    strings: typedStrings[lang] || typedStrings.en,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
}

function setActiveLanguage(lang) {
  [langId, langEn].forEach((item) => item?.classList.remove("font-bold", "opacity-100"));

  if (lang === "id") {
    langId?.classList.add("font-bold", "opacity-100");
  } else {
    langEn?.classList.add("font-bold", "opacity-100");
  }
}

function applyTranslations(lang) {
  const selectedLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  localStorage.setItem("site-language", selectedLanguage);
  setActiveLanguage(selectedLanguage);
  updateTypedText(selectedLanguage);
}

toggleLanguage.addEventListener("click", () => {
  if (language.classList.contains("hidden")) {
    language.classList.remove("hidden");
  } else {
    language.classList.add("hidden");
  }
});

langId?.addEventListener("click", (event) => {
  event.stopPropagation();
  applyTranslations("id");
  language.classList.add("hidden");
});

langEn?.addEventListener("click", (event) => {
  event.stopPropagation();
  applyTranslations("en");
  language.classList.add("hidden");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("site-language") || "en";
  applyTranslations(savedLanguage);
});

