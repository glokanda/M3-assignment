/*-------------------------------------------------------------------------------
# Name:        module 3 / Question #2
# Purpose: Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version 
of "Hello World" for the given language within the console window
# Author:      Gloire Kanda
# Created:     02/26/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

// Prompts the user to enter a language code
let userEntry = prompt("Enter one of the language codes ('es', 'de', 'en', and 'fr'): ")

// Use a conditional to display the translated version
if (userEntry === 'es'){

    alert("Hello World translated in Spanish is : Hola Mundo")
}

else if(userEntry === "de"){

    alert("Hello World translated in German is: Hallo Welt")
}

else if(userEntry=== "fr") {
    alert("Hello World translated in French is: Bonjour le monde")
}


else  {

    alert("Hello World!")
} 

