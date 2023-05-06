import isOperator, { OPERATORS } from "./operations";

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

/**
 * Performs a single line operation after it has been validated and returns the result
 * @param {string} operationArray
 * @returns {number}
 */
export default function rpnCalculator(operationArray: string[]): number {

  // first get numbers into a stack
  // if it is an operator, pop the last two numbers from the stack and do the operation then return the result to the stack

  const numberStack: number[] = [];
  operationArray.forEach((item: string) => {
    if (isOperator(item) && numberStack.length > 1) {
      const lastNumber = numberStack.pop();
      const secondLastNumber = numberStack.pop();
      if (lastNumber === undefined || secondLastNumber === undefined) {
        throw new Error("Invalid operation");
      }
      const result = OPERATORS[item](secondLastNumber, lastNumber);
      numberStack.push(result);
    } else {
      numberStack.push(Number(item));
    }
  });

  return numberStack[0];
}
