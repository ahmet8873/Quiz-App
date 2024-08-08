import { render, screen, waitFor } from "@testing-library/react";
import Quiz from "../components/Quiz/Quiz";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            question: "What is the capital of France?",
            correct_answer: "Paris",
            incorrect_answers: ["London", "Berlin", "Madrid"],
          },
        ],
      }),
  })
);

test("renders Quiz component", async () => {
  render(<Quiz difficulty="easy" name="John" />);

  // Check if loading spinner is displayed initially
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Check if question is rendered after loading
  await waitFor(() =>
    expect(
      screen.getByText(/What is the capital of France?/i)
    ).toBeInTheDocument()
  );
});
