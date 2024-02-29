/*-------------------------------------------------------------------------------
# Name:        module 3 / Question #3
# Purpose: This program  simulates the tossing of a coin and to display the results
# Author:      Gloire Kanda
# Created:     02/26/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

let randonNum = Math.round(Math.random()) // Creates a variable randomNum 
let coinFlip = randonNum // Creates a variable coinFlip and set it equal to a random number


// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
let choice = prompt("Select Heads or Tails")

// Use a conditional to determine the result of the coin flip

if (coinFlip < 0.5) {
    coinFlip = "Heads"
} 
else {
    coinFlip = "Tails"
}


// Check if the user's choice matches the result of the coin flip and display the result
if ((coinFlip === "Heads" && choice === "Heads") || (coinFlip === "Tails" && choice === "Tails")) {
    alert(`The flip was ${coinFlip} and you chose ${choice}...you win!`)
} 
else {
    alert(`The flip was ${coinFlip} but you chose ${choice}...you lose!`)
}



