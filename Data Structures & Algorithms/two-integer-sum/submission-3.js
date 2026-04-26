class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++){
            for(let j = nums.length - 1; j > 0; j--){
            if (i !== j && nums[i] + nums[j] === target){
                return [i, j]
            }}
        }
    }
}
