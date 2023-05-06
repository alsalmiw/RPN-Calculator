/**
 * removes any empty spaces from a string 
 * @param {string} value   
 * @returns {string} 
 */
export default function removeEmptySpaces(value: string): string {
  return value.replace(/\s/g, "");
}