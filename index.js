function computerPlay(){
    //return rock paper or scissors
    const rpsChoices = ['rock', 'paper', 'scissors']
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    //compare player vs cpu to see who wins
    //return a score for player or cpu
    playerScore += 1
}


function game(){
    //plays for 5 rounds
    //takes playRound() output and adds to score

    // initialize scores
    let playerScore = 0;
    let computerScore = 0;

    // initialize selections
    let playerSelection = 'rock'
    let computerSelection = computerPlay();

    // main game loop
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
     }

    // set win/lose conditions 
    if(playerScore < computerScore){
        console.log(`Computer's score:${computerScore} \nYour score:${playerScore} \nYou lose!`)
    }else{
        console.log(`Computer's score:${computerScore} \nYour score:${playerScore} \nYou win!`)
    }
}

const word = 'HELLO'

console.log(computerPlay())