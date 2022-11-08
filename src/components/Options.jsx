// Options.jsx

import "../styles/Options.css";

export function Options() {
    function selectedOption(option) {
        const selectorEl = document.getElementById("selector");
        switch (option) {
            case "pomodoro":
                selectorEl.style.marginLeft = "0%";
                break;
            case "short-break":
                selectorEl.style.marginLeft = "33.3%";
                break;
            case "long-break":
                selectorEl.style.marginLeft = "66.6%";
                break;
        }
        setTimeout(() => {
            selectorEl.textContent = option.replace("-", " ");
        }, 100);
    }

    return (
        <div className="options-wrapper">
            <ul className="options-container">
                <span id="selector">pomodoro</span>
                <li id="pomodoro" onClick={() => selectedOption("pomodoro")}>
                    pomodoro
                </li>
                <li
                    id="short-break"
                    onClick={() => selectedOption("short-break")}
                >
                    short break
                </li>
                <li
                    id="long-break"
                    onClick={() => selectedOption("long-break")}
                >
                    long break
                </li>
            </ul>
        </div>
    );
}
