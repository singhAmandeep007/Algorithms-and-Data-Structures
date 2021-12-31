/* --- Directions
Given a string, return a new string with the reversed
order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG' */

// 1st Solution
function reverse1(str) {
  return str.split('').reverse().join('');
}
/* 
    we first convert the string into array and then using built-in reverse method we reverse it and then join the array to form a single string.
*/

// 2nd Solution O(n)
function reverse2(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
/*  
    we initialised an empty string then with for loop we iterate over each character in str and add it before the reversed str we are building . Remember we first add 2 strings ie 1 char and the current string and then assign the value to the new string in each iteration.

    str=apple;

    1 st iteration -> 
        char = a ,str = apple 
        '' = a + '';
        reversed = a;

    2 nd iteration -> 
        char = p ,str = apple 
        'a' = p + 'a';
        reversed = pa;

    3 rd iteration -> 
        char = p ,str = apple 
        'pa' = p + 'pa';
        reversed = ppa;

    4 th iteration -> 
        char = l ,str = apple 
        'ppa' = l + 'ppa';
        reversed = lppa;

    5 th iteration -> 
        char = e ,str = apple 
        'lppa' = e + 'lppa';
        reversed = elppa;

*/

// 3rd Solution
function reverse3(str) {
  return str.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
}
/* 
    we first convert the string into array and then using ES15 reduce method. Reduce is used to take all the different values in an array and condense them down to one singular value.It takes 2 separate values ie first -> arrow function and second -> starting initial value for our function.
    when it runs tt will take the starting argument and pass it as first argument in arrow function and whatever gets returned will be passed as the argument in every successive run of the function.
    Same as our for loop solution we will add the charater/currentValue to the starting of the accumulator/reversedString.
*/

// 4th Solution
function reverse4(str) {
  return str.split('').reduceRight((acc, curr) => {
    return acc + curr;
  }, '');
}
/* 
	  we first convert the string into array and then using reduceRight method we append the character from right to left. The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
	
 */
module.exports = [reverse1, reverse2, reverse3, reverse4];
