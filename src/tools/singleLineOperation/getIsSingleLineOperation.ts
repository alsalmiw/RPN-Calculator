export default function getIsSingleLineOperation(value: string): boolean {
  return value.split(" ").length >=3 
}