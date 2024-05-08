/* --- Directions
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation. Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

// 1st solution - TC ->  O(n)
function buildCharMap(str: string) {
  const charMap: Record<string, number> = {};

  for (let i of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[i] = charMap[i] + 1 || 1;
  }

  return charMap;
}

function anagrams1(stringA: string, stringB: string) {
  const aMap = buildCharMap(stringA);
  const bMap = buildCharMap(stringB);

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false;
  }

  for (let i in aMap) {
    if (aMap[i] !== bMap[i]) {
      return false;
    }
  }
  return true;
}

/*
    /\W/g - Do a global search for non-word characters in a string.
    [^...] caret (^) character means NOT ONE of the character, e.g., [^0-9] matches any non-digit.
 */

/*
    Here first we create character map for each string using helper function buildCharMap.
    Then we compare the length of array generated using Object.keys method.
    Then we check the value of each key in one of the charMap object with the corresponding value in other charMap object. 
    If eveything works fine we return true to conclude that stringA matches stringB.
 
*/

// 2nd Solution
function anagrams2(stringA: string, stringB: string) {
  const cleaner = (str: string) => str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  return cleaner(stringA) === cleaner(stringB);
}
/*
    Here first we clean both string by calling cleaner function on them. It replaces all non-word and spaces , then lowercases every character then converts to array then uses native js sort method and convert back to string.
    Finally we compare both strings and return boolean value.
	
	NOTE: sort can be done on alphabets.
*/

export { anagrams1, anagrams2 };
