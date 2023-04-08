import React from "react";
import "./KeywordBubbles.css"; // import CSS file for bubble styling

// Define a new component for the bubbles
function Bubble({ keyword }) {
  const style = {
    // Generate random position and transform values
    top: Math.random() * 80 + "%",
    left: Math.random() * 80 + "%",
    transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`,
  };

  return (
    <div className="bubble" style={style}>
      {keyword}
    </div>
  );
}

// Define the main component that renders the bubbles
function Bubbles({ keywords }) {
  return (
    <div className="bubbles-container">
      {keywords.map((keyword, index) => (
        <Bubble keyword={keyword} key={index} />
      ))}
    </div>
  );
}

export default Bubbles;
