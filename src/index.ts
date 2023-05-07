import * as readline from "node:readline";
import helperMessage from "./tools/helperMessage";
import colors from "colors";
import rpnCalculator from "./tools/rpnCalculator";
import isOperationValid from "./tools/isOperationValid";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resultStack: number[] = [];
let showStack = false;

function handleHelp() {
  console.log(colors.blue(helperMessage()));
}

function handleQuit() {
  console.log(colors.green(`Thank you!`));
  rl.close();
  process.exit(0);
}

function handleClear() {
  resultStack = [];
  console.log(colors.green(`calculator cleared`));
}

function handleShow() {
  showStack = !showStack;
  console.log(
    colors.blue(showStack ? "show stack enabled" : "show stack disabled")
  );
}
type Commands = {
  [operator: string]: () => void;
};

const COMMANDS: Commands = {
  h: handleHelp,
  "-help": handleHelp,
  q: handleQuit,
  "-quit": handleQuit,
  c: handleClear,
  "-clear": handleClear,
  s: handleShow,
  "-show": handleShow,
};

function handleUserInput(input: string) {
  if (input in COMMANDS) {
    COMMANDS[input]();
    return;
  }

  const filteredInput = input.split(" ").filter((item) => item !== "");

  const _isOperationValid = isOperationValid(filteredInput);
  if (!_isOperationValid) {
    return;
  }
  resultStack = rpnCalculator(resultStack, filteredInput);
  if (showStack) {
    console.log(colors.blue("stack: "), resultStack);
  }
  const lastIndex = resultStack.length - 1;
  if (lastIndex < 0) {
    return;
  }
  const lastNumber = resultStack[lastIndex].toString().includes(".")
    ? resultStack[lastIndex]
    : resultStack[lastIndex].toFixed(1);
  console.log(colors.green(`result: ` + lastNumber));
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
