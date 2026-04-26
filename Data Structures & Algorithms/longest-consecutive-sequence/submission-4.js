class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequenceCounter = 0;
        if (nums.length <= 1){
            return nums.length
        }
        const orderedNums = new Set(nums)
        console.log('ordered', orderedNums)
        for(let number of orderedNums){
            if(!orderedNums.has(number - 1)){ // if its true, we are in a new sequence
                let currentCounter = 0
                console.log("[][]inside if:[][]", number)
                console.log('currentCounter', currentCounter)
                console.log("number+currentCounter", number+currentCounter)
                while(orderedNums.has(number+currentCounter)){
                    currentCounter+=1
                    console.log("[][]inside while:[][]", currentCounter)
                    console.log("[while]number+currentCounter[][]", number+currentCounter)
                }
                console.log('<>before max<>longestSequenceCounter', longestSequenceCounter)
                longestSequenceCounter = Math.max(currentCounter, longestSequenceCounter)
            }

        }
        return longestSequenceCounter
    }
}
