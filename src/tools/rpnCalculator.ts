import errorMessage from "./errorMessage";
import isNumber from "./isNumber";
import isOperator, { OPERATORS } from "./operations";
import colors from "colors";

// 5 + 3 * 6 - (5 / 3) + 7
// 5 3 6 * + 5 3 / - 7 +

// 5 5 5 8 + + -
// 5 5 13 + -
// 5 18 - (a-b)
// -13

// 2 88 6 44 9 * - + /
// 2 88 6 396 - + /
// 2 88 390 + /
// 2 478 /

// 5 9 1 - /
// 5 8 /  ==> 5/8 (a/b)
// 0.625

// 22 3 76 9 8 - + + /
// 22 3 76 1 + + /
// 22 3 77 + /
// 22 80 /
// 0.275

// 5 5 + 7 -
// 10 7 -
// 3

// 6 7 88 9 - + 0 - *
// 6 7 79 + 0 - *
// 6 86 0 - *
// 6 86 *
// 516

/**
 * Performs a single line operation after it has been validated and returns the result
 * @param {string} tokenArr
 * @returns {number}
 */
export default function rpnCalculator(stack: number[], tokenArr: string[]): number[] {

  // first get numbers into a stack
  // if it is an operator, pop the last two numbers from the stack and do the operation then return the result to the stack


  tokenArr.forEach((item: string) => {
    if (isOperator(item)) {
      const lastNumber = stack.pop();
      const secondLastNumber = stack.pop();
      if (lastNumber === undefined || secondLastNumber === undefined) {
       console.log(colors.red(errorMessage(`Invalid Operation. Not enough operands`)))
        return [];
      }
      const result = OPERATORS[item](secondLastNumber, lastNumber);
      stack.push(result);
    } else {
      if(!isNumber(item)) {
        console.log(colors.red(errorMessage(`Invalid character`)));
        return;
      }
      stack.push(Number(item));
    }
  });
  
  return stack
}
