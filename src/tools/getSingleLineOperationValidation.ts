import colors from "colors";
import isNumber from "./isNumber";

export default function getIsSingleLineOperationValidation(
  value: string
): boolean {
    // NOTE: this regex is not correct, check again
  const regex = /^-?\d+(\.\d+)?([+\/*-]-?\d+(\.\d+)?)*$/;
  const isEveryCharValid = value.split(" ").every((item) => regex.test(item));
  if (!isEveryCharValid) {
    console.log(colors.red(`Invalid input, please try again!`));
  }
  return isEveryCharValid;
}
