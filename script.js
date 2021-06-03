'use strict';

window.onload = function () {
    player0El.classList.add('player--active');
}

// Selecting elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


//Starting condititons
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        // Player0El contains in class list player--active, if toggled then removed and if not found ad player1El then added.
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        activePlayer = activePlayer === 0 ? 1 : 0;
}


//User rolls dice functionality
btnRoll.addEventListener('click', function () {
    //1.Generating a random dice roll
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)
    //2.Display the dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
    //3.Check for rolled 1: if true
    if(dice !== 1) {
        //add the dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //switch to the next player
        //currentScore += dice;
        switchPlayer()
    }
})

btnHold.addEventListener('click', function(){

    //1. add curent score to the active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. check player's score >= 100
    //3. Switch to the next player
    switchPlayer()
})