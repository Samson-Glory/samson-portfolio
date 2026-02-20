import React from "react";
import "./PixelBackground.css";

export default function BackgroundCanvas() {
  return (
    <div className="scene-container">
      <object
        type="image/svg+xml"
        data="/scene.svg"
        className="scene-svg"
        aria-hidden="true"
      />
    </div>
  );
}
