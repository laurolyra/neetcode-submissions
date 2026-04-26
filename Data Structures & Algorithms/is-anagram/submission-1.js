class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        const modifiedS = s.split('').sort().join()        
        const modifiedT = t.split('').sort().join()
        return modifiedS === modifiedT
    }
}
