let choices = [
    "rock",
    "paper",
    "scissors",
]

let humanScore = 0
let computerScore = 0

let roundCount = 0

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

const scoreBoard = document.querySelector('.scoreboard')
const message = document.querySelector('.info')

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
    message.textContent = outcomes[humanChoice][computerChoice].result
    outcomes[humanChoice][computerChoice].score()
}

function score(human,compy){
    humanScore = humanScore + human
    computerScore = computerScore + compy

    roundCount += 1
    scoreBoard.textContent = `You:${humanScore} Computer:${computerScore} Round:${roundCount}/5`
    if(roundCount == 5){
        if(humanScore > computerScore){
            alert("You Win!!!")
        }
        else if(computerScore > humanScore){
            alert("Sorry,  you loose. Better luck next time")
        }
        else{
            alert("It's a tie")
        }
        endGame()
    }
}

function endGame(){
    humanScore = 0
    computerScore = 0
    roundCount = 0
    scoreBoard.textContent = `You:${humanScore} Computer:${computerScore} Round:${roundCount}/5`
    message.textContent = "Let's play some rock, paper, scissors!"
}

//New Button Driven Logic
const choiceButtons = document.querySelectorAll('.choiceButton')
choiceButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        playRound(e.target.id,getComputerChoice())
    })
});

scoreBoard.textContent = `You:${humanScore} Computer:${computerScore} Round:${roundCount}/5`

message.textContent = "Let's play some rock, paper, scissors!"

