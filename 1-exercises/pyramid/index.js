/* --- Directions
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
--- Examples
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
		'#####' 
	pyramid(6)
      '     #     '
      '    ###    '
		'   #####   '
		'  #######  '
		' ######### '
		'###########'
		
		
		*/

// Solution 1 O(n^2).
function pyramid1(n) {
  for (let r = 1; r <= n; r++) {
    let pyra = String();
    for (let c = 1; c <= n * 2 - 1; c++) {
      if (r === n || c === n) {
        pyra += '#';
      } else if (c - r < n && c + r > n) {
        pyra += '#';
      } else {
        pyra += ' ';
      }
    }
    console.log(pyra);
  }
}

// Solution 2
function pyramid2(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let pyra = String();
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        pyra += '#';
      } else {
        pyra += ' ';
      }
    }
    console.log(pyra);
  }
}

// Solution 3
function pyramid3(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      ' '.repeat(n - i) + '#'.repeat(i) + '#'.repeat(i - 1) + ' '.repeat(n - i)
    );
  }
}

// Solution 4
function pyramid4(n) {
  let step = 0;
  let str = '#';
  while (step < n) {
    console.log(str.padStart(n + step, ' ').padEnd(2 * n - 1, ' '));
    str += '##';
    step++;
  }
}
/* 

	There are mainly three parts that we need to keep track of for each line.
	1. The length of # string without considering spaces = 1 + 2*step
	2. Total length of each line = 2*n -1
	3. The length of spaces in front # string = (total length - # string length)/2 = n - step -1
	To add the right amount of white spaces in front of the hash string, we need to call padStart with desired length = (The length of spaces in front # string) + (The length of # string) = (n - step -1) + ( 1 + 2*step) = n + step
	After padding the space in front of the str, we then call padEnd to pad the spaces after str. The desired length will be the total length of each line which equals to  2*n -1. 
 */

// Solution 5
function pyramid5(n, i = 1) {
  if (i > n) return;
  console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i));
  pyramid5(n, i + 1);
}

// Solution 6
const pyramid6 = (n) => {
  let s = 1;
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(s) + ' '.repeat(n - i));
    s += 2;
  }
};

module.exports = [pyramid1, pyramid2, pyramid3, pyramid4, pyramid5, pyramid6];
