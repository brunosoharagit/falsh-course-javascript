//#region 1. if/else introduction
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(4));
//#endregion

//#region 2. if/else if introduction
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }

}

console.log(testElseIf(7));
console.log(testElseIf(15));
console.log(testElseIf(2));
//#endregion

//#region 3. logical order in if/else statement
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val > 5 && val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));
//#endregion

//#region 4. chaining condition statement
function testSize(num) {
  // Only change code below this line
  if(num < 5) {
    return "Tiny";
  }
  else if(num < 10) {
    return "Small";
  }
  else if(num < 15) {
    return "Medium";
  }
  else if(num < 20) {
    return "Large";
  }
  else {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);
//#endregion

//#region 5.

//#endregion