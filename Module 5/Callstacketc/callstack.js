let number = 2;
console.log(number);

function doSomething() {
  console.log("I did it!!");
  let somethingelse = getSomethingElse();
  console.log(somethingelse);
}

let word = "Word";
console.log(word);

doSomething();

function getSomethingElse() {
  console.log("I did it!! also");
  let data = getData();
  return "Something else" + data;
}

function getData() {
  return "data from somewhere";
}

// // recursion
// function stackoverflow() {
//   if (somecondition === true) {
//     return "something";
//   } else {
//     stackoverflow();
//   }
// }

// stackoverflow();

// factorial   5*4*3*2*1

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

let result = factorial(5)

console.log(result)