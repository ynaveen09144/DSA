using System;

class Program
{
    static void Main()
    {
        // Example with missing number in a sequence starting from 0
        int[] nums1 = { 0, 2, 3, 1, 4 };
        Console.WriteLine("Missing number (0-based): " + FindMissingNumber(nums1, 0));

        // Example with missing number in a sequence starting from 1
        int[] nums2 = { 1, 2, 3, 5 };
        Console.WriteLine("Missing number (1-based): " + FindMissingNumber(nums2, 1));
    }

    static int FindMissingNumber(int[] numbers, int start)
    {
        int n = numbers.Length + 1; // Full length including the missing number
        int expectedSum;

        if (start == 0)
        {
            // Sum for sequence starting from 0 (0 to n)
            expectedSum = n * (n - 1) / 2;
        }
        else
        {
            // Sum for sequence starting from 1 (1 to n)
            expectedSum = n * (n + 1) / 2;
        }

        int actualSum = 0;
        foreach (int num in numbers)
        {
            actualSum += num;
        }

        return expectedSum - actualSum;
    }
}
