const headerLeftEl = document.querySelector("#header-left");
const headerMenuEl = document.querySelector("#header-menu");
const headerDropdown = document.querySelector("#header-dropdown");

const movieTab = document.querySelector("#movie-tab");
const reserveTab = document.querySelector("#reserve-tab");

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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

movieTab.addEventListener("click", () => {
  reserveTab.className = "";
  movieTab.className = "active";
});

reserveTab.addEventListener("click", () => {
  console.log(movieTab);
  movieTab.className = "";
  reserveTab.className = "active";
});
