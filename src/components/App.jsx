import { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import "../styles/App.css";

export function App() {
    return (
        <div className="app-container">
            <Header />
            <Main />
        </div>
    );
}
