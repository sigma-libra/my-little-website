import React from "react";
import "./KeywordBubbles.css"; // import CSS file for bubble styling

function Bubble({ keyword, index, total }) {
  const radius = 150;
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



export default function Bubbles({ keywords }) {
  return (
    <div className="bg-lakeGrey mx-4 my-4 p-4 border-2 border-darkGrey">
      <div className="bubbles-container">
        {keywords.map((keyword, index) => (
          <Bubble keyword={keyword} index={index} total={keywords.length} key={index} />
        ))}
      </div>
    </div>
  );
}
