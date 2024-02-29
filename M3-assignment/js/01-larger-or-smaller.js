/*-------------------------------------------------------------------------------
# Name:        module 3/ Question #1
# Purpose: Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window.
# Author:      Gloire Kanda
# Created:     02/26/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

// Prompt user to enter the numbers
let number1 = parseInt(prompt("Enter the first number: "))
let number2 = parseInt(prompt("Enter the second number: "))

// Use a conditional to determine the larger number or equal number
if(number1 > number2){
    alert(`${number1} is larger than ${number2}`)
}

else if(number1 === number2){
    alert(`${number1} is equal to ${number2}.`)
}

else{

   alert(`${number2} is larger than ${number1}`)
}


