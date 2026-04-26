class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set(nums);
        console.log('numsnums.length', nums.length)
        console.log('numsSet.size', numsSet.size)
        return numsSet.size !== nums.length
    }
}
