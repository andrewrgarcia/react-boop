# react-boop [![npm](https://img.shields.io/npm/v/react-boop)](https://www.npmjs.com/package/react-boop) [![License](https://img.shields.io/github/license/andrewrgarcia/react-boop)](LICENSE) ![TypeScript](https://img.shields.io/badge/TypeScript-Yes-blue)

A lightweight virtual joystick for React, **designed exclusively for mobile devices**📱. Perfect for mobile web games and interactive touch-based applications. Simple integration with smooth and intuitive controls for touchscreen environments.

## Live Demo

Try the joystick in action on a mobile device:

👉 [**Live Demo (Try it on your Phone or Tablet)**](https://andrewrgarcia.github.io/react-boop/demo.html)

_Designed to work **only on mobile and touchscreen devices**. It will not respond to mouse or desktop inputs._


## Features

- **Exclusively for Mobile Devices** – Only responds to touch events (mobile and tablet devices).
- Written in **TypeScript**, compatible with both TypeScript and JavaScript React projects
- Simple and customizable


---

## Installation

```bash
npm install react-boop
```

---

## Usage

Basic example:

```tsx
import { VirtualJoystick } from "react-boop";

function App() {
  const handleJoystickMove = (vector: { x: number; y: number }) => {
    console.log("Joystick Vector:", vector);
  };

  return <VirtualJoystick onChange={handleJoystickMove} />;
}
```

---

## Props

| Prop      | Type                                  | Description                           |
|-----------|---------------------------------------|---------------------------------------|
| `onChange` | `(vector: { x: number; y: number }) => void` | Triggered on joystick movement |

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Links

- [GitHub Repository](https://github.com/andrewrgarcia/react-boop)
- [Report an Issue](https://github.com/andrewrgarcia/react-boop/issues)
