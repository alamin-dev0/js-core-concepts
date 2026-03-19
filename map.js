const numbers = [1, 2, 3, 4, 5];

// const doubled = []

// for (const number of numbers) {
//     doubled.push(number * 2);
// }

// const doubledIt = num => num * 2;
// const doubled = numbers.map(doubledIt);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]


const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]


const friends = ['Alice', 'Bob', 'Charlie', 'David'];
const firstLetters = friends.map(frd => frd[0]);
console.log(firstLetters); // Output: ['A', 'B', 'C', 'D']


const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];
const prices = products.map(pd => pd.price * 2); // This will create a new array containing the prices of the products multiplied by 2.
console.log(prices); // Output: [1000, 500, 300]


const names = products.map((pd, index, productsArray) => {
   const upperCaseName = pd.name.toUpperCase(); // This will convert the product name to uppercase.
   console.log(index, upperCaseName, productsArray); // This will log the index and the uppercase name to the console for debugging purposes.
   return upperCaseName; // This will return the uppercase name to be included in the new array.
});
console.log(names); // Output: ['LAPTOP', 'PHONE', 'TABLET']



const result = products.forEach(pd => console.log(pd.name)); // This will log the name of each product to the console.
console.log(result); // Output: undefined (forEach does not return a new array, it returns undefined)