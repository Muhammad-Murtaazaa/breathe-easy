import React, { useRef, useEffect } from "react";

export default function AuroraCanvasBackground() {
  const canvasRef = useRef(null);
  const glassRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, time = 0;
    let mouseX = 0.5;
    const rays = 180;
    const colors = [
      [50, 130, 255],
      [70, 190, 255],
      [120, 220, 255],
      [180, 240, 255]
    ];

    function setCanvasSize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function noise(x, y, t) {
      return Math.sin(x * 0.01 + t * 0.3)
        + Math.cos(y * 0.01 + t * 0.2)
        + Math.sin((x + y) * 0.005 + t * 0.1);
    }

    function drawAurora() {
      requestAnimationFrame(drawAurora);
      time += 0.01;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(1, 9, 32, 0.1)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < rays; i++) {
        const x = (i / rays) * w;
        const offset = (mouseX - 0.5) * 200;
        const rawNoise = noise(x + offset, i, time);
        let n = Math.min(0.999999, Math.max(0, (rawNoise + 3) / 6));
        const y = n * h * 0.4;
        const height = (noise(x, i, time + 10) * 0.5 + 0.5) * h * 0.4;
        const colorIndex = Math.floor(n * colors.length);
        const color = colors[colorIndex];

        const grad = ctx.createLinearGradient(x, y, x, y + height);
        grad.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
        grad.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${n * 0.25})`);
        grad.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x - 6, y, 12, height);
      }
    }

    setCanvasSize();
    drawAurora();

    window.addEventListener("resize", setCanvasSize);

    function onMouseMove(e) {
      mouseX = e.clientX / window.innerWidth;
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // The glass overlay adds the frosted/lines effect
  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background: "#010920",
          pointerEvents: "none"
        }}
      />
      <div
        className="glass"
        ref={glassRef}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          top: 0,
          left: 0,
          zIndex: 1,
          backdropFilter: "blur(10px) brightness(1.1)",
          background: "repeating-linear-gradient(to right,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 6px)"
        }}
      />
    </>
  );
}
