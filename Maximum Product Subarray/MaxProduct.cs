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
