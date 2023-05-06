/**
 * Evaluates a string character to see if it is an operator.
 * @param {string} value   
 * @returns {boolean} 
 */
export default function isOperator(value: string): boolean {
  const regexOperators = /^[+\/*-]$/;
  return regexOperators.test(value);
}
