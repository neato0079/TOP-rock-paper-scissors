console.log(Math.floor(Math.random() * 3))

let playerSelection = 'scissors'

const winsAgainst = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
    
}

for (const key in winsAgainst) {
    if (playerSelection  == key){
        playerSelection = key
        console.log('it worked')
    }
}

console.log(winsAgainst[playerSelection])