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

//#region 8. delete existing object data variable
// Setup
const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog3.tails;
//#endregion

//#region 9. lookup in the object
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
//#endregion

//#region 10. testing objects for props
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}
//#endregion

//#region 11. manipulating the complex objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Linkin Park",
    "title": "Hybrid Theory",
    "release_year": 2000,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
//#endregion

//#region 12. accessing nested objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//#endregion

//#region 13. accessing nested arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
//#endregion





