import Card from "../components/Card.jsx";
import "../styles/Settings.css";
import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import {
  IoIosColorPalette,
  IoIosVolumeHigh,
  IoIosVolumeOff,
  IoIosBrush,
} from "react-icons/io";
import { CgSmile, CgSmileMouthOpen } from "react-icons/cg";
import { CoolMode } from "../components/CoolMode.jsx";

function Settings({ isDrawing, setIsDrawing }) {
  const [darkMode, setDarkMode] = useState(true);
  // TODO: add sound
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [colorIndex, setColorIndex] = useState(5);
  // TODO: fix this on mobile
  const [happy, setHappy] = useState(false);
  const [hasBrush, setHasBrush] = useState(true);

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
    const savedSoundEnabled = JSON.parse(localStorage.getItem("soundEnabled"));
    const savedColorIndex = JSON.parse(localStorage.getItem("colorIndex"));

    if (savedDarkMode !== null) setDarkMode(savedDarkMode);
    if (savedSoundEnabled !== null) setSoundEnabled(savedSoundEnabled);
    if (savedColorIndex !== null) setColorIndex(savedColorIndex);

    // const updateBrushState = () => {
    //   setHasBrush(window.innerWidth > 800);
    // };
    // updateBrushState();
    // window.addEventListener("resize", updateBrushState);

    // return () => {
    //   window.removeEventListener("resize", updateBrushState);
    // };
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
          onClick={() => setSoundEnabled((prev) => !prev)}
          aria-label="Toggle Sound"
          className="icon"
        >
          {soundEnabled ? (
            <IoIosVolumeHigh size={32} />
          ) : (
            <IoIosVolumeOff size={32} />
          )}
        </button>
        {hasBrush && (
          <button
            onClick={() => setIsDrawing((prev) => !prev)}
            aria-label="Use Brush"
            className="icon"
          >
            {!isDrawing && <IoIosBrush size={32} />}
            {isDrawing && <div style={{ width: "32px", height: "32px" }} />}
          </button>
        )}
      </div>
    </Card>
  );
}

export default Settings;
