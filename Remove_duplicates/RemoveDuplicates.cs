//Optimised

using System;

class Program
{
    static void Main(string[] args)
    {
        int[] nums = { 0,0,1,1,1,2,2,3,3,4 };
        int newLength = RemoveDuplicates(nums);
        Console.WriteLine(newLength);
    }

    static int RemoveDuplicates(int[] nums)
    {
        int writePointer = 1;
        
        for(int readPointer = 1; readPointer < nums.Length; readPointer++)
        {
            if(nums[readPointer] != nums[writePointer - 1])
            {
                nums[writePointer] = nums[readPointer];
                writePointer++;
            }
        }
        return writePointer;
    }
}
