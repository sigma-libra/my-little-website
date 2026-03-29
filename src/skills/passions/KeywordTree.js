import React from "react";

// Illustration colors:
// - Sky: dustyRose → warm sunset horizon → cactusGreen grass
// - Petals: roseDark (#8B3252) — matches site accent
// - Leaves: cactusGreen → mossGreen — matches site green palette
// - Trunk: natural brown (it's a tree)
// - Sun: setting sun at base of trunk, behind everything (zIndex 0)

function Flower({ style }) {
  return (
    <div style={{ position: "absolute", width: 30, height: 40, ...style }}>
      {/* Stem — mossGreen */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 4,
          height: 25,
          backgroundColor: "rgb(103, 156, 103)",
          transform: "translateX(-50%)",
          borderRadius: 2,
          boxShadow: "0 0 4px #151e19",
        }}
      />
      {/* Petals — roseDark */}
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
          const angle = (i * 72) - 36;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 12,
                height: 20,
                backgroundColor: "#8B3252",
                borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                transform: `rotate(${angle}deg) translateY(-8px)`,
                boxShadow: "0 0 6px #5c1e35",
              }}
            />
          );
        })}
        {/* Center — warmIvory */}
        <div
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#f2ede6",
            borderRadius: "50%",
            boxShadow: "0 0 6px #d4bfb0",
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
    const randomOffset = Math.random() * 3;
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
          top, left, right, transform,
          borderRadius: "70% / 70%",
          background: "linear-gradient(145deg, rgb(138, 173, 138), rgb(103, 156, 103))",
          border: "2px solid #151e19",
          boxShadow: `
            inset 3px 3px 6px rgb(160, 200, 160),
            inset -3px -3px 6px rgb(80, 130, 80),
            5px 5px 8px rgba(0, 0, 0, 0.3)
          `,
          color: "#151e19",
          fontWeight: "600",
          textShadow: "0 1px 1px rgba(255,255,255,0.4)",
          userSelect: "none",
        }}
      >
        {word}
      </div>
    );
  });

  const flowerPositions = [
    { left: "10%", bottom: 40 },
    { left: "25%", bottom: 35 },
    { left: "40%", bottom: 45 },
    { left: "60%", bottom: 38 },
    { left: "75%", bottom: 42 },
    { left: "85%", bottom: 37 },
  ];

  return (
    <div className="mx-4 my-4 border-2 border-white/40 rounded-lg shadow-lg overflow-hidden">
      <div
        className="relative flex items-center h-[60vh] w-full"
        style={{
          background: "linear-gradient(to bottom, #f0dada 40%, #f4c4a0 62%, rgb(138,173,138) 74%, rgb(103,156,103) 100%)",
        }}
      >
        {/* Setting sun — semicircle resting on the grass horizon (zIndex 0) */}
        <div
          style={{
            position: "absolute",
            bottom: "26%", /* aligns flat base with sky/grass boundary at 74% from top */
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 60,
            borderRadius: "60px 60px 0 0",
            /* gradient radiates from base center (the "full circle" center) */
            background: "radial-gradient(ellipse at 50% 100%, #f9d97a 0%, #f4a044 55%, #e8764a 100%)",
            boxShadow: "0 0 50px 20px rgba(244, 160, 68, 0.5), 0 0 100px 40px rgba(248, 200, 100, 0.25)",
            zIndex: 0,
          }}
        />

        {/* Leaves — zIndex 1, above sun */}
        <div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col justify-center"
          style={{ zIndex: 1 }}
        >
          {nodes}
        </div>

        {/* Tree trunk — zIndex 2, above leaves */}
        <div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 rounded-full h-full"
          style={{
            width: "2rem",
            background: "linear-gradient(180deg, #a97450, #6b3f16 60%, #3d210a)",
            boxShadow: "inset 2px 0 8px #c49a6c, inset -2px 0 6px #4e2f10, 3px 3px 8px rgba(0,0,0,0.3)",
            zIndex: 2,
          }}
        />

        {/* Flowers — zIndex 3, above everything */}
        {flowerPositions.map((pos, i) => (
          <Flower key={i} style={{ left: pos.left, bottom: pos.bottom, zIndex: 3 }} />
        ))}
      </div>
    </div>
  );
}

export default KeywordTree;
