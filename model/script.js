'use strict';
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnOpenModal = document.querySelectorAll(`.show-modal`);

console.log(btnOpenModal);
const closeModel = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModel = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(`click`, openModel);
}
overlay.addEventListener(`click`, closeModel);
btnCloseModal.addEventListener(`click`, closeModel);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    if (!modal.classList.contains(`hidden`)) {
      closeModel();
    }
  }
  console.log(e.key);
});
