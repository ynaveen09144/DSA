using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        int[] colors = { 2, 0, 2, 1, 1, 0 }; // Example input array of colors

        SortColors(colors);

        Console.WriteLine("Sorted Colors:");
        foreach (var color in colors)
        {
            Console.Write(color + " ");
        }
    }

    static void SortColors(int[] nums)
    {
        // Count the occurrences of each color
        Dictionary<int, int> colorCounts = new Dictionary<int, int>();
        foreach (int color in nums)
        {
            if (!colorCounts.ContainsKey(color))
            {
                colorCounts[color] = 0;
            }
            colorCounts[color]++;
        }

        // Reconstruct the array with colors sorted according to their counts
        int index = 0;
        for (int color = 0; color <= 2; color++) // Iterating through possible colors 0, 1, 2
        {
            if (colorCounts.ContainsKey(color))
            {
                int count = colorCounts[color];
                for (int i = 0; i < count; i++)
                {
                    nums[index++] = color;
                }
            }
        }
    }
}
