const headerLeftEl = document.querySelector("#header-left");
const headerMenuEl = document.querySelector("#header-menu");
const headerDropdown = document.querySelector("#header-dropdown");
const mainVideoEl = document.querySelector("#mainVideo");
const playBtn = document.querySelector("#playBtn");
const playIcon = document.querySelector("#playIcon");
const muteBtn = document.querySelector("#muteBtn");
const muteIcon = document.querySelector("#muteIcon");

const movieTab = document.querySelector("#movie-tab");
const reserveTab = document.querySelector("#reserve-tab");

headerLeftEl.addEventListener("mouseenter", () => {
  headerDropdown.style.height = "350px";
});

headerMenuEl.addEventListener("mouseleave", () => {
  headerDropdown.style.height = "0";
});

playBtn.addEventListener("click", () => {
  if (mainVideoEl.paused) {
    mainVideoEl.play();
    playIcon.className = "ti ti-player-pause";
  } else {
    mainVideoEl.pause();
    playIcon.className = "ti ti-player-play";
  }
});

muteBtn.addEventListener("click", () => {
  if (mainVideoEl.muted) {
    mainVideoEl.muted = false;
    muteIcon.className = "ti ti-volume";
  } else {
    mainVideoEl.muted = true;
    muteIcon.className = "ti ti-volume-3";
  }
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

// movieTab.addEventListener("click", () => {
//   reserveTab.className = "";
//   movieTab.className = "active";
// });

// reserveTab.addEventListener("click", () => {
//   console.log(movieTab);
//   movieTab.className = "";
//   reserveTab.className = "active";
// });
