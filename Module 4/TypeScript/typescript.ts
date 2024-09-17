// why do I care about typescript

 import { Joke } from "./model/joke.ts"




// let num: number = 4;
// let word: string = "five";


// function addnumber(num1: number, num2: number): number {
//     return num1 + num2;
// }

// addnumber(num, 9);

// class DuckOld {
//     #id: number;
//     #name: string;
//     nickName: string;

//     constructor(id: number, name: string, nickName: string) {
//         this.#id = id;
//         this.#name = name;
//         this.nickName = nickName
//     }

//     Quack() {

//     }
// }

// const duck2 = new DuckOld(1, "Jimmy", "JimDawg")

// function processDuck(duckObj: Duck) {
//     duckObj.Quack()
//     console.log(duckObj.nickName)

// }








// class GenericPair<type> {
//     numb1: type;
//     numb2: type;

//     constructor(numb1: type, numb2: type) {
//         this.numb1 = numb1;
//         this.numb2 = numb2;
//     }

//     use() {
//         //return this.numb1 + this.numb2;
//     }
// }

// const numPair = new GenericPair<number>(1, 5)
// const stringPair = new GenericPair<string>("word", "antoher word")


// let skills = null

// interfaces




// fetch


// casting
// fetch("jokeapi")
//     .then(response => response.json())
//     .then(joke:Joke => console.log(joke))


//     function displayJoke(joke:Joke){
//         joke.category ="update"
//     }

//     displayJoke(2)



// class Duck implements Flyer {
//     #id: number;
//     #name: string;
//     nickName: string;
//     speed: number

//     constructor(id: number, name: string, nickName: string) {
//         this.#id = id;
//         this.#name = name;
//         this.nickName = nickName
//     }

//     Quack() {

//     }

//     fly() {

//     }
// }


// interface Flyer {
//     speed: number
//     fly()
// }



// function goFly(flyerObj: Flyer) {

// }

// let numVar: number = 2
// let wordVar: string = "5"

// wordVar = numVar.toString()



// fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
//     .then(response => response.json() as Promise<Joke>)
//     .then((result:Joke) => consumeData(result))

// function consumeData(data:Joke) {
//     console.log(data)
// }

const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")

console.log(response)