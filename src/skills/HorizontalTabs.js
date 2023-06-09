import './HorizontalTabs.css';
import React, { useState } from 'react';

export default function HorizontalTabs(props) {

    const [activeTab, setActiveTab] = useState(props.defaultTab || 0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {props.tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? 'active' : 'inactive'}
                        label={tab.label}
                    ><h2>{tab.label}</h2></button>
                ))}
            </div>
            <div className="tab-content">
                {props.tabs[activeTab].content}
            </div>
        </div>
    );
}