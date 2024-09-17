let number = 25;
let string = "someword";
let boolean = true;

let object = { id: 3 };
let array = [];

let copynumber = number;

copynumber++;

console.log(number);
console.log(copynumber);

let copyObject = object;
copyObject.id = 4;

console.log(object);
console.log(copyObject);

function refval(valueType, referenceType) {
  valueType = 0;
  referenceType = null;
}

refval(number, object);

console.log(number);
console.log(object);
