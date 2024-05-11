/**
 * Write a function that returns all prime numbers up to a given number.
 * Note: A prime number is a number that is only divisible by 1 and itself and has no other divisors. 1 is not a prime number.
 * Example:
 * const primes = primeNums(10);
 * console.log(primes); // Output: [2, 3, 5, 7]
 */

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  // integers larger than square root need not to be checked because whenever n=a*b then a or b must be less than or equal to the square root of n.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export function primeNums1(n: number): number[] {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

export function primeNums2(n: number): number[] {
  const store = [];
  const primes = [];

  // iterate through numbers from 2 to the maximum value.
  for (let i = 2; i <= n; ++i) {
    // if the current number is not marked as composite (not prime), add it to the primes array.
    if (!store[i]) {
      primes.push(i);
      // mark all multiples of the current prime as composite.
      for (let j = i << 1; j <= n; j += i) {
        store[j] = true;
      }
    }
  }
  // return the array of prime numbers.
  return primes;
}
