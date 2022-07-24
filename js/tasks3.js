// function makeTask(data) {
//   //   const { text } = data;
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   // const text = "";
//   const tasks = { category, priority, ...data, completed };
//   // const {completed, category, priority } = data;
//   return tasks;
//   // Change code above this line
// }

// makeTask({});
// makeTask({ category: "Finance", text: "Take interest" });
// console.log(makeTask({}));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// function add(...args) {
//   // Change code above this line
// }
// console.log(add(1, 2));
function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;
  // Change code above this line
}
calculateTotal(24);
console.log(calculateTotal(3));
