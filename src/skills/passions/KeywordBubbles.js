import React from "react";
import "./KeywordBubbles.css";

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
      {keyword}
    </div>
  );
}



function Bubbles({ keywords }) {
  return (
    <div className="bubbles-container">
      {keywords.map((keyword, index) => (
        <Bubble keyword={keyword} index={index} total={keywords.length} key={index} />
      ))}
    </div>
  );
}



export default Bubbles;
