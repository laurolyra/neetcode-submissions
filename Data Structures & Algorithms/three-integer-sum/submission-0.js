class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        const knownResults = new Set()
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                for(let k = j+1; k < nums.length; k++){
                    // if(nums[i] + nums[j] + nums[k] === 0){

                    // }
                    if(nums[i] + nums[j] + nums[k] === 0){
                        const triplet = [nums[i],nums[j],nums[k]].sort((a,b) => a> b? 1: -1)
                        if(!result.some(item => JSON.stringify(item) === JSON.stringify(triplet))){
                            result.push(triplet)
                        }
                        // console.log('triplet', triplet)
                        // if(!knownResults.has(triplet)){
                        //     knownResults.add(triplet)
                        //     console.log('knownResults', knownResults)
                        //     console.log('knownResults.has([ -1, 0, 1 ])', knownResults.has([ -1, 0, 1 ]))
                        // }
                    }
                }
            }
        }
        console.log("after for:", result)
        return result
    }
}
