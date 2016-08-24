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

console.log( maxProfit( [ 128, 97, 121, 123, 98, 97, 105 ] ) ); 



// Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way.

1. We would use a binary search combined with a linear search
2. We would attempt it halfway up the building (50)
3. If the egg were to break, then we can run a linear search through items 1 - 49
4. If the egg did not break, then run a linear search through items 51 - 100
5. Whatever floor (index) the remaining egg breaks on, return the previous floor (index - 1)



var safeBreakage = function(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  var index = Math.floor((start + end) / 2);
  var item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  } else if (item < value) {
    array.splice(index, array.length);
    for(var i = index + 1; i < array.length; i++)
      if (array[i] === value) {
        return array[i]
      }
  }
}








// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?
