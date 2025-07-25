import React from "react";
import { motion } from "framer-motion";

const SESSIONS = [1,2,3,4,5,6,7,8,9,10];

export default function ClockSessionPicker({ duration, setDuration }) {
  const cx = 36, cy = 36, R = 28;
  return (
    <div style={{ margin: "6px 0", display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div style={{ color: "#a9e3fe", fontWeight: 800, fontSize: "1.11rem", marginBottom: 6 }}>Session</div>
      <svg width={72} height={72} style={{ display: "block" }}>
        <circle cx={cx} cy={cy} r={R} fill="rgba(33,98,171,0.2)" stroke="#9ee3fc" strokeWidth={1.2} />
        {SESSIONS.map((min, i) => {
          const angle = ((i - 2.5) / SESSIONS.length) * 2 * Math.PI;
          const x = cx + R * 0.7 * Math.cos(angle);
          const y = cy + R * 0.7 * Math.sin(angle);
          return (
            <motion.circle
              key={min}
              cx={x}
              cy={y}
              r={duration===min ? 8 : 5}
              fill={duration===min ? "#ffd963" : "#2998fc"}
              stroke="#fff"
              strokeWidth={duration===min?2.3:1.1}
              whileTap={{ scale: 1.18 }}
              onClick={() => setDuration(min)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>
      <motion.div style={{
        marginTop: 0,
        fontSize: "1.22em",
        fontWeight: 800,
        letterSpacing: "1.8px",
        color: "#76c3fa"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.14, type: "spring" }}
      >
        {duration} min
      </motion.div>
    </div>
  );
}
