// Logical Operators

// Logical AND 
console.log(5 && 10); // both the conditions should be true.
console.log(true && 10); // since first is true it is necessary to check second value and display second value
console.log(false && 10); // as the first itself is false we don't need to check the second condition so display first value.
console.log(true && false);
// Logical OR 
console.log(5 || 10); // here only one condition need to be true.
console.log(true || 10); // since first is true no need to check second condition so it displays first value
console.log(false || 10); // as the first condition is false we need to check the second condition and display finally checked value
console.log(false || true);
console.log(true || false);

// Relational Operator
a = '5'
b = 5
console.log('a = ',a,', b = ', b);
console.log('this == of a and b is ', a==b); // == operator will check only its content.
console.log('this === of a and b is ', a===b); // === operator will check its content as well as its type.

//Bitwise Operator
a = 70
b = 35
console.log(a&b)
console.log(a|b)

c = 1
console.log("Compliment");
console.log(~c);

// Left Shift Operator
console.log("LeftShiftOperator");
console.log(55<<3);
console.log(128<<1);

// Right Shift Operator
console.log("RightShiftOperator");
console.log(55>>3);
console.log(1>>1);