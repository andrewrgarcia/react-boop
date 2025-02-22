# Contributing to react-boop

Welcome to the **react-boop** repository! 🚀 Here's a simple guide to help you test your changes locally, handle versioning, and submit contributions.

---

## ✅ Local Testing Made Easy

You can test your changes locally without publishing. Follow these quick steps:

### 🔧 **1. Build the Package**

Run the following command to generate the latest build:

```bash
npm run build
```

### 🌐 **2. Test the Build with a Local Demo**

1. Open the `demo.html` file in your browser directly after building.
2. You can open it using Firefox directly:

```bash
firefox demo.html
```

3. Make changes in your library, run `npm run build` again, and refresh the demo page.

---

## 📌 Versioning and Publishing

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (bug fixes): `1.0.0` → `1.0.1`
- **Minor** (new features): `1.0.0` → `1.1.0`
- **Major** (breaking changes): `1.0.0` → `2.0.0`

### 🚀 **Publishing a New Version**

1. Bump the version:

```bash
npm version patch   # For small fixes
npm version minor   # For new features
npm version major   # For breaking changes
```

2. Publish the package:

```bash
npm publish --access public
```

3. Verify the new version:

```bash
npm info react-boop
```

---

## 📥 Submitting Contributions

1. **Fork the Repository**

Go to the repository and click on "Fork." Then clone your fork:

```bash
git clone https://github.com/your-username/react-boop.git
```

2. **Create a New Branch**

```bash
git checkout -b feature/your-feature-name
```

3. **Make Changes and Commit**

```bash
git add .
git commit -m "Add: Your feature or fix description"
```

4. **Push Changes and Submit a Pull Request**

```bash
git push origin feature/your-feature-name
```

Go to GitHub and open a Pull Request against the `main` branch.

---

## ✅ Code Style Guidelines

- Follow the existing code style and structure.
- Write clear, descriptive commit messages.
- Make sure your changes pass all existing tests.

---

Thank you for contributing to **react-boop**! 🚀

