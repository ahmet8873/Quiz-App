import { useState } from "react";
import styles from "./Home.module.css";

const Home = ({ startQuiz }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleStart = () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }
    startQuiz(difficulty, name);
  };

  return (
    <div className={styles.container}>
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
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Home;
