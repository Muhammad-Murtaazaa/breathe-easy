import React from "react";
import SoundToggle from "./SoundToggle.jsx";
import { motion } from "framer-motion";

export default function Controls({
  duration, setDuration,
  isRunning, setIsRunning,
  playSound, setPlaySound
}) {
  return (
    <motion.div
      className="controls"
      initial={{ opacity: 0, y: 19 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, type: "spring", stiffness: 120 }}
    >
      <label style={{
        fontWeight: 700,
        color: "#ade1fd",
        fontFamily: "'Manrope',sans-serif",
        fontSize: 15.5,
        marginBottom: 0,
        marginTop: 0
      }}>
        <span style={{marginRight:5}}>Session</span>
        <input
          type="range"
          min="1" max="10"
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
          style={{
            accentColor: "#67c9fa",
            marginRight: 4,
            width: 105
          }}
        />
        <span style={{
          padding: "5px 13px",
          background: "rgba(28,128,234,0.13)",
          borderRadius: "10px",
          boxShadow: "0 1.5px 7px #21d8ff28",
          color: "#6dc7ff",
          fontWeight: 700,
          fontFamily: "Roboto, monospace",
          letterSpacing: 1.2
        }}>{duration} min</span>
      </label>
      <motion.button
        onClick={() => setIsRunning(!isRunning)}
        type="button"
        style={{
          padding: "0.82rem 2.44rem",
          fontWeight: 900,
          borderRadius: "2.9em",
          background: isRunning
            ? "linear-gradient(97deg,#1376f5 46%,#2dfaff 112%)"
            : "linear-gradient(92deg,#73e4ff 0%,#257af6 99%)",
          color: "#1b284d",
          fontSize: "1.17rem",
          boxShadow: "0 2px 20px #39b7ff40,0 1.5px 13px #1429603c",
          border: "none",
          outline: "none",
          cursor: "pointer",
          margin: "0 0.8rem 0 0.6rem",
          letterSpacing: 0.08,
          textShadow: "0px 2px 7px #73e4ff22,0 3px 18px #73e4ff11"
        }}
        whileTap={{ scale: 0.935, rotate: 3 }}
        whileHover={{
          scale: 1.07,
          background: "linear-gradient(92deg,#24c0ff 0%,#88e4f7 124%)",
          color: "#0b2256"
        }}
      >
        {isRunning ? "Pause" : "Start Session"}
      </motion.button>
      <SoundToggle enabled={playSound} onToggle={setPlaySound} />
    </motion.div>
  );
}
