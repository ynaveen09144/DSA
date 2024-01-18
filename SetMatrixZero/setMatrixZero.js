// Brute force 

function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const zeroPositions = [];

  // Find the positions of zeroes in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroPositions.push([i, j]);
      }
    }
  }

  // Set rows and columns to zeroes based on zero positions
  zeroPositions.forEach(([row, col]) => {
    // Set entire row to zeroes
    for (let i = 0; i < cols; i++) {
      matrix[row][i] = 0;
    }

    // Set entire column to zeroes
    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }
  });

  return matrix;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix);

console.log("\nMatrix after setting zeroes:");
console.log(setZeroes(matrix));




// Brute force


function setMatrixZeros(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const zeroRows = new Array(rows).fill(false);
    const zeroCols = new Array(cols).fill(false);

    // Identify rows and columns with zeros
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    // Set entire row to zero
    for (let i = 0; i < rows; i++) {
        if (zeroRows[i]) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set entire column to zero
    for (let j = 0; j < cols; j++) {
        if (zeroCols[j]) {
            for (let i = 0; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }
}

// Example usage
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

console.log("Original matrix:");
printMatrix(matrix);

setMatrixZeros(matrix);

console.log("\nMatrix after setting zeros:");
printMatrix(matrix);

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}


