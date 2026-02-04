// script.js

// 1. Basic console output
console.log("Hello from script.js!");

// 2. Variable declaration and assignment
let userName = "Alice";
const appName = "My Awesome App";

console.log(`Welcome, ${userName} to ${appName}!`);

// 3. Function definition and invocation
function greetUser(name) {
  return `Greetings, ${name}!`;
}

let greetingMessage = greetUser("Bob");
console.log(greetingMessage);

// 4. DOM manipulation (assuming an HTML element with id="message")
document.addEventListener('DOMContentLoaded', () => {
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.textContent = "This text was added by JavaScript!";
    messageElement.style.color = "blue";
  }
});

// 5. Event listener example (assuming an HTML button with id="myButton")
document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.getElementById('myButton');
  if (myButton) {
    myButton.addEventListener('click', () => {
      alert("Button clicked!");
    });
  }
});

// 6. Simple conditional statement
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// 7. Array and loop
const fruits = ["apple", "banana", "cherry"];
console.log("My favorite fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`- ${fruits[i]}`);
}
