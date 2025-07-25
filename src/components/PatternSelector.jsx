import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PatternSelector({
  patterns,
  selected,
  setPattern,
  customSteps,
  setCustomSteps
}) {
  const handleCustomChange = (idx, field, value) => {
    const updated = [...customSteps];
    updated[idx][field] = field === "duration" ? Number(value) : value;
    setCustomSteps(updated);
  };
  const handleAddStep = () => {
    setCustomSteps([...customSteps, { label: "Exhale", duration: 4 }]);
  };
  const handleRemoveStep = () => {
    if (customSteps.length > 2) setCustomSteps(customSteps.slice(0, -1));
  };

  return (
    <motion.div
      className="pattern-selector"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, type: "spring", stiffness: 100 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0
      }}
    >
      <label style={{
        fontWeight: 700,
        color: "#81c7fa",
        letterSpacing: "0.07em",
        fontSize: 18,
        fontFamily: "'Manrope',sans-serif",
        marginBottom: 7
      }}>
        <span style={{ marginRight: 10 }}>Breath Pattern</span>
        <motion.select
          value={selected.name}
          onChange={e => setPattern(patterns.find(p => p.name === e.target.value))}
          style={{
            border: "none",
            background: "linear-gradient(90deg, #245ef7 60%, #7eeaff 95%)",
            color: "#fff",
            fontWeight: 600,
            fontFamily: "inherit",
            borderRadius: 10,
            fontSize: 16,
            padding: "7px 21px",
            boxShadow: "0 2px 13px #56acf478"
          }}
          whileFocus={{ scale: 1.03, boxShadow: "0 2px 19px #50b9fc58" }}
        >
          {patterns.map(p => (
            <option key={p.name}>{p.name}</option>
          ))}
        </motion.select>
      </label>
      <AnimatePresence>
        {selected.name === "Custom" && (
          <motion.div
            className="custom-pattern-fields"
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              gap: "0.18em",
              background: "rgba(25,90,160,0.13)",
              borderRadius: "0.95em",
              padding: "14px 13px 7px 13px",
              border: "1.4px solid #1a4d88aa"
            }}
            initial={{ opacity: 0, scale: 0.93, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18 }}
          >
            {customSteps.map((step, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <input
                  type="text"
                  value={step.label}
                  onChange={(e) => handleCustomChange(idx, "label", e.target.value)}
                  style={{
                    width: "8ch",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    borderRadius: 7,
                    border: "1.4px solid #90c3ff78",
                    background: "#18304a7c",
                    color: "#aad6ff",
                    marginRight: 6,
                    padding: "3px 9px"
                  }}
                />
                <input
                  type="number"
                  value={step.duration}
                  min="1"
                  max="20"
                  onChange={(e) => handleCustomChange(idx, "duration", e.target.value)}
                  style={{
                    width: "5ch",
                    borderRadius: 7,
                    background: "#143b6f6b",
                    border: "1.2px solid #1667ba56",
                    color: "#e1ecfc",
                    fontWeight: 700,
                    marginRight: 7,
                    padding: "3px 7px"
                  }}
                />
                <span style={{ color: "#bbdefc", fontSize: 13 }}>sec</span>
              </div>
            ))}
            <div style={{marginTop:5,display:"flex",gap:7}}>
              <button
                style={{
                  background: "linear-gradient(90deg,#27c2ff 50%,#1d48ba 100%)",
                  color: "#fff",
                  padding: "5px 16px",
                  borderRadius: 6,
                  border: "none",
                  fontWeight: 800,
                  fontFamily: "inherit",
                  fontSize: 15,
                  boxShadow: "0 1.5px 7px #27bfff34",
                  cursor:"pointer"
                }}
                onClick={handleAddStep}
                type="button"
              >+ Add Step</button>
              <button
                style={{
                  background: "#103663",
                  color: "#e3fcff",
                  padding: "5px 13px",
                  borderRadius: 7,
                  border: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: "inherit",
                  cursor:"pointer",
                  opacity: customSteps.length > 2 ? 1 : 0.5
                }}
                onClick={handleRemoveStep}
                type="button"
                disabled={customSteps.length <= 2}
              >Remove</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
