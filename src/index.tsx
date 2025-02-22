import React, { useState, useRef } from "react";
// import React, { useState, useRef, useEffect } from "react";

interface JoystickProps {
  onChange: (vector: { x: number; y: number }) => void;
  className?: string; // For external class styling
  style?: React.CSSProperties; // Inline styling
  size?: number; // Joystick size in pixels
}

export function VirtualJoystick({ onChange, style = {}, size = 96 }: JoystickProps) {
  const joystickRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  // useEffect(() => {
  //   console.log("VirtualJoystick component mounted!");
  // }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setOrigin({ x: touch.clientX, y: touch.clientY });
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging || !origin) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - origin.x;
    const deltaY = touch.clientY - origin.y;
    const maxDistance = size / 2;
    let dx = deltaX, dy = deltaY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > maxDistance) {
      const angle = Math.atan2(dy, dx);
      dx = Math.cos(angle) * maxDistance;
      dy = Math.sin(angle) * maxDistance;
    }
    onChange({ x: dx / maxDistance, y: -dy / maxDistance });
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setOrigin(null);
    onChange({ x: 0, y: 0 });
  };

return (
  <div
    ref={joystickRef}
    role="button"
    style={{
      width: size || 96, // Fallback to 96px if not provided
      height: size || 96,
      backgroundColor: "#D1D5DB",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0.5,
      touchAction: "none",
      ...style, // Allow custom overrides
    }}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    <div
      style={{
        width: (size || 96) / 2.5, // Safe fallback
        height: (size || 96) / 2.5,
        backgroundColor: "#374151",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  </div>
);

}

