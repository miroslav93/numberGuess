/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer in case of game over
- Let player choose to play again
*/

// Game values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector(".message");


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate input

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if win
    if (guess === winningNum){
        // Game over - won
        gameOver(true, `${winningNum} is correct. You win!`, 'green');
    } else {
        // Wrong number
        guessesLeft -= 1;

        // Check to see if there are guesses left 
        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game over, you lost! The correct number was ${winningNum}`);

        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = "red";

            // Clear input
            guessInput.value = '';

            // Tell user it is a wrong number
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left`);
        }
    }

});


    // Game over
    function gameOver(won, msg){
        let color;
        won === true ? color = "green" : color = "red";

                    // Disable input
                    guessInput.disabled = true;
                    // Change border color
                    guessInput.style.borderColor = color;
                    // Set message
                    setMessage(msg);
    }


    // Set message
    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
    }



