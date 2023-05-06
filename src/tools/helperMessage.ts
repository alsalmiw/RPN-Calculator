export default function helperMessage(): string {
  return `
---------------** RPN Calculator **--------------
Usage:
  npm run start         Start the calculator
Options:
  h, -help            Print this help message
  q, -quit            Quit the calculator
  c, -clear           Clear the calculator state
Commands:
  +                     Add two numbers
  -                     Subtract two numbers
  *                     Multiply two numbers
  /                     Divide two numbers

Examples:
- Single line operation:
  > 5 5 +               # Outputs: 10
  > 6 4 -               # Outputs:  2
  > 5 5 3 * +           # Outputs: 28
- Multi line operation:
  > 5                   # Outputs: You first number is 5, enter your second number
  > 10                  # Outputs: You second number is 10, enter your operator
  > +
  15                    # Outputs: 15          
  `
}