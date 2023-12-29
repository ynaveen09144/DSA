//Brute force

using System;
using System.Collections.Generic;

public class ThreeSumSolution
{
    public IList<IList<int>> ThreeSum(int[] nums)
    {
        IList<IList<int>> result = new List<IList<int>>();

        if (nums.Length < 3)
        {
            return result;
        }

        Array.Sort(nums);

        for (int i = 0; i < nums.Length - 2; i++)
        {
            for (int j = i + 1; j < nums.Length - 1; j++)
            {
                for (int k = j + 1; k < nums.Length; k++)
                {
                    if (nums[i] + nums[j] + nums[k] == 0)
                    {
                        List<int> triplet = new List<int> { nums[i], nums[j], nums[k] };
                        result.Add(triplet);
                    }
                }
            }
        }

        // Remove duplicate triplets
        return RemoveDuplicates(result);
    }

    private IList<IList<int>> RemoveDuplicates(IList<IList<int>> triplets)
    {
        HashSet<string> uniqueTriplets = new HashSet<string>();
        IList<IList<int>> distinctTriplets = new List<IList<int>>();

        foreach (var triplet in triplets)
        {
            string key = string.Join(",", triplet);
            if (!uniqueTriplets.Contains(key))
            {
                uniqueTriplets.Add(key);
                distinctTriplets.Add(triplet);
            }
        }

        return distinctTriplets;
    }
}

// Example usage:
public class MainProgram
{
    public static void Main(string[] args)
    {
        ThreeSumSolution solution = new ThreeSumSolution();

        int[] inputArray = new int[] { -1, 0, 1, 2, -1, -4 };
        IList<IList<int>> result = solution.ThreeSum(inputArray);

        Console.WriteLine("Triplets with sum equal to zero:");
        foreach (var triplet in result)
        {
            Console.WriteLine($"[{string.Join(", ", triplet)}]");
        }
    }
}


//Optimal

using System;
using System.Collections.Generic;
using System.Linq;

public class ThreeSumSolution
{
    public static IList<IList<int>> ThreeSum(int[] nums)
    {
        Array.Sort(nums);
        List<IList<int>> triplets = new List<IList<int>>();

        for (int i = 0; i < nums.Length - 2; i++)
        {
            if (i == 0 || (i > 0 && nums[i] != nums[i - 1]))
            {
                int left = i + 1, right = nums.Length - 1, sum = -nums[i];

                while (left < right)
                {
                    int currentSum = nums[left] + nums[right];

                    if (currentSum == sum)
                    {
                        triplets.Add(new List<int> { nums[i], nums[left], nums[right] });

                        while (left < right && nums[left] == nums[left + 1])
                            left++;
                        while (left < right && nums[right] == nums[right - 1])
                            right--;

                        left++;
                        right--;
                    }
                    else if (currentSum < sum)
                    {
                        left++;
                    }
                    else
                    {
                        right--;
                    }
                }
            }
        }

        return triplets;
    }

    public static void Main()
    {
        var test1 = ThreeSum(new int[] { -1, 0, 1, 2, -1, -4 });
        var test2 = ThreeSum(new int[] { 0, 1, 1 });
        var test3 = ThreeSum(new int[] { 0, 0, 0 });

        Console.WriteLine("Test1: " + String.Join(", ", test1.Select(x => $"[{String.Join(", ", x)}]")));
        Console.WriteLine("Test2: " + String.Join(", ", test2.Select(x => $"[{String.Join(", ", x)}]")));
        Console.WriteLine("Test3: " + String.Join(", ", test3.Select(x => $"[{String.Join(", ", x)}]")));
    }
}
