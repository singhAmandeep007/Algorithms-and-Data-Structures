/* 
	a financialanalyst is responsible fr portfolio profitable stocks, represented by array Each item in array represents the yearly profit of corresponding stock. analyst gathers all distint pairs of stocks that reached target profit. distinct pairs are pairs that differ in at least one element.given array of profits , find the number of distinct pairs of stocks where sum of each pair 's profit is exactly equal to target profit.

	EXAMPLE: [5,7,9,13,11,6,6,3,3] -> 12
	-> there are 4 pairs of stocks having sum of 12 (target). Because 2 instances of 3 in array there are 2 pairs matching (9,3) but only 1 can be included.
	-> so there are 3 distinct pairs of stocks ->(5,7) (3,9) (6,6) so the return value is 3.

*/

function stocksPairs(stocksProfit, target) {
  let N = stocksProfit.length;

  let cntPairs = 0;
  let hash = {};

  for (let i = 0; i < N; i++) {
    if (stocksProfit[i] > target) continue;
    let diff = target - stocksProfit[i];

    if (hash[stocksProfit[i]] && hash[stocksProfit[i]] !== "exists" && hash[diff] !== "exists") {
      cntPairs++;
      hash[stocksProfit[i]] = "exists";
      hash[diff] = "exists";
    } else {
      hash[diff] = stocksProfit[i];
    }
  }

  return cntPairs;
}

/* 
	Here we first create a hash to store key value pairs and a variable to track number of pairs matching our condition. Then we loop over the stocks profit array, we calculate the difference required to reach the target for each element. 	

	For the first loop, the hash would be empty, we create a key (diff) with value stockProfit. In second loop it will check if the element as 2nd index is there in hash, ( means we have found the other half required to reach the target), and it's value is not equal to exists and also the value of diff is also not equal to exists.

	If these are true we incremen the cntPairs by 1 and assign the value of key to string exists, so that its marked as used. to check for uniqueness in next loop.

*/

function stocksPairs1(stocksProfit, target) {
  const hash = {};
  let pairs = 0;

  for (let i = 0; i < stocksProfit.length; i++) {
    let diff = target - stocksProfit[i];

    if (hash[diff] && hash[diff] < 2) {
      pairs++;
      hash[diff] = 2;
      hash[stocksProfit[i]] = 2;
    } else {
      if (!hash[stocksProfit[i]]) {
        hash[stocksProfit[i]] = 1;
      }
    }
  }
  return pairs;
}

module.exports = [stocksPairs, stocksPairs1];
