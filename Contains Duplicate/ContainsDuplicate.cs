//Brute force
using System.Collections.Generic;
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        bool test1 = result.ContainsDuplicate(new int[] { 1, 2, 3, 1 });
        bool test2 = result.ContainsDuplicate(new int[] { 1, 2, 3, 4 });
        bool test3 = result.ContainsDuplicate(new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 });
        
        Console.WriteLine(test1);
        Console.WriteLine(test2);
        Console.WriteLine(test3);
    }
    
    public bool ContainsDuplicate(int[] nums)
    {
        for(int i = 0; i < nums.Length; i++)
        {
            for(int j = i + 1; j < nums.Length; j++)
            {
                if(nums[i] == nums[j])
                {
                    return true;
                }
            }
        }
        return false;
    }
}





//Optimal 

using System.Collections.Generic;
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        bool test1 = result.ContainsDuplicate(new int[] { 1, 2, 3, 1 });
        bool test2 = result.ContainsDuplicate(new int[] { 1, 2, 3, 4 });
        bool test3 = result.ContainsDuplicate(new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 });
        
        Console.WriteLine(test1);
        Console.WriteLine(test2);
        Console.WriteLine(test3);
    }
    
    public bool ContainsDuplicate(int[] nums)
    {
        HashSet<int> set = new HashSet<int>(nums);
        return set.Count != nums.Length;
    }
}


////

using System;
using System.Linq;

class Program
{
    static void Main()
    {
        // Array of numbers with duplicates
        int[] numbers = { 1, 2, 3, 1, 2, 4, 5, 5, 6 };

        // Remove duplicates using Distinct()
        int[] distinctNumbers = numbers.Distinct().ToArray();

        // Output the result
        Console.WriteLine("Numbers after removing duplicates:");
        foreach (var num in distinctNumbers)
        {
            Console.WriteLine(num);
        }
    }
}
