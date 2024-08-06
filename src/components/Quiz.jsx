import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = ({ difficulty, name }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz Finished</h2>
        <p>
          {name}, your score is: {score} / {questions.length}
        </p>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Question {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <Question
        question={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
