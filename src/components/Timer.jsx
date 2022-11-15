import "../styles/Timer.css";

export function Timer() {
    return (
        <div className="timer-wrapper">
            <div className="gradient-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient
                            id="gradient-color"
                            gradientTransform="rotate(70)"
                        >
                            <stop offset="0%" stopColor="#161932" />
                            <stop offset="100%" stopColor="#2E325A" />
                        </linearGradient>
                    </defs>
                    <circle fill="#161932" r="45" cx="50" cy="50" />
                    <circle className="progress-bar" r="40" cx="50" cy="50" />
                </svg>
            </div>
            <div className="control-display-container">
                <span>00:00</span>
                <button onClick={() => {}} className="control">
                    start
                </button>
            </div>
        </div>
    );
}
