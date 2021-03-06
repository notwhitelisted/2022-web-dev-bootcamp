//setting querySelectors to variables
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

//setting variables to scores
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

//first event listener for player1 button
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

//first event listener to player2 button
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

//getting the winning score and then resetting
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value) //refers to specific object we're on
    reset();
})

//resets the game
resetButton.addEventListener('click', reset);

//reset function
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0; //.textContent does the reseting onscreen. 
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}