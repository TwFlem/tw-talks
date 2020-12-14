type ValidTypeofValues =
  | "undefined"
  | "object"
  | "boolean"
  | "number"
  | "string"
  | "function"
  | "symbol"
  | "bigint";
export function SRRClientValueExists(typeofValue: ValidTypeofValues): boolean {
  return typeofValue !== "undefined";
}
