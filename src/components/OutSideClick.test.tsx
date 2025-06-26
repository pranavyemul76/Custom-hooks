import { fireEvent, render, screen } from "@testing-library/react";
import OutSideClick from "./OutSideClick";

describe("OutSideClick Component", () => {
  it("should open the box when clicking the button", () => {
    render(<OutSideClick />);
    const button = screen.getByText(/open box/i);
    fireEvent.click(button);

    expect(screen.getByText("Inside Box")).toBeInTheDocument();
  });

  it("should close the box when clicking outside", () => {
    render(<OutSideClick />);
    const button = screen.getByText(/open box/i);
    fireEvent.click(button);

    // Box should now be visible
    expect(screen.getByText("Inside Box")).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(document.body);

    // "Inside Box" should be removed
    expect(screen.queryByText("Inside Box")).not.toBeInTheDocument();
  });

  it("should NOT close the box when clicking inside", () => {
    render(<OutSideClick />);
    const button = screen.getByText(/open box/i);
    fireEvent.click(button);

    const insideBox = screen.getByText("Inside Box");
    fireEvent.mouseDown(insideBox);

    // Still visible
    expect(screen.getByText("Inside Box")).toBeInTheDocument();
  });
});
