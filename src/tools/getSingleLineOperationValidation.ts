import colors from "colors";
import isNumber from "./isNumber";
import errorMessage from "./errorMessage";
import isOperator from "./isOperator";
import removeEmptySpaces from "./removeEmptySpaces";

/**
 * Evaluates a string to see if it is a valid single line operation.
 * This is a pre-requisite for the operation
 * @param {string} value
 * @returns {boolean}
 */
export default function getIsSingleLineOperationValidation(
  value: string
): boolean {
  // remove empty spaces first
  const operation = removeEmptySpaces(value);

  // are characters either operators or numbers?
  const isEveryCharValid = operation
    .split(" ")
    .every((item) => isOperator(item) || isNumber(item));
  if (!isEveryCharValid) {
    console.log(colors.red(errorMessage(`Invalid character`)));
    return isEveryCharValid;
  }

  // is the structure valid?

  // are there more operators than numbers?
  const numberOfOperators = operation
    .split(" ")
    .filter((item) => isOperator(item)).length;
  const numberOfNumbers = operation
    .split(" ")
    .filter((item) => isNumber(item)).length;
  const numbersMinusOperators = numberOfNumbers - numberOfOperators;
  const isOperationValid = numbersMinusOperators === 1;
  if (!isOperationValid) {
    if (numbersMinusOperators > 1)
      console.log(
        colors.red(errorMessage(`Invalid Operation. Too many numbers`))
      );
    if (numbersMinusOperators < 1)
      console.log(
        colors.red(errorMessage(`Invalid Operation. Too many operators`))
      );
    return isOperationValid;
  }

  return isEveryCharValid;
}
