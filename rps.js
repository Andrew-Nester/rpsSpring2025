/*
Have an input for the user to type "rock" + "paper" + "scissors"
Store the prompt to a variable

Have a selection option for the comuter (Math.Random)
Save to a variable and multiply by 3
If 0-1 Rock
1-2 Paper
2-3 Scissors
save this result to a variable

9 outcomes 
r -> r
r -> p
r -> s
p -> r
p -> p
p -> s
s -> r
s -> p
s -> s

make the first to five by making to variables
give the appropriate code based on result
*/
let playerWins = 0
let computerWins = 0
let playerPlay = 0
let computerPlay = 0
function computerSelect(){
    let a = Math.random()
    a = a * 3
    if (a >= 0 && a < 1){
        computerPlay = "Rock"
    }
    if (a >= 1 && a < 2){
        computerPlay = "Scissors"
    }
    if (a >= 2 && a <= 3){
        computerPlay = "Paper"
    }
}
function playerSelect(){
        let b = prompt("Rock Paper or Scissors")
        playerPlay = b.toLowerCase()
}
while(playerWins < 5 && computerWins < 5){
    playerSelect()
    computerSelect()
        if (playerPlay == "rock" || playerPlay == "paper" || playerPlay == "scissors"){
        console.log(`You played: ${playerPlay}`)
        console.log(`Computer played: ${computerPlay}`)
        if (computerPlay == "Rock"){
            if (playerPlay == "rock"){
                console.log("you tied rock is neutral to rock")
            } else if(playerPlay == "paper"){
                console.log("you win Paper beats rock")
                playerWins = playerWins + 1
            } else if(playerPlay == "scissors"){
                console.log("you lose scissors loses to rock")
                computerWins = computerWins + 1
            }
        }
        if (computerPlay == "Paper"){
            if (playerPlay == "rock"){
                console.log("you lose rock loses to paper")
                computerWins = computerWins + 1
            } else if(playerPlay == "paper"){
                console.log("you tied paper is neutral to paper")
            } else if( playerPlay == "scissors"){
                console.log("you win scissors beats paper")
                playerWins = playerWins + 1 
            } 
        }
        if (computerPlay == "Scissors"){
            if (playerPlay == "rock"){
                console.log("you win Rock beats scissors")
                playerWins = playerWins + 1
            } else if (playerPlay == "paper"){
                console.log("you lose paper loses to scissors")
                computerWins = computerWins +1
            } else if (playerPlay == "scissors"){
                console.log("you tied scissors are neutral to scissors")
            }
        }
    console.log (`player wins ${playerWins}`)
    console.log (`computer wins ${computerWins}`)
    } else {
        console.log("You MUST choose rock, paper or scissors")
    }
}
