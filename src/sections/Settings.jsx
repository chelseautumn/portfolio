import Card from "../components/Card.jsx";
import "../styles/Settings.css";
import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { IoIosColorPalette, IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";
import { CgSmile, CgSmileMouthOpen } from "react-icons/cg";
import { CoolMode } from "../components/CoolMode.jsx";

function Settings() {
const [darkMode, setDarkMode] = useState(true);
// TODO: add sound
const [soundEnabled, setSoundEnabled] = useState(true);
const [colorIndex, setColorIndex] = useState(5);
const [happy, setHappy] = useState(false);

const colors = [
  "#FF3359", // red
  "#FFA32C", // orange
  "#FFE22C", // yellow
  "#00D21D", // green
  "#2C98FF", // blue
  "#952CFF", // purple
]

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.style.setProperty(
      "--background-color",
      darkMode ? "#fff" : "#1e1e1e"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "#242424" : "#fff"
    );
    document.documentElement.style.setProperty(
      "--card-color",
      darkMode ? "#f5f5f5" : "#242424"
    );
  };

  const toggleColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
    document.documentElement.style.setProperty(
      "--highlight-color",
      colors[colorIndex],
    );
  }

    return (
    <Card gridArea="settings" minHeight="24px">
      <div className="settings">
      <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="icon"
        >
          {darkMode ? <CiDark size={32} /> : <CiLight size={32} />}
        </button>
        <button
          onClick={toggleColor}
          aria-label="Change Color"
          className="icon"
        >
          <IoIosColorPalette size={32} />
        </button>
        <CoolMode>
        <button
          onTouchStart={() => setHappy(true)}
          onTouchEnd={() => setHappy(false)}
          onMouseDown={() => setHappy(true)}
          onMouseUp={() => setHappy(false)}
          aria-label="Toggle Face"
          className="icon"
        >
          {happy ? <CgSmileMouthOpen size={32} /> : <CgSmile size={32} />}
        </button>
        </CoolMode>
        <button
          onClick={() => setSoundEnabled((prev) => !prev)}
          aria-label="Toggle Sound"
          className="icon"
        >
          {soundEnabled ? <IoIosVolumeHigh size={32} /> : <IoIosVolumeOff size={32} />}
        </button>
      </div>

    </Card>
    )
  }
  
  export default Settings;