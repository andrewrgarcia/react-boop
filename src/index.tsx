import React, { useState, useRef } from "react";

interface JoystickProps {
  onChange: (vector: { x: number; y: number }) => void;
}

export function VirtualJoystick({ onChange }: JoystickProps) {
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

  return (
    <div
      ref={joystickRef}
      role="button"
      className="absolute top-4 left-4 w-24 h-24 bg-gray-300 rounded-full opacity-50 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "none" }}
    >
      <div className="absolute left-1/2 top-1/2 w-10 h-10 bg-gray-700 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
  
}
