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


/*
String.prototype.toJadenCase = function () {
    return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};*/


/*function removeExclamationMarks(s) {
    return s.split("").filter(e => e.toLowerCase()!="!").join("");
}

console.log(removeExclamationMarks("BAZA ! YA TUT!"))*/


/*
function filter_list(l) {
return l.filter(v => typeof v == "number")
}
*/

/*
function even_or_odd(number) {return number % 2 ? "Odd" : "Even"}*/





/*const smash = (words) => {return words.join(" ")};*/


/*
// оператор , число, число , в зависимости от переданных параметров произвести вычисление
function basicOp(operation, value1, value2){
    return eval(value1+operation+value2)
}
*/

//все числа отрицательные
/*function makeNegative(num) {
   return num < 0 ? num : -num
}*/


// сумма самых маленьких чисел в массиве
/*
function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a > b ? 1 : -1);
    let res = Number(arr.slice(0, 1)) + Number(arr.slice(1, 2))
    return res
}
*/





// камень ножницы бумага
/*const rps = (p1, p2) => {
    if (p1 === "rock" && p2 === "scissors") {
        return win = `Player ${1} won!`
    } else if (p1 === "scissors" && p2 === "paper") {
        return win = `Player ${1} won!`
    } else if (p1 === "paper" && p2 === "rock") {
        return win = `Player ${1} won!`
    } else if (p2 === "rock" && p1 === "scissors") {
        return win = `Player ${2} won!`
    } else if (p2 === "scissors" && p1 === "paper") {
        return win = `Player ${2} won!`
    } else if (p2 === "paper" && p1 === "rock") {
        return win = `Player ${2} won!`
    } else {
        return notWinner = `Draw!`
    }
};
const rps2 = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
};*/


/*
// число после которого нужно считать овец
var countSheep = function (num){
    let str = "";
    for (let i = 1; i <= num; i++) {str += `${i} sheep...`; }
    return str
}*/


// если булевое правда вернуть да , в обратном случае нет
/*
function boolToWord( bool ){
    return bool ? "Yes" : "No"
}*/



//Создайте функцию с двумя аргументами, которая будет возвращать массив первых (n) кратных (x).
/*
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++ ) {
        let y = x * i;
        z.push(y)
    }
    return z;
}

console.log(countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]);
console.log(countBy(2,5) === [2,4,6,8,10])*/





// revers words
/*
function reverseWords(str) {
    console.log(str.split("").reverse().join("").split(" ").reverse())
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}


console.log(reverseWords("pavel good man"))*/



/*
function multiply(a, b){
    return a * b
}
*/


/*function numberToString(num) {return `${num}`}*/



/*function basicOp(operation, value1, value2){
    if (operation === '+') return value1 + value2
    if (operation === '-') return value1 - value2
    if (operation === '*') return value1 * value2
    if (operation === '/') return value1 / value2
}*/


/*
/!*
[]                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"*!/
function likes(arr) {
    if (arr.length === 0) return `no one likes this`;
    if (arr.length === 1) return `${arr[0]} likes this`;
    if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
    if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    if (arr.length >= 4) return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}

console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"] ))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))*/


/*
/// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

*/



/*
function add(a, b) {
    if (a.length > 20 || b.length > 20 ) {
        return (Number(BigInt(a)) + Number(BigInt(b))).toString()
    }
    return (Number(a) + Number(b)).toString();
}

console.log(add('63829983432984289347293874', "90938498237058927340892374089"))

*/



/// validate password
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number

/*
function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}*/
