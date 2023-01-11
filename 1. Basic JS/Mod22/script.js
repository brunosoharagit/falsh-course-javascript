//#region 1. ternary condition - introduction
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
//#endregion

//#region 2. multiple ternary condition
function checkSign(num) {
  return (num > 0) ? "positive" : (num === 0) ? "zero" : "negative";
}

checkSign(10);
//#endregion
