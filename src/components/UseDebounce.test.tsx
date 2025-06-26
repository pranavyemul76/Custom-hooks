import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UseDebounce from "./UseDebounce";

// Utility to wait real time
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("UseDebounce Component", () => {
  it("shows debounce loading and filters data correctly", async () => {
    render(<UseDebounce />);
    const input = screen.getByPlaceholderText("Search technology...");

    fireEvent.change(input, { target: { value: "React" } });

    // Expect debounce loading message
    expect(screen.getByText(/Debounce start/i)).toBeInTheDocument();

    // Wait longer than debounce + wait delay (600ms + 3000ms)
    await wait(3700);

    await waitFor(() => {
      expect(screen.getByText("React")).toBeInTheDocument();
    });
  });

  it("shows 'No results found' for unmatched term", async () => {
    render(<UseDebounce />);
    const input = screen.getByPlaceholderText("Search technology...");

    fireEvent.change(input, { target: { value: "unknown" } });

    await wait(3700);

    await waitFor(() => {
      expect(screen.getByText(/No results found/i)).toBeInTheDocument();
    });
  });

  it("filters result for partial match", async () => {
    render(<UseDebounce />);
    const input = screen.getByPlaceholderText("Search technology...");

    fireEvent.change(input, { target: { value: "script" } });

    await wait(3700);

    await waitFor(() => {
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("JavaScript")).toBeInTheDocument();
    });
  });
});
