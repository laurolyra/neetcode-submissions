class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const uniqueLetters = new Set()
        let left = 0
        let result = 0
        for(let i = 0; i < s.length; i++ ){
            console.log('s[i]', s[i])
            while(uniqueLetters.has(s[i])){
                console.log('before delete', uniqueLetters)
                uniqueLetters.delete(s[left])
                console.log('after delete', uniqueLetters)
                left+=1
            }
            console.log('left?', left)
            uniqueLetters.add(s[i])
            console.log('outside while', uniqueLetters)

            // console.log('[after while]left:', left)
            // console.log('[after while]i:', i)
            result = Math.max(result, i - left + 1)
        }
        console.log('after for', uniqueLetters)
        console.log("result", result)
        return result
        
        // let right
        // let substring = []
        // if (uniqueLetters.size <=1){
        //     return uniqueLetters.size
        // }
        // for(let i = 0; i < s.length; i++ ){
        //     if(!substring.includes(s[i])){
        //         substring.push(s[i])
        //         console.log('after add:', substring)
        //     } else {
        //         if (s[i] === substring[0]){
        //             substring.shift()
        //             substring.push(s[i])
        //             console.log('after shift:', substring)
        //         }
        //     }
        // }
        // return substring.length
    }
}
