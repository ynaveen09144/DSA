var maxProfit = function(prices) {
        let buy = 0, sell = 1, maxProfit = 0

    while(sell < prices.length) {
        if(prices[sell] > prices[buy]) {
            const profit = prices[sell] - prices[buy]
            maxProfit = Math.max(profit, maxProfit)
        } else {
            buy = sell
        }
        sell++
    }
    return maxProfit
};

const test1 = maxProfit([7,1,5,3,6,4])
const test2 = maxProfit([7,6,4,3,1])

console.log(test1)
console.log(test1)
