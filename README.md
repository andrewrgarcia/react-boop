# react-boop [![npm](https://img.shields.io/npm/v/react-boop)](https://www.npmjs.com/package/react-boop) [![License](https://img.shields.io/github/license/andrewrgarcia/react-boop)](LICENSE) ![TypeScript](https://img.shields.io/badge/TypeScript-Yes-blue)


A flexible virtual joystick component for React, built with TypeScript **for mobile devices**📱 Simple integration with smooth and intuitive controls for touchscreen environments.


## Live Demo

Try the joystick in action on a mobile device:

👉 [**Live Demo (Try it on your Phone or Tablet)**](https://andrewrgarcia.github.io/react-boop/demo.html)

_Designed to work **only on mobile and touchscreen devices**. It will not respond to mouse or desktop inputs._


## Features

- **Exclusively for Mobile Devices** – Only responds to touch events (mobile and tablet devices).
- Written in **TypeScript**, compatible with both TypeScript and JavaScript React projects
- Fully customizable size and styles.

---

## Installation

```bash
npm install react-boop
```

---

## Usage
```tsx
import { VirtualJoystick } from "react-boop";

export default function App() {
  return (
    <VirtualJoystick
      size={150}
      onChange={(vector) => console.log(vector)}
      className="custom-joystick"
      style={{ backgroundColor: "#4A90E2" }}
    />
  );
}
```

## Props

| Prop       | Type               | Default | Description                              |
|-----------|--------------------|---------|------------------------------------------|
| `onChange` | `(vector: {x: number, y: number}) => void` | Required | Callback function for joystick movement. |
| `className`| `string`           | `""`    | Custom CSS classes for styling.          |
| `style`    | `React.CSSProperties` | `{}` | Inline styling for the joystick.        |
| `size`     | `number`           | `96`    | Size of the joystick in pixels.          |


---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Links

- [GitHub Repository](https://github.com/andrewrgarcia/react-boop)
- [Report an Issue](https://github.com/andrewrgarcia/react-boop/issues)
