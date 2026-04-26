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
        let modifiedS = s.split('').sort().join()        
        let modifiedT = t.split('').sort().join()
        return modifiedS === modifiedT
    }
}
