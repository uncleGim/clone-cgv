const headerLeftEl = document.querySelector("#header-left");
const headerMenuEl = document.querySelector("#header-menu");
const headerDropdown = document.querySelector("#header-dropdown");
const mainVideoEl = document.querySelector("#mainVideo");
const playBtn = document.querySelector("#playBtn");
const playIcon = document.querySelector("#playIcon");
const muteBtn = document.querySelector("#muteBtn");
const muteIcon = document.querySelector("#muteIcon");

const movieTab = document.querySelector("#movieTab");
const reserveTab = document.querySelector("#reserveTab");

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
  slidesPerView: 5,
  loop: false,
  slidesPerGroup: 5,
  spaceBetween: 32,
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
const drawChartList = (chartList) => {
  chartSlide.innerHTML = "";
  chartList.forEach((data) => {
    chartSlide.innerHTML += `
            <div class="swiper-slide">
              <div class="poster-card">
                <div class="poster-image-wrapper">
                  <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg" />
                  <div class="poster-wrapper">
                    <div class="age-wrap">
                      <img src="./images/ageAll.svg">
                    </div>
                  </div>
                  <div class="poster-card_hover ">
                    <button class="card-btn btn-white">상세보기</button>
                    <button class="card-btn btn-red">예매하기</button>
                  </div>
                </div>
                <div class="poster-name">${data.name}</div>
                <div class="rate-row">
                  <span class="egg-row">
                    <img src="./images//goldenEggPreg.png" class="egg-img"> 81% 
                  </span>
                   <span>예매율 16.7%</span>
                </div>
              </div>
            </div>
    `;
  });
  swiper[0].update();
};

reserveTab.addEventListener("click", () => {
  movieTab.className = "";
  reserveTab.className = "active";
  drawChartList(comingChartList);
});

movieTab.addEventListener("click", () => {
  reserveTab.className = "";
  movieTab.className = "active";
  drawChartList(miveChartList);
});

const chartSlide = document.querySelector("#chartSlide");
const comingChartList = [
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "개봉예정극장판",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
];
const miveChartList = [
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "범죄 도시4",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
  {
    src: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg",
    name: "극장판 하이큐!! 쓰러지지 않는 배구",
    egg: "99",
    rate: 34.3,
  },
];

drawChartList(miveChartList);
