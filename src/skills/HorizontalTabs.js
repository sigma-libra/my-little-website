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
                        className={`min-w-1/4 border-black ${index === activeTab ? 'bg-green-200' : 'bg-red-600'}`}
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
