import { Contract } from 'fabric-contract-api';

export class SafeMathLib extends Contract {
  // add two number checking for overflow
  safeAdd(a: number, b: number, errorMessage?: string): number {
    let c = a + b;
    if (a !== c - b || b !== c - a) {
      throw new Error(
        errorMessage || `Math: addition overflow occurred ${a} + ${b}`,
      );
    }
    return c;
  }

  // add two number checking for overflow
  safeSub(a: number, b: number, errorMessage?: string): number {
    let c = a - b;
    if (a !== c + b || b !== a - c) {
      throw new Error(
        errorMessage || `Math: subtraction overflow occurred ${a} - ${b}`,
      );
    }
    return c;
  }

  // multiply two number checking for overflow
  safeMul(a: number, b: number, errorMessage?: string): number {
    let c = a * b;
    if (a !== 0 && c / a !== b) {
      throw new Error(
        errorMessage || `Math: multiplication overflow occurred ${a} * ${b}`,
      );
    }
    return c;
  }

  // divide two number checking for overflow
  safeDiv(a: number, b: number, errorMessage?: string): number {
    if (b === 0) {
      throw new Error(
        errorMessage || `Math: division by zero occurred ${a} / ${b}`,
      );
    }
    return a / b;
  }

  // modulus two number checking for overflow
  safeMod(a: number, b: number, errorMessage?: string): number {
    if (b <= 0) {
      throw new Error(
        errorMessage || `Math: modulo by zero occurred ${a} % ${b}`,
      );
    }
    return a % b;
  }
}
