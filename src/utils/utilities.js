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

export function updateTypeDuration(type, action) {
    const typeDurationEl = document.getElementById(`${type}-duration`);
    const amount =
        parseInt(typeDurationEl.textContent) +
        (action === "increment" ? 1 : -1);
    if (amount > 0) typeDurationEl.textContent = amount;
}

export function updateTypeChoice(type, choice) {
    const typeChoice = document.getElementById(`${type}-${choice}`);
    // reset everything
    [1, 2, 3].map((index) => {
        const typeChoice = document.getElementById(`${type}-${index}`);
        if (type === "font") {
            typeChoice.style.backgroundColor = "#EFF1FA";
            typeChoice.style.color = "#1E213F";
        } else typeChoice.innerHTML = "";
    });
    // modify selected
    if (type === "font") {
        typeChoice.style.backgroundColor = "#161932";
        typeChoice.style.color = "#fff";
    } else typeChoice.innerHTML = `<img src=${checkmark} />`;
}
