// initialize scores
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    //return rock paper or scissors
    const rpsChoices = ['rock', 'paper', 'scissors']
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    const winsAgainst = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
        
    }

    //sets playerSelection to key in winsAgainst object
    for (const key in winsAgainst) {
        if (playerSelection  == key){
            playerSelection = key
        }
    }

    //compare player vs cpu to see who wins
    if(winsAgainst[playerSelection] == computerSelection){
        playerScore += 1
    }else if(playerSelection == computerSelection){
        playerScore += 0
    }else{
        computerScore += 1
    }
    //return a score for player or cpu
}

function game(){
    //plays for 5 rounds
    //takes playRound() output and adds to score


    
    // main game loop
    for (let i = 0; i < 5; i++) {
        // initialize selections
        let playerSelection = 'rock'
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        console.log(`Your choice: ${playerSelection}\nComputer's choice: ${computerSelection}\n\nRound ${i} finished!\n`)
     }

    // set win/lose conditions 
    if(playerScore < computerScore){
        console.log(`Computer's score:${computerScore} \nYour score:${playerScore} \nYou lose!`)
    }else if(playerScore == computerScore){
        console.log(`Computer's score:${computerScore} \nYour score:${playerScore} \nIt's a draw!`)
    }else{
        console.log(`Computer's score:${computerScore} \nYour score:${playerScore} \nYou win!`)
    }
}



game()