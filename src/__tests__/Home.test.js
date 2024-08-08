import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home/Home";

test("renders Home component", () => {
  render(<Home startQuiz={jest.fn()} />);

  const inputElement = screen.getByPlaceholderText(/Enter Your Name/i);
  expect(inputElement).toBeInTheDocument();

  // Check if the difficulty buttons are rendered
  const easyButton = screen.getByText(/Easy/i);
  const mediumButton = screen.getByText(/Medium/i);
  const hardButton = screen.getByText(/Hard/i);
  expect(easyButton).toBeInTheDocument();
  expect(mediumButton).toBeInTheDocument();
  expect(hardButton).toBeInTheDocument();
});

test("calls startQuiz with correct parameters", () => {
  const startQuizMock = jest.fn();
  render(<Home startQuiz={startQuizMock} />);

  const inputElement = screen.getByPlaceholderText(/Enter Your Name/i);
  fireEvent.change(inputElement, { target: { value: "John" } });

  const easyButton = screen.getByText(/Easy/i);
  fireEvent.click(easyButton);

  const startButton = screen.getByText(/Start/i);
  fireEvent.click(startButton);

  expect(startQuizMock).toHaveBeenCalledWith("easy", "John");
});
