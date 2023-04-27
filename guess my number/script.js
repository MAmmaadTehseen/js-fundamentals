"use strict";
/*console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `correct Number`;

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

console.log((document.querySelector(`.guess`).value ));*/
let highScore = 0;
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20);
//document.querySelector(`.number`).textContent = secretNumber;

const compare = function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (score > 0) {
    if (!guess) {
      document.querySelector(`.message`).textContent = `No number`;
    } else if (guess === secretNumber) {
      document.querySelector(`.message`).textContent = `correct Number`;
      document.querySelector(`.number`).textContent = secretNumber;

      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.number`).style.width = `30rem`;
      if (score > highScore) {
        highScore = score;
        console.log(highScore);
        document.querySelector(`.highscore`).textContent = highScore;
      }
    } else if (guess > secretNumber) {
      document.querySelector(`.message`).textContent = `Too high`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(`.message`).textContent = `Too low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    }
  } else {
    document.querySelector(`.message`).textContent = `You lost`;
  }
};
document.querySelector(`.check`).addEventListener(`click`, compare);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) compare();
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  const secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector(`.number`).textContent = secretNumber;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
});
