import React from "react";

const Question = ({ question, handleAnswer }) => {
  const {
    question: questionText,
    correct_answer,
    incorrect_answers,
  } = question;

  const allAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const handleSelection = (selectedAnswer) => {
    handleAnswer(selectedAnswer === correct_answer);
  };

  return (
    <div>
      <h3>{questionText}</h3>
      {allAnswers.map((answer, index) => (
        <button key={index} onClick={() => handleSelection(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
