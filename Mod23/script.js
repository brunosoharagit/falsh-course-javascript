
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  }
  else {
    const arrCount = countdown(n - 1);
    arrCount.unshift(n);
    return arrCount;
  }
  return;
}
// Only change code above this line