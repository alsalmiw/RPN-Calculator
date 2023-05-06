import * as readline from "node:readline";
import helperMessage from "./tools/helperMessage";
import colors from "colors";
import getIsSingleLineOperationValid from "./tools/getSingleLineOperationValid";
import rpnCalculator from "./tools/rpnCalculator";

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


function handleUserInput(input: string) {
  let resultStack: number[] = [];

  if (input === "h" || input === "--help") {
    return console.log(colors.blue(helperMessage()));
  }
  if (input === "q" || input === "--quit") {
    console.log(colors.green(`Thank you!`));
    rl.close();
    return process.exit(0);
  }
  if (input === "c" || input === "--clear") {
    resultStack = [];
    return console.log(colors.green(`Calculator cleared`));
  }

  const filteredInput = input.split(" ").filter((item) => item !== "");

  const isSingleLineOperation = filteredInput.length >= 3;
  console.log('is single line', isSingleLineOperation);
  if (isSingleLineOperation) {
    // do single line operation
    const isOperationValid = getIsSingleLineOperationValid(input);
    if (isOperationValid) {
      const singleLineOperation = rpnCalculator(resultStack, filteredInput);
      resultStack.push(singleLineOperation[singleLineOperation.length - 1]);
      console.log(colors.green(`${singleLineOperation[singleLineOperation.length - 1]}`));
    }
    return;
  } else {
    // do multi line operation

    const multiLineOperationResult = rpnCalculator(resultStack, filteredInput);
    resultStack.push(multiLineOperationResult[multiLineOperationResult.length - 1]);
    console.log(colors.green(`${multiLineOperationResult.length - 1}`));
    return;
  }
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
