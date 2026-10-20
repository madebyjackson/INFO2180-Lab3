window.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const gameState = ["", "", "", "", "", "", "", "", ""];

  let currentPlayer = "X";
    const winningLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

  function hasWon(player) {
    for (let w = 0; w < winningLines.length; w++) {
      const line = winningLines[w];
      if (
        gameState[line[0]] === player &&
        gameState[line[1]] === player &&
        gameState[line[2]] === player
      ) {
        return true;
      }
    }
    return false;
    }

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    squares[i].addEventListener("click", function () {
      if (gameState[i] !== "") {
        return;
      }

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

    if (hasWon(currentPlayer)) {
        status.textContent = "Congratulations! " + currentPlayer + " is the Winner!";
        status.classList.add("you-won");
    }

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    });

    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function () {
      squares[i].classList.remove("hover");
    });
  }
});