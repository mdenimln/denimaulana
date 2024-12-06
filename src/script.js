let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("#naviget ul a");
let navlinksSpan = document.querySelectorAll("#naviget ul .navilistSpan span");
console.log(navlinksSpan);
console.log(navlinks);


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("#naviget ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

};
