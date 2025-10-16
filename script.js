const GRID_SIZE = 8;
const MINES_COUNT = 10;
let board = []; 
let gameOver = false;

const gridElement = document.getElementById('minesweeper-grid');
const messageElement = document.getElementById('game-message');

function initGame() {
    gameOver = false;
    messageElement.textContent = '';
    gridElement.innerHTML = '';
    board = [];

    for (let i = 0; i < GRID_SIZE; i++) {
        board[i] = [];
        for (let j = 0; j < GRID_SIZE; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.row = i;
            cellElement.dataset.col = j;
            cellElement.addEventListener('click', handleCellClick);
            gridElement.appendChild(cellElement);

            board[i][j] = {
                isMine: false,
                adjacentMines: 0,
                isRevealed: false,
                element: cellElement 
            };
        }
    }

    placeMines();
    calculateAdjacentMines();
}

function placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < MINES_COUNT) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);

        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minesPlaced++;
        }
    }
}

function calculateAdjacentMines() {
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (!board[r][c].isMine) {
                let count = 0;
                getNeighbors(r, c).forEach(([nr, nc]) => {
                    if (board[nr][nc].isMine) {
                        count++;
                    }
                });
                board[r][c].adjacentMines = count;
            }
        }
    }
}

function getNeighbors(row, col) {
    const neighbors = [];
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue; 

            const nr = row + dr;
            const nc = col + dc;

            if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
                neighbors.push([nr, nc]);
            }
        }
    }
    return neighbors;
}

function handleCellClick(event) {
    if (gameOver) return;

    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const cell = board[row][col];

    if (cell.isRevealed) return;

    if (cell.isMine) {
        cell.element.classList.add('mine-hit');
        messageElement.textContent = 'BOOM! Game Over.';
        gameOver = true;
        revealAllMines();
    } else {
        revealCell(row, col);
    }
}

function revealCell(row, col) {
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return; 
    const cell = board[row][col];
    if (cell.isRevealed || cell.isMine) return; 

    cell.isRevealed = true;
    cell.element.classList.add('revealed');

    if (cell.adjacentMines > 0) {
        cell.element.textContent = cell.adjacentMines;
        cell.element.classList.add(`mines-${cell.adjacentMines}`); 
    } else {
        getNeighbors(row, col).forEach(([nr, nc]) => {
            revealCell(nr, nc);
        });
    }
}

function revealAllMines() {
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = board[r][c];
            if (cell.isMine) {
                cell.element.classList.add('mine');
                if (!cell.element.classList.contains('mine-hit')) {
                    cell.element.textContent = '💣'; 
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', initGame);