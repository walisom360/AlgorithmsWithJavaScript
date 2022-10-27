// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
  const breadcrumbs = {};

  return arr.sort((a, b) => a - b);
};

uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]
