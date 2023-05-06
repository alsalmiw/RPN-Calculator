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
