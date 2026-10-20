window.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }
});