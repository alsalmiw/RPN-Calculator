export default function helperMessage(): string {
  return `
---------------** RPN Calculator **--------------
Usage:
  npm run start         Start the calculator
Options:
  -h, --help            Print this help message
  -q, --quit            Quit the calculator
  -c, --clear           Clear the calculator state
Commands:
  +                     Add two numbers
  -                     Subtract two numbers
  *                     Multiply two numbers
  /                     Divide two numbers

  >
  `
}