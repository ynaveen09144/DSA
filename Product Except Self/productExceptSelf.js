// Brute force

var productExceptSelf = function(nums) {
    const result = []
    
    let zeroCount = 0
    let productOfNonZeros = 1
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++
        } else {
            productOfNonZeros *= nums[i]
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(zeroCount > 1) {
            result.push(0)
        } else if(zeroCount == 1) {
            if(nums[i] == 0) {
                result.push(productOfNonZeros)
            } else {
                result.push(0)
            }
        } else {
            result.push(productOfNonZeros / nums[i])
        }
    }
    return result
}

const test1 = ProdOfArrExpSelf([1,2,3,4])
const test2 = ProdOfArrExpSelf([-1,1,0,-3,3])
console.log(test1)
console.log(test2)


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

