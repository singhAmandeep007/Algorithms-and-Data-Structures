// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
// function pyramid(n) {
//     for (let r = 1; r <= n; r++) {
//         let pyra = String();
//         for (let c = 1; c <= n * 2 - 1; c++) {
//             if (r === n || c === n) {
//                 pyra += '#'
//             } else if (c - r < n && c + r > n) {
//                 pyra += "#"
//             }
//             else {
//                 pyra += " "
//             }
//         }
//         console.log(pyra)
//     }
// }

// Solution 2 
// function pyramid(n) {
//     const midpoint = Math.floor((n * 2 - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let pyra = String();
//         for (let column = 0; column < n * 2 - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 pyra += "#"
//             } else {
//                 pyra += " "
//             }
//         }
//         console.log(pyra)
//     }
// }

// Solution 3 
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i) + "#".repeat(i - 1) + " ".repeat(n - i));
    }
}
module.exports = pyramid;
