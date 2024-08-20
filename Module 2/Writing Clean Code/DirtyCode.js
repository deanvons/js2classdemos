// 1. Use of Unclear and Misleading Names
let x = 20; 
let y = 15; 
let z = calculate(x, y); 
console.log(z);

function calculate(a, b) {
  return a * b + 5; // What does 5 represent? What is being calculated?
}

// 2. Long and Unfocused Function
function handleUser(name, email, age, isAdmin, address) {
  let userName = name;
  let userEmail = email;
  let userAge = age;
  let userAdmin = isAdmin;
  
  console.log('Processing User:', userName);
  
  if (userAdmin) {
    console.log('Admin User:', userName);
  } else {
    console.log('Regular User:', userName);
  }
  
  // Send email to user
  console.log('Sending email to:', userEmail);
  
  // Validate age
  if (userAge > 18) {
    console.log('User is an adult.');
  } else {
    console.log('User is a minor.');
  }
  
  console.log('User Address:', address); // Unclear purpose
}

// 3. Excessive Arguments
handleUser('John Doe', 'john@example.com', 25, true, '123 Main St');

// 4. Redundant Comments
// This function multiplies two numbers
function multiply(a, b) {
  return a * b; // Unnecessary comment
}

// 5. Inconsistent Indentation and Formatting
if (x > y) {
console.log('x is greater');
  } else {
console.log('y is greater');
}

// 6. Ignoring Errors
try {
  let data = JSON.parse('invalid json');
} catch (e) {
  // Ignored
}

// 7. Magic Numbers
function calculateDiscount(price) {
  return price * 0.2; // What does 0.2 represent?
}

// 8. Deep Nesting
if (x > 10) {
  if (y > 10) {
    if (z > 10) {
      console.log('All values are greater than 10');
    }
  }
}

// 9. Premature Optimization
for (let i = 0; i < data.length; i++) {
  console.log(data[i].toLowerCase()); // Sacrificing readability for micro-optimization
}

// 10. Repeating Yourself (DRY)
let area1 = Math.PI * 5 * 5;
let area2 = Math.PI * 7 * 7;

// 11. Not Using Destructuring
const user = {
  name: 'John',
  age: 30,
  location: 'London'
};

let userName = user.name;
let userAge = user.age;
let userLocation = user.location;

console.log(userName, userAge, userLocation);
