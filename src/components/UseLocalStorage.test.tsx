import { render, screen, fireEvent } from "@testing-library/react";
import UseLocalStorage from "./UseLocalStorage";

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear();
});

describe("UseLocalStorage Component", () => {
  it("renders with default value when no localStorage item", () => {
    render(<UseLocalStorage />);
    const input = screen.getByPlaceholderText(
      "Enter your name"
    ) as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.getByText(/Your name is:/)).toHaveTextContent("Anonymous");
  });

  it("loads initial value from localStorage", () => {
    localStorage.setItem("username", JSON.stringify("Pranav"));
    render(<UseLocalStorage />);
    const input = screen.getByPlaceholderText(
      "Enter your name"
    ) as HTMLInputElement;
    expect(input.value).toBe("Pranav");
    expect(screen.getByText(/Your name is:/)).toHaveTextContent(
      "Your name is: Pranav"
    );
  });

  it("updates value and localStorage when input changes", () => {
    render(<UseLocalStorage />);
    const input = screen.getByPlaceholderText(
      "Enter your name"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "John" } });

    expect(input.value).toBe("John");
    expect(screen.getByText(/Your name is:/)).toHaveTextContent(
      "Your name is: John"
    );
    expect(localStorage.getItem("username")).toBe("John");
  });
});
