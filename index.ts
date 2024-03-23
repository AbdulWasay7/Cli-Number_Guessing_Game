#! /usr/bin/env node
import inquirer from "inquirer";

const RandomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        message:"Please Guess a Number between 1 to 6:" + " ",
        name: "User_GuessedNumber",
        type: "number",
    }
]);
console.log("System Random Number: " + RandomNumber);
if (answer.User_GuessedNumber === RandomNumber) {
    console.log("Congratulations! You Guessed Right Number");
    
} else {
    console.log("You Guessed Wrong Number\n"+ "Try Again");
    
}