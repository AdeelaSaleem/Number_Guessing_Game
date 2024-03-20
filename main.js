let secretNumber;
let attempts = 0;
const maxAttempts = 10;

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');

  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  if (userGuess === secretNumber) {
    message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    disableInput();
  } else if (attempts === maxAttempts) {
    message.textContent = `Game Over! You've used all ${maxAttempts} attempts. The number was ${secretNumber}.`;
    disableInput();
  } else if (userGuess < secretNumber) {
    message.textContent = `Try again! The secret number is higher than ${userGuess}.`;
  } else {
    message.textContent = `Try again! The secret number is lower than ${userGuess}.`;
  }
}

function disableInput() {
  const guessInput = document.getElementById('guessInput');
  const submitButton = document.querySelector('button');

  guessInput.disabled = true;
  submitButton.disabled = true;
}

// Initialize the game when the page loads
window.onload = function () {
  generateSecretNumber();
};
