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


// Optimized solution


using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        int[] arr = { -2,1,-3,4,-1,2,1,-5,4 };
        int maxSum = MaxSubArraySum(arr);
        Console.WriteLine("Maximum subarray sum is " + maxSum);
    }
    static int MaxSubArraySum(int[] nums)
    {
        int n = nums.Length;
        int maxSum = nums[0];
        
        for(int i = 1; i < n; i++)
        {
            nums[i] = Math.Max(0, nums[i - 1]) + nums[i];
            maxSum = Math.Max(maxSum, nums[i]);
        }
        return maxSum;
    }
}
