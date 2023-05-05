export default function isOperator(value: string): boolean {
  return value === '+' || value === '-' || value === '*' || value === '/'
}