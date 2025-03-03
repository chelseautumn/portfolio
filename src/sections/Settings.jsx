import Card from "../components/Card.jsx";
import "../styles/Settings.css";
import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { IoIosColorPalette, IoIosBrush } from "react-icons/io";
import { CgSmile, CgSmileMouthOpen } from "react-icons/cg";
import { CoolMode } from "../components/CoolMode.jsx";

function Settings({ isDrawing, setIsDrawing }) {
  const [darkMode, setDarkMode] = useState(true);
  const [colorIndex, setColorIndex] = useState(5);
  // TODO: fix this on mobile
  const [happy, setHappy] = useState(false);

  const colors = [
    "#FF3359", // red
    "#FFA32C", // orange
    "#FFE22C", // yellow
    "#00D21D", // green
    "#2C98FF", // blue
    "#952CFF", // purple
  ];

  const toggleDarkMode = () => {
    const mode = !darkMode;
    setDarkMode(mode);
    localStorage.setItem("darkMode", JSON.stringify(mode));
  };

  const toggleColor = () => {
    const index = (colorIndex + 1) % colors.length;
    setColorIndex(index);
    localStorage.setItem("colorIndex", JSON.stringify(index));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    const savedColorIndex = JSON.parse(localStorage.getItem("colorIndex"));

    if (savedDarkMode !== null) setDarkMode(savedDarkMode);
    if (savedColorIndex !== null) setColorIndex(savedColorIndex);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      !darkMode ? "#fff" : "#1e1e1e",
    );
    document.documentElement.style.setProperty(
      "--text-color",
      !darkMode ? "#242424" : "#fff",
    );
    document.documentElement.style.setProperty(
      "--card-color",
      !darkMode ? "#f5f5f5" : "#242424",
    );
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--highlight-color",
      colors[colorIndex],
    );
  }, [colorIndex]);

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
          onClick={() => setIsDrawing((prev) => !prev)}
          aria-label="Use Brush"
          className="icon"
        >
          {!isDrawing && <IoIosBrush size={32} />}
          {isDrawing && <div style={{ width: "32px", height: "32px" }} />}
        </button>
      </div>
    </Card>
  );
}

export default Settings;
