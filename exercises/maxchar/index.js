/* --- Directions
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1" */

// 1st Solution
function maxChar1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let c of str) {
    if (charMap[c]) {
      charMap[c]++;
    } else {
      charMap[c] = 1;
    }
  }

  for (let i in charMap) {
    if (max < charMap[i]) {
      max = charMap[i];
      maxChar = i;
    } else {
      continue;
    }
  }
  return maxChar;
}

/* 
    we first create an empty object then we map each character in the string to the object. Thus creating a key : value properties of the object. Then we use for loop to find max value and its corresponding key.
*/

// 2nd Solution
function maxChar2(str) {
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
  });
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

// 3rd Solution
function maxChar3(str) {
  let maxChar = '';
  [...str].reduce((acc, curr) => {
    let obj = Object.assign(acc, { [curr]: acc[curr] ? (acc[curr] += 1) : 1 });
    maxChar = Object.keys(obj).find(
      (el) => obj[el] === Math.max(...Object.values(obj))
    );
    return obj;
  }, {});
  return maxChar;
}

/* 
	Here we leverage the reduce fn to accumulate count of each character and use it to get max in next iteration

*/

module.exports = [maxChar1, maxChar2, maxChar3];
