// script.js
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(event) {
    const cellIndex = event.target.dataset.index;

    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 10);
            resetGame();
        } else if (board.every(cell => cell !== '')) {
            setTimeout(() => alert('Draw!'), 10);
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
