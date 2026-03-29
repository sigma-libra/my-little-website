import React from "react";
import "./KeywordBubbles.css";

// All 11 positions (px from centre) — 9 hobby pads + 2 flowers, verified non-overlapping
const PAD_POSITIONS = [
  { x: -150, y:  -90 },  // 0
  { x:  -10, y: -105 },  // 1
  { x:  145, y:  -85 },  // 2
  { x: -200, y:   10 },  // 3
  { x:   25, y:   15 },  // 4
  { x:  185, y:    5 },  // 5
  { x: -125, y:  105 },  // 6
  { x:   50, y:  115 },  // 7
  { x:  165, y:  100 },  // 8
  { x:  -80, y:  -42 },  // 9  ← flower
  { x:  -55, y:   58 },  // 10 ← flower
];

function LilyPad({ keyword, index }) {
  const pos = PAD_POSITIONS[index] ?? { x: 0, y: 0 };
  return (
    <div
      className="lily-pad"
      style={{
        left: `calc(50% + ${pos.x}px)`,
        top:  `calc(50% + ${pos.y}px)`,
        animationDelay: `${(index * 0.65) % 4}s`,
      }}
    >
      {keyword}
    </div>
  );
}

function WaterLilyPad({ posIndex }) {
  const pos = PAD_POSITIONS[posIndex];
  const petals = 8;
  return (
    <div style={{
      position: "absolute",
      left: `calc(50% + ${pos.x}px)`,
      top:  `calc(50% + ${pos.y}px)`,
      transform: "translate(-50%, -50%)",
      width: 64,
      height: 64,
      animation: "float 4s ease-in-out infinite",
      animationDelay: `${(posIndex * 0.65) % 4}s`,
      zIndex: 2,
    }}>
      {/* Lily pad base */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 58,
        height: 42,
        borderRadius: "50%",
        background: "linear-gradient(145deg, rgb(138,173,138), rgb(103,156,103))",
        border: "2px solid rgba(255,255,255,0.35)",
        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
      }} />
      {/* Petals + centre, anchored together */}
      <div style={{ position: "absolute", bottom: 22, left: "50%" }}>
        {[...Array(petals)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: 10,
            height: 20,
            left: -5,
            top: -20,
            backgroundColor: i % 2 === 0 ? "#f2a8c0" : "#e8809e",
            borderRadius: "50% 50% 30% 30% / 80% 80% 20% 20%",
            transform: `rotate(${i * (360 / petals)}deg) translateY(-12px)`,
            transformOrigin: "50% 100%",
            boxShadow: "0 0 4px rgba(180,60,100,0.3)",
            opacity: 0.92,
          }} />
        ))}
        <div style={{
          position: "absolute",
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#f9e8b0",
          boxShadow: "0 0 5px rgba(220,180,60,0.5)",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }} />
      </div>
    </div>
  );
}

function Wave({ className }) {
  return (
    <svg
      className={className}
      width="160"
      height="30"
      viewBox="0 0 160 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 15 Q20 0 40 15 T80 15 T120 15 T160 15 V30 H0 Z"
        fill="rgba(255, 255, 255, 0.3)"
      />
    </svg>
  );
}

export default function Bubbles({ keywords }) {
  return (
    <div className="pond mx-4 my-4 border-2 border-white/40 rounded-lg shadow-lg" style={{ position: "relative" }}>
      <Wave className="wave wave1" />
      <Wave className="wave wave2" />
      <Wave className="wave wave3" />
      <div className="bubbles-container">
        {keywords.map((keyword, index) => (
          <LilyPad keyword={keyword} index={index} key={index} />
        ))}
        <WaterLilyPad posIndex={9} key="flower-0" />
        <WaterLilyPad posIndex={10} key="flower-1" />
      </div>
    </div>
  );
}
