//#region 1. introduction to Objects
const myDog = {
  // Only change code below this line
  name: "Billy",
  legs: 4,
  tails: 1,
  friends: ["Flop", "Mandy", "Luke", "Potato"]

  // Only change code above this line
};

console.log(myDog.friends);
//#endregion

//#region 2. some random things
console.log("Depois de encher o bucho de comida, cá estou de volta! :)");
//#endregion

//#region 3. object property's access
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

console.log(hatValue);
console.log(shirtValue);
//#endregion

//#region 4. object data access through brackets
// Setup
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2["an entree"];   // Change this line
const drinkValue = testObj2["the drink"];    // Change this line
//#endregion

//#region 5. object data access through variables
// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber];   // Change this line
//#endregion

//#region 6. object data update
// Setup
const myDog1 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog1["name"] = "Happy Coder";
//#endregion

//#region 7. add new object data variable
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog2.bark = "woof";
//#endregion
