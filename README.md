# 🏀 HighCourt Scoreboard Pro

![HighCourt Logo](icon.png)

**HighCourt Scoreboard** is a professional-grade, progressive web application (PWA) designed for basketball leagues, amateur tournaments, and recreational games. It transforms any laptop, tablet, or smartphone into a fully functional digital scoreboard.

🔗 **[Launch Live Scoreboard](https://highcourt-scoreboard.netlify.app)**

---

## ✨ Key Features

* **📱 Installable App (PWA):** Works offline and installs directly to your home screen on Android and iOS.
* **💾 Auto-Save Technology:** Never lose game data. The scoreboard remembers scores, time, and fouls even if you refresh the page or close the browser.
* **⚡ Zero Latency:** Built with Vanilla JavaScript for instant response times on low-end devices.
* **🎨 Glassmorphism UI:** Modern, high-contrast design optimized for visibility in gym environments.
* **🔉 Integrated Buzzer:** Synthesized audio buzzer plays automatically when the clock hits 00:00 (no external audio files required).
* **🛠️ Fully Editable:** Click team names to rename them (e.g., "Lakers" vs "Heat") and cycle team colors to match jerseys.

---

## 🎮 Controls & Shortcuts

Professional scorekeepers can use keyboard hotkeys for faster operation.

| Key | Action |
| :--- | :--- |
| **Spacebar** | Start / Stop Game Clock |
| **S** | Reset Shot Clock to 24s |
| **F** | Reset Shot Clock to 14s (Foul/Offensive Rebound) |
| **1, 2, 3** | Add Points (Home Team) |
| **4, 5, 6** | Add Points (Guest Team) |

---

## 📲 How to Install (Mobile)

HighCourt is designed to work without an internet connection once installed.

**On iOS (iPhone/iPad):**
1.  Open the [Live Link](https://highcourt-scoreboard.netlify.app) in Safari.
2.  Tap the **Share** button (square with arrow).
3.  Scroll down and tap **"Add to Home Screen"**.

**On Android:**
1.  Open in Chrome.
2.  Tap the menu (three dots).
3.  Tap **"Install App"** or **"Add to Home Screen"**.

---

## 💻 Local Development

If you want to run this code on your own computer:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/highcourt-scoreboard.git](https://github.com/yourusername/highcourt-scoreboard.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd highcourt-scoreboard
    ```
3.  **Launch:**
    Simply double-click `index.html` to open it in your browser. No `npm install` or build steps required.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling:** CSS Grid, CSS Variables, Glassmorphism effects
* **Storage:** LocalStorage API (for Auto-Save)
* **Audio:** Web Audio API (for the buzzer)
* **Deployment:** Netlify

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Made with 🏀 for the love of the game.
