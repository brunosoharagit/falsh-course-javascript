//word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line
console.log(wordBlanks)

//javascript arrays - multiple and diff values storages
const myArray = ["Number", 1];
console.log(myArray)

//javascript arrays - nested arrays
const myNestedArray = [["Yotyan", 2863], ["Nana sz", 2894]];
console.log(myNestedArray);

//javascript arrays - access the data index
const numbers = [23, 44, 55, 67];
const firstNumb = numbers[0];
console.log(firstNumb);

//javascript arrays - modify array datas
const names = ["Nana sz", "Veloxbreno", "baanda1d"];
names[0] = "Yotyan";
console.log(names);
console.log(names[0]);

//javascript arrays - accessing multi-dimensional arrays
const myAr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myAr[2][1];
const subarray = myAr[3];
const nestedSubarray = myAr[3][0];
console.log(myData2, subarray, nestedSubarray);