let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=> {
    const options = ["stone", "paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice,compChoice ) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playgame = (userChoice) => {
   
   const compChoice = genCompChoice();


if(userChoice === compChoice) {
    drawGame();

} else {
    let userWin = true ;
    if (userChoice === "stone"){
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin =  compChoice === "stone" ? false :true;
    }
    showWinner(userWin, userChoice, compChoice);
 }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice =choice.getAttribute("id")
        playgame(userChoice);
    })
})