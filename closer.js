function outerFunction() {
    function innerFunction() {
        console.log("Hello from the inner function!");
    }
    return innerFunction;
}

const result = outerFunction();
result(); // This will call the innerFunction and print "Hello from the inner function!"
// innerFunction() is not accessible here, but we can call it through the result variable
// console.log('in the outer function:', result);

function counter(owner) {
    let count = 0;
    function increment() {
        count = count + 1; // This will increment the count variable by 1 each time increment is called
        console.log('Value of count', owner, count);
    }
    return increment;
}
const rahimCounter = counter('Rohim');
rahimCounter()
rahimCounter()
rahimCounter()
rahimCounter()
rahimCounter()
rahimCounter()
const karimCounter = counter('Karim');
karimCounter()
karimCounter()
karimCounter()
karimCounter()
karimCounter()

rahimCounter()  
rahimCounter()

// const count1 = counter();
// count1(); // This will print "Value of count 0" because count is initialized to 0 and increment is called without modifying it.
// count1(); // This will print "Value of count 1" because count is initialized to 0 and increment is called, modifying it.
// count1(); // This will print "Value of count 2" because count is initialized to 0 and increment is called, modifying it.
// count1(); // This will print "Value of count 3" because count is initialized to 0 and increment is called, modifying it.
// count1(); // This will print "Value of count 4" because count is initialized to 0 and increment is called, modifying it.
// console.log(rahimCounter)