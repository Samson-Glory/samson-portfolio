import React from "react";
import "./PixelBackground.css";

const BackgroundCanvas = React.memo(() => {
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

        {/* Stars */}
        <g className="stars-far">
          <circle cx="120" cy="90" r="1" fill="url(#starCore)" />
          <circle cx="620" cy="80" r="1.1" fill="url(#starCore)" />
          <circle cx="1780" cy="100" r="0.8" fill="url(#starCore)" />
        </g>

        <g className="stars-mid">
          <circle cx="150" cy="400" r="2" fill="url(#starCore)" />
          <circle cx="1320" cy="420" r="2.2" fill="url(#starCore)" />
        </g>

        {/* Snow */}
        <g className="snow-back">
          <circle cx="200" cy="0" r="3" fill="#cfe9ff" />
          <circle cx="1000" cy="50" r="3.5" fill="#cfe9ff" />
        </g>

        <g className="snow-front">
          <circle cx="300" cy="0" r="5" fill="#ffffff" />
          <circle cx="1200" cy="50" r="5" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
});

export default BackgroundCanvas;
