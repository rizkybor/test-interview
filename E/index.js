// input n = 5
// 1**45678
// 12**5678
// 123**678
// 1234**78
// 12345**8

// Number 1
let n = 5
function test() {
    for (let i = 1; i <= n; i++) {
      let temp = "";
      for (let j = 1; j <= n + 3; j++) {
        temp += j;
        if (i === j) {
            temp += "**";
        } 
      }
      console.log(temp);
    }
  }
  
  console.log(test(n))
    



// Number 2
const stock = [10, 7, 5, 8, 11, 9, 1];

function getMax(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > max) {
        max = currentProfit;
      }
    }
  }
  return max;
}

console.log(getMax(stock));
