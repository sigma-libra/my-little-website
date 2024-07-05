import React, { useState } from 'react';

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
                    <div className="bg-green-200 w-[95%] p-2.5 m-2.5">
                        {selectedTab.content.map((entry, i) => <p key={i} className="flex justify-center">{entry}</p>)}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            {content.map((tab, index) => (
                <div key={index}>
                    <div onClick={() => toggleTab(index)}>
                        <div className={`flex justify-center p-2.5 m-2.5 cursor-pointer text-white w-[95%] ${activeTabs.includes(index) ? 'bg-red-600' : 'bg-gray-700'}`}>{tab.title}</div>
                    </div>
                    <DisplayContent index={index} selectedTab={tab} />
                </div>
            ))}
        </div>
    )
}
