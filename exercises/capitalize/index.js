// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// 1st solution
// function capitalize(str) {

//     return str.split(' ').map((word) => {
//         return word[0].toUpperCase() + word.slice(1);
//     }).join(' ')
// }

/*
    Here we first covert string to array of words then map over each word. Each word's first character is uppercased and concatenated with rest of the characters of word. 
    At last we return the string formed using join. 
*/

//2nd solution
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {

        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}
/*
    Here we start with converting firstletter to uppercase. Then using loop we check if the character[ i-1 ] in string is a space.
    If it is then we capitalize the first letter of word. If not we concatenate the character to the string we are building.
    Finally we return the string.
*/
module.exports = capitalize;
