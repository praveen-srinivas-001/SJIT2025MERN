// 1. variables - refer to declaration.js

// 2. Arrow Function
var arrowFunc = () => {
    console.log("This is a test Arrow Function");
};
arrowFunc();

// 3. Scoping
// Types of scopes
// * Global - var(default even if it doesn't specified.)
// * Local - let

let a = 10;
let x = 90;
console.log(a); //10
// Scoping starts
{
    let a = 20;

    console.log(a); //20
    let b = 30;
    console.log(b); //30
    let c = 40;
    console.log(c); //40

    var e = 50;
    console.log(e); //50
    a = 30;
    x = 100;
    f = 99;
    console.log(a); //30
}
console.log(x); //100
console.log(a); //10
console.log(e); //50
console.log(f); //99
// console.log(c);//undefined

// 4. Ternary Operator(even or odd)
let num = 10;
console.log((num % 2)? "Odd" : "Even");

// 5. Spread Operator(...)
stud1year = ["user01", "user02","user03"]
stud2year = ["user04", "user05","user06"]
stud3year = ["user07", "user08","user09"]
stud4year = ["user10", "user11","user12"]
studDB = [...stud1year, ...stud2year, ...stud3year, ...stud4year]
console.log(studDB)

// Tast1 : Difference between Spread and Rest Operator
// 6. Rest Operator 
function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB);
// 7. Destructuring Operator
var array = [10,20,30,40,50];
var [p,q,r,s,t] = array;
console.log(p,q,r,s,t);


// 8. Hoisting
// Variable Hoisting
console.log(y); //Undefined
var y = 100;
console.log(y); //100

/*
// console.log(z); //ReferenceError: z is not defined

console.log(i); // ReferenceError: Cannot access 'i' before initialization
let i = 100;
console.log(i); //100
*/

// Function Hoisting
funHoist();
function funHoist(){
    console.log("checking functional hoisting");
}

// funHoist2();
var funHoist2 = () => {
    console.log("checking functional hoisting method 2");
}
funHoist2();

// Class Hoisting
class ClassExample{
    ClassFun(){
        console.log("This is a class example");
        // return 1;
    }
}
obj = new ClassExample();
console.log(obj.ClassFun());
console.log(new ClassExample().ClassFun());
