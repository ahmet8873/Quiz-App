import React, { useEffect, useState } from "react";

const Question = ({ question, handleAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const { correct_answer, incorrect_answers } = question;
    const allAnswers = [correct_answer, ...incorrect_answers];
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
  }, [question]);

  const { correct_answer } = question;
  const handleSelection = (selectedAnswer) => {
    handleAnswer(selectedAnswer === correct_answer);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {shuffledAnswers.map((answer, index) => (
        <button key={index} onClick={() => handleSelection(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
