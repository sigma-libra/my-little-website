import React from "react";

function Flower({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 30,
        height: 40,
        ...style,
      }}
    >
      {/* Stem */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 4,
          height: 25,
          backgroundColor: "#2e7d32",
          transform: "translateX(-50%)",
          borderRadius: 2,
          boxShadow: "0 0 4px #1b4d20",
        }}
      />
      {/* Flower petals */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 30,
          height: 30,
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[...Array(5)].map((_, i) => {
          const angle = (i * 72) - 36; // spread petals evenly
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 12,
                height: 20,
                backgroundColor: "#e53935",
                borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                transform: `rotate(${angle}deg) translateY(-8px)`,
                boxShadow: "0 0 6px #b71c1c",
              }}
            />
          );
        })}
        {/* Flower center */}
        <div
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#fdd835",
            borderRadius: "50%",
            boxShadow: "0 0 6px #fbc02d",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}

function KeywordTree({ words }) {
  const nodes = words.map((word, index) => {
    const isEven = index % 2 === 0;
    const randomOffset = Math.random() * 3; // 0–3%
    const top = `${(index + 1) * (10 + randomOffset)}%`;
    const left = isEven ? "auto" : "0";
    const right = isEven ? "0" : "auto";
    const transform = isEven ? "rotate(20deg)" : "rotate(-20deg)";

    return (
      <div
        key={index}
        className={`absolute w-40 h-15 flex justify-center items-center text-center p-2.5 transform ${
          isEven ? "right-0" : "left-0"
        }`}
        style={{
          top,
          left,
          right,
          transform,
          borderRadius: "70% / 70%",
          background: "linear-gradient(145deg, #a6d785, #7abb43)",
          border: "2px solid #4a7a1f",
          boxShadow: `
                        inset 3px 3px 6px #61932d, 
                        inset -3px -3px 6px #d1f7a1,
                        5px 5px 8px rgba(0, 0, 0, 0.3)
                    `,
          color: "#1f370d",
          fontWeight: "600",
          textShadow: "0 1px 1px rgba(255,255,255,0.4)",
          userSelect: "none",
        }}
      >
        {word}
      </div>
    );
  });

  // Positions for flowers scattered along bottom
  const flowerPositions = [
    { left: "10%", bottom: 40 },
    { left: "25%", bottom: 35 },
    { left: "40%", bottom: 45 },
    { left: "60%", bottom: 38 },
    { left: "75%", bottom: 42 },
    { left: "85%", bottom: 37 },
  ];

  return (
    <div
      className="relative flex items-center h-[60vh] w-full overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #87CEEB 80%, #87CEEB 10%, #8B4513 70%, #8B4513 100%)`, // sky to earth
      }}
    >
      {/* Cartoon sun top-right */}
      <svg
        className="absolute top-4 right-4"
        width="100"
        height="100"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 8px #FFD93B)" }}
      >
        <circle cx="32" cy="32" r="14" fill="#FFD93B" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x1 = 32 + Math.cos(angle) * 18;
          const y1 = 32 + Math.sin(angle) * 18;
          const x2 = 32 + Math.cos(angle) * 26;
          const y2 = 32 + Math.sin(angle) * 26;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FFD93B"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 4px #FFC107)" }}
            />
          );
        })}
      </svg>

      {/* Tree trunk */}
      <div
        className="absolute left-1/2 top-0 transform -translate-x-1/2 rounded-full h-full"
        style={{
          width: "2rem",
          background: `linear-gradient(180deg, #a97450, #6b3f16 60%, #3d210a)`,
          boxShadow:
            "inset 2px 0 8px #c49a6c, inset -2px 0 6px #4e2f10, 3px 3px 8px rgba(0,0,0,0.3)",
          zIndex: 2,
        }}
      ></div>

      {/* Leaves */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col justify-center">
        {nodes}
      </div>

      {/* Flowers along ground */}
      {flowerPositions.map((pos, i) => (
        <Flower key={i} style={{ left: pos.left, bottom: pos.bottom, zIndex: 3 }} />
      ))}
    </div>
  );
}

export default KeywordTree;