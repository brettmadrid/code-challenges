function calcMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("2 or more prices required");
  }

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0]; // preset to first possible buy/sell

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    // profit if bought at the min price and sold at current price
    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    // check to see if the current price should be the min price seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

console.log(calcMaxProfit([10, 7, 5, 8, 11, 9]));
