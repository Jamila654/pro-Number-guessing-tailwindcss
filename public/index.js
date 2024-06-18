document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 5;

    const userInput = document.getElementById('userInput');
    const checkButton = document.getElementById('checkButton');
    const messageArea = document.getElementById('message');
    const attemptsArea = document.getElementById('attempts');

    checkButton.addEventListener('click', function() {
        const userGuess = parseInt(userInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            showMessage('error', 'Error: Please enter a number between 1 and 100.');
        } else {
            attemptsLeft--;
            attemptsArea.textContent = `You have ${attemptsLeft} ${attemptsLeft === 1 ? 'attempt' : 'attempts'} left.`;

            if (userGuess === randomNumber) {
                showMessage('success', 'Congratulations! You guessed the correct number.');
                disableInputAndButton();
            } else {
                if (userGuess > 50) {
                    showMessage('high', 'Your number is too high.');
                } else {
                    showMessage('low', 'Your number is too low.');
                }

                if (attemptsLeft === 0) {
                    showMessage('error', 'Sorry, you have run out of attempts.');
                    disableInputAndButton();
                }
            }
        }

        userInput.value = '';
    });

    function showMessage(type, msg) {
        messageArea.textContent = msg;
        messageArea.className = '';
    }

    function disableInputAndButton() {
        userInput.disabled = true;
        checkButton.disabled = true;
    }
});
