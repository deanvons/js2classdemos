const person = { age: 14, height: 150, shirtSize: "M", doSomethin() {} };
// copy the object values

// let copiedAge = person.age;
// let copiedHeight = person.height;
// let copiedShirtSize = person.shirtSize;

const {
  age: copiedAge,
  height: copiedHeight,
  shirtSize: copiedShirtSize,
} = person;

console.log(
  `Here is a person's etails ${copiedAge}, ${copiedHeight}, ${copiedShirtSize}`
);

// const { x, y } = obj;
// const [a, b] = [1, 2];

const obj = {
  method: function () {
    console.log("Hello");
  },
};

console.log(obj);

let areaFinal = 0;

function CalculateArea(...args) {
  let area;
  // get input
  window.prompt();

  //process
  if (args.length() == 1) {
    // triangle area
    //area = args[0]
    areaFinal = args[0] ** 2;
  }

  // output
  console.log();
}

function setupUser(personObjParam) {
  // Using an object to encapsulate parameters
}

setupUser(personObj);

/**
 * Demonsterates bad practeace roff
 * @param {string} id 
 * @param {string} name 
 * @param {*} weight 
 * @param {*} height 
 * @returns {string} An important maese
 */
function setupUserBad(id, name, weight, height) {
  // Using an object to encapsulate parameters
  return "bad idea"
}

setupUserBad(perons.id, perons);

const data = [1, 2, 3, 4, 5];

// Calculate the sum of squares of even numbers greater than 2
const result = data
  .filter((num) => num > 2 && num % 2 === 0)
  .map((num) => num ** 2)
  .reduce((acc, val) => acc + val, 0);

console.log(`The result is: ${result}`);

function isEvenAndGreaterThanTwo(num) {
  let valid = false;

  if (num > 2 && num % 2 === 0) {
    valid = true;
  }

  return valid;
}
