
// 1. Print numbers from 1 to 20
console.log("Numbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Print even numbers
console.log("Even numbers:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Print odd numbers
console.log("Odd numbers:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 4. Calculate sum from 1 to 20
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum = sum + i;
}

console.log("Total sum: " + sum);

// 5. Print numbers from 20 down to 1
console.log("Countdown:");

for (let i = 20; i >= 1; i--) {
    console.log(i);
}
