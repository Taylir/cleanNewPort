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
      this.parentElement.parentElement.classList.remove(isVisable);
    });
  }
}
