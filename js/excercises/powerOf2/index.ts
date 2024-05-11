/**
 * Given a positive number n, determine if n is power of 2 or not
 *
 * n will be power of 2 if there exists a number x such that 2^x = n
 *
 * Example:
 * if n is 0 it should return true since 2^0 = 0
 * if n is 2 it should return true since 2^1 = 2
 * if n is 3 it should return false
 */

export function isPowerOfTwo1(n: number): boolean {
  if (n < 1) {
    return false;
  }
  // bitwise AND operation to check if n is power of 2
  // what is bitwise ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
  return (n & (n - 1)) === 0;
}

export function isPowerOfTwo2(n: number): boolean {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}
