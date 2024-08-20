//

// orange and pink red Kjetil can't see
class Duck { 
  // fields / properties
  #id;
  #name;
  #temperament;

  // constructor
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#temperament = "Uncertain";
  }

  // methods

  setTemperament(value) {
    this.#temperament = value;
  }
}

const duck1 = new Duck(1, "sptheven");

const duck2 = new Duck(2, "Maximmus");

console.log(duck1);

console.log(duck2);

duck2.setTemperament("bit of a douche");
