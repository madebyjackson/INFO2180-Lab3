window.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const gameState = ["", "", "", "", "", "", "", "", ""];

  let currentPlayer = "X";
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    squares[i].addEventListener("click", function () {
      if (gameState[i] !== "") {
        return;
      }

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

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