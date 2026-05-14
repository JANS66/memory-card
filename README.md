# Memory Quest: Pokemon Edition

A fast-paced memory card game built with React and Vite. Test your memory by clicking on unique Pokemon cards—but be careful! If you click the same Pokemon twice, your score resets.

## 🔗 Live Demo

[\[Netlify\]](https://inspect-memory-game.netlify.app/)

---

## ✨ Features

- **Dynamic Data:** Fetches real-time Pokemon data and sprites from the PokeAPI.
- **Shuffle Logic:** Uses the Fisher-Yates shuffle algorithm to randomize card positions after every click.
- **Score Tracking:** Tracks your current session score and saves your "Best Score" across multiple attempts.
- **Modern UI:** Features a dark-mode "Gamer" aesthetic with frosted glass effects and neon accents.

---

## 🛠️ Built With

| Technology | Purpose                                     |
| ---------- | ------------------------------------------- |
| React 19   | UI Library                                  |
| Vite       | Build Tool and Development Server           |
| CSS3       | Custom styling (no external CSS frameworks) |
| PokeAPI    | REST API for Pokemon data                   |

---

## 🚀 Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JANS66/memory-card
   ```

2. **Navigate to the project folder:**

   ```bash
   cd memory-card
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
src/
|-- components/
|   |-- CardGrid.jsx       (Handles API fetching and shuffling)
|   |-- Scoreboard.jsx     (Displays current and best scores)
|-- styles/
|   |-- app.css            (Global layout and animations)
|   |-- cardGrid.css
|   |-- index.css
|   |-- scoreboard.css
|-- App.jsx                (Main logic and state management)
|-- main.jsx               (Entry point)
```

---
