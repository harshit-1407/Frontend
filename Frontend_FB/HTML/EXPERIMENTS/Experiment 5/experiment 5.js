// Task 1: Message App
let userName = prompt("What is your name?");
alert("Welcome, " + userName + "!");
document.write("<h2>Hello " + userName + "!");

// Task 2: Vote Eligibility Checker
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("You are eligible to vote!");
  document.write("<p>You are eligible to vote!</p>");
} else {
  alert("You are not eligible to vote.");
  document.write("<p>You are not eligible yet.</p>");
}

// Task 3: Array Method Practice
let numbers = [10, 25, 30, 45, 50]; // Input Array

let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);            // Map method

let above30 = numbers.filter(num => num > 30); 
console.log("Numbers above 30:", above30);      // Filter method

let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);        //Reduse method

numbers.forEach(num => console.log("Number:", num)); // For Each method
