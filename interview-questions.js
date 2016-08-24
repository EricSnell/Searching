// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.





var maxProfit = function(week) {
  // [ 120, 90, 120, 130, 100, 90, 110 ]
  var profit = week[1] - week[0];
  for (var i = 0; i < week.length; i++) {
    for (var j = i + 1; j < week.length; j++) {
      if (week[j] - week[i] > profit) {
        profit = week[j] - week[i]
      }
    }
  }
  return profit;
};

console.log( maxProfit( [ 128, 97, 121, 123, 98, 97, 105 ] ) ); // 26

// Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way.


// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?
