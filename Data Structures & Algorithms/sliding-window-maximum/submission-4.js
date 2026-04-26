class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       
        const result = []
        for(let i = 0; i <= nums.length - k; i+=1){
            let maxNumber = nums[i]
           
            for(let j = i; j < i + k; j+=1){
                maxNumber = Math.max(maxNumber, nums[j])
            }
            result.push(maxNumber)
        }
        return result
    }
}
