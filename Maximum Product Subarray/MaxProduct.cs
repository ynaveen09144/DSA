// Brute force
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
       HelloWorld solution = new HelloWorld();

        int[] test1 = { 2, 3, -2, 4 };
        int[] test2 = { -2, 0, -1 };
        Console.WriteLine(solution.MaxProduct(test1)); 
        Console.WriteLine(solution.MaxProduct(test2));
    }
    public int MaxProduct(int[] nums) {
        int maxProduct = int.MinValue;
        
        for(int i = 0; i < nums.Length; i++) {
            
            int currentProduct = 1;
            for(int j = i; j < nums.Length; j++) {
                currentProduct *= nums[j];
                maxProduct = Math.Max(currentProduct, maxProduct);
            }
        }
        return maxProduct;
    }
}


// Optimized 

using System;

public class MaxProductSubarray
{
    public int MaxProduct(int[] nums)
    {
        if (nums == null || nums.Length == 0)
            return 0;

        int maxEndingHere = nums[0];
        int minEndingHere = nums[0];
        int maxSoFar = nums[0];

        for (int i = 1; i < nums.Length; i++)
        {
            int tempMax = maxEndingHere;
            maxEndingHere = Math.Max(Math.Max(maxEndingHere * nums[i], minEndingHere * nums[i]), nums[i]);
            minEndingHere = Math.Min(Math.Min(tempMax * nums[i], minEndingHere * nums[i]), nums[i]);
            maxSoFar = Math.Max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }

    public static void Main(string[] args)
    {
        MaxProductSubarray solution = new MaxProductSubarray();

        int[] test1 = { 2, 3, -2, 4 };
        int[] test2 = { -2, 0, -1 };

        Console.WriteLine(solution.MaxProduct(test1)); // Output: 6
        Console.WriteLine(solution.MaxProduct(test2)); // Output: 0
    }
}
