import React, { useState } from 'react';

export default function HorizontalTabs(props) {

    const [activeTab, setActiveTab] = useState(props.defaultTab || 0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="tabs">
            <div className="flex pt-5">
                {props.tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`flex w-1/4 text-xl font-bold justify-center items-center border-black border-2 p-2 ${index === activeTab ? 'bg-green-200 text-black' : 'bg-red-600'}`}
                        label={tab.label}
                    ><h2>{tab.label}</h2></button>
                ))}
            </div>
            <div className="mt-2.5">
                {props.tabs[activeTab].content}
            </div>
        </div>
    );
}
