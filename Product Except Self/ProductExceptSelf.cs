// Brute

using System;
using System.Collections.Generic;

public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] result = new int[nums.Length];

        // Count the number of zeroes in the input array
        int zeroCount = 0;
        int productWithoutZeroes = 1;

        foreach (int num in nums) {
            if (num == 0) {
                zeroCount++;
            } else {
                productWithoutZeroes *= num;
            }
        }

        for (int i = 0; i < nums.Length; i++) {
            if (zeroCount > 1) {
                result[i] = 0;
            } else if (zeroCount == 1) {
                if (nums[i] == 0) {
                    result[i] = productWithoutZeroes;
                } else {
                    result[i] = 0;
                }
            } else {
                result[i] = (nums[i] == 0) ? productWithoutZeroes : productWithoutZeroes / nums[i];
            }
        }

        return result;
    }

    public static void Main(string[] args) {
        Solution solution = new Solution();

        int[] testArray = new int[] { -1, 1, 0, -3, 3 };
        int[] result = solution.ProductExceptSelf(testArray);

        Console.WriteLine("[{0}]", string.Join(", ", result)); // Output will be [0, 0, 9, 0, 0] for the given input [-1, 1, 0, -3, 3]
    }
}
