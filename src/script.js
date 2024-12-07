let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("#naviget ul a");
let navlinksSpan = document.querySelectorAll("#naviget ul .navilistSpan span");
console.log(navlinksSpan);
console.log(navlinks);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop; // Sesuaikan tinggi navbar
    const sectionHeight = sec.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = sec.getAttribute("id");
    }
  });
  navlinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
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
