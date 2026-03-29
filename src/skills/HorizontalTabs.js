import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
                        className={`flex w-1/4 text-xs font-medium tracking-widest uppercase justify-center items-center border-darkGrey/30 border py-3 px-1 transition-colors duration-200 ${index === activeTab ? 'bg-dustyRose text-darkGrey underline underline-offset-4' : 'bg-warmStone text-white/80'}`}
                        aria-label={tab.label}
                    ><span>{tab.label}</span></button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    className="mt-2.5"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    {props.tabs[activeTab].content}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
