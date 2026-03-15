function add(num1, num2) {
    console.log('arguments', arguments);
    const args = [...arguments]; // This will create an array from the arguments object, allowing us to use array methods on it.
    console.log('args', args);
    return num1 + num2;
}
add(2, 5, 10, 15, 20); // This will print the arguments object which contains all the arguments passed to the function, even if they are not defined in the function parameters.