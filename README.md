# react-boop

A lightweight virtual joystick for React. Designed for smooth, intuitive mobile controls with easy integration.

## Features

- Mobile-friendly virtual joystick
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

[MIT](LICENSE)

---

## Links

- [GitHub Repository](https://github.com/andrewrgarcia/react-boop)
- [Report an Issue](https://github.com/andrewrgarcia/react-boop/issues)
```
