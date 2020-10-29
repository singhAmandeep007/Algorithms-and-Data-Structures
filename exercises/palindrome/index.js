// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1st Solution 
// function palindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return reversed === str;
// }
/* 
    we first convert the string into array and then using built-in reverse method we reverse it and then join the array to form a single string.
    Then we compare the string passed as argument and the reversed string , which returns a boolean value.
*/

// 2nd Solution 
function palindrome(str) {
    return str.split('').every((item, index) => {
        return item === str[str.length - index - 1];
    })
}
/* 
   The every() method checks if all elements in an array pass a test (provided as a function).
   The every() method executes the function once for each element present in the array:

    1)If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
    2)If no false occur, every() returns true

    Here we first convert the string into array then using every we compare each character with the mirror character .
*/

module.exports = palindrome;
