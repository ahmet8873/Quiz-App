import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading/Loading";

test("renders loading spinner and text", () => {
  render(<Loading />);

  const loadingSpinner = screen.getByRole("status");
  const loadingText = screen.getByText(/Loading.../i);

  expect(loadingSpinner).toBeInTheDocument();
  expect(loadingText).toBeInTheDocument();
});

test("has the correct classes applied", () => {
  const { container } = render(<Loading />);
  const loadingDiv = container.firstChild;

  expect(loadingDiv).toHaveClass("loadingSpinner");
  expect(loadingDiv.firstChild).toHaveClass("spinner");
});
