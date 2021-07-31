const cells = document.querySelectorAll(".cell");
const container = document.querySelector(".container");
const res = document.querySelector("h1");
const button = document.querySelector("button");

let plays = 0;
let picked = false;
let isGameOver = false;
let isTie = false;
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    picked = false;

    if (isGameOver !== true) {
      if (picked !== true) {
        if (cell.innerHTML === "") {
          cell.innerHTML = "X";
          picked = true;
          console.log("in the if picked block");
          plays++;
        }
      }

      isWinner("X");

      if (plays < 5) {
        if (isGameOver !== true) {
          if (picked === true) {
            const randomCell = cells[Math.floor(Math.random() * 8)];

            while (randomCell.innerHTML.length > 0) {
              console.log("in the while loop");
              const randomCell = cells[Math.floor(Math.random() * 8)];
              if (randomCell.innerHTML.length == 0) {
                randomCell.innerHTML = "O";
                break;
              }
            }
            if (randomCell.innerHTML.length == 0) {
              randomCell.innerHTML = "O";
            }
          }
        }
      }

      isWinner("O");

      if (plays === 5 && isGameOver !== true) {
        isGameOver = true;
        isTie = true;
        res.innerHTML = "It's a tie!";
        for (let cell of cells) {
          cell.style.backgroundColor = "#aaaaaa";
        }
      }
      for (let cell of cells) {
        if (cell.innerHTML.length > 0) {
        }
      }
    }
  });
});

button.addEventListener("click", () => {
  for (let cell of cells) {
    cell.innerHTML = "";
    isGameOver = false;
    res.innerHTML = "Make a Move...";
    cell.classList.remove("bg-danger");
    cell.classList.remove("bg-success");
    cell.style.backgroundColor = "";
    plays = 0;
  }
});

function isWinner(player) {
  if (
    (isGameOver !== true &&
      cells[0].innerHTML === `${player}` &&
      cells[1].innerHTML === `${player}` &&
      cells[2].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[3].innerHTML === `${player}` &&
      cells[4].innerHTML === `${player}` &&
      cells[5].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[6].innerHTML === `${player}` &&
      cells[7].innerHTML === `${player}` &&
      cells[8].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[0].innerHTML === `${player}` &&
      cells[3].innerHTML === `${player}` &&
      cells[6].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[1].innerHTML === `${player}` &&
      cells[4].innerHTML === `${player}` &&
      cells[7].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[2].innerHTML === `${player}` &&
      cells[5].innerHTML === `${player}` &&
      cells[8].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[0].innerHTML === `${player}` &&
      cells[4].innerHTML === `${player}` &&
      cells[8].innerHTML === `${player}`) ||
    (isGameOver !== true &&
      cells[2].innerHTML === `${player}` &&
      cells[4].innerHTML === `${player}` &&
      cells[6].innerHTML === `${player}`)
  ) {
    if (player === "X") {
      res.innerHTML = "You win!";
      isGameOver = true;
      button.hidden = false;

      // Color Background
      colorCells(4, 5, 6, "success", "X");
      colorCells(7, 8, 9, "success", "X");
      colorCells(1, 4, 7, "success", "X");
      colorCells(1, 2, 3, "success", "X");
      colorCells(2, 5, 8, "success", "X");
      colorCells(3, 6, 9, "success", "X");
      colorCells(1, 5, 9, "success", "X");
      colorCells(3, 5, 7, "success", "X");
    } else {
      res.innerHTML = "You lose!";
      isGameOver = true;
      button.hidden = false;
      colorCells(4, 5, 6, "danger", "O");
      colorCells(7, 8, 9, "danger", "O");
      colorCells(1, 4, 7, "danger", "O");
      colorCells(1, 2, 3, "danger", "O");
      colorCells(2, 5, 8, "danger", "O");
      colorCells(3, 6, 9, "danger", "O");
      colorCells(1, 5, 9, "danger", "O");
      colorCells(3, 5, 7, "danger", "O");
    }
  }
}

function colorCells(pos1, pos2, pos3, color, player) {
  if (
    cells[pos1 - 1].innerHTML === `${player}` &&
    cells[pos2 - 1].innerHTML === `${player}` &&
    cells[pos3 - 1].innerHTML === `${player}`
  ) {
    cells[pos1 - 1].classList.add(`bg-${color}`);
    cells[pos2 - 1].classList.add(`bg-${color}`);
    cells[pos3 - 1].classList.add(`bg-${color}`);
  }
}
