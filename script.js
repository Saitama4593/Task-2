let time = 0;
let running = false;
let interval;
let lapCount = 1;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").innerText = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    running = !running;
}

function updateTime() {
    time++;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timeDisplay").innerText = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function reset() {
    clearInterval(interval);
    time = 0;
    running = false;
    document.getElementById("timeDisplay").innerText = "00:00";
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}

function recordLap() {
    if (running) {
        let lapTime = document.getElementById("timeDisplay").innerText;
        let lapEntry = document.createElement("div");
        lapEntry.innerText = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapEntry);
        lapCount++;
    }
}
