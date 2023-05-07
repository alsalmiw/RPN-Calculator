/**
 * A helper message to be displayed when the user types '-help' or '-h'.
 * @returns {string}
 */
export default function helperMessage(): string {
  return `
-----------------** RPN Calculator **----------------
Usage:
  npm run start         Start the calculator
Options:
  h, -help              Print this help message
  q, -quit              Quit the calculator
  c, -clear             Clear the calculator state
  s, -show              Toggle show the stack after 
                        each operation
Commands:
  +                     Add two numbers
  -                     Subtract two numbers
  *                     Multiply two numbers
  /                     Divide two numbers
Example:
  > 5 5 +               # result: 10
  > 6 4 -               # result:  2
  > 5 5 3 * +           # result: 20
  > +                   # result: 22
  > 5 -                 # result: 17
------------------------------------------------------

  `
}