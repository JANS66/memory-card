import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Scoreboard from "./components/Scoreboard";
import "./styles/app.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      // Game Over: Reset score, keep track of Best Score
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      setClickedIds([]);
    } else {
      // Correct Move: Increase score and record the click
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedIds([...clickedIds, id]);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Memory Quest</h1>
        <Scoreboard current={currentScore} best={bestScore} />
      </header>
      <CardGrid onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
