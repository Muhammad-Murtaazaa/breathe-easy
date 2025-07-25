import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PHASES = {
  Inhale: { scale: 1.13, color: "#52baff", bg: "rgba(30,72,125,0.74)" },
  Exhale: { scale: 0.93, color: "#1853a8", bg: "rgba(20,36,67,0.82)" },
  Hold:   { scale: 1,    color: "#2fcfd6", bg: "rgba(28,45,70,0.8)" },
};

export default function BreathingCircle({ patternSteps, isRunning, duration }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [sessionTime, setSessionTime] = useState(duration * 60);
  const [phase, setPhase] = useState(patternSteps[0]?.label ?? "Inhale");
  const [timeLeft, setTimeLeft] = useState(patternSteps[0]?.duration ?? 0);
  const phaseAnim = useAnimation();
  const intervalRef = useRef();

  useEffect(() => {
    phaseAnim.start({
      scale: PHASES[phase]?.scale || 1,
      background: PHASES[phase]?.bg,
      transition: { duration: 1, type: "spring", damping: 16 },
    });
  }, [phase, phaseAnim]);

  // FIX: Functional updates to guarantee in-sync
  useEffect(() => {
    if (!isRunning) {
      setStepIdx(0);
      setSessionTime(duration * 60);
      setPhase(patternSteps[0]?.label ?? "Inhale");
      setTimeLeft(patternSteps[0]?.duration ?? 0);
      clearInterval(intervalRef.current);
      return;
    }
    if (sessionTime <= 0) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 1) return prevTimeLeft - 1;
        // Next breathing phase
        setStepIdx(prevIdx => {
          const nextStep = (prevIdx + 1) % patternSteps.length;
          setPhase(patternSteps[nextStep]?.label ?? "Inhale");
          setTimeLeft(patternSteps[nextStep]?.duration ?? 0);
          return nextStep;
        });
        return 0;
      });
      setSessionTime(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isRunning, sessionTime, patternSteps, duration]);

  const prettyTime = `${String(Math.floor(sessionTime / 60)).padStart(2, "0")}:${String(sessionTime % 60).padStart(2, "0")}`;
  const progress = duration > 0 ? ((duration * 60 - sessionTime) / (duration * 60)) * 100 : 0;
  const currentStep = patternSteps[stepIdx] ?? { label: "", duration: 0 };

  return (
    <div className="breathing-circle-container">
      <motion.div
        className="breathing-circle"
        animate={phaseAnim}
        style={{
          width: 168, height: 168, borderRadius: "50%",
          background: PHASES[phase]?.bg,
          border: "2.5px solid #87b9fe66",
          boxShadow: "0 0 32px 12px #76cafd44, 0 2px 30px #4aa0e428",
          margin: "0 auto 0.52em auto", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}
      >
        <motion.span
          style={{
            color: PHASES[phase]?.color,
            fontWeight: 800, fontSize: "1.75rem", letterSpacing: 1.4,
            textShadow: "0 1px 16px #70bfff55",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={phase}
        >
          {currentStep.label}
        </motion.span>
      </motion.div>
      <div className="timer-container">
        <div className="timer-background"/>
        <span className="timer-text">{prettyTime}</span>
      </div>
      <div className="progress-bar" style={{
        width: 190, height: 10, background: "rgba(44,100,179,0.17)", borderRadius: 16, marginTop: 13,
        overflow: "hidden", boxShadow: "0 1.5px 10px #52c1fc26", position: "relative"
      }}>
        <motion.div
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={{
            height: 10, borderRadius: 16, background: "#78c6fdea",
            boxShadow: "0 0 13px #7ee8fa44", position: "absolute", left: 0, top: 0,
          }}
        />
      </div>
    </div>
  );
}
