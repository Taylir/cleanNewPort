const workModals = [
  {
    type: "web",
    html: `<div class="portfolio-card" data-open="web-1">
      <div class="card-body">
        <img src="./assets/images/portfolio-1.jpg" alt="Portfolio Icon" />
        <a href="#" class="card-popup-box">
          <div>Web Development</div>
          <h3>Skate Website</h3>
        </a>
      </div>
    </div>`,
  },
  {
    type: "web",
    html: `<div class="portfolio-card" data-open="web-1">
      <div class="card-body">
        <img src="./assets/images/portfolio-2.jpg" alt="Portfolio Icon" />
        <a href="#" class="card-popup-box">
          <div>Web Development</div>
          <h3>Eating Website</h3>
        </a>
      </div>
    </div>`,
  },
  {
    type: "web",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-3.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>Web Development</div>
        <h3>Food Website</h3>
      </a>
    </div>
  </div>`,
  },
  {
    type: "ui",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-4.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>UI Design</div>
        <h3>Cool Design</h3>
      </a>
    </div>
  </div>`,
  },
  {
    type: "ui",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-5.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>UI Design</div>
        <h3>Super cool design</h3>
      </a>
    </div>
  </div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-6.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Money App</h3>
      </a>
    </div>
  </div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-7.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Food App</h3>
      </a>
    </div>
  </div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="web-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-8.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Awesome App</h3>
      </a>
    </div>
  </div>`,
  },
];

const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "theme-open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisable = "is-visable";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

//Theme
const chevronTab = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`)) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

chevronTab.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  tab.classList.toggle(open);
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

// Portfolio
const portGrid = document.querySelector(".portfolio-grid");
workModals.forEach((card) => (portGrid.innerHTML += card.html));

const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

for (const link of filterLink) {
  link.addEventListener("click", function () {
    portGrid.innerHTML = "";
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    workModals.forEach((card) => {
      if (card.type == filter) {
        portGrid.innerHTML += card.html;
      }
      if (filter == "all") {
        portGrid.innerHTML += card.html;
      }
    });
  });
}

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portGrid.innerHTML = "";
  workModals.forEach((card) => {
    if (card.type.includes(searchInput)) {
      portGrid.innerHTML += card.html;
    }
    if (e == "") {
      portGrid.innerHTML += card.html;
    }
  });
});

//Modals
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

for (const elm of openModal) {
  elm.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisable);
    closeOpenModal();
  });
}

function closeOpenModal() {
  for (const elm of closeModal) {
    elm.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisable
      );
    });
  }
}

//modal

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visable")) {
    document.querySelector(".modal.is-visable").classList.remove(isVisable);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visable").classList.remove(isVisable);
  }
});
