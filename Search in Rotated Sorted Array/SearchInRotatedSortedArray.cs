// Brute force

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld solution = new HelloWorld();
        
        var test1 = solution.Search(new int[] {4,5,6,7,0,1,2}, 0);
        var test2 = solution.Search(new int[] {4,5,6,7,0,1,2}, 3);
        var test3 = solution.Search(new int[] {1}, 0);
        Console.WriteLine(test1);
        Console.WriteLine(test2);
        Console.WriteLine(test3);
    }
    
    public int Search(int[] nums, int target)
    {
        for(int i = 0; i < nums.Length; i++) 
        {
            if(nums[i] == target) 
            {
                return i;
            }
        }
        return -1;
    }
}
