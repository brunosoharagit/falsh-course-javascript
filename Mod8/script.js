function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
console.log(welcomeToBooleans());

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line

}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

// Setup ==> equal (==)
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

// Setup ==> strictly equal (===)
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

// Setup ==> practice equals and strict equals
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Setup ==> different (!=)
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));

// Setup ==> strictly different (!==)
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));