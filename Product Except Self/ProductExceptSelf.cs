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




// Optimal


using System;

public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int length = nums.Length;

        // Arrays to store prefix and suffix products
        int[] prefixProducts = new int[length];
        int[] suffixProducts = new int[length];

        int[] result = new int[length];

        // Calculate prefix products
        prefixProducts[0] = 1;
        for (int i = 1; i < length; i++) {
            prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
        }

        // Calculate suffix products
        suffixProducts[length - 1] = 1;
        for (int i = length - 2; i >= 0; i--) {
            suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
        }

        // Calculate result by multiplying prefix and suffix products
        for (int i = 0; i < length; i++) {
            result[i] = prefixProducts[i] * suffixProducts[i];
        }

        return result;
    }

    public static void Main(string[] args) {
        Solution solution = new Solution();

        int[] testArray = new int[] { -1, 1, 0, -3, 3 };
        int[] result = solution.ProductExceptSelf(testArray);

        Console.WriteLine("[{0}]", string.Join(", ", result));
        // Output will be [0, 0, 9, 0, 0] for the given input [-1, 1, 0, -3, 3]
    }
}
