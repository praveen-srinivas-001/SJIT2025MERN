async function asaw() {
    var a = 10;
    setTimeout(() => {
        console.log('hello world');
    }, 5000);
    console.log(a);
}
console.log(asaw());


// asaw().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// npm - Node Package Manager
// npx - Node Package Executor