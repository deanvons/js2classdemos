//

// orange and pink red Kjetil can't see
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

const duck1 = new Duck(1, "sptheven");

const duck2 = new Duck(2, "Maximmus");

// duck1.Quack();
// duck1.SomeSecretOperation() --> won't work
duck1.setName("SPETHEVEN!!", "ducksaregreat1234");
