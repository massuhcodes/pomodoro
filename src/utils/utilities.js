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

export function updateWithTimeSetter(action, setter) {
    setter((prevDuration) => {
        if (action === "decrement") {
            const updatedDuration = prevDuration - 1;
            return updatedDuration > 0 ? updatedDuration : prevDuration;
        }
        return prevDuration + 1;
    });
}
