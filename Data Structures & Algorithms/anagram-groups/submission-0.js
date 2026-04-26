class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagroup = {}
        for(const str of strs){
            console.log('str::', str)
            const anagramOrigin = str.split('').sort().join('')
            if(!anagroup[anagramOrigin]) anagroup[anagramOrigin] = []
            anagroup[anagramOrigin] = [...anagroup[anagramOrigin], str]
        }
        return Object.values(anagroup)
    }
}
