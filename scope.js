let pi = 3.14;
const result = add(5, 7);
console.log(result);
function add(a, b) {
    const factor = 2;
    const result = (a + b) * factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);


    function addTwo(num) {
        num = num + pi;
        return num + 2;
    }


    return value;
}
function doubleIt(num) {
    return num * 2;
}
add(2, 3);

// console.log(factor, pi)



const multiply = (a, b) => {
    // console.log(result)
    const result = a * b;
    return result;
}
multiply(4, 5);