// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1st solution O(n^2)
// function vowels(str) {

//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let s of str) {
//         for (let v of vowels) {
//             if (s.toLowerCase() === v) {
//                 count += 1;
//             }
//         }
//     }
//     return count;
// }

// 2nd solution O(n)
// function vowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str.toLowerCase()) {
//         vowels.includes(char) ? count += 1 : count += 0;
//     }
//     return count;
// }

// 3rd solution O(n)
// function vowels(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }

/**
g tells to find all matches, not just the first.
i tells to be case insensitive.
What goes inside the // is the pattern.
[] tells to match any character in a set.
aeiou are the characters in the set.
 */

// 4th solution O(n)
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
/**
 * The match() method retrieves the result of matching a string against a regular expression. 
 * returns - An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
 */
module.exports = vowels;
