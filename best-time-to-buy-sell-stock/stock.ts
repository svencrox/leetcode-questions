function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit: number = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        const profit = currentPrice - minPrice;

        // update if profit is bigger than maxProfit
        if (profit > maxProfit) {
            maxProfit = profit;
        }

        // update if current price is smaller than min price
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
}

const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
const result1 = maxProfit([7, 6, 4, 3, 1]);
console.log(result1);
