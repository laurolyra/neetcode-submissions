class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {}
        const columns = {}
        const boxes = {}
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                const valueInBoard = board[i][j]
                console.log('[--starting j loop--]')
                console.log('-> i:',i)
                console.log('-> j:',j)
                console.log('-> valueInBoard:',valueInBoard)
                if(valueInBoard !== '.'){
                    const boxidx = Math.floor(i/3)*3+Math.floor(j/3)
                    console.log('-<>before comparing<>-')
                    console.log("->boxidx", boxidx)
                    console.log('rows',rows)
                    console.log('columns',columns)
                    console.log('boxes',boxes)
                    if(
                        rows[`${i}-${valueInBoard}`] ||
                        columns[`${j}-${valueInBoard}`] ||
                        boxes[`${boxidx}-${valueInBoard}`]
                    ){
                        return false
                    }
                    rows[`${i}-${valueInBoard}`] = true
                    columns[`${j}-${valueInBoard}`] = true
                    boxes[`${boxidx}-${valueInBoard}`] = true
                    console.log('-<>-<>-<>-<>after add<>-<>-<>-<>-')
                    console.log('rows',rows)
                    console.log('columns',columns)
                    console.log('boxes',boxes)
                }
        }
        }
        return true
    }
}
