/* --- Directions
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####' */

// Solution 1 O(n^2)
function steps1(n) {
  for (let r = 0; r < n; r++) {
    let str = String();
    for (let c = 0; c < n; c++) {
      if (r < c) {
        str += " ";
      } else {
        str += "#";
      }
    }
    console.log(str);
  }
}
/*
    Solving it through matrix representation . 
        iterate through rows from 0 to n. Create empty string 'str'. iterate through columns from 0 to n. 
        if current row is less than current column add space to str. Else add "#" .
        finally console.log(str) for each iteration of outer loop.

    c row------>  
    o  00 01 02
    l  10 11 12
    |  20 21 22
    |
    c row------>
    o  # ' ' ' '
    l  #  #  ' '
    |  #  #   #
    |

*/
// Solution 2
function steps2(n) {
  if (n === 1) {
    console.log("#");
  } else {
    for (let i = 1; i <= n; i++) {
      console.log("#".repeat(i) + " ".repeat(n - i));
    }
  }
}
/*
    Solving it by using repeat method . 
        Iterate from 1 to n (including n) to avoid n=0 or n=1 case.
        In each iteration we console.log concatenation of string (# -> repeated i times and space -> repeated n-i times)
*/

// Solution 3
function steps3(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps3(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps3(n, row, stair);
}
/*
    Solving it by using recursion . 
        if(row===n) then we have hit the end of our problem. So return from function
        if the stair string has a length === n then we are at the end of the row. So console log it.
        if the length of stair string <= to row number we are working on we add a # ,otherwise add a space.
        
*/

function steps4(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padEnd(n));
  }
}

/*
  Solving it by using padEnd method . 
  padEnd -> Pads the current string with a given string (possibly repeated) so that the resulting string REACHES a given LENGTH. The padding is applied from the end (RIGHT) of the current string.
*/

module.exports = [steps1, steps2, steps3, steps4];
