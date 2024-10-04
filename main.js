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
        if (this.count % 2 === 1) {
          cell.textContent = "O";
          cell.style.color = "red";
        } else {
          cell.textContent = "X";
          cell.style.color = "green";
        }
        cell.classList.add("block");
        this.winer("Выйграли X", "X");
        this.winer("Выйграли O", "O");
        /* this.winer("Ничья", "Н"); */
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
    const cellAll = document.querySelectorAll(".cell");
    if (
      cellAll[0].textContent === XO &&
      cellAll[1].textContent === XO &&
      cellAll[2].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[0].textContent === XO &&
      cellAll[3].textContent === XO &&
      cellAll[6].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[6].textContent === XO &&
      cellAll[7].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[2].textContent === XO &&
      cellAll[5].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[0].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[8].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[2].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[6].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
      cellAll[3].textContent === XO &&
      cellAll[4].textContent === XO &&
      cellAll[5].textContent === XO
    ) {
      finishWindow(text);
    }

    if (
        cellAll[1].textContent === XO &&
        cellAll[4].textContent === XO &&
        cellAll[7].textContent === XO
      ) {
        finishWindow(text);
      }

    const cellBlock = document.querySelectorAll(".block");
    if (cellBlock.length === 9) {
        confirm('Ничья')
        restartGame()
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

function finishWindow (text) {
  setTimeout(() => {
    confirm(text);
    restartGame();
  }, 100);
}

function restartGame() {
  startGameTwoBtn.style.display = "block";
  startGameCompBtn.style.display = "block";
  document.querySelector(".play-fild").remove();
}

function randomCell() {
  const cellAll = document.querySelectorAll(".empty");
  const randomCell = Math.floor(Math.random() * cellAll.length);
  cellAll[randomCell].textContent = "O";
  cellAll[randomCell].style.color = "red";
  cellAll[randomCell].classList.add("block");
  cellAll[randomCell].classList.remove("empty");
  game.winer("Выйграли O", "O");
}
