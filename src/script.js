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

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("#naviget ul a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

// };
