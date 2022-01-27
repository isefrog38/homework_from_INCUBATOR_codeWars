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

// function squareSum(numbers)
// { 
//   var totalSum = 0;
//   for (i=0;i<numbers.length;i++)
//   {
//     totalSum += Math.pow(numbers[i], 2);
//   }
//   return totalSum;
// }

// function booleanToString(b){
//   if (b === true ) {
//     return 'true'
//   } else if (b === false) {
//     return 'false'
//   }
//   return b;
// }

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// function countSheeps(arrayOfSheep) {
//     let counter = 0
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i]) counter += 1
//     }
//     return counter
// }

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }


// function check(a, x) {
//     if (a.includes (x)) {
//         return true 
//     }else{
//         return false
//     }
// };

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// function printerError(s) { //or return s.match(/[^a-m]/g).length + "/" + s.length; in 1 string
//     if(s==null){
//         return error;  
//         }else{
//          if (s.match(/[^a-m]/gi)==null){
//            var err = 0;
//          }else {
//            var err = s.match(/[^a-m]/gi).length
//          }
//           var len = s.length;
//           var res = err + '/' + len;
//           return res;
//         }
      
//     }


// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }

// function isValidWalk(walk) {
//   var position = walk.reduce(function(sum, sign){
//     switch(sign){
//       case 'n': return ++sum; break
//       case 's': return --sum; break
//       case 'w': return sum+10; break
//       case 'e': return sum-10; break
//     }
//   }, 0);
//   return walk.length === 10 && position === 0;
// }

// function humanReadable(seconds) {
//     var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
//     return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
//   }
  
//   function formatDate(n){
//     var number = Number.parseInt(n)
//     return number > 9? number : '0'+number;
//   }



// function mxdiflg(a1, a2) {
//     if(!a1.length||!a2.length)return -1;
//      a1.sort((a,b)=>a.length-b.length);
//      a2.sort((a,b)=>a.length-b.length)
//      return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
//    }


// function getMiddle(s){
   
//     let evenOdd = s.length % 2 === 0
//     let minMid = s.charAt(s.length/2-1)
//     let mid = s.charAt(s.length/2)
    
//     return (evenOdd == true)? minMid.concat(mid): mid
//   }

/*function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}*/

/*
const capitals = word => word.split('')
    .map((letter, idx) => letter === letter.toUpperCase() ? idx : false)
    .filter(num => Number.isInteger(num));
*/


/*let gimme = function (inputArray) {
    let clonedArray = inputArray.slice(0);
    clonedArray.sort(function(a, b){
        return a-b
    });
    return inputArray.indexOf(clonedArray[1]);
};*/

/*
let number=function(array){
    const resultArr = [];

    for (let i = 0, j = 1; i < array.length; i += 1) {
        if (array.length === 0) {
            return `Empty array should return empty array`;
        } else {
            resultArr.push(`${j}: ${array[i]}`);
            j += 1;
        }
    }

    return resultArr;
}
*/


/*
function  lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2
}

console.log(lovefunc(10,8))
*/
/*
const digitize = (n) => {
 return n.toString().split('').reverse().map(Number)
}

console.log(digitize(12343424))*/
