function multiply(x, y) {
    return x * y;
  }
  
  function square(n) {
    return multiply(n, n);
  }
  
  function printSquare(num) {
    const result = square(num);
    console.log(result);
  }
  
  printSquare(4);

  // stack overflow

  function recursiveFunction() {
    recursiveFunction();
  }
  
  //recursiveFunction();

  function functionOne() {
    functionTwo();
  }
  
  function functionTwo() {
    functionThree();
  }
  
  function functionThree() {
    //throw new Error('Something went wrong!');
  }
  
  functionOne();

  $.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit',response=> console.log(response))

  fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
  .then(response=> console.log(response))