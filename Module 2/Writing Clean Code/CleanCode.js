// 1. Use of Clear and Descriptive Names
let width = 20;
let height = 15;
let area = calculateArea(width, height);
console.log(area);

function calculateArea(width, height) {
  const MARGIN = 5; // Use of named constant instead of magic number
  return width * height + MARGIN;
}

// 2. Small, Focused Function
function handleUser(user) {
  logUserDetails(user);
  sendEmailToUser(user.email);
  validateUserAge(user.age);
}

function logUserDetails(user) {
  console.log('Processing User:', user.name);
  if (user.isAdmin) {
    console.log('Admin User:', user.name);
  } else {
    console.log('Regular User:', user.name);
  }
}

function sendEmailToUser(email) {
  console.log('Sending email to:', email);
}

function validateUserAge(age) {
  if (age > 18) {
    console.log('User is an adult.');
  } else {
    console.log('User is a minor.');
  }
}

// 3. Limiting Arguments Using an Object
handleUser({ name: 'John Doe', email: 'john@example.com', age: 25, isAdmin: true, address: '123 Main St' });

// 4. Eliminating Redundant Comments
function multiply(a, b) {
  return a * b; // No redundant comments needed
}

// 5. Consistent Indentation and Formatting
if (width > height) {
  console.log('Width is greater');
} else {
  console.log('Height is greater');
}

// 6. Handling Errors Properly
try {
  let data = JSON.parse('invalid json');
} catch (error) {
  console.error('Failed to parse JSON:', error);
}

// 7. Replacing Magic Numbers with Named Constants
const DISCOUNT_RATE = 0.2;
function calculateDiscount(price) {
  return price * DISCOUNT_RATE;
}

// 8. Avoiding Deep Nesting
const areAllValuesGreaterThanTen = width > 10 && height > 10 && area > 10;
if (areAllValuesGreaterThanTen) {
  console.log('All values are greater than 10');
}

// 9. Avoiding Premature Optimization
data.forEach(item => {
  console.log(item.toLowerCase());
});

// 10. DRY (Don't Repeat Yourself)
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}
let area1 = calculateCircleArea(5);
let area2 = calculateCircleArea(7);

// 11. Using Destructuring
const user = {
  name: 'John',
  age: 30,
  location: 'London'
};

const { name, age, location } = user;
console.log(name, age, location);
