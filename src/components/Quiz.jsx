import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = ({ difficulty, name }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const questionType = Math.random() < 0.5 ? "multiple" : "boolean";
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${questionType}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [currentQuestionIndex]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    setAnswerSelected(false);
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };
  if (loading) {
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
      {answerSelected && <button onClick={handleNextQuestion}>Next</button>}
    </div>
  );
};

export default Quiz;
