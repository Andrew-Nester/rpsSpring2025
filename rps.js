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
function playerSelect(){
    let b = prompt("Rock Paper or Scissors")
    if (b == "Rock" || b == "rock"){
        playerPlay = "Rock"
    } else if (b == "Scissors" || b == "scissors"){
        playerPlay = "Scissors"
    } else if (b == "Paper" || b == "paper"){
        playerPlay= "Paper"
    } else{
        console.log("How bad are you a rps?? Is that even possible")
    }
}
}
while (playerWins  < 5 || computerWins < 5){
    playerSelect()
    computerSelect()
    if (computerPlay = "Rock"){
        if (playerPlay = "Rock"){
            console.log("you tied Rock is neutral to Rock")
        } else if (playerPlay = "Paper"){
            console.log( "you win Paper beats Rock")
            playerWins = playerWins + 1
        }else{
            console.log( "you lose Scissors beats Paper")
            computerWins = computerWins + 1
        }
    }
    if (computerPlay = "Paper"){
        if (playerPlay = "Paper"){
            console.log("you tied Paper is neutral to Paper")
        } else if (playerPlay = "Rock"){
            console.log( "you lose Paper beats Rock")
            computerWins = computerWins + 1
        }else{
            console.log( "you win Scissors beats Paper")
            playerWins = playerWins + 1
        }
}
if (computerPlay = "Scissors"){
    if (playerPlay = "Scissors"){
        console.log("you tied Scissors is neutral to Scissors")
    } else if (playerPlay = "Paper"){
        console.log( "you lose Scissors beats paper")
        computerWins = computerWins + 1
    }else{
        console.log( "you win Rock beats Scissors")
        playerWins = playerWinsWins + 1
    }
}
}