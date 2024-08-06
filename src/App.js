import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [name, setName] = useState("");

  const startQuiz = (selectedDifficulty, enteredName) => {
    setDifficulty(selectedDifficulty);
    setName(enteredName);
    setQuizStarted(true);
  };

  return (
    <div className={styles.App}>
      {quizStarted ? (
        <Quiz difficulty={difficulty} name={name} />
      ) : (
        <Home startQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
