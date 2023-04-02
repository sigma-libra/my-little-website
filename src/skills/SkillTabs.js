import React, { useState } from 'react';

const SkillTabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.defaultTab || 0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {props.tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? 'active' : ''}
                    >
                        <h1>{tab.label}</h1>
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {props.tabs[activeTab].content}
            </div>
        </div>
    );
}

export default SkillTabs;
