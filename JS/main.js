const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisable = "is-visable";

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
