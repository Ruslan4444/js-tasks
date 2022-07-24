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
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array = array1.concat(array2);
//   //   console.log(array);
//   let newArray = [];
//   for (let i = 0; i < array.length; i += 0) {
//     if (array[i] === array[i]) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const productValues = [];
//   // Change code below this line
//   for (const product of products) {
//     const propKey = propName;
//     if (product[propKey]) {
//       productValues.push(product[propKey]);
//     }
//   }

//   return productValues;
//   // Change code above this line
// }
// console.log(getAllPropValues("category"));
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  const propKey = productName;
  let total = 0;
  for (const product of products) {
    if (product[propKey]) {
      total = product.price * product.quantity;
    }
  }
  return total;
  // Change code above this line
}
calculateTotalPrice("Radar");
calculateTotalPrice("Droid");
calculateTotalPrice("Grip");

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!
