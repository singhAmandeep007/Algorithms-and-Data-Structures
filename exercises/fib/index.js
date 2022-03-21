/* --- Directions
Print out the n-th entry in the fibonacci series.
The fibonacci series is an ordering of numbers where
each number is the sum of the preceeding two.
For example, the sequence
 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.
Example:
  fib(4) === 3 */

// O(n) // 1.23s
function fib1(n) {
  if (n < 2) return n;
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

// Recursion , exponential runtime , O(2^n) // 4s
function fib2(n) {
  if (n < 2) {
    return n;
  }
  return fib2(n - 1) + fib2(n - 2);
}

// Recursion , O(n) , space complexity - O(2^n) // 1.4s
function fib3(n, i = 2, fibSeries = [0, 1]) {
  if (n < 2) return n;
  if (fibSeries.length - 1 === n) return fibSeries[n];

  return fib3(n, (index = i + 1), [
    ...fibSeries,
    fibSeries[i - 1] + fibSeries[i - 2],
  ]);
}
// Recursion with caching , O(n) , 1.25s
function fib4(n, i = 2, cached = { 0: 0, 1: 1 }) {
  if (cached[n]) return cached[n];

  cached[i] = cached[i - 1] + cached[i - 2];

  return fib4(n, (index = i + 1), cached);
}

// Recursion with O(n) , 0.8s
function fib5(n, i = 1, current = 1, prev = 0) {
  if (n === i) {
    return current;
  }

  return fib5(n, i + 1, current + prev, current);
}

// Recursion with memoization with
let fib = function (n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

function memoize(fn) {
  const cache = {};

  return function (...arg) {
    if (!cache[arg]) {
      const result = fn.apply(this, arg);
      // NOTE: Behind the scenes, the args param is being converted to string form in order to be saved as a key.
      cache[arg] = result;
    }
    return cache[arg];
  };
}

let fib6 = memoize(fib5);

module.exports = [fib1, fib2, fib3, fib4, fib5, fib6];
