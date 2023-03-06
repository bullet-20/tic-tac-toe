const squares = document.querySelectorAll('.square');
const scoreBoard = document.querySelector('.scoreboard');
const resetButton = document.querySelector('#reset-button');
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 'X';
let gameIsOver = false;

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (!square.textContent && !gameIsOver) {
      square.textContent = currentPlayer;
      checkForWinner();
      togglePlayer();
    }
  });
});

resetButton.addEventListener('click', () => {
  squares.forEach(square => {
    square.textContent = '';
  });
  gameIsOver = false;
  currentPlayer = 'X';
  scoreBoard.textContent = `Player X: ${player1Score} | Player O: ${player2Score}`;
});

function checkForWinner() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  winningCombinations.forEach(combination => {
    if (
      squares[combination[0] - 1].textContent === currentPlayer &&
      squares[combination[1] - 1].textContent === currentPlayer &&
      squares[combination[2] - 1].textContent === currentPlayer
    ) {
      scoreBoard.textContent = `Player ${currentPlayer} wins!`;
      gameIsOver = true;
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
      }, 100);
      updateScore(currentPlayer);
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
  

  if (!gameIsOver) {
    let boardIsFull = true;
    squares.forEach(square => {
      if (!square.textContent) {
        boardIsFull = false;
      }
    });

    if (boardIsFull) {
      scoreBoard.textContent = "It's a tie!";
      gameIsOver = true;
      setTimeout(() => {
        alert("It's a tie!");
      }, 100);
    }
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateScore(player) {
  if (player === 'X') {
    player1Score++;
  } else {
    player2Score++;
  }
  scoreBoard.textContent = `Player X: ${player1Score} | Player O: ${player2Score}`;
}