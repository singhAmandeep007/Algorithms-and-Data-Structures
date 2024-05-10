/**
 * Factorial
 * Given a number n, return the factorial of the number.
 * The factorial of a number is the product of all positive integers less than or equal to the number.
 */

export function factorial1(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial1(n - 1);
}

export function factorial2(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function factorial3(n: number): number {
  return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr);
}
