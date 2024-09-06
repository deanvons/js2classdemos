import { jokeAPIURL } from "./api"

console.log("welcome to the home page")

fetch(jokeAPIURL)
.then(response => response.json())
.then(result => console.log(result))