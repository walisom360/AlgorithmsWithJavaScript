// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = () => {};

console.log("~~~~~~~~~~TASK 1~~~~~~~~~~~~~~~~");
console.log("times10 reuturns:", times10(9));

//Task 2: Use an object to cache the result of you times10 function.
// protip 1: Create a function that checks if the value for n has been calculated
//  before.
// protip 2: If the value for n has not been calculated, calculated, calculate and the save
// the result in the cache object.

const cache = {};

const memoTimes = (n) => {
  if (n in cache) {
    console.log("Fetching from cache", n);
    return cache[n];
  } else {
    console.log("Calculating result");
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log("~~~~~~~~TASK 2~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes(9)); // calculated
console.log("Task 2 cached value:", memoTimes(9));

// Task 3: Clean up your global scope by moving your cache inside your function
// protip: Use a closure to return a function that you can call latter.
