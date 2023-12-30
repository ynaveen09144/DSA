// Brute force solution

using System;

class Program
{
    static void MatrixToZero(int[][] matrix)
    {
        bool firstRowHasZero = false;
        bool firstColHasZero = false;

        for (int row = 0; row < matrix.Length; row++)
        {
            if (matrix[row][0] == 0)
            {
                firstColHasZero = true;
                break;
            }
        }

        for (int col = 0; col < matrix[0].Length; col++)
        {
            if (matrix[0][col] == 0)
            {
                firstRowHasZero = true;
                break;
            }
        }

        for (int row = 1; row < matrix.Length; row++)
        {
            for (int col = 1; col < matrix[0].Length; col++)
            {
                if (matrix[row][col] == 0)
                {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        for (int row = 1; row < matrix.Length; row++)
        {
            for (int col = 1; col < matrix[0].Length; col++)
            {
                if (matrix[row][0] == 0 || matrix[0][col] == 0)
                {
                    matrix[row][col] = 0;
                }
            }
        }

        if (firstColHasZero)
        {
            for (int row = 0; row < matrix.Length; row++)
            {
                matrix[row][0] = 0;
            }
        }

        if (firstRowHasZero)
        {
            for (int col = 0; col < matrix[0].Length; col++)
            {
                matrix[0][col] = 0;
            }
        }
    }

    static void Main()
    {
        int[][] matrix1 = new int[][] {
            new int[] { 1, 1, 1 },
            new int[] { 1, 0, 1 },
            new int[] { 1, 1, 1 }
        };

        int[][] matrix2 = new int[][] {
            new int[] { 0, 1, 2, 0 },
            new int[] { 3, 4, 5, 2 },
            new int[] { 1, 3, 1, 5 }
        };

        MatrixToZero(matrix1);
        MatrixToZero(matrix2);

        Console.WriteLine("Result for matrix1:");
        PrintMatrix(matrix1);

        Console.WriteLine("Result for matrix2:");
        PrintMatrix(matrix2);
    }

    static void PrintMatrix(int[][] matrix)
    {
        for (int row = 0; row < matrix.Length; row++)
        {
            for (int col = 0; col < matrix[row].Length; col++)
            {
                Console.Write(matrix[row][col] + " ");
            }
            Console.WriteLine();
        }
    }
}



//Optimized

using System;

class Program
{
    static void MatrixToZero(int[][] matrix)
    {
        bool firstRowHasZero = false;
        bool firstColHasZero = false;

        // Check if the first row has any zeros
        for (int col = 0; col < matrix[0].Length; col++)
        {
            if (matrix[0][col] == 0)
            {
                firstRowHasZero = true;
                break;
            }
        }

        // Check if the first column has any zeros
        for (int row = 0; row < matrix.Length; row++)
        {
            if (matrix[row][0] == 0)
            {
                firstColHasZero = true;
                break;
            }
        }

        // Mark zeros on first row and column based on other elements in the matrix
        for (int row = 1; row < matrix.Length; row++)
        {
            for (int col = 1; col < matrix[0].Length; col++)
            {
                if (matrix[row][col] == 0)
                {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        // Set elements to zero based on markings in the first row and column
        for (int row = 1; row < matrix.Length; row++)
        {
            for (int col = 1; col < matrix[0].Length; col++)
            {
                if (matrix[row][0] == 0 || matrix[0][col] == 0)
                {
                    matrix[row][col] = 0;
                }
            }
        }

        // Set first row to zeros if required
        if (firstRowHasZero)
        {
            for (int col = 0; col < matrix[0].Length; col++)
            {
                matrix[0][col] = 0;
            }
        }

        // Set first column to zeros if required
        if (firstColHasZero)
        {
            for (int row = 0; row < matrix.Length; row++)
            {
                matrix[row][0] = 0;
            }
        }
    }

    static void Main()
    {
        int[][] matrix1 = new int[][] {
            new int[] { 1, 1, 1 },
            new int[] { 1, 0, 1 },
            new int[] { 1, 1, 1 }
        };

        int[][] matrix2 = new int[][] {
            new int[] { 0, 1, 2, 0 },
            new int[] { 3, 4, 5, 2 },
            new int[] { 1, 3, 1, 5 }
        };

        MatrixToZero(matrix1);
        MatrixToZero(matrix2);

        Console.WriteLine("Result for matrix1:");
        PrintMatrix(matrix1);

        Console.WriteLine("Result for matrix2:");
        PrintMatrix(matrix2);
    }

    static void PrintMatrix(int[][] matrix)
    {
        for (int row = 0; row < matrix.Length; row++)
        {
            for (int col = 0; col < matrix[row].Length; col++)
            {
                Console.Write(matrix[row][col] + " ");
            }
            Console.WriteLine();
        }
    }
}

