using System;

class Program
{
    public static void Main(string[] args) {
        int[] nums = {1, 1, 1, 1, 1}; 
        int result = FindMaxConsecutiveOnes(nums);
        Console.WriteLine("Maximum consecutive ones: " + result);
    }
    public static int FindMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0;
        int currentCount = 0;

        foreach (int num in nums) {
            if (num == 1) {
                currentCount++;
                maxCount = Math.Max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }

        return maxCount;
    }
}
