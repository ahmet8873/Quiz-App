import { useState } from "react";
import styles from "./Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ startQuiz }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleStart = () => {
    if (!name) {
      toast.error("Please enter a name");
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
      <ToastContainer />
    </div>
  );
};

export default Home;
