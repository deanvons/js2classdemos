//#region Duck classes

class Duck {
  // fields / properties
  #id;
  #name;
  #temperament;
  #key = "ducksaregreat1234";

  // constructor
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#temperament = "Uncertain";
  }

  // methods
  //#region getters and setters
  set temperament(value) {
    this.#temperament = value;
  }

  get temperament() {
    return this.#temperament;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  setName(value, secretKey) {
    if (this.#key === secretKey) {
      this.#name = value;
    } else {
      console.log("Access denied");
    }
  }
  //#endregion
  Quack() {
    console.log(`${this.#name} is totally quacking quack quack yo 🦆`);
    this.#SomeSecretOperation();
  }

  #SomeSecretOperation() {
    console.log("shhhh");
  }
}

class Mallard extends Duck {
  #hasMalardonitus;

  // where is the constructor?
  constructor(id, name, hasMalardonitus) {
    console.log("A Mallard enters the chat");
    super(id, name);
    this.#hasMalardonitus = hasMalardonitus;
  }

  MallardMatingCall() {
    console.log("Quack baby");
  }
}

// using classes
// const mallardDuck = new Mallard(1, "somedcuk", false);

// console.log(mallardDuck);

//#endregion

//#region simple inheritance example

class Super {
  superField;
  constructor(superFieldValue) {
    console.log("Super class constructor activated");
    this.superField = superFieldValue;
  }
}

class Sub extends Super {
  subField;
  constructor(superFieldValue, subFieldValue) {
    console.log("Sub class constructor activated");
    super(superFieldValue);
    this.subField = subFieldValue;
  }
}

// using the sub classes

// const subObject = new Sub("super data", "sub data");
//#endregion

//#region polymorphism example

class Human {
  brains;
  #secrets
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

  get secrets(){
    return this.#secrets
  }

  set secrets(value){
    this.#secrets = value
  }
}


class Student extends Human {
  ambition;
  constructor(ambitionValue, brainsValue) {
    super(brainsValue);
    this.ambition = ambitionValue;
  }

  haveFun() {
    console.log("Drinking and gen alpha slang");
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

// using the classes
// const studObject = new Student("high", "above average");
// const lecturerObj = new Lecturer("Doctorate", "should be way above average");

// studObject.haveFun();
// lecturerObj.haveFun();

// console.log(lecturerObj);

//#endregion

//#region human classes converted to legacy code

function LegacyHuman(brainsValueFromStudent) {
  this.brains = brainsValueFromStudent;

  // Private field
  let secrets;

  // Privileged methods to access and modify the private field
  // These are defined inside the constructor and have access to the instance-specific closures, but they are not shared across instances, leading to some duplication.
  this.getSecrets = function() {
    return secrets;
  };

  this.setSecrets = function(value) {
    secrets = value;
  };
}

LegacyHuman.prototype.sleep = function() {
  console.log("Sleeping...");
};

LegacyHuman.prototype.eat = function() {
  console.log("Eating...");
};

LegacyHuman.prototype.haveFun = function() {
  console.log("have some fun woop woop doing stuff");
};

function LegacyStudent(ambitionValue, brainsValue) {
  LegacyHuman.call(this, brainsValue); // Call the parent constructor with `this`
  this.ambition = ambitionValue;
}

// Inherit from Human
LegacyStudent.prototype = Object.create(Human.prototype);
LegacyStudent.prototype.constructor = Student; // Reset the constructor reference

// Override haveFun method
LegacyStudent.prototype.haveFun = function() {
  console.log("Drinking and gen alpha slang");
};


function LegacyLecturer(degreeValue, brainsValue) {
  LegacyHuman.call(this, brainsValue); // Call the parent constructor with `this`
  this.degree = degreeValue;
}

// Inherit from Human
LegacyLecturer.prototype = Object.create(Human.prototype);
LegacyLecturer.prototype.constructor = Lecturer; // Reset the constructor reference

// Override haveFun method
LegacyLecturer.prototype.haveFun = function() {
  console.log("Workout, travel and do taxes");
};

// using the legacy code

// Create a Student
const student = new LegacyStudent("High", 150);
student.sleep(); // Sleeping... (inherited)
student.eat(); // Eating... (inherited)
student.haveFun(); // Drinking and gen alpha slang (overridden)
student.setSecrets("Student's secret");
console.log(student.getSecrets()); // Student's secret

// Create a Lecturer
const lecturer = new LegacyLecturer("PhD", 200);
lecturer.sleep(); // Sleeping... (inherited)
lecturer.eat(); // Eating... (inherited)
lecturer.haveFun(); // Workout, travel and do taxes (overridden)
lecturer.setSecrets("Lecturer's secret");
console.log(lecturer.getSecrets()); // Lecturer's secret

//#endregion