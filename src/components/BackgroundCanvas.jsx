import { useEffect, useRef } from "react";

export default function NeonLinesBackground({ mode = "dark" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Colors based on mode
    const bgColor = mode === "dark" ? "#000" : "#f0f0f0"; // black or light gray
    const lineColor = mode === "dark" ? "rgba(0,255,0,0.2)" : "rgba(0,0,0,0.1)"; // neon green or subtle black

    // Create lines
    const numLines = 20;
    const lines = [];
    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 150 + Math.random() * 100,
        speed: 0.3 + Math.random() * 0.7,
        color: lineColor,
      });
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      lines.forEach((line) => {
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = mode === "dark" ? 4 : 0; // glow only in dark mode
        ctx.shadowColor = mode === "dark" ? "#0f0" : "transparent";

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        line.y += line.speed;
        if (line.y > canvas.height) line.y = -line.length;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
