class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        let partial = 1;
        for(let i=0; i < nums.length; i++){
            console.log(nums[i])
            for(let j=0; j < nums.length; j++){
                if (i !== j){
                    // console.log('nums[j]', nums[j])
                    partial = partial * nums[j]
                    // console.log('partial after multiply:', partial)
                }
            }
            result.push(partial)
            partial = 1

        }
        return result
    }
}
