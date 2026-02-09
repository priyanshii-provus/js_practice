// Day 2 Practice - JavaScript Intermediate Basics
// Remote Internship

// ----------------------------
// Revision: Variables & Scope
// ----------------------------
let name = "John";
const role = "Intern";

if (true) {
  let blockScoped = "I am inside block";
  console.log(blockScoped);
}

// ----------------------------
// Functions & Arrow Functions
// ----------------------------
function multiply(a, b) {
  return a * b;
}

const greetUser = (name) => `Welcome, ${name}`;

console.log(multiply(4, 5));
console.log(greetUser("Alice"));

// ----------------------------
// Default Parameters
// ----------------------------
function calculateDiscount(price, discount = 10) {
  return price - (price * discount) / 100;
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(100, 20));

// ----------------------------
// Arrays (More Methods)
// ----------------------------
const numbers = [10, 20, 30, 40, 50];

// forEach
numbers.forEach((num) => console.log("Number:", num));

// reduce
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

// find
const found = numbers.find((num) => num > 25);
console.log("Found:", found);

// ----------------------------
// Objects & Destructuring
// ----------------------------
const user = {
  name: "Sarah",
  age: 25,
  location: "India"
};

const { name: userName, age } = user;
console.log(userName, age);

// ----------------------------
// Spread & Rest Operators
// ----------------------------
const skills = ["JS", "HTML", "CSS"];
const allSkills = [...skills, "TypeScript"];
console.log(allSkills);

function sumAll(...values) {
  return values.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4));

// ----------------------------
// Conditional (Ternary)
// ----------------------------
const score = 85;
const result = score >= 60 ? "Pass" : "Fail";
console.log(result);

// ----------------------------
// JSON & Dynamic Data
// ----------------------------
const jsonString = '{"id":1,"name":"John"}';
const parsedData = JSON.parse(jsonString);

if (parsedData && typeof parsedData === "object") {
  console.log("Parsed Name:", parsedData.name);
}

// ----------------------------
// Error Handling
// ----------------------------
try {
  JSON.parse("{ invalid json }");
} catch (error) {
  console.log("Error while parsing JSON");
}

// ----------------------------
// Simple Problem
// ----------------------------
function countEvenNumbers(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log("Even count:", countEvenNumbers(numbers));

// ----------------------------
// End of Day 2 Practice
// ----------------------------
