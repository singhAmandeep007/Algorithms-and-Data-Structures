// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1st solution
// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let c of str) {
//         if (charMap[c]) {
//             charMap[c]++;
//         } else {
//             charMap[c] = 1;
//         }
//     }

//     for (let i in charMap) {
//         if (max < charMap[i]) {
//             max = charMap[i];
//             maxChar = i;
//         } else {
//             continue;
//         }
//     }
//     return maxChar;
// }

/* 
    we first create an empty object then we map each character in the string to the object. Thus creating a key : value properties of the object. Then we use for loop to find max value and its corroponding key.
*/

// 2nd solution
function maxChar(str) {
    const chars = {};
    for (let s of str) {
        if (chars[s]) {
            chars[s]++;
        } else {
            chars[s] = 1;
        }
    }
    let maxValue = Math.max(...Object.values(chars));
    let maxChar = Object.keys(chars).find((el) => {
        return chars[el] === maxValue;
    })
    return maxChar;
}


/* 
    For plain objects, the following methods are available:

    Object.keys(obj) – returns an array of keys.
    Object.values(obj) – returns an array of values.
    Object.entries(obj) – returns an array of [key, value] pairs.


    we first create an empty object then we map each character in the string to the object. Thus creating a key : value properties of the object. 
    Then we use MATH.max to find the max element in array formed using Object.values(chars) 
    When ...arr  (arr is an Array here) is used in the function call, it “expands” an iterable object arr into the list of arguments.

    Then using find method we return key whose value matches maxValue;
*/

module.exports = maxChar;
