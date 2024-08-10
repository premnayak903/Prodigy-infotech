let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapArray = [];

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', function() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(tInterval);
    running = false;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = '00:00:00';
    lapArray = [];
    laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', function() {
    if (running) {
        const lapTime = display.innerHTML;
        lapArray.push(lapTime);
        displayLaps();
    }
});

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function displayLaps() {
    laps.innerHTML = '';
    lapArray.forEach((lap, index) => {
        const lapElement = document.createElement('div');
        lapElement.innerHTML = 'Lap ' + (index + 1) + ': ' + lap;
        laps.appendChild(lapElement);
    });
}
