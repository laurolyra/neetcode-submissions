class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false
        }
        const s1Letters = {}
        for (let i = 0; i < s1.length; i+=1){
            if(!s1Letters[s1[i]]){
                s1Letters[s1[i]] = 0
            }
            s1Letters[s1[i]]+=1
        }

        const windowSize = s1.length;
        const stringLength = s2.length;
        console.log("dict:", s1Letters)
        for(let i = 0; i <= stringLength - windowSize; i++){
            const lettersCopy = {...s1Letters}
            console.log('i:', i)
            console.log('s2[i]:', s2[i])
            for(let j = i; j < i+windowSize; j++){
                const current = s2[j]
                console.log('j:', j)
                console.log('current:', current)
                if(lettersCopy[current] && lettersCopy[current] > 0){
                    console.log("inside if!")
                    lettersCopy[current] -= 1
                    console.log("after subtraction:", lettersCopy)
                } else {
                    break
                }

                if(j === i + windowSize-1){
                    console.log("finished successfull!")
                    return true
                }
            }
        }
        return false
    }
}
