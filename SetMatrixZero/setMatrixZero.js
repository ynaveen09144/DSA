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
