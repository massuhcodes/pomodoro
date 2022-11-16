// utilities.js

import checkmark from "../assets/checkmark.svg";

export function closePomodoroSettings() {
    const overlayContainerEl = document.getElementById("overlay-container");
    const overlayContainerElHeight = parseFloat(
        getComputedStyle(overlayContainerEl).height
    );
    const overlayWrapperEl = document.getElementById("overlay-wrapper");
    const translation =
        overlayContainerElHeight > window.innerHeight
            ? overlayContainerElHeight
            : window.innerHeight;
    overlayContainerEl.style.transform = `translateY(${translation}px)`;
    setTimeout(() => {
        overlayWrapperEl.style.opacity = "0";
        setTimeout(() => {
            overlayWrapperEl.style.visibility = "hidden";
        }, 750);
    }, 100);
}

export function openPomodoroSettings() {
    const overlayContainerEl = document.getElementById("overlay-container");
    const overlayWrapperEl = document.getElementById("overlay-wrapper");
    overlayWrapperEl.style.visibility = "visible";
    setTimeout(() => {
        overlayWrapperEl.style.opacity = "1";
        setTimeout(() => {
            overlayContainerEl.style.transform = `translateY(0px)`;
        }, 100);
    }, 100);
}

export function updateDuration(action, setter) {
    setter((prevDuration) => {
        if (action === "decrement") {
            const updatedDuration = prevDuration - 1;
            return updatedDuration > 0 ? updatedDuration : prevDuration;
        }
        return prevDuration + 1;
    });
}

let intervalDisplay;
export function executeMode(mode, originalSeconds) {
    const displayEl = document.getElementById("display");
    const controlEl = document.getElementById("control");
    const progressBarEl = document.getElementById("progress-bar");

    if (mode === "start") {
        controlEl.textContent = "pause";
        progressBarEl.style.strokeDasharray = "251";
        progressBarEl.style.animation = `anim ${originalSeconds}s linear forwards`;
        intervalDisplay = setInterval(function () {
            let [mins, seconds] = displayEl.textContent.split(":");
            if (mins !== "0" && seconds === "00") {
                mins = `${parseInt(mins) - 1}`;
                seconds = String(59);
                displayEl.textContent = `${mins}:${seconds}`;
            } else if (seconds === "01") {
                progressBarEl.style.visibility = "hidden";
                displayEl.textContent = "0:00";
            } else if (mins === "0" && seconds === "00") {
                setTimeout(() => {
                    progressBarEl.style.visibility = "visible";
                    progressBarEl.style.animation = "none";
                    progressBarEl.style.strokeDashoffset = "0";
                    controlEl.textContent = "start";
                    displayEl.textContent = `${originalSeconds / 60}:00`;
                }, 2000);
                clearInterval(intervalDisplay);
            } else {
                const proposedSeconds = `${parseInt(seconds) - 1}`;
                seconds =
                    proposedSeconds.length === 1
                        ? `0${proposedSeconds}`
                        : `${proposedSeconds}`;

                displayEl.textContent = `${mins}:${seconds}`;
            }
        }, 1000);
    } else if (mode === "pause") {
        controlEl.textContent = "start";
    } else if (mode === "reset") {
        controlEl.textContent = "start";
        progressBarEl.style.animation = "none";
        progressBarEl.style.strokeDashoffset = "0";
        clearInterval(intervalDisplay);
    }
}
