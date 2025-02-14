// Primary DataTypes
var a = 10 // Integer
let b = "abc" // String
const c = true // Boolean
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))

// const variable can't be modified
// c = false

// Secondary DataTypes

// Array
array = [1, [6, 93.34], "str", true]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array)
console.log(typeof(array))

//Objects
Object1 = { // Way 1
    firstName : "Lankesh",
    "lastName" : "Meganathan", 
    "training" : "MERN Stack",
    "companyName" : "RAMPeX"
}
console.log(Object1);

Object2 = {}
Object2.clgName = "sjit"; // Way 2
Object2.age = 12; 
Object2["property"] = "Psycho";
Object2["activity"] = "abnormal";
console.log(Object2);

Object3 = new Object()
Object3.college = "St Josephs Group"
Object3.depts = ["CSE", "ADS", "ECE"]
console.log(typeof(Object3));

//Sets
set = new Set('h')
set.add('h');
console.log(set);
console.log(typeof(set))


// My doubt - why even if contents are same it shows false
arr = ['h']
console.log('\n\n\n') 

console.log(arr)
console.log(set)
console.log(typeof(arr))
console.log(typeof(set)) 
console.log(set==arr)
console.log(set===arr)