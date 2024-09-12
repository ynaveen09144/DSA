using System;

class Program
{
    static void Main(string[] args)
    {
        int[] nums = { 0, 1, 0, 3, 12 };

        Console.WriteLine("Original Array: ");
        PrintArray(nums);

        MoveZeroesToEnd(nums);

        Console.WriteLine("Array after moving zeroes to the end: ");
        PrintArray(nums);
    }

    // Method to move all zeroes to the end
    public static void MoveZeroesToEnd(int[] nums)
    {
        int nonZeroIndex = 0;

        // Move non-zero elements to the front
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] != 0)
            {
                nums[nonZeroIndex++] = nums[i];
            }
        }

        // Fill the rest of the array with zeroes
        for (int i = nonZeroIndex; i < nums.Length; i++)
        {
            nums[i] = 0;
        }
    }

    // Helper method to print the array
    public static void PrintArray(int[] nums)
    {
        foreach (var num in nums)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
}
