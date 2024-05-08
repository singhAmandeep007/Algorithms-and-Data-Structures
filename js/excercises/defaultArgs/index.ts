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

function defaultArgs(cb: (...params: any) => void, params: Record<string, any>) {
  let cbArgs = cb
    .toString()
    ?.split("(")[1]
    ?.split(")")[0]
    ?.split(",")
    .map((d) => d.trim());

  return (...args: any) => {
    let cbParams: any[] = [];

    cbArgs.forEach((arg, i) => {
      if (args[i] !== undefined) {
        cbParams.push(args[i]);
      } else {
        cbParams.push(params[arg]);
      }
    });

    return cb(...cbParams);
  };
}

export { defaultArgs };
