import { jokeAPIURL } from "./api.js"

console.log("this will run when the joke page loads")

fetch(jokeAPIURL)
.then(response => response.json())
.then(result => console.log(result))