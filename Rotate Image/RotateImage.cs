using System;

class ImageRotation
{
    static void Main()
    {
        int[,] image = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        Console.WriteLine("Original Image:");
        DisplayImage(image);

        Console.WriteLine("\nRotated Image:");
        int[,] rotatedImage = RotateImage(image);
        DisplayImage(rotatedImage);
    }

    static int[,] RotateImage(int[,] image)
    {
        int rows = image.GetLength(0);
        int cols = image.GetLength(1);
        int[,] rotatedImage = new int[cols, rows];

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                rotatedImage[j, rows - 1 - i] = image[i, j];
            }
        }

        return rotatedImage;
    }

    static void DisplayImage(int[,] image)
    {
        int rows = image.GetLength(0);
        int cols = image.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                Console.Write(image[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }
}
