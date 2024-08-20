function* generateFunc() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateFunc();

for (let value of generator) {
  console.log(value);
}

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generator) {
  console.log(value);
}
