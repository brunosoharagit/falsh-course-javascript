// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below (abaixo) this line
function addFive() {
  sum = sum + 5;
}

// Only change code above (acima) this line

addThree();
addFive();

function nextInLine(arr, item) {
  // Only change code below this line
  //1. add a number at the last index of array
  arr.push(item);

  //2. create the new const to see what
  const removed = arr.shift();

  //3. return the created item
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));