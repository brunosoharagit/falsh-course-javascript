//#region 1. introduction to SWITCH..CASE
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return answer = "alpha";
      break;
    case 2:
      return answer = "beta";
      break;
    case 3:
      return answer = "gamma";
      break;
    case 4:
      return answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//#endregion

//#region 2. inserting the DEFAULT in SWITCH...CASE
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return answer = "apple";
      break;
    case "b":
      return answer = "bird";
      break;
    case "c":
      return answer = "cat";
      break;
    default:
      return answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));
//#endregion

//#region 3. multiple options
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Null";
      break;
  }


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
//#endregion














