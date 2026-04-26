class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <=1){
            return false
        }
        const closingChars = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        const charStack = []
        for (let letter of s){
            console.log('letter:', letter)
            if(!closingChars[letter]){
                charStack.push(letter)
                continue
            }
            if(charStack.pop() !== closingChars[letter]){
                return false
            }
            
        }
        console.log('stack:', charStack)
        return charStack.length === 0
    }
}
