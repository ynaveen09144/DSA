//Brute force

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        var res  = result.TwoSum(new int[] {2,7,11,15}, 9);
        Console.WriteLine($"Result: {res[0]}, {res[1]}");
    }
    
    public int[] TwoSum(int[] nums, int target)
    {
        for(var i = 0; i < nums.Length; i++)
        {
            for(var j = i + 1; j < nums.Length; j++)
            {
                if(nums[i] + nums[j] == target)
                {
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {};
    }
}


// Optimal


using System.Collections.Generic;
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        var res  = result.TwoSum(new int[] {2,7,11,15}, 9);
        Console.WriteLine($"Result: {res[0]}, {res[1]}");
    }
    
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> numIndices = new Dictionary<int, int>();
        
        for(int i = 0; i < nums.Length; i++){
            int diff = nums[i] - target;
            if(numIndices.ContainsKey(diff))
            {
                return new int[] {numIndices[diff], i};
            }
            if(!numIndices.ContainsKey(nums[i]))
            {
                numIndices[nums[i]] = i;
            }
        }
        return new int[] {};
    }
}
