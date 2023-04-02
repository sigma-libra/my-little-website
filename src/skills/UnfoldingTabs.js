import './UnfoldingTabs.css';
import React, { useState } from 'react';
import KeywordList from "./Keywords";

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
            <div>
                {activeTabs.includes(index) && (
                    <div className="tab-content">
                        <ul>
                            {selectedTab.content.map((entry) => <li>{entry}</li>)}
                        </ul>
                    </div>

                )}
            </div>
        )
    }

    return (
        <div className="unfolding-tabs">
            {content.map((tab, index) => (
                <div className="tab" key={index}>
                    <div className="tab-title" onClick={() => toggleTab(index)}>
                        <div className={`tab ${activeTabs.includes(index) ? 'active' : 'inactive'}`}>{tab.title}</div>
                    </div>
                    <DisplayContent index={index} selectedTab={tab} />
                </div>
            ))
            }

        </div>
    )
}
