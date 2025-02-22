import React, { useState, useRef } from "react";

interface JoystickProps {
  onChange: (vector: { x: number; y: number }) => void;
  className?: string; // For external class styling
  style?: React.CSSProperties; // Inline styling
  size?: number; // Joystick size in pixels
}

export function VirtualJoystick({ onChange, className = "", style = {}, size = 96 }: JoystickProps) {
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
      className={`absolute bg-gray-300 rounded-full opacity-50 select-none ${className}`}
      style={{
        width: size,
        height: size,
        touchAction: "none",
        ...style,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute bg-gray-700 rounded-full"
        style={{
          width: size / 2.5,
          height: size / 2.5,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
