'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

function randomNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}

const scores = [0, 0];
let playing = true;
let dice = randomNumber();
let currentScore, activePlayer;
currentScore = activePlayer = 0;
score0El.textContent = score1El.textContent = 0;