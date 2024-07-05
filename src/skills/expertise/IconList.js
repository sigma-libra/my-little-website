import React from 'react';

export default function IconList({ listItems }) {

    const iconStyle = {
        marginRight: '8px',
    };

    return (
        <div className="flex flex-col mb-2.5">
            <ul className="list-none pl-2.5 pb-2.5">
                {listItems.map(([icon, item]) => (
                    <li className="flex pl-0 pb-2.5 text-2xl text-green-200" key={item}>
                        {icon && React.cloneElement(icon, { style: iconStyle })}
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
