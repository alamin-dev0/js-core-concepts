const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
    sum += number; // This will add each number in the array to the sum variable, resulting in the total sum of the numbers in the array.
}
console.log(sum); // Output: 15


const total = numbers.reduce((previous, current) => previous + current,                              0); // This will use the reduce method to calculate the total sum of the numbers in the array. The reduce method takes a callback function that takes two arguments: the previous value (the accumulated result) and the current value (the current element being processed). The initial value for the previous argument is set to 100.
console.log(total); // Output: 15