import errorMessage from "./errorMessage";
import isOperator, { OPERATORS } from "./operations";
import colors from "colors";

/**
 * Stacks numbers into the passed stack array and performs the calculation. The token array must be validated beforhand. Returns the stack.
 * @param {number[]} stack
 * @param {string[]} tokenArr
 * @returns {number[]}
 */
export default function rpnCalculator(
  stack: number[],
  tokenArr: string[]
): number[] {
  let isError = false;
  tokenArr.forEach((item: string) => {
    if (isOperator(item)) {
      const lastNumber = stack.pop();
      const secondLastNumber = stack.pop();
     
      if (lastNumber === undefined || secondLastNumber === undefined) {
        console.log(
          colors.red(
            errorMessage(
              `Invalid Operation. Not enough numbers in stack, stack cleared`
            )
          )
        );
        isError = true;
        return;
      }
      const result = OPERATORS[item](secondLastNumber, lastNumber);
      if(isNaN(result) || !isFinite(result)){
        console.log(colors.red(errorMessage(`Calculator Error. Stack cleared`)));
        isError = true;
        return;
      }
      
      stack.push(result);
    } else {
      stack.push(Number(item));
    }
  });
  return !isError ? stack : [];
}
