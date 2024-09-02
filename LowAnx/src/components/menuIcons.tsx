import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  HouseDoor,
  Controller,
  Robot,
  GearFill,
  Book,
  PersonFill,
  DoorOpenFill,
} from "react-bootstrap-icons";
import { routes } from "../router/routes";
import MusicPlayer from "./MusicPlayer";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setExpanded(expanded);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const iconColors = ["Black", "Black", "Black", "Black", "Black", "#C70000"];

  const icons = [
    { component: GearFill, route: routes.config },
    { component: Controller, route: routes.minigames },
    { component: Book, route: routes.book },
    { component: Robot, route: routes.chatbot },
    { component: PersonFill, route: routes.profile },
    { component: DoorOpenFill, route: routes.login },
  ];

  const renderIcons = () => {
    return icons.map(({ component: Icon, route }, index) => (
      <div
        key={index}
        className={`menu-icon ${expanded ? "active" : ""}`}
        style={{
          transform: `translate(-50%, -50%) rotate(${
            -90 + index * (180 / (icons.length - 1))
          }deg) translateY(${expanded ? "-120px" : "0"})`,
          zIndex: expanded ? -1 : 0,
        }}
      >
        <div
          className="icon-wrapper pulse"
          style={{ color: iconColors[index] }}
        >
          <Icon size={20} onClick={() => navigate(route)} />
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className={`menu-container ${isVisible ? "visible" : "hidden"}`}>
        <div className="menu-icon-container">{renderIcons()}</div>
        <div className="menu-center glass text-primary" onClick={toggleExpand}>
          <HouseDoor size={50} />
        </div>
      </div>
      <div className={`music-player-container ${isVisible ? "visible" : "hidden"}`}>
        <MusicPlayer />
      </div>
    </>
  );
};

export default Menu;
