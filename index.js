// function greet() {
//     return "hello world!";
// }

// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// function positiveSum(arr) {
//     var total = 0;
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//         if (arr[i] > 0) {                   // if arr[i] is greater than zero
//             total += arr[i];                  // add arr[i] to total
//         }
//     }
//     return total;
// }

function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}