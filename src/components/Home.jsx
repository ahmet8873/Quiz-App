import { useState } from "react";

const Home = ({ startQuiz }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleStart = () => {
    startQuiz(difficulty, name);
  };

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default Home;
