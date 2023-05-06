import * as readline from "node:readline";
import helperMessage from "./tools/helperMessage";
import colors from "colors";
import getIsSingleLineOperation from "./tools/singleLineOperation/getIsSingleLineOperation";
import getIsSingleLineOperationValidation from "./tools/singleLineOperation/getSingleLineOperationValidation";
import getSingleLineOperationResult from "./tools/singleLineOperation/getSingleLineOperationResult";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// steps:   
// 1. get input from user
// 2. check if input is valid
// 3. if valid, check operation type
// 3.1 if single line operation, do single line operation
// 3.1.1 if single line operation is valid, do single line operation
// 3.2 if multi line operation, do multi line operation
// 3.2.1 if multi line operation is valid, do multi line operation
// 4. if not valid, show error message
// 5. if input is -h or --help, show helper message
// 6. if input is -q or --quit, exit the program
// 7. if input is -c or --clear, clear the calculator


function handleUserInput(input: string) {
  let result = 0;
  console.log(typeof input, input);
  if (input === "-h" || input === "--help") {
    return console.log(colors.blue(helperMessage()));
  }
  if (input === "-q" || input === "--quit") {
    console.log(colors.green(`Thank you!`));
    return rl.close();
  }
  if (input === "-c" || input === "--clear") {
    result = 0;
    return console.log(colors.green(`Calculator cleared | result = ${result}`));
  }

  const isSingleLineOperation = getIsSingleLineOperation(input);
    if (isSingleLineOperation) {
        // do single line operation
        const isOperationValid = getIsSingleLineOperationValidation(input);
        if(isOperationValid){
          const singleLineOperationResult = getSingleLineOperationResult(input);
        }
      console.log(colors.green(`Single line operation, is valid: ${isOperationValid}`));
      return;
    }else {
        // do multi line operation
      console.log(colors.green(`Multi line operation`));
      return;
    }
  
}
rl.question(
  colors.blue(
    `Welcome to reverse polish notation (RPN) calculator  ${helperMessage()} `
  ),
  handleUserInput
);

rl.on("line", (answer: string) => {
  handleUserInput(answer);
});
