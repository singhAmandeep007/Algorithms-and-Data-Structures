/*
	Given a function and default arguments, create a function that returns a new function with default arguments for it.

	Example -> 
	function addTwo (a,b){
		return a+b;
	}
	let addTwoWithDefaultArgs = defaultArgs(addTwo,{b:2}) 
	addTwoWithDefaultArgs(3) -> 5
	addTwoWithDefaultArgs(2,0) -> 2
*/

function defaultArgs(cb, params) {
  let cbArgs = cb
    .toString()
    ?.split("(")[1]
    ?.split(")")[0]
    ?.split(",")
    .map((d) => d.trim());

  return (...numbers) => {
    let cbParams = [];

    cbArgs.forEach((arg, i) => {
      if (numbers[i] !== undefined) {
        cbParams.push(numbers[i]);
      } else {
        cbParams.push(params[arg]);
      }
    });

    return cb(...cbParams);
  };
}

module.exports = [defaultArgs];
