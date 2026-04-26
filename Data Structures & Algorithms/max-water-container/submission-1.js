class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let leftPointer = 0
       let rightPointer = heights.length - 1
       let result = 0;
       while (leftPointer < rightPointer){
         let areaHeight = Math.min(heights[leftPointer], heights[rightPointer])
         let areaWidth = rightPointer - leftPointer
         let area = areaHeight * areaWidth
         result = Math.max(area, result)
         if (heights[leftPointer] > heights[rightPointer] ){
            rightPointer-=1
         } else {
            leftPointer+=1
         }
       }
       return result
    }
}
