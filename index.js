import inquirer from "inquirer";
import chalk from 'chalk';
let welcome;
console.log(chalk.greenBright("Welcome To Simple Calculator\n"));
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: chalk.blue("Enter your frist number:")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.blue("Enter your second number:")
    },
    {
        type: "list",
        name: "Operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator:\n "
    }
]);
const { numberOne, numberTwo, Operator } = answer;
if (numberOne && numberTwo && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (Operator === "-") {
        result = numberOne - numberTwo;
    }
    if (Operator === "/") {
        result = numberOne / numberTwo;
    }
    if (Operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log(chalk.red("Your result is: "), +result);
}
else {
    console.log("Please enter valid input");
}
