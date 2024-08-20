const array = [1, 2, 3, 4, 4];

console.table(array);

//#region timer

function complexCalculation() {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}

// Run three separate tests below

console.time("myTimer");
//complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 101ms - timer ended

console.time("myTimer");
//complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 155ms - timer ended

console.time("myTimer");
//complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 128ms - timer ended

//#endregion

// How do I know if I understand a code base
// You should understand the logic and the code -> what is it doing, why and how

// if you log out ref types the browser will update, some tricks to avoid that belo
let object = { id: 1, name: "Sptheven" };

console.log(object);

object.id = 2;

console.log(JSON.parse(JSON.stringify(object)));

console.log(array)
console.log(...array)
array.push("added")

object.id = 3;

