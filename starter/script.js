'use strict';

const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
const curr0 = document.querySelector('#current--0');
const curr1 = document.querySelector('#current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
score0el.textContent = 0;
score1el.textContent = 0;

let flag = true;
diceel.classList.add('hidden');
const switch_player = function () {
  document.querySelector(`#current--${active_player}`).textContent = 0;
  if (active_player == 0) {
    active_player = 1;
  } else if (active_player == 1) {
    active_player = 0;
  }
  current_score = 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

let current_score = 0;
let active_player = 0;
const scores = [0, 0];
btnroll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (flag == true) {
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;
    if (dice != 1) {
      current_score += dice;
      document.querySelector(`#current--${active_player}`).textContent =
        current_score;
    } else {
      switch_player();
    }
  }
  // console.log(dice);
});
btnhold.addEventListener('click', function () {
  if (flag == true) {
    scores[active_player] += current_score;
    console.log('holdng');
    document.querySelector(`#score--${active_player}`).textContent =
      scores[active_player];
    console.log(scores[active_player]);

    if (scores[active_player] >= 50) {
      flag = false;
      diceel.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    } else {
      switch_player();
    }
  }
});

btnnew.addEventListener('click', function () {
  document
    .querySelector(`.player--${active_player}`)
    .classList.remove('player--winner');
  scores[active_player] = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  /*current_score = 0;
  document.querySelector(`#current--${active_player}`).textContent =
    current_score;*/

  switch_player();
  flag = true;
});
