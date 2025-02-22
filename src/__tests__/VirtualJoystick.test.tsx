import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { VirtualJoystick } from "../index";

describe("VirtualJoystick Component", () => {
  it("should render joystick container with custom size", () => {
    const { getByRole } = render(<VirtualJoystick onChange={() => {}} size={150} />);
    const joystick = getByRole("button");
    expect(joystick).toHaveStyle("width: 150px");
  });

  it("should apply custom className", () => {
    const { getByRole } = render(<VirtualJoystick onChange={() => {}} className="custom-class" />);
    const joystick = getByRole("button");
    expect(joystick.className).toContain("custom-class");
  });

  it("should trigger onChange when moved", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<VirtualJoystick onChange={handleChange} />);
    const joystick = getByRole("button");

    fireEvent.touchStart(joystick, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(joystick, { touches: [{ clientX: 130, clientY: 130 }] });

    expect(handleChange).toHaveBeenCalled();
  });

  it("should reset on touch end", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<VirtualJoystick onChange={handleChange} />);
    const joystick = getByRole("button");

    fireEvent.touchStart(joystick, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(joystick, { touches: [{ clientX: 130, clientY: 130 }] });
    fireEvent.touchEnd(joystick);

    expect(handleChange).toHaveBeenLastCalledWith({ x: 0, y: 0 });
  });
});
