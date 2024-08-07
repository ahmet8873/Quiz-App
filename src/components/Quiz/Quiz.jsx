import React, { useState, useEffect } from "react";
import Question from "../Question/Question";
import Loading from "../Loading/Loading";
import styles from "./Quiz.module.css";

const Quiz = ({ difficulty, name }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAllQuestions = async () => {
      const multipleQuestions = await fetchQuestions("multiple", 5);
      setTimeout(() => {
        const booleanQuestions = fetchQuestions("boolean", 5).then(
          (booleanQuestions) => {
            setQuestions(
              [...multipleQuestions, ...booleanQuestions].sort(
                () => Math.random() - 0.5
              )
            );
            setLoading(false);
          }
        );
      }, 5000);
    };
    fetchAllQuestions();
  }, []);

  const fetchQuestions = async (questionType, amount) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${questionType}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  };

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
    return <Loading />;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className={styles.container}>
        <h2>Quiz Finished</h2>
        <p className={styles.score}>
          {name}, your score is: {score} / {questions.length}
        </p>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>
        Question {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <Question
        question={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
      {answerSelected && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
