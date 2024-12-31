import Card from "../components/Card.jsx";
import { useState, useEffect } from "react";
import "../styles/Welcome.css";

const Welcome = () => {

  const backgroundText = "chelsea was here. ".repeat(100);
  const [textIndex, setTextIndex] = useState(0);
  const text = backgroundText.slice(0, textIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => prev + 1);
    }, 100);
    if (text===backgroundText) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    
  }, []);

  const moveMouse = (event) => {
    const range = 24;
    const x = Math.round(event.pageX * range / window.innerWidth);
    const y = Math.round(event.pageY * range / window.innerHeight);
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);
  }

  return (
    <Card gridArea="welcome" minHeight={"var(--min-welcome-height)"} style={{ position: "relative" }}>
      <h1 className="welcome" onMouseMove={moveMouse}>
        welcome to {window.innerWidth > 600 && <br/>}my website :)
      </h1>
      <span className="type">{text}</span>
    </Card>
  );
};

export default Welcome;
