import Card from "../components/Card.jsx";
import { useState } from "react";
import "../styles/AboutMe.css";

function AboutMe() {

  // TODO: show goose
  const [showGoose, setShowGoose] = useState(false);

  const toggleGoose = () => {
    setShowGoose((prevShowGoose) => !prevShowGoose);
  };

    return (
      <Card title="about me" gridArea="about" minHeight="400px">
        <div className="about">
          <p>
            Hi! My name is Chelsea, and I'm a software engineer from Chicago.
          </p>
          <p>
            I graduated from UW-Madison with a double major in Computer Science & Data Science in 2023.
            Since then, I've been working mainly as a front-end developer at Caterpillar.
          </p>
          <p>
            Aside from coding, I am passionate about traveling, being active, music, and my cat <span onClick={toggleGoose}>Goose.</span>
          </p>
        </div>
    </Card>
    )
  }
  
  export default AboutMe;