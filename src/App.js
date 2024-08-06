import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
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
    <div className="App">
      {quizStarted ? (
        <Quiz difficulty={difficulty} name={name} />
      ) : (
        <Home startQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
