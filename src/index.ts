import * as readline from "node:readline";
import helperMessage from "./tools/helperMessage";
import colors from "colors";
import getIsSingleLineOperation from "./tools/getIsSingleLineOperation";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


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
