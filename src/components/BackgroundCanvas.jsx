import React from "react";
import "./PixelBackground.css";

const BackgroundCanvas = React.memo(({ simplified = false }) => {
  // Adjust number of elements based on simplified/mobile mode
  const starCount = simplified ? 20 : 80;
  const snowCount = simplified ? 5 : 20;

  // Generate random positions for stars
  const starsFar = Array.from({ length: starCount }, () => ({
    cx: Math.random() * 1920,
    cy: Math.random() * 1080,
    r: Math.random() * 1.5 + 0.5,
  }));

  const starsMid = Array.from({ length: starCount / 2 }, () => ({
    cx: Math.random() * 1920,
    cy: Math.random() * 1080,
    r: Math.random() * 2 + 0.5,
  }));

  // Generate snow positions
  const snowBack = Array.from({ length: snowCount }, () => ({
    cx: Math.random() * 1920,
    cy: Math.random() * 1080,
    r: Math.random() * 3 + 1,
  }));

  const snowFront = Array.from({ length: snowCount }, () => ({
    cx: Math.random() * 1920,
    cy: Math.random() * 1080,
    r: Math.random() * 3 + 1,
  }));

  return (
    <div className="sky-bg">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="sky-svg"
      >
        <defs>
          <radialGradient id="horizonGlow" cx="50%" cy="120%" r="80%">
            <stop offset="0%" stopColor="#1b2a4a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#000814" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="starCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9db3ff" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#horizonGlow)" />

        {/* Far Stars */}
        <g className="stars-far">
          {starsFar.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="url(#starCore)" />
          ))}
        </g>

        {/* Mid Stars */}
        <g className="stars-mid">
          {starsMid.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="url(#starCore)" />
          ))}
        </g>

        {/* Snow Back */}
        <g className="snow-back">
          {snowBack.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#cfe9ff" />
          ))}
        </g>

        {/* Snow Front */}
        <g className="snow-front">
          {snowFront.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#ffffff" />
          ))}
        </g>
      </svg>
    </div>
  );
});

export default BackgroundCanvas;
