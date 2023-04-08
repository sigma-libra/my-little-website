import React from 'react';
import './IconList.css';

export default function IconList({ listItems }) {

    const iconStyle = {
        marginRight: '8px',
    };

    return (
        <div className="icon-list">
            <ul className="ul-list">
                {listItems.map(([icon, item]) => (
                    <li className="list-item" key={item}>
                        {icon && React.cloneElement(icon, { style: iconStyle })}
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
