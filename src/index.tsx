import React, { useState, useRef } from "react";

interface JoystickProps {
  onChange: (vector: { x: number; y: number }) => void;
}

export const VirtualJoystick: React.FC<JoystickProps> = ({ onChange }) => {
  const joystickRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setOrigin({ x: touch.clientX, y: touch.clientY });
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging || !origin) return;
    const touch = e.touches[0];
    let dx = touch.clientX - origin.x;
    let dy = touch.clientY - origin.y;
    const maxDistance = 50;
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
      style={{
        position: "absolute",
        top: "1rem",
        left: "1rem",
        width: "6rem",
        height: "6rem",
        background: "rgba(200,200,200,0.5)",
        borderRadius: "50%",
        touchAction: "none"
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "50%",
          height: "50%",
          background: "#555",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </div>
  );
};
