# 🎯 Tic Tac Toe – React Project

A simple yet clean and fully responsive Tic Tac Toe game built in **React**.  
Designed to demonstrate my understanding of modern frontend development principles: component-based architecture, React state management, and clean UI/UX design.

---

## 🧠 Key Highlights

- ✨ Built entirely with **React**
- ⚙️ Game logic handled through `useState` hooks
- 🧩 Easily extendable architecture
- 📱 Mobile-first responsive layout
- 🎯 Win/draw detection
- 🔄 Game reset functionality

---

## 🛠️ Tech Stack

- **React (JavaScript)**
- **HTML5 + CSS3**
- **Node.js + npm**

---

## 📁 Project Structure

```
TicTacToe/
+---public
|       icon-restart.svg
|       index.html
|       manifest.json
|       robots.txt
|
\---src
    |   App.css
    |   App.js
    |   index.css
    |   index.js
    |
    \---components
        +---Board
        |   |   Board.css
        |   |   Board.js
        |   |
        |   \---sub
        |       +---Square
        |       |   |   Square.css
        |       |   |   Square.js
        |       |   |
        |       |   \---sub
        |       |       +---Circle
        |       |       |       Circle.css
        |       |       |       Circle.js
        |       |       |
        |       |       \---Cross
        |       |               Cross.css
        |       |               Cross.js
        |       |
        |       \---Win
        |               Win.css
        |               Win.js
        |
        +---EndScreen
        |       EndScreen.css
        |       EndScreen.js
        |
        \---StartingScreen
                StartingScreen.css
                StartingScreen.js

```

---

## 📥 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SebastianKostrz/TicTacToe.git
cd TicTacToe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Then open your browser at `http://localhost:3000`.

---

## 📦 Build for Production

```bash
npm run build
```

Creates an optimized build in the `/build` directory.

---

## 👤 About Me

**Sebastian Kostrz**  
Junior Frontend Developer  
[GitHub](https://github.com/SebastianKostrz)

> Passionate about clean code, strong UI/UX, and constantly learning.

---

## 📄 License

This project is licensed under the **MIT License**.
