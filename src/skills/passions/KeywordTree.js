import React from "react";
import "./KeywordTree.css";

function KeywordTree({ words, direction }) {
    const nodes = words.map((word, index) => {
        const isEven = index % 2 === 0;
        const top = `${(index + 1) * 20}%`;
        const left = isEven ? "auto" : "0";
        const right = isEven ? "0" : "auto";
        const transform = isEven
            ? "rotate(10deg)"
            : "rotate(-10deg)";

        return (
            <div
                className="word-tree__node"
                style={{ top, left, right, transform }}
                key={index}
            >
                {word}
            </div>
        );
    });

    return (
        <div className="word-tree">
            <div className="word-tree__line"></div>
            <div className="word-tree__nodes">{nodes}</div>
        </div>
    );
}

export default KeywordTree;
