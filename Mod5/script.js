console.log("1. introduction to functions");
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

console.log("2. function with params");
function functionWithArgs(n1, n2) {
  console.log(n1 + n2);
}

functionWithArgs(1, 2);

console.log("3. function with return");
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
console.log(answer);
