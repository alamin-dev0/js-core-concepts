let data;
console.log(data); // undefined

const sum = (a, b) => {
    console.log(a, b);
}
// sum(5)

const student = {
    name: 'Tormuj',
    age: 25,
    salary: null
}
delete student.name
// console.log(student.marks); // undefined
console.log(student.name); // Tormuj


const arr = [1, 2, 3, 4, 5]
delete arr[1]
console.log(arr[1]); 


function test() {
    console.log('Hello World');
   
}
const result = test();