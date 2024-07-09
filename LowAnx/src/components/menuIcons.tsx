import { useState } from 'react';
import { HouseDoor, Controller, Robot, GearFill, Book, PersonFill, DoorOpenFill } from 'react-bootstrap-icons';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // Define colors for each icon
    const iconColors = ['Black', 'Black', 'Black', 'Black', 'Black', '#C70000'];

    const icons = [
        GearFill, Controller, Book, Robot, PersonFill, DoorOpenFill
    ];

    const renderIcons = () => {
        return icons.map((Icon, index) => (
            <div
                key={index}
                className={`menu-icon ${expanded ? 'active' : ''}`}
                style={{
                    transform: `translate(-50%, -50%) rotate(${-90 + (index * (180 / (icons.length - 1)))}deg) translateY(${expanded ? '-120px' : '0'})`,
                    zIndex: expanded ? -1 : 0,
                }}
            >
                <div className="icon-wrapper pulse" style={{ color: iconColors[index] }}>
                    <Icon size={20} onClick={() => console.log(`Clicked ${Icon.displayName || Icon.name}`)} />
                </div>
            </div>
        ));
    };

    return (
        <div className="menu-container">
            <div className="menu-icon-container">
                {renderIcons()}
            </div>
            <div className="menu-center glass text-primary" onClick={toggleExpand}>
                <HouseDoor size={50} />
            </div>
        </div>
    );
};

export default Menu;
