/*-------------------------------------------------------------------------------
# Name:        module 3 / Question #4
# Purpose:     This program assigns grades based on students' scores
# Author:      Gloire Kanda
# Created:     02/26/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

// Prompt the user to enter a number between 1 and 100
let score = parseInt(prompt("Enter a number between 1 and 100:"));

// Flag variable

let isTrue = true

// Check if the entered score is between 1 and 100
if (score >= 1 && score <= 100) {
    // Evaluate the score and provide the corresponding message using a switch statement
    switch (isTrue) {
        case (score >= 90 && score <= 100):
            console.log("You received an A")
            break
        case (score >= 80 && score < 90):
            console.log("You received a B")
            break
        case (score >= 70 && score < 80):
            console.log("You received a C")
            break
        case (score >= 60 && score < 70):
            console.log("You received a D")
            break
        default:
            console.log("You received an F")
    }
} 

else {
    console.log("Only numbers between 1 and 100 are accepted.")
}