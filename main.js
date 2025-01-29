import { modalWindow } from "./modalWindow.js";

class Game {
  constructor(container, count) {
    this.container = container;
    this.count = count;
  }

  createGame() {
    const playFild = document.createElement("div");
    playFild.classList.add("play-fild");
    for (let i = 1; i <= 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", "empty");
      playFild.append(cell);
    }

    this.container.append(playFild);
  }

  logicPeopleGame() {
    const cellAll = document.querySelectorAll(".cell");
    cellAll.forEach((cell) => {
      this.count = 1;
      cell.addEventListener("click", () => {
        this.count++;
        cell.classList.add("block");
        if (this.count % 2 === 1) {
          cell.textContent = "O";
          cell.style.color = "red";
          this.winer("Выйграли O", "O");
        } else if (this.count % 2 === 0) {
          cell.textContent = "X";
          cell.style.color = "green";
          this.winer("Выйграли X", "X");
        } else {
          this.winer("Ничья", null);
        }
      });
    });
  }

  logicCompGame() {
    const cellAll = document.querySelectorAll(".cell");
    cellAll.forEach((cell) => {
      this.count = 1;

      cell.addEventListener("click", () => {
        cell.textContent = "X";
        cell.style.color = "green";
        cell.classList.remove("empty");
        cell.classList.add("block");

        setTimeout(() => {
          randomCell();
        }, 100);

        this.winer("Выйграли X", "X");
      });
    });
  }

  winer(text, XO) {
    let winXorO = false;
    const cellAll = document.querySelectorAll(".cell");
    if (
      cellAll[0].textContent === XO &&
      cellAll[1].textContent === XO &&
      cellAll[2].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[0].textContent === XO &&
      cellAll[3].textContent === XO &&
      cellAll[6].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[6].textContent === XO &&
      cellAll[7].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[2].textContent === XO &&
      cellAll[5].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[0].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[2].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[6].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[3].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[5].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    if (
      cellAll[1].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[7].textContent === XO
    ) {
      winXorO = true;
      finishWindow(text);
      return;
    }

    const cellBlock = document.querySelectorAll(".block");
    if (winXorO === false && cellBlock.length === 9) {
      finishWindow("Ничья");
    }
  }
}

const game = new Game(document.getElementById("container"), 1);

const startGameTwoBtn = document.querySelector(".start-game-two");
const startGameCompBtn = document.querySelector(".start-game-comp");

startGameTwoBtn.addEventListener("click", () => {
  startGameTwoBtn.style.display = "none";
  startGameCompBtn.style.display = "none";
  game.createGame();
  game.logicPeopleGame();
});

startGameCompBtn.addEventListener("click", () => {
  startGameTwoBtn.style.display = "none";
  startGameCompBtn.style.display = "none";
  game.createGame();
  game.logicCompGame();
});

function finishWindow(text) {
  switch (text) {
    case "Выйграли X":
      text = text.replace("Выйграли X", "Выйграли крестики");
      break;
    case "Выйграли O":
      text = text.replace("Выйграли O", "Выйграли нолики");
      break;
  }

  setTimeout(() => {
    modalWindow(text);
    restartGame();
  }, 100);
}

function restartGame() {
  const btnRestartGame = document.createElement("button");
  btnRestartGame.classList.add("btn");
  btnRestartGame.textContent = "Сыграть ещё раз";
  const cellAll = document.querySelectorAll(".cell");
  cellAll.forEach((cell) => cell.classList.add("block"));
  document.querySelector(".btn-group").append(btnRestartGame);
  btnRestartGame.addEventListener("click", () => {
    document.querySelector(".play-fild").remove();
    location.reload();
  });
}

function randomCell() {
  const cellAll = document.querySelectorAll(".empty");
  const cellAllBlock = document.querySelectorAll(".block");
  const randomCell = Math.floor(Math.random() * cellAll.length);
  if (cellAllBlock.length === 9) return
  cellAll[randomCell].textContent = "O";
  cellAll[randomCell].style.color = "red";
  cellAll[randomCell].classList.add("block");
  cellAll[randomCell].classList.remove("empty");
  game.winer("Выйграли O", "O");
}
