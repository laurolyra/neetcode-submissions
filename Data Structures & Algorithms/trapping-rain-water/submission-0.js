class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0
        let leftWall = 0
        let rightWall = 0
        let n = height.length

        const left = [...Array(n)].fill(0);
        const right = [...Array(n)].fill(0);

        for(let i = 0; i < n - 1; i++){
            let j = (n-1) - i
            left[i] = leftWall;
            right[j] = rightWall
            console.log('>---height[i]---<', height[i])
            console.log('[leftWall]before ops:', leftWall)
            leftWall = Math.max(leftWall, height[i])
            rightWall = Math.max(rightWall, height[j])
            console.log('<><>left', left)
            console.log('[leftWall]after ops:', leftWall)
            // console.log('<><>right', right)
            // console.log('[rightWall]after ops:', rightWall)
        }


        for(let i = 0; i < n - 1; i++){
            let potential = Math.min(left[i], right[i])
            total+=Math.max(0, potential - height[i])
        }

        return total

        // let totalArea = 0
        // let pointer = 0
        // let right = 1

        // // preciso percorrer o array
        // for(let i = 0; i< height.length; i++){
        //     // preciso encontrar um espaço de zero no intervalo de elementos
        //     if(height[i] > 0){
                
        //         // ao encontrar, começar a percorrer os demais elementos;
        //         let j = 1
        //         const well = []
        //         while(height[i] > height[i+j]){
        //             console.log('height[i]', height[i])
        //             console.log('height[i+j]', height[i+j])
        //             console.log('[before]total', totalArea)
        //             totalArea += (height[i] - height[i+j])
        //             console.log('total', totalArea)
        //             j++
        //             console.log('<><><>')
        //         }
        //     }
        // }
        // console.log('total', totalArea)
        // // ao encontrar, calcular o espaço vazio entre ambos
    }
}
