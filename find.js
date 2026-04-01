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

const student = students.find(student=>student.name[0]==='N'); // This will find the first student object in the array whose name is 'Khaled' and return it. If no such student is found, it will return undefined.
console.log(student); // Output: { name: 'Khaled', age: 20 }