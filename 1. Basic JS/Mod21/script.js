//#region 1. parseInt
function convertToInteger(str) {
  const convertToInteger = parseInt(str);
  return convertToInteger;
}

convertToInteger("56");
//#endregion

//#region 2. parseInt using radix = 2;
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
//#endregion

