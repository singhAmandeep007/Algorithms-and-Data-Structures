// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// 1st solution
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {

//         if (i % 15 === 0) {
//             console.log('fizzbuzz')
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         } else if (i % 3 === 0) {
//             console.log('fizz')
//         } else {
//             console.log(i);
//         }

//     }
// }
/*

The order of events in conditional loops does matter. When the loops begins, if will check if i % 3 === 0 in your code first and if that condition is met, it will move on to the next iteration. So, in your case, when we get to n=15 (which should be the first "fizzbuzz", your i % 3 === 0 condition will be met before it even gets a chance to check if it also meets the i % 5 === 0 condition so it will log "fizz" instead of "fizzbuzz". If you make (i % 3 === 0 && i % 5 === 0) the first condition, 15 would evaluate to "fizzbuzz" and would not proceed to check them individually in the else statements.

*/

// 2nd solution
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0 ? "fizz" : "";
        const buzz = i % 5 === 0 ? "buzz" : "";
        console.log(fizz + buzz || i);
    }
}
/* 
    Here with each iteration i increments and then fizz and buzz stores string , then we console.log() the result or i itself
*/

module.exports = fizzBuzz;
