import React from "react";

export default function PatternCarousel({
  patterns,
  selectedIdx,
  setSelectedIdx,
  customSteps,
  setCustomSteps,
  disabled
}) {
  const handleNav = dir => {
    if (disabled) return;
    setSelectedIdx(prev => {
      const len = patterns.length;
      return (prev + dir + len) % len;
    });
  };
  const pattern = patterns[selectedIdx];

  return (
    <div className={`pattern-carousel${disabled ? " carousel-locked" : ""}`}>
      <button
        className="carousel-nav"
        disabled={disabled}
        aria-label="Previous pattern"
        onClick={() => handleNav(-1)}
      >
        <span aria-hidden="true" className="carousel-arrow">‹</span>
      </button>
      <div className={`pattern-card${disabled ? " frosted" : ""}`}>
        <div className="pattern-title">{pattern.name}</div>
        <div className="pattern-steps">
          {(pattern.custom
            ? customSteps
            : pattern.steps
          ).map((step, i) =>
            <span className="pattern-step" key={i}>
              {step.label}: <b>{step.duration}s</b>
              {i < (pattern.custom ? customSteps : pattern.steps).length - 1 && " • "}
            </span>
          )}
        </div>
        {pattern.custom && (
          <div className="pattern-custom-edit">
            {customSteps.map((step, idx) => (
              <div key={idx}>
                <input
                  type="text"
                  value={step.label}
                  onChange={e => {
                    if (disabled) return;
                    const updated = [...customSteps];
                    updated[idx].label = e.target.value;
                    setCustomSteps(updated);
                  }}
                  placeholder="Phase"
                  disabled={disabled}
                />
                <input
                  type="number"
                  value={step.duration}
                  min="1"
                  max="20"
                  onChange={e => {
                    if (disabled) return;
                    const updated = [...customSteps];
                    updated[idx].duration = Number(e.target.value);
                    setCustomSteps(updated);
                  }}
                  disabled={disabled}
                />
                s
              </div>
            ))}
            <div style={{ marginTop: 6 }}>
              <button
                disabled={disabled}
                onClick={() => !disabled && setCustomSteps([...customSteps, { label: "Hold", duration: 3 }])}>
                + Step
              </button>
              {customSteps.length > 2 && (
                <button
                  disabled={disabled}
                  style={{ marginLeft: 8 }}
                  onClick={() => !disabled && setCustomSteps(customSteps.slice(0, -1))}
                >
                  - Step
                </button>
              )}
            </div>
          </div>
        )}
        {disabled && (
          <div className="pattern-locked-overlay">
            Session running<br /><span style={{ fontSize: 12, opacity: .8 }}>Pause to edit patterns</span>
          </div>
        )}
      </div>
      <button
        className="carousel-nav"
        disabled={disabled}
        aria-label="Next pattern"
        onClick={() => handleNav(1)}
      >
        <span aria-hidden="true" className="carousel-arrow">›</span>
      </button>
    </div>
  );
}
