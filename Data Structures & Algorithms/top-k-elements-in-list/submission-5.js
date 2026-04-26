class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === k){
            return nums
        }
        let limit = k;
        const numberHashMap = {}
        const result = []
        for(let i = 0; i < nums.length; i++){
            if(!numberHashMap[nums[i]]){
                numberHashMap[nums[i]] = 0
            }  
            numberHashMap[nums[i]] += 1
        }
      console.log('numberHashMap', numberHashMap)
      const organizedEntries = Object.entries(numberHashMap).sort((a,b) => a[1] < b[1] ? 1 : -1)
      while (limit !== 0){
        result.push(Number(organizedEntries[0][0]))
        organizedEntries.shift()
        limit -=1
      }
      console.log('result', result)
      return result
    }
}
