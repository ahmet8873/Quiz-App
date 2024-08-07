import { useState } from "react";
import styles from "./Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ startQuiz }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleStart = () => {
    if (!name || !difficulty) {
      toast.error("Please select difficulty and enter your name");
      return;
    }
    startQuiz(difficulty, name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src="/speech-bubble.png" alt="Logo" className={styles.logo} />
        <h1>
          Welcome to the <span>Homerun</span> Quiz App
        </h1>
      </div>

      <div className={styles.rightSide}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Please select difficulty </label>
          <div className={styles.difficultyButtons}>
            <button
              className={`${styles.difficultyButton} ${
                difficulty === "easy" ? styles.selected : ""
              }`}
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </button>
            <button
              className={`${styles.difficultyButton} ${
                difficulty === "medium" ? styles.selected : ""
              }`}
              onClick={() => setDifficulty("medium")}
            >
              Medium
            </button>
            <button
              className={`${styles.difficultyButton} ${
                difficulty === "hard" ? styles.selected : ""
              }`}
              onClick={() => setDifficulty("hard")}
            >
              Hard
            </button>
          </div>
        </div>
        <button className={styles.startButton} onClick={handleStart}>
          Start
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
