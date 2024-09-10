let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOeHi');
const startOver = document.querySelector('.resultparas');

let prevGuess = [];
let numGuess = 1;
const maxGuesses = 10; 

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === maxGuesses) {
            displayGuess(guess);
            displayMessage(`Game over. The correct number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed it right.');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('The number is too low.');
    } else if (guess > randomNumber) {
        displayMessage('The number is too high.');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${maxGuesses - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    submit.disabled = true;
    userInput.disabled = true;
    startOver.innerHTML = '<button id="startOver">Start New Game</button>';
    document.querySelector('#startOver').addEventListener('click', startNewGame);
}

function startNewGame() {
    numGuess = 1;
    prevGuess = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${maxGuesses}`;
    lowOrHigh.innerHTML = '';
    submit.disabled = false;
    userInput.disabled = false;
    userInput.value = '';
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    startOver.innerHTML = '';
}
