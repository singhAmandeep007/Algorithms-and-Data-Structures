// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // if (Math.sign(n) === -1) {
    //     return -parseInt(n.toString().split('').reverse().join(''));
    // }
    // return parseInt(n.toString().split('').reverse().join(''));

    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}
/* 
    we first convert the number into string then to array and using built-in reverse method we reverse it and then join the array to form a single string.
    Then we convert the string to number using parseInt and multiply with the value returned by expression Math.sign(n)
    The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. 
*/



module.exports = reverseInt;
