const transpose = function(matrix) {
  // Put your solution here
  console.log('given Matrix : ',matrix);
  let rows = matrix.length;
  let columns = matrix[0].length;
  let res = []

  for(let c = 0; c < columns; c++){
    res[c] = []
    for ( let r = 0; r < rows; r++){
      res[c][r] = matrix[r][c]
    }
    console.log(res);
  }
  return res;
};
// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

module.exports = transpose;

// expected logs

/*
1 1 1 1 
2 2 2 2 
3 3 3 3 
4 4 4 4
----
1 3 5 
2 4 6
----
1 
2 
3 
4 
5 
6 
7
*/