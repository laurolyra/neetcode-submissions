class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <=1){
            return false
        }
        // const closing = [']', '}', ')']
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
            } else {
                if(charStack.length === 0){
                    return false
                }
                const popped = charStack.pop()
                if (popped !== closingChars[letter]){
                    return false
                }
            }

            // if(!closingChars[letter]){
            //     charStack.push(letter)
            //     continue
            // }
            // if(charStack.pop() !== closingChars[letter]){
            //     return false
            // }
            
        }
        console.log('stack:', charStack)
        return charStack.length === 0
    }
}
