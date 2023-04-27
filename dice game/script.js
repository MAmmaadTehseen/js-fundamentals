let name1 = document.querySelector(`#name--0`);
let name2 = document.querySelector(`#name--1`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const newbtn = document.querySelector(`.btn--new`);
const holdbtn = document.querySelector(`.btn--hold`);
const rollbtn = document.querySelector(`.btn--roll`);
let score = document.querySelectorAll(`.score`);

name1.textContent = prompt(`Enter your name:`, `ammad1`);
name2.textContent = prompt(`Enter your name:`, `ammad2`);

let current = document.querySelectorAll(`.current-score`);

let i = 0;
const suffle = function () {
  if (!player0.classList.contains(`player--active`)) {
    player0.classList.add(`player--active`);
    player1.classList.remove(`player--active`);
    i = 0;
  } else {
    i = 1;
    player1.classList.add(`player--active`);
    player0.classList.remove(`player--active`);
  }
  if (Number(score[0].textContent) >= 50) {
    alert(`${name1.textContent} Win`);
    newGame();
  } else if (Number(score[1].textContent) >= 50) {
    alert(`${name2.textContent} win`);
    newGame();
  }
};
let newGame = function () {
  for (let x = 0; x < 2; x++) {
    score[x].textContent = 0;
    current[x].textContent = 0;
  }
  if (!player0.classList.contains(`player--active`)) {
    suffle();
  }
};
console.log(score);
newbtn.addEventListener(`click`, newGame);

let dice = document.querySelector(`.dice`);

rollbtn.addEventListener(`click`, function () {
  let randomn = Math.trunc(Math.random() * 60) % 6;

  console.log(randomn);
  switch (randomn) {
    case 1:
      dice.src = `dice-1.png`;
      current[i].textContent = 0;
      suffle();
      break;

    case 2:
      dice.src = `dice-2.png`;
      current[i].textContent = Number(current[i].textContent) + 2;
      break;
    case 3:
      dice.src = `dice-3.png`;
      current[i].textContent = Number(current[i].textContent) + 3;

      break;
    case 4:
      dice.src = `dice-4.png`;
      current[i].textContent = Number(current[i].textContent) + 4;

      break;
    case 5:
      dice.src = `dice-5.png`;
      current[i].textContent = Number(current[i].textContent) + 5;

      break;
    case 6:
      dice.src = `dice-6.png`;
      current[i].textContent = Number(current[i].textContent) + 6;

      break;
  }
});

holdbtn.addEventListener(`click`, function () {
  score[i].textContent =
    Number(score[i].textContent) + Number(current[i].textContent);
  current[i].textContent = 0;
  suffle();
});
