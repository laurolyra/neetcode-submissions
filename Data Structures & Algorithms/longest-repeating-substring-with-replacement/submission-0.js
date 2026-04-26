class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const letterCounter = {}
        let left = 0
        let result = 0
        for(let i = 0; i < s.length; i++){
            let right = i
            if(!letterCounter[s[right]]){
                letterCounter[s[right]] = 0
            }
            letterCounter[s[right]]+=1
            let maxValue = Math.max(...Object.values(letterCounter));
            while((right - left + 1 ) - maxValue > k){
                console.log("[while!]")
                console.log("before sub:", letterCounter)
                console.log("right:", right)
                console.log("left:", left)
                letterCounter[s[left]] -=1
                left+=1
                console.log('letterCounter', letterCounter, '\nleft:', left, '\n[while]')
            }
            result = Math.max(result, right - left + 1 )
            console.log("partial result:", result)

        }
        console.log('result:', result)
        console.log('letterCounter', letterCounter)
        return result
    }
}
