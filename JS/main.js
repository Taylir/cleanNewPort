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
    modalId: "web-1",
    modal: `<div class="modal" id="web-1" data-animation="slideInOutTop">
    <div class="modal-dialog">
      <header class="modal-header">
        <h3>Web Project 1</h3>
        <i class="fas fa-times" data-close></i>
      </header>
      <div class="modal-body">
        <div class="img-wrapper">
          <img
            src="./assets/images/portfolio-1.jpg"
            alt="portfolio-1 icon"
          />
        </div>
        <div class="text-wrapper">
          <p><strong>My First Awesome Website</strong></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
            aperiam. Inventore hic consequuntur porro et?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime, minima!
          </p>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    type: "web",
    html: `<div class="portfolio-card" data-open="web-2">
      <div class="card-body">
        <img src="./assets/images/portfolio-2.jpg" alt="Portfolio Icon" />
        <a href="#" class="card-popup-box">
          <div>Web Development</div>
          <h3>Eating Website</h3>
        </a>
      </div>
    </div>`,
    modalId: "web-2",
    modal: `<div class="modal" id="web-2" data-animation="slideInOutTop">
    <div class="modal-dialog">
      <header class="modal-header">
        <h3>Web Project 2</h3>
        <i class="fas fa-times" data-close></i>
      </header>
      <div class="modal-body">
        <div class="img-wrapper">
          <img
            src="./assets/images/portfolio-2.jpg"
            alt="portfolio-1 icon"
          />
        </div>
        <div class="text-wrapper">
          <p><strong>My First Awesome Website</strong></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
            aperiam. Inventore hic consequuntur porro et?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime, minima!
          </p>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    type: "web",
    html: `<div class="portfolio-card" data-open="web-3">
    <div class="card-body">
      <img src="./assets/images/portfolio-3.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>Web Development</div>
        <h3>Food Website</h3>
      </a>
    </div>
  </div>`,
    modalId: "web-3",
    modal: `<div class="modal" id="web-3" data-animation="slideInOutTop">
    <div class="modal-dialog">
      <header class="modal-header">
        <h3>Web Project 3</h3>
        <i class="fas fa-times" data-close></i>
      </header>
      <div class="modal-body">
        <div class="img-wrapper">
          <img
            src="./assets/images/portfolio-3.jpg"
            alt="portfolio-1 icon"
          />
        </div>
        <div class="text-wrapper">
          <p><strong>My First Awesome Website</strong></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
            aperiam. Inventore hic consequuntur porro et?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime, minima!
          </p>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    type: "ui",
    html: `<div class="portfolio-card" data-open="ui-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-4.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>UI Design</div>
        <h3>Cool Design</h3>
      </a>
    </div>
  </div>`,
    modalId: "ui-1",
    modal: `<div class="modal" id="ui-1" data-animation="slideInOutTop">
  <div class="modal-dialog">
    <header class="modal-header">
      <h3>UI 1</h3>
      <i class="fas fa-times" data-close></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img
          src="./assets/images/portfolio-4.jpg"
          alt="portfolio-1 icon"
        />
      </div>
      <div class="text-wrapper">
        <p><strong>My First Awesome Website</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          aperiam. Inventore hic consequuntur porro et?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, minima!
        </p>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    type: "ui",
    html: `<div class="portfolio-card" data-open="ui-2">
    <div class="card-body">
      <img src="./assets/images/portfolio-5.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>UI Design</div>
        <h3>Super cool design</h3>
      </a>
    </div>
  </div>`,
    modalId: "ui-2",
    modal: `<div class="modal" id="ui-2" data-animation="slideInOutTop">
  <div class="modal-dialog">
    <header class="modal-header">
      <h3>UI 2</h3>
      <i class="fas fa-times" data-close></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img
          src="./assets/images/portfolio-5.jpg"
          alt="portfolio-1 icon"
        />
      </div>
      <div class="text-wrapper">
        <p><strong>My First Awesome Website</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          aperiam. Inventore hic consequuntur porro et?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, minima!
        </p>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="app-1">
    <div class="card-body">
      <img src="./assets/images/portfolio-6.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Money App</h3>
      </a>
    </div>
  </div>`,
    modalId: "app-1",
    modal: `<div class="modal" id="app-1" data-animation="slideInOutTop">
  <div class="modal-dialog">
    <header class="modal-header">
      <h3>App Project 1</h3>
      <i class="fas fa-times" data-close></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img
          src="./assets/images/portfolio-6.jpg"
          alt="portfolio-1 icon"
        />
      </div>
      <div class="text-wrapper">
        <p><strong>My First Awesome Website</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          aperiam. Inventore hic consequuntur porro et?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, minima!
        </p>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="app-2">
    <div class="card-body">
      <img src="./assets/images/portfolio-7.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Food App</h3>
      </a>
    </div>
  </div>`,
    modalId: "app-2",
    modal: `<div class="modal" id="app-2" data-animation="slideInOutTop">
  <div class="modal-dialog">
    <header class="modal-header">
      <h3>App Project 2</h3>
      <i class="fas fa-times" data-close></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img
          src="./assets/images/portfolio-7.jpg"
          alt="portfolio-1 icon"
        />
      </div>
      <div class="text-wrapper">
        <p><strong>My First Awesome Website</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          aperiam. Inventore hic consequuntur porro et?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, minima!
        </p>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    type: "app",
    html: `<div class="portfolio-card" data-open="app-3">
    <div class="card-body">
      <img src="./assets/images/portfolio-8.jpg" alt="Portfolio Icon" />
      <a href="#" class="card-popup-box">
        <div>App Development</div>
        <h3>Awesome App</h3>
      </a>
    </div>
  </div>`,
    modalId: "app-3",
    modal: `<div class="modal" id="app-3" data-animation="slideInOutTop">
  <div class="modal-dialog">
    <header class="modal-header">
      <h3>App Project 3</h3>
      <i class="fas fa-times" data-close></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img
          src="./assets/images/portfolio-8.jpg"
          alt="portfolio-1 icon"
        />
      </div>
      <div class="text-wrapper">
        <p><strong>My First Awesome Website</strong></p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          aperiam. Inventore hic consequuntur porro et?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, minima!
        </p>
      </div>
    </div>
  </div>
</div>`,
  },
];

//Theme Vars
const dataTheme = "data-theme";
const isVisable = "is-visable";
const root = document.documentElement;
const chevronTab = document.querySelector(".theme-tab");
const switcher = document.querySelectorAll(".switcher-btn");
const currentTheme = localStorage.getItem("theme");

//Modal vars
const modalHolder = document.querySelector(".modal__holder");
const portGrid = document.querySelector(".portfolio-grid");
workModals.forEach((card) => (portGrid.innerHTML += card.html));
const openModal = document.querySelectorAll("[data-open]");

function closeOpenModal() {
  const closeModal = document.querySelectorAll("[data-close]");
  for (const elm of closeModal) {
    elm.addEventListener("click", () => {
      elm.closest(".modal, .full-site__modal").classList.remove(isVisable);
    });
  }
}

function openModalListener(elm) {
  elm.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisable);
  });
}

function fullSiteModal() {
  for (const elm of openModal) {
    openModalListener(elm);
    closeOpenModal();
  }
}

function portModals() {
  const activeModals = document.querySelectorAll(".portfolio-card");
  for (const modal of activeModals) {
    modal.addEventListener("click", (e) => {
      const modalWant = e.target.parentElement.parentElement.dataset.open;
      for (const modalPopup of workModals) {
        if (modalPopup.modalId === modalWant) {
          modalHolder.innerHTML = modalPopup.modal;
          document.querySelector(".modal").classList.add(isVisable);
          closeOpenModal();
        }
      }
    });
  }
}

// Port Vars
const filterLink = document.querySelectorAll("[data-filter]");
const portfolioItems = document.querySelectorAll("[data-item]");
const searchBox = document.querySelector("#search");

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (currentTheme === "dark") {
    switcher[1].classList.add("active");
  } else {
    switcher[0].classList.add("active");
  }
}

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${"active"}`)) {
    document
      .querySelector(`${selector}.${"active"}`)
      .classList.remove("active");
  }
  elm.classList.add("active");
};

const setTheme = (val) => {
  if (val === "dark") {
    root.setAttribute(dataTheme, "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute(dataTheme, "light");
    localStorage.setItem("theme", "light");
  }
};

chevronTab.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  tab.classList.toggle("theme-open");
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(elm, ".switcher-btn");
    setTheme(toggle);
  });
}

// Portfolio

for (const link of filterLink) {
  link.addEventListener("click", function () {
    portGrid.innerHTML = "";
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    workModals.forEach((card) => {
      if (card.type == filter) {
        portGrid.innerHTML += card.html;
        portModals();
      }
      if (filter == "all") {
        portGrid.innerHTML += card.html;
        portModals();
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
      portModals();
    }
    if (e == "") {
      portGrid.innerHTML += card.html;
      portModals();
    }
  });
});

//Modals

portModals();
fullSiteModal();

//Closes modal on background click
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visable")) {
    document.querySelector(".modal.is-visable").classList.remove(isVisable);
  }
});

//closes modal with esc
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visable").classList.remove(isVisable);
  }
});
