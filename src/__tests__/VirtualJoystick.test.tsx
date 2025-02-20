import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { VirtualJoystick } from "../index";

describe("VirtualJoystick Component", () => {
  it("should render joystick container", () => {
    const { getByRole } = render(<VirtualJoystick onChange={() => {}} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should trigger onChange when moved", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<VirtualJoystick onChange={handleChange} />);
    const joystick = getByRole("button");

    // Simulate touch start
    fireEvent.touchStart(joystick, {
      touches: [{ clientX: 100, clientY: 100 }]
    });

    // Simulate touch move
    fireEvent.touchMove(joystick, {
      touches: [{ clientX: 120, clientY: 120 }]
    });

    expect(handleChange).toHaveBeenCalled();
  });

  it("should reset movement on touch end", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<VirtualJoystick onChange={handleChange} />);
    const joystick = getByRole("button");

    fireEvent.touchStart(joystick, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(joystick, { touches: [{ clientX: 120, clientY: 120 }] });
    fireEvent.touchEnd(joystick);

    expect(handleChange).toHaveBeenLastCalledWith({ x: 0, y: 0 });
  });
});
