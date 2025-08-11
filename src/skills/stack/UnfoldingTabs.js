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

  function DisplayContent({ index, selectedTab }) {
    return (
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeTabs.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeTabs.includes(index) && (
          <div
            className="bg-green-200 text-black w-[95%] p-2.5 m-2.5 rounded-lg shadow-md"
            style={{ userSelect: "text" }}
          >
            {selectedTab.content.map((entry, i) => (
              <p
                key={i}
                className="flex justify-center text-base tracking-wide"
                style={{ lineHeight: 1.5 }}
              >
                {entry}
              </p>
            ))}
          </div>
        )}
      </div>
    );
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
                ${isActive ? "bg-red-600 shadow-lg" : "bg-gray-700 hover:bg-gray-600"}`}
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
            <DisplayContent index={index} selectedTab={tab} />
          </div>
        );
      })}
    </div>
  );
}
