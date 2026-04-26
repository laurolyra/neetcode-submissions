class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const formattedS = s.replace(/[^\w]|_/gi, '').toLowerCase()
        // const reverted = formattedS.split('').reverse().join('')

        return s.replace(/[^\w]|_/gi, '').toLowerCase() === s.replace(/[^\w]|_/gi, '').toLowerCase().split('').reverse().join('')
    }
}
