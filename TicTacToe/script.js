let boxes = document.querySelectorAll("#box");
let resetbtn = document.querySelector(".resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newgamebtn");

let turnX = true;
let count = 0;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnX = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }

    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }

    checkWinner();

  });
});

const gameDraw = () => {
  msg.innerText = `The Game Was Draw ! `;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1Val = boxes[pattern[0]].innerText;
    let position2Val = boxes[pattern[1]].innerText;
    let position3Val = boxes[pattern[2]].innerText;

    if (position1Val != "" && position2Val != "" && position3Val != "") {
      if (position1Val === position2Val && position2Val === position3Val) {
        showWinner(position1Val);

        return true;
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);