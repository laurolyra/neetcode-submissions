class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formattedS = s.replace(/[^\w]|_/gi, '').toLowerCase()
        const reverted = formattedS.split('').reverse().join('')

        return formattedS === reverted
    }
}
