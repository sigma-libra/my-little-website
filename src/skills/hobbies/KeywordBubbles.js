import React from "react";
import "./KeywordBubbles.css";

function Bubble({ keyword, index, total }) {
  const radius = 150; // keep original spacing
  const angle = (index / total) * 2 * Math.PI;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const style = {
    position: "absolute",
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: `translate(-50%, -50%)`,
  };

  return (
    <div className="bubble" style={style}>
      <span>{keyword}</span>
    </div>
  );
}

// Wave SVG component
function Wave({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width="160"
      height="30"
      viewBox="0 0 160 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 15 Q20 0 40 15 T80 15 T120 15 T160 15 V30 H0 Z"
        fill="rgba(255, 255, 255, 0.4)"
      />
    </svg>
  );
}



export default function Bubbles({ keywords }) {
  return (
    <div className="bg-lakeGrey mx-4 my-4 p-4 border-2 border-darkGrey rounded-xl shadow-lg" style={{ position: "relative" }}>
      <Wave className="wave wave1" />
      <Wave className="wave wave2" />
      <Wave className="wave wave3" />
      <div className="bubbles-container">
        {keywords.map((keyword, index) => (
          <Bubble
            keyword={keyword}
            index={index}
            total={keywords.length}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
