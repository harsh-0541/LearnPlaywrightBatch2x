let fruits = ["Banana", "Gauva", "cherry"];
fruits.sort();
console.log(fruits);


let number = [3, 1, 4]
number.sort();
console.log(number); // [1, 3, 4] - works for single digit numbers

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); // [1, 10, 2, 21] - does not work for multiple digit numbers
// natural sorting , Lexical sorting

nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 10, 21] - works for multiple digit numbers as well

//Ascending order

nums.sort((a, b) => b - a);
console.log(nums); // [descending

// (a,b) ==> a-b ? is function which can sort the number