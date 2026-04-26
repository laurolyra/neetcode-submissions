class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        console.log('nums')
        const result = []
        let pointer = 0
        while (pointer <= nums.length - k){
            const sliced = nums.slice(pointer, k+pointer)
            result.push(Math.max(...sliced))
            pointer +=1
        }
        return result
    }
}
