//Brute force

using System;

class MaximumSubarray
{
    static int MaxSubArraySum(int[] arr)
    {
        int n = arr.Length;
        int maxSum = int.MinValue;

        for (int i = 0; i < n; i++)
        {
            int currentSum = 0;
            for (int j = i; j < n; j++)
            {
                currentSum += arr[j];
                if (currentSum > maxSum)
                    maxSum = currentSum;
            }
        }

        return maxSum;
    }

    public static void Main(string[] args)
    {
        int[] arr = { -2, -3, 4, -1, -2, 1, 5, -3 };
        int maxSum = MaxSubArraySum(arr);
        Console.WriteLine("Maximum subarray sum is " + maxSum);
    }
}
