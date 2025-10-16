# Simple Minesweeper Game

This is a classic Minesweeper game implemented as a single-page web application. The goal is to clear a grid containing hidden "mines" without detonating any of them.

## Features

*   **8x8 Grid:** A standard 8x8 game board.
*   **10 Mines:** Ten randomly placed mines.
*   **Game Over State:** If you click on a mine, the game ends immediately.
*   **Mine Reveal:** Upon hitting a mine, all other mines on the board are revealed, and a "BOOM! Game Over." message is displayed.
*   **Adjacent Mine Count:** Cells without mines will show a number indicating how many mines are in their immediate vicinity (including diagonals).
*   **Automatic Empty Cell Revelation:** Clicking an empty cell (one with 0 adjacent mines) will automatically reveal all adjacent empty cells and numbered cells until a border of numbered cells is reached.

## How to Play

1.  **Objective:** The primary goal is to reveal all cells that do not contain mines.
2.  **Left-Click:** Click on a cell to reveal its content.
    *   If you reveal a mine, the game ends. All mines will be shown, and a "BOOM! Game Over." message will appear.
    *   If you reveal a number, it tells you how many mines are adjacent to that cell.
    *   If you reveal an empty cell (no adjacent mines), all surrounding empty cells and numbered cells will be automatically revealed until numbered cells are encountered.

## How to Run

1.  **Save Files:** Ensure all files (`index.html`, `style.css`, `script.js`, `README.md`, `LICENSE`) are saved in the same directory.
2.  **Open in Browser:** Open the `index.html` file using your preferred web browser (e.g., Chrome, Firefox, Edge).
3.  **Start Playing:** The game will automatically load, and you can start clicking cells.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)

Enjoy the game!
