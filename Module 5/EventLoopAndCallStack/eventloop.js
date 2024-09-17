function firstFunction() {
    console.log('In firstFunction');
    secondFunction();
    console.log('Back in firstFunction');
}

function secondFunction() {
    console.log('In secondFunction');
    thirdFunction();
    console.log('Back in secondFunction');
}

function thirdFunction() {
    console.log('In thirdFunction');
}

console.log('Start');
firstFunction();
console.log('End');

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4));

// two phase execution of JS --> move to presentation

// stack and heap, maybe functions and refrence types plus cloning
// c or c++ manages memory manually
//JS and C# auto through garbage collection
// prims -> stak (samller fixed memeory)
// ref -> heap (larger memeory to make room for growth)



// Primitive types (stored in the stack)
let number = 10;
let newNumber = number;
newNumber:number = 20;

console.log(newNumber); // Output: 20
console.log(number); // Output: 10

let someName = "Jimmy";
let newName = "Maximus";
newName = "Max";

console.log(newName); 
console.log(someName);

// Reference types (stored in the heap)
let person1 = { name: 'Alice' };
let person2 = person1;
person1.name = 'Bob';

console.log(person1.name); // Output: Bob
console.log(person2.name); // Output: Bob

// show in functions

class Duck{
    id =1
}

const duck = new Duck()