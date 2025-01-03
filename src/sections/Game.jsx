import Card from "../components/Card.jsx";
import "../styles/Game.css";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const Game = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <Card gridArea="game" minHeight="120px">
      <div className="game">
        {!playing ? (
          <FaPlay onClick={() => setPlaying(true)} className="play" size={64} />
        ) : (
          <div>need to do something here</div>
        )}
      </div>
    </Card>
  );
};

export default Game;
