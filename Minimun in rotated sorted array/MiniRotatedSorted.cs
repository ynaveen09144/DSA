// Brute force


using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
       HelloWorld solution = new HelloWorld();

        int[] test1 = { 3,4,5,1,2 };
        int[] test2 = { 4,5,6,7,0,1,2 };
        int[] test3 = { 11,13,15,17 };
        Console.WriteLine(solution.FindMin(test1)); 
        Console.WriteLine(solution.FindMin(test2));
        Console.WriteLine(solution.FindMin(test3));
    }
    public int FindMin(int[] nums) {
        if(nums == null || nums.Length == 0) {
            throw new ArgumentException("Array is empty or null.");
        }
        int min = nums[0];
        
        for(int i = 1; i < nums.Length; i++) {
            if(nums[i] < nums[i - 1]) {
                min = nums[i];
                break;
            }
        }
        return min;
    }
}
