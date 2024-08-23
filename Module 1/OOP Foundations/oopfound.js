// orange and pink red Kjetil can't see
// class Duck {
//   // fields / properties
//   #id;
//   #name;
//   #temperament;
//   #key = "ducksaregreat1234";

//   // constructor
//   constructor(id, name) {
//     this.#id = id;
//     this.#name = name;
//     this.#temperament = "Uncertain";
//   }

//   // methods
//   //#region getters and setters
//   set temperament(value) {
//     this.#temperament = value;
//   }

//   get temperament() {
//     return this.#temperament;
//   }

//   get id() {
//     return this.#id;
//   }

//   get name() {
//     return this.#name;
//   }

//   setName(value, secretKey) {
//     if (this.#key === secretKey) {
//       this.#name = value;
//     } else {
//       console.log("Access denied");
//     }
//   }
//   //#endregion
//   Quack() {
//     console.log(`${this.#name} is totally quacking quack quack yo 🦆`);
//     this.#SomeSecretOperation();
//   }

//   #SomeSecretOperation() {
//     console.log("shhhh");
//   }
// }

// class Mallard extends Duck {

//   #hasMalardonitus

//   // where is the constructor?
//   constructor(id, name,hasMalardonitus){
//     console.log("A Mallard enters the chat")
//     this.#hasMalardonitus = hasMalardonitus
//     super(id, name)
//   }

//   MallardMatingCall() {
//     console.log("Quack baby");
//   }
// }

// const mallardDuck = new Mallard(1,"somedcuk",false)

// console.log(mallardDuck)

// class Whislting {}

// class Rubber {}

// class Super {
//   superField;
//   constructor(superFieldValue) {
//     console.log("Super class constructor activated");
//     this.superField = superFieldValue;
//   }
// }

// class Sub extends Super {
//   subField;
//   constructor(superFieldValue, subFieldValue) {
//     console.log("Sub class constructor activated");
//     this.subField = subFieldValue;
//     super(superFieldValue);
//   }
// }

// const subObject = new Sub("super data", "sub data");

class Human {
  brains;
  constructor(brainsValueFromStudent) {
    this.brains = brainsValueFromStudent;
  }

  sleep() {
    console.log("Sleeeping...");
  }

  eat() {
    console.log("Eating...");
  }

  haveFun() {
    console.log("have some fune woop woop doing stuff");
  }
}

class Student extends Human {
  ambition;
  constructor(ambitionValue, brainsValue) {
    super(brainsValue);
    this.ambition = ambitionValue;
  }
}

class Lecturer extends Human {
  degree;
  constructor(degreeValue, brainsValue) {
    super(brainsValue);
    this.degree = degreeValue;
  }
  haveFun() {
    console.log("Workout, travel and do taxes");
  }
}

const studObject = new Student("high", "above average");
const lecturerObj = new Lecturer("Doctorate", "should be way above average");

studObject.haveFun();
lecturerObj.haveFun();
