import { jokeAPIURL } from "./api"

console.log("Welcome to the profile page")

fetch(jokeAPIURL)
.then(response => response.json())
.then(result => console.log(result))