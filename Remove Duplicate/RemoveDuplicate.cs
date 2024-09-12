using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        int[] nums = { 1, 2, 2, 3, 4, 4, 5 };

        Console.WriteLine("Original Array: ");
        PrintArray(nums);

        int[] uniqueNums = RemoveDuplicates(nums);

        Console.WriteLine("Array after removing duplicates: ");
        PrintArray(uniqueNums);
    }

    // Method to remove duplicates
    public static int[] RemoveDuplicates(int[] nums)
    {
        HashSet<int> uniqueSet = new HashSet<int>(nums);
        return new List<int>(uniqueSet).ToArray();
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
