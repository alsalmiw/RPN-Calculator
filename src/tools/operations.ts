type OperatorFunction = (a: number, b: number) => number;

type OperatorMap = {
  [operator: string]: OperatorFunction;
};

export const OPERATORS: OperatorMap = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
};

/**
 * Evaluates a string character to see if it is an operator.
 * @param {string} operator   
 * @returns {boolean} 
 */
export default function isOperator(operator: string): boolean {
  return operator in OPERATORS;
}