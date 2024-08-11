let choices = [
    "rock",
    "paper",
    "scissors",
]

let humanScore = 0
let computerScore = 0

let roundCount = 1

let outcomes = {
    rock: {
        rock:{
            result: "It's a tie. Play again",
            score: ()=>{score(0,0)}
        },
        paper:{
            result: "You lose. Paper Beats Rock",
            score: ()=>{score(0,1)}
        },
        scissors:{
            result: "You Win! Rock beats scissors.",
            score: ()=>{score(1,0)}
        }
    },
    paper: {
        rock:{
            result: "You win! Paper beat rock",
            score: ()=>{score(1,0)}
        },
        paper:{
            result: "It's a tie. Play again",
            score: ()=>{score(0,0)}
        },
        scissors:{
            result: "You lose. Scissors beats pater",
            score: ()=>{score(0,1)}
        }
    },
    scissors: {
        rock:{
            result: "You lose. Rock beats scissors",
            score: ()=>{score(0,1)}
        },
        paper:{
            result: "You win! Scissors beats paper",
            score: ()=>{score(1,0)}
        },
        scissors:{
            result: "It's a tie. Play again",
            score: ()=>{score(0,0)}
        }
    },
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    if(choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice
    }
    else{
        getHumanChoice()
    }
}

function playRound(humanChoice,computerChoice){
    alert(outcomes[humanChoice][computerChoice].result)
    outcomes[humanChoice][computerChoice].score()
    console.log(humanScore,computerScore)
}

function score(human,compy){
    humanScore = humanScore + human
    computerScore = computerScore + compy
}

//New Button Driven Logic
const choiceButtons = document.querySelectorAll('.choiceButton')
choiceButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        playRound(e.target.id,getComputerChoice())
    })
});

