// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = [];
//   newArray = array.slice(1, array.length - 1);
//   return newArray;
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(fruits);
// const scores = ["apple", "peach", "pear", "banana"];
// const deletedScores = scores.splice(1, scores.length - 2);
// console.log(scores);
// function slugify(title) {
//   // Change code below this line
// const slug =
//   return slug;
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     // console.log(i);
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// calculateTotal(10);
// console.log(calculateTotal(3));
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
// function findLongestWord(string) {
//   // Change code below this line
//   // let stringSplit = string.split(" ");
//   // let longestWord = 0;
//   // for (let i = 0; i < stringSplit.length; i += 1) {
//   //   if (stringSplit[i].length > longestWord) {
//   // longestWord = stringSplit[i].length;
//   //   }
//   // }
//   // return longestWord;
//   const strSplit = string.split(" ");
//   let longestWordLength = 0;
//   let word = "";
//   for (let i = 0; i < strSplit.length; i += 1) {
//     longestWordLength = strSplit[1].length;
//     if (strSplit[i].length > longestWordLength) {
//       word = strSplit[i];
//     }
//   }
//   return word;

//   // Change code above this line
// }
// function findLongestWord(string) {
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) numbers.push(i);
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
function getCommonElements(array1, array2) {
  // Change code below this line
  const array = array1.concat(array2);
  //   console.log(array);
  let newArray = [];
  for (let i = 0; i < array.length; i += 0) {
    if (array[i] === array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
  // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
