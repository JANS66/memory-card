import "../styles/scoreboard.css";

const Scoreboard = ({ current, best }) => {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span>Current Score:</span>
        <strong>{current}</strong>
      </div>
      <div className="score-item">
        <span>Best Score:</span>
        <strong>{best}</strong>
      </div>
    </div>
  );
};

export default Scoreboard;
