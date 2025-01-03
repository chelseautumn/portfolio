import Card from "../components/Card.jsx";
import { useState } from "react";
import "../styles/AboutMe.css";

function AboutMe() {

  const [showGoose, setShowGoose] = useState(false);

    return (
      <Card title="about me" gridArea="about" minHeight="400px" style={{ position: "relative" }}>
        <div className="about">
          <p>
            Hi! My name is Chelsea, and I'm a software engineer from Chicago.
          </p>
          <p>
            I graduated from UW-Madison with a double major in Computer Science & Data Science in 2023.
            Since then, I've been working mainly as a front-end developer at Caterpillar.
          </p>
          <p className="goose-toggle" onClick={() => setShowGoose(!showGoose)}>
            Aside from coding, I am passionate about traveling, being active, music, and my cat <span className={`goose-label ${showGoose ? "title" : ""}`}>Goose.</span>
          </p>
        </div>
        {showGoose && <img src="/goose1.png" alt="goose" className="goose" />}
    </Card>
    )
  }
  
  export default AboutMe;