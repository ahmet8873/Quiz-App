import React, { useEffect, useState } from "react";

const Question = ({ question, handleAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const { correct_answer, incorrect_answers } = question;
    const allAnswers = [correct_answer, ...incorrect_answers];
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
  }, [question]);

  const { correct_answer } = question;
  const handleSelection = (answer) => {
    setSelectedAnswer(answer);
    handleAnswer(answer === correct_answer);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {shuffledAnswers.map((answer, index) => {
        let buttonClass = "";
        if (selectedAnswer) {
          if (answer === correct_answer) {
            buttonClass = "correct";
          } else if (answer === selectedAnswer) {
            buttonClass = "incorrect";
          }
        }
        return (
          <button
            key={index}
            onClick={() => handleSelection(answer)}
            className={buttonClass}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default Question;
