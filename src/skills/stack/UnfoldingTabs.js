import React, { useState } from "react";

export default function UnfoldingTabs({ content }) {
  const [activeTabs, setActiveTabs] = useState([]);

  function toggleTab(index) {
    const isActive = activeTabs.includes(index);
    if (isActive) {
      setActiveTabs(activeTabs.filter((i) => i !== index));
    } else {
      setActiveTabs([...activeTabs, index]);
    }
  }

  return (
    <div className="w-full">
      {content.map((tab, index) => {
        const isActive = activeTabs.includes(index);
        return (
          <div key={index} className="select-none">
            <div
              onClick={() => toggleTab(index)}
              className={`flex justify-center p-2.5 m-2.5 cursor-pointer text-white w-[95%] rounded-lg
                transition-colors duration-300 ease-in-out
                ${isActive ? "bg-cactusGreen text-white shadow-sm" : "bg-darkGrey hover:bg-darkGrey/80 text-white/90"}`}
              style={{ userSelect: "none" }}
              aria-expanded={isActive}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleTab(index);
                }
              }}
            >
              {tab.title}
            </div>
            {/* grid-template-rows animation avoids animating height directly (no layout thrash) */}
            <div
              className={`grid transition-all duration-300 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div
                  className="bg-dustyRose text-darkGrey w-[95%] p-2.5 m-2.5 rounded-lg shadow-sm"
                  style={{ userSelect: "text" }}
                >
                  {tab.content.map((entry, i) => (
                    <p
                      key={i}
                      className="flex justify-center text-base tracking-wide"
                      style={{ lineHeight: 1.5 }}
                    >
                      {entry}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
