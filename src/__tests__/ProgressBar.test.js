import { render, screen } from "@testing-library/react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

describe("ProgressBar", () => {
  test("renders progress bar container", () => {
    render(<ProgressBar currentQuestionIndex={0} totalQuestions={10} />);
    const progressBarContainer = screen.getByRole("progressbar");
    expect(progressBarContainer).toBeInTheDocument();
  });

  test("displays correct progress for first question", () => {
    render(<ProgressBar currentQuestionIndex={0} totalQuestions={10} />);
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("width: 10%");
  });
});
