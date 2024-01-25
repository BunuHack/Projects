let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    // console.log("Choice Was Clicked ", userChoice);
  });
});

const geneCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const gameDraw = () => {
  //   console.log("Game Was Draw");
  msg.innerText = ` Game Was Draw ! Play Again `;
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win ");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You lose ");
    msg.innerText = `You Lose! Computer ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  //   console.log("User Choice = ", userChoice);
  const compChoice = geneCompChoice();
  //   console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
