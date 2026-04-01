const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

const friends = ['Zaved', 'Rashed', 'Sayed', 'khaled', 'nahid', 'nasim'];
const NFriends = friends.filter(friend => friend[1] === 'a')

const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 18 },
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 30 },
    { name: 'Nahid', age: 25 },
    { name: 'Nasim', age: 34 },
    { name: 'Rashed', age: 41 },
    { name: 'Nasib', age: 45 }
];

const olderStudents = students.filter(student => student.age>30);




console.log(evenNumbers); // Output: [2, 4]
console.log(NFriends); // Output: ['nahid', 'nasim']
console.log(olderStudents); // Output: [{ name: 'Zaved', age: 31 }, { name: 'Sajed', age: 30 }, { name: 'Nasim', age: 34 }, { name: 'Rashed', age: 41 }, { name: 'Nasib', age: 45 }] 