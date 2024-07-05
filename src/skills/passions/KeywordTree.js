import React from "react";

function KeywordTree({ words }) {
    const nodes = words.map((word, index) => {
        const isEven = index % 2 === 0;
        const top = `${(index + 1) * 20}%`;
        const left = isEven ? "auto" : "0";
        const right = isEven ? "0" : "auto";
        const transform = isEven ? "rotate(20deg)" : "rotate(-20deg)";

        return (
            <div
                className={`absolute w-40 h-15 bg-green-200 text-black border-2 border-green-500 flex justify-center items-center text-center p-2.5 transform ${isEven ? 'right-0' : 'left-0'}`}
                style={{ top, left, right, transform }}
                key={index}
            >
                {word}
            </div>
        );
    });

    return (
        <div className="relative flex items-center h-[60vh]">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 bg-brown h-full"></div>
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col justify-center">
                {nodes}
            </div>
        </div>
    );
}

export default KeywordTree;
