// Have the function EightQueens(strArr) read strArr which will be an array
// consisting of the locations of eight Queens on a standard 8x8 chess board
// with no other pieces on the board. The structure of strArr will be the
// following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the
// current queen on the chessboard (x and y will both range from 1 to 8 where
// 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your
// program should determine if all of the queens are placed in such a way where
// none of them are attacking each other. If this is true for the given input,
// return the string "true" otherwise return the first queen in the list that is
// attacking another piece in the same format it was provided.
//
// For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)",
// "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true.

function eightQueens1(strArr: string[]) {
  let x: number[] = [],
    y: number[] = [];
  strArr.forEach((pos) => {
    x.push(Number(pos.replace("(", "").replace(")", "").split(",")[0]));
    y.push(Number(pos.replace("(", "").replace(")", "").split(",")[1]));
  });
  let flag = true;
  let resp = "";
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if (j != i) {
        if (flag && (x[j] - x[i] === y[j] - y[i] || x[i] === x[j] || y[i] === y[j])) {
          resp = `(${x[i]},${y[i]})`;
          flag = false;
        }
      }
    }
  }

  if (!resp.length) {
    return "true";
  } else {
    return resp;
  }
}

function eightQueens2(strArr: string[]) {
  let formatedArr = strArr.map((pos) => {
    return pos.replace(/[()]/g, "");
  });

  function checkIsAttacking(currRow: number, currCol: number, currIndex: number) {
    let flag = true;
    // dont run for first
    for (let j = currIndex + 1; j < formatedArr.length; j++) {
      let [row, col] = formatedArr[j].split(",").map((pos) => +pos);

      if (row === currRow || col === currCol || currRow - currCol === row - col || currRow + currCol === row + col) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  let isAttacking = null;
  let result = formatedArr.every((pos, i) => {
    let [currRow, currCol] = pos.split(",").map((pos) => +pos);

    if (!checkIsAttacking(currRow, currCol, i)) {
      isAttacking = `(${currRow},${currCol})`;
      return false;
    }
    return true;
  });
  if (!result) {
    return isAttacking;
  }
  return "true";
}

export { eightQueens1, eightQueens2 };
