"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
// Example usage
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 10); // Insert 10 at index 2
console.log(modifiedArray); // Output: [1, 2, 10, 3, 4, 5]
class ShoppingCart {
    constructor() {
        this.cartItems = [];
    }
    addItem(name, price, quantity) {
        const newItem = { name, price, quantity };
        this.cartItems.push(newItem);
        this.printCart();
    }
    removeItem(index) {
        if (index >= 0 && index < this.cartItems.length) {
            this.cartItems.splice(index, 1);
            this.printCart();
        }
        else {
            console.log("Invalid index");
        }
    }
    updateQuantity(index, newQuantity) {
        if (index >= 0 && index < this.cartItems.length) {
            this.cartItems[index].quantity = newQuantity;
            this.printCart();
        }
        else {
            console.log("Invalid index");
        }
    }
    printCart() {
        console.log("Cart Contents:");
        this.cartItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`);
        });
        console.log("---------------------------");
    }
}
// Example usage
const cart = new ShoppingCart();
cart.addItem("Item 1", 10.99, 2);
cart.addItem("Item 2", 5.99, 3);
cart.updateQuantity(0, 5);
cart.removeItem(1);
// 3. Write a program that uses a while loop to print the first 25 integers.
let count = 1;
while (count <= 25) {
    console.log(count);
    count += 1;
}
// 4. Write a program that uses a while loop to print the first 10 even numbers.
let a = 1;
let evenCount = 0;
while (evenCount < 10) {
    if (a % 2 === 0) {
        console.log(a);
        evenCount++;
    }
    a++;
}
// 5. Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a positive integer.");
    }
    let factorial = 1;
    let currentNumber = 1;
    while (currentNumber <= n) {
        factorial *= currentNumber;
        currentNumber++;
    }
    return factorial;
}
// Example usage
const inputNumber = 5;
const factorial = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is ${factorial}`);
// 6. Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(arr) {
    const filteredArray = arr.filter(number => number >= 0);
    return filteredArray;
}
// Example usage
const numbers = [2, -5, 10, -8, 15, -3];
const positiveNumbers = removeNegativeNumbers(numbers);
console.log(positiveNumbers); // Output: [2, 10, 15]
// 7. Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function calculateArraySum(arr) {
    let sum = 0;
    let index = 0;
    while (index < arr.length) {
        sum += arr[index];
        index++;
    }
    return sum;
}
// Example usage
const num = [2, 4, 6, 8, 10];
const sum = calculateArraySum(numbers);
console.log(`Sum of the numbers: ${sum}`); // Output: Sum of the numbers: 30
// 8.  Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertTemperatures(inputTemperatures) {
    const convertedTemperatures = [];
    let index = 0;
    while (index < inputTemperatures.length) {
        const celsius = inputTemperatures[index];
        const fahrenheit = convertCelsiusToFahrenheit(celsius);
        convertedTemperatures.push(fahrenheit);
        index++;
    }
    return convertedTemperatures;
}
rl.question("Enter temperatures in Celsius (separated by spaces): ", (input) => {
    const inputTemperatures = input.split(" ").map(Number);
    const convertedTemperatures = convertTemperatures(inputTemperatures);
    console.log("Converted temperatures in Fahrenheit:");
    console.log(convertedTemperatures);
    rl.close();
});
