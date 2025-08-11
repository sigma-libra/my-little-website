import React from "react";

export default function IconList({ listItems }) {
  const iconStyle = {
    marginRight: "8px",
    filter: "drop-shadow(1px 1px 1px rgba(0, 100, 0, 0.7))",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="bg-darkGrey mx-4 my-4 p-4 border-2 border-cactusGreen rounded-lg shadow-inner">
      <div className="flex flex-col mb-2.5">
        <ul className="list-none pl-2.5 pb-2.5">
          {listItems.map(([icon, item]) => (
            <li
              key={item}
              className="flex items-center pl-0 pb-2.5 text-2xl text-green-200 cursor-default select-none
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:text-green-500 hover:drop-shadow-[0_0_6px_rgba(130,255,120,0.8)]"
            >
              {icon &&
                React.cloneElement(icon, {
                  style: {
                    ...iconStyle,
                    transformOrigin: "center",
                  },
                  className:
                    "transition-transform duration-300 ease-in-out hover:scale-110",
                })}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
