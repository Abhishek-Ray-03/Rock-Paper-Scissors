let userScore=0;
let compScore=0;
const userScoreBoard=document.querySelector("#userScoreBoard")
const compScoreBoard=document.querySelector("#compScoreBoard")
const choices=document.querySelectorAll(".img");
const msg=document.querySelector("#msg");
const msgBox=document.querySelector(".inst");
const gencompChoice= ()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userChoice)=>{
    const compChoice=gencompChoice();
    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin=1;
        if(userChoice==="rock"){
            userWin=(compChoice==="paper")?0:1;
        }
        else if(userChoice==="paper"){
            userWin=(compChoice==="scissors")?0:1;
        }
        else{
            userWin=(compChoice==="rock")?0:1;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};
const drawGame=(userChoice,compChoice)=>{
    msg.innerText=`Game was Drawn.
    Computer chose:${compChoice} .
    Play Again!`;
    msgBox.style.backgroundColor="yellow";
    msg.style.color="black";
};
const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
         userScoreBoard.innerText=userScore;
         msg.innerText=`You Won!
          Computer chose: ${compChoice}.
          Your ${userChoice} beats computer's ${compChoice}.`;
         msgBox.style.backgroundColor="rgb(86, 243, 86)";
     }
     else{
        compScore++;
        compScoreBoard.innerText=compScore;
        msg.innerText=`You Lose.
        Computer chose: ${compChoice}.
        Computer's ${compChoice} beats yours ${userChoice}.`;
        msgBox.style.backgroundColor="rgb(244, 69, 45)";
     }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
