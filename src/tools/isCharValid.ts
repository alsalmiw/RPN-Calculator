import errorMessage from "./errorMessage";
import isNumber from "./isNumber";
import isOperator from "./operations";
import colors from "colors";

export default function isCharValid(value: string[]): boolean {
  const isEveryCharValid = value.every(
    (item) => isOperator(item) || isNumber(item)
  );
  if (!isEveryCharValid) {
    console.log(colors.red(errorMessage(`Invalid character`)));
  }
  return isEveryCharValid;
}
