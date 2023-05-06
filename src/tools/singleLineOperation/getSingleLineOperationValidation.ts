import colors from "colors";
import isOperator from "../isOperator";
import isNumber from "../isNumber";
import errorMessage from "../errorMessage";

/**
 * Evaluates a string to see if it is a valid single line operation.
 * This is a pre-requisite for the operation
 * @param {string} value
 * @returns {boolean}
 */
export default function getIsSingleLineOperationValidation(
  value: string
): boolean {
  const operation = value.split(" ").filter((item) => item !== "");

  // are characters either operators or numbers?
  const isEveryCharValid = operation.every(
    (item) => isOperator(item) || isNumber(item)
  );
  if (!isEveryCharValid) {
    console.log(colors.red(errorMessage(`Invalid character`)));
    return isEveryCharValid;
  }

  // // is the structure valid? (this section might not be need)
  // const findFirstOperatorIndex = operation.findIndex((item) => !isNumber(item));
  // const itemsAfterFirstOperator = operation.slice(findFirstOperatorIndex);
  // const isAllOperators = itemsAfterFirstOperator.every((item) =>
  //   isOperator(item)
  // );
  // if (!isAllOperators) {
  //   console.log(colors.red(errorMessage(`Invalid operation structure, valid structure: number number operator`)));
  //   return isAllOperators;
  // }

  // are there more operators than numbers or not enough operators?
  const numberOfOperators = operation.filter((item) => isOperator(item)).length;
  const numberOfNumbers = operation.filter((item) => isNumber(item)).length;
  const numbersMinusOperators = numberOfNumbers - numberOfOperators;
  const isOperationValid = numbersMinusOperators === 1;
  if (!isOperationValid) {
    if (numbersMinusOperators > 1)
      console.log(
        colors.red(errorMessage(`Invalid Operation. Not enough operators`))
      );
    if (numbersMinusOperators < 1)
      console.log(
        colors.red(errorMessage(`Invalid Operation. Too many operators`))
      );
  }
  return isOperationValid;
}
