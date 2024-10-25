function maxProfit(prices) {

    // u need to keep track of min price and max profit
    //min price is starting price
    //max profit is max of curr price - max profit

    let minPrice = Infinity
    let maxProfit  = 0

    for ( p of prices){
         if (p< minPrice){
             minPrice = p
         }
         else {
             maxProfit  = Math.max(maxProfit, p - minPrice)
         }
    }

    return maxProfit


}

// Test cases
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0

let prices3 = [2, 4, 1];
console.log(maxProfit(prices3)); // Output: 2

let prices4 = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(prices4)); // Output: 4
