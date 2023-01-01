import React, { useContext } from "react";
import { DarkModeContext } from "./CreateContext/CreateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="Lightswitch">
      <FontAwesomeIcon
        className={
          darkMode
            ? "switchIcon switchIcon-light"
            : "switchIcon switchIcon-dark"
        }
        icon={darkMode ? faLightbulb : faLightbulb}
        onClick={handleClick}
      />
    </div>
  );
}

export default Lightswitch;
