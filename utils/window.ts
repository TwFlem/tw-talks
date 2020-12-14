import { SRRClientValueExists } from "./SSR";

export function doesWindowExists(): boolean {
  return SRRClientValueExists(typeof window);
}

let initialized = false;
export function windowDidInitialize() {
  if (doesWindowExists() && !initialized) {
    initialized = true;
  }
  return initialized;
}

const noop = () => undefined;
export function whenWindowExists<FN>(fn: FN): FN | typeof noop {
  if (windowDidInitialize()) {
    return fn;
  }
  return noop;
}
