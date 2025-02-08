let timeLeft = 25 * 60;
let timer;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const gif = document.getElementById('gif');

const cuteGifIdle = "./img/6.gif"; 
const cuteGifRunning = "./img/4.gif"; 
const cuteGifFinished = "./img/2.gif"; 

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    gif.src = cuteGifRunning; 
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            gif.src = cuteGifFinished; 
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
    isRunning = false;
    gif.src = cuteGifIdle; 
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
