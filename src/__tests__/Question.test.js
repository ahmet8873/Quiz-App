import { render, screen, fireEvent } from "@testing-library/react";
import Question from "../components/Question/Question";

const sampleQuestion = {
  question: "What is the capital of France?",
  correct_answer: "Paris",
  incorrect_answers: ["London", "Berlin", "Madrid"],
};

test("renders the question and answers", () => {
  render(<Question question={sampleQuestion} handleAnswer={() => {}} />);
  expect(
    screen.getByText("What is the capital of France?")
  ).toBeInTheDocument();
  expect(screen.getByText("Paris")).toBeInTheDocument();
  expect(screen.getByText("London")).toBeInTheDocument();
  expect(screen.getByText("Berlin")).toBeInTheDocument();
  expect(screen.getByText("Madrid")).toBeInTheDocument();
});

test("calls handleAnswer with true when the correct answer is selected", () => {
  const handleAnswerMock = jest.fn();
  render(
    <Question question={sampleQuestion} handleAnswer={handleAnswerMock} />
  );

  const correctAnswerButton = screen.getByText("Paris");
  fireEvent.click(correctAnswerButton);

  expect(handleAnswerMock).toHaveBeenCalledWith(true);
  expect(correctAnswerButton).toHaveClass("correct");
});

test("calls handleAnswer with false when an incorrect answer is selected", () => {
  const handleAnswerMock = jest.fn();
  render(
    <Question question={sampleQuestion} handleAnswer={handleAnswerMock} />
  );

  const incorrectAnswerButton = screen.getByText("London");
  fireEvent.click(incorrectAnswerButton);

  expect(handleAnswerMock).toHaveBeenCalledWith(false);
  expect(incorrectAnswerButton).toHaveClass("incorrect");
});
