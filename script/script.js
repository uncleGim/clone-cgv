const headerLeftEl = document.querySelector("#header-left");
const headerMenuEl = document.querySelector("#header-menu");
const headerDropdown = document.querySelector("#header-dropdown");

headerLeftEl.addEventListener("mouseenter", () => {
  headerDropdown.style.height = "350px";
});

headerMenuEl.addEventListener("mouseleave", () => {
  headerDropdown.style.height = "0";
});

addEventListener("scroll", () => {
  if (window.scrollY > 118) {
    headerMenuEl.className = "header-menu header-menu--fixed";
  } else {
    console.log("none");
    headerMenuEl.className = "header-menu";
  }
});
