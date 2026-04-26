class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log('[encode]')
        console.log('-> strs', strs)
        console.log('-> join:', strs.join('&&&'))
        if (strs.length === 0){
            return '&&&NONE&&&'
        }
        // if (strs === []){
        //     return ''
        // }
        return strs.join('&&&')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('[decode]')
        console.log('-> str', str)
        console.log('-> split:', str.split('&&&'))
        if (str === '&&&NONE&&&'){
            return []
        }
        return str.split('&&&')
    }
}
