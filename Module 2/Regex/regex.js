const regex = /^h.llo$/;
const str1 = 'hello';
const str2 = 'hallo';
const str3 = 'hullo';

console.log(regex.test(str1)); // true
console.log(regex.test(str2)); // true
console.log(regex.test(str3)); // true
console.log(regex.test('hellos')); // false
console.log(regex.test('hello!')); // false

// Write a regular expression that matches the word “world” at the end of a string.

const worldRegex = /world$/

console.log(worldRegex.test('helloworlds')); // false

// Create a Regex pattern that matches any string containing “abc” followed by any single character and then “def”.
const abcRegex = /abc.def/ // contains
const strictabcRegex = /^abc.def$/

console.log(abcRegex.test('epgoqnfabcrdefsbeb')); // false

// Write a regular expression that matches any lowercase letter.
const lowerCaseRegex = /[a-z]/

RegexLogger(lowerCaseRegex,"epgoqnfabcrdefsbeb")

// Create a Regex pattern that matches any digit and any uppercase letter.

const digitAndUppRegex = /[A-Z\d]/

RegexLogger(digitAndUppRegex,"nmnNoo3")

// Write a regular expression that matches any non-word character.

function RegexLogger(regex,string){
    console.log(`Regex: ${regex.source} tested on "${string}" result ---> ${regex.test(string).toString().toUpperCase()}`); 
}