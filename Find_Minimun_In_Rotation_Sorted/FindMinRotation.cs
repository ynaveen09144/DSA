//Brute force solution

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        int[] nums = { 3,4,5,1,2 };
        int min = FindMinRotation(nums);
        Console.WriteLine("The minimum element in the rotated sorted array is: " + min);
    }
    static int FindMinRotation(int[] nums)
    {
        int left = 0;
        int right = nums.Length - 1;
        
        if(nums[left] > nums[right])
            return nums[left];
            
        while(left < right)
        {
            int mid = left + (right - left / 2);
            
            if(nums[mid] > nums[right])
            left = left + 1;
            else
            right = mid;
        }
        return nums[left];
    }
}
