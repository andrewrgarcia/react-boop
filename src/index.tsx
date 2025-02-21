import React, { useState, useRef, useEffect } from "react";

interface JoystickProps {
  onChange: (vector: { x: number; y: number }) => void;
}

export function VirtualJoystick({ onChange }: JoystickProps) {
  const joystickRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    console.log("VirtualJoystick component mounted!");
  }, []);

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
    const maxDistance = 50;
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

  console.log("Rendering joystick...");

  return (
    <div
      ref={joystickRef}
      role="button"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#333",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0.8,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "30px",
          left: "30px",
        }}
      />
    </div>
  );
}
