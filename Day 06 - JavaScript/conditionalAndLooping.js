// Conditional Statement
/*
1 if
2. If Else
3. If ElseIf Else
4. 
5. Switch
*/ 

// Looping Statement
/*
1. while
2. do...while
3. for(let ; cond; inc/dec)
4. forin
5. forof
6. forEach
*/

// ForIn Loop
array = [10,20,30,"abc", true, "hello", [10,20,30]]
for(index in array){
    console.log(index, array[index]);
}

// ForOf Loop
Object1 = { // Way 1
    firstName : "Lankesh",
    "lastName" : "Meganathan", 
    "training" : "MERN Stack",
    "companyName" : "RAMPeX"
}
for({key, value} of Object.entries(Object1)){
    console.log(key, value);
}

Object.keys(Object1).forEach((ele) => {
    console.log(ele);
});

Object.entries(Object1).forEach((ele) =>{
    console.log(ele);
});
