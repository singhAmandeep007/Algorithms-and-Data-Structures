/**
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 * So given a string with embedded newlines like:

9 8 7
5 3 2
6 6 7
representing this matrix:

    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
your code should be able to spit out:

A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 */

export class Matrix {
  private matrix: number[][];

  constructor(matrixString: string) {
    this.matrix = matrixString.split("\n").map((row) => row.split(" ").map((num) => parseInt(num, 10)));
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, colIndex) => this.matrix.map((row) => row[colIndex]));
  }
}
