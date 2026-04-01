// double equals does typ coercion before comparing the values, it converts the operands to the same type before making the comparison. It is less strict than triple equals (===) which does not perform type coercion and requires both value and type to be the same for a true result.

console.log(2 == 2); 
console.log(2 == '2'); // converts the string '2' to number 2 before comparison, so it returns true
console.log(1 == true); // true is converted to 1 before comparison, so it returns true
console.log(0 == false); // false is converted to 0 before comparison, so it returns true
console.log(true == '1'); // true is converted to 1 and '1' is converted to 1 before comparison, so it returns true
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);
console.log([5] == '5');
console.log({} == {});
console.log([] == []);




