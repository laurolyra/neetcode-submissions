class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        // let minimumValue = 0
        for(let i = 0; i < prices.length; i++){
            let dayCounter = 1
            while(prices[i+dayCounter] > prices[i]){
                profit = Math.max(profit, prices[i+dayCounter] - prices[i])
                dayCounter++
            }
        }
        console.log('profit', profit)
        return profit
    }
}
