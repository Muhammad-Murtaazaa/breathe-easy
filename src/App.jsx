import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import BreathingCircle from "./components/BreathingCircle.jsx";
import PatternCarousel from "./components/PatternCarousel.jsx";
import breathingPatterns from "./patterns";
import AuroraCanvasBackground from "./components/AuroraCanvasBackground";
import About from "./components/About.jsx";
import SupportUs from "./components/SupportUs.jsx";
import "./App.css";

const theme = {
  background: "#0e152c",
  color: "#eaf5fd",
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0; padding: 0;
    font-family: 'Manrope', 'Roboto', Arial, sans-serif;
    min-height: 100vh;
    transition: background 0.30s, color 0.28s;
  }
`;

export default function App() {
  const [patternIdx, setPatternIdx] = useState(0);
  const [customSteps, setCustomSteps] = useState([
    { label: "Inhale", duration: 4 },
    { label: "Exhale", duration: 4 }
  ]);
  const [duration, setDuration] = useState(4);
  const [isRunning, setIsRunning] = useState(false);

  const pattern = breathingPatterns[patternIdx];
  const effectiveSteps = pattern.name === "Custom" ? customSteps : pattern.steps;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuroraCanvasBackground />
      <Router>
        <div className="app-container">
          <div className="navbar-outer">
            <NavBar />
          </div>
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="glass-main-box vertical-glass">
                    <BreathingCircle
                      patternSteps={effectiveSteps}
                      isRunning={isRunning}
                      duration={duration}
                    />
                    <PatternCarousel
                      patterns={breathingPatterns}
                      selectedIdx={patternIdx}
                      setSelectedIdx={isRunning ? () => {} : setPatternIdx}
                      customSteps={customSteps}
                      setCustomSteps={isRunning ? () => {} : setCustomSteps}
                      disabled={isRunning}
                    />
                    <SimpleSessionPicker
                      duration={duration}
                      setDuration={setDuration}
                      disabled={isRunning}
                    />
                    <div className="cta-row">
                      <button
                        className={`start-cta${isRunning ? " running" : ""}`}
                        onClick={() => setIsRunning(!isRunning)}
                      >
                        {isRunning ? "Pause" : "Start Session"}
                      </button>
                    </div>
                  </div>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<SupportUs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function SimpleSessionPicker({ duration, setDuration, disabled }) {
  return (
    <div className="simple-session-picker">
      <label>
        <span style={{ color: "#90eaff", fontWeight: 700, fontSize: "1.08rem" }}>
          Session
        </span>
        <select
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
          disabled={disabled}
          style={{
            marginTop: 8,
            marginLeft: 12,
            fontWeight: "bold",
            fontFamily: "inherit",
            border: "1.3px solid #298bdf77",
            background: disabled ? "#192e46cc" : "#1c2e54cc",
            color: disabled ? "#8eb6db" : "#d3f2ff",
            borderRadius: 8,
            fontSize: "1.08em",
            padding: "7px 19px"
          }}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i+1} value={i+1}>{i+1} min</option>
          ))}
        </select>
      </label>
    </div>
  );
}
