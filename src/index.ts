import * as readline from "node:readline";
import helperMessage from "./tools/helperMessage";
import colors from "colors";
import rpnCalculator from "./tools/rpnCalculator";
import isCharValid from "./tools/isCharValid";
import isOperationValid from "./tools/isOperationValid";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// steps:
// 1. get input from user
// 2. check if input is valid
// 3. if valid, check operation type
// 3.2 if multi line operation, do multi line operation
// 3.2.1 if multi line operation is valid, do multi line operation
// 4. if not valid, show error message
let resultStack: number[] = [];

function handleUserInput(input: string) {
  if (input === "h" || input === "-help") {
    return console.log(colors.blue(helperMessage()));
  }
  if (input === "q" || input === "-quit") {
    console.log(colors.green(`Thank you!`));
    rl.close();
    return process.exit(0);
  }
  if (input === "c" || input === "-clear") {
    resultStack = [];
    return console.log(colors.green(`Calculator cleared`));
  }

  const filteredInput = input.split(" ").filter((item) => item !== "");

  const _isOperationValid = isOperationValid(filteredInput);
  if (!_isOperationValid) {
    resultStack = [];
    return;
  }
  resultStack = rpnCalculator(resultStack, filteredInput);
  console.log(colors.green(`result: ${resultStack}`));
  console.log("result stack array", resultStack);
}

rl.question(
  colors.blue(
    `Welcome to Reverse Polish Notation (RPN) Calculator  ${helperMessage()} `
  ),
  handleUserInput
);

rl.on("line", (answer: string) => {
  handleUserInput(answer);
});
