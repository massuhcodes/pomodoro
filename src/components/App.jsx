import { useState } from "react";
import { Title } from "./Title";
import { Options } from "./Options";
import { Timer } from "./Timer";
import { Settings } from "./Settings";
import "../styles/App.css";

export function App() {
    return (
        <div id="app" className="app-container">
            <Title />
            <Options />
            <Timer />
            <Settings />
        </div>
    );
}
