class Solution {
    findMaxConsecutiveOnes(nums) {
        let cnt = 0;
        let maxi = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                cnt++;
                maxi = Math.max(maxi, cnt);

            } else {
                cnt = 0;
            }
        }
        return maxi;
    }
}

const nums = [1, 1, 0, 1, 1, 1];
const sol = new Solution();

const ans = sol.findMaxConsecutiveOnes(nums);
console.log("The maximum consecutive 1's are " + ans);
