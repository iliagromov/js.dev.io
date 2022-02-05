//Promise
/*global Promise */
let some = new Promise(function (resolve, reject) {
    window.setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve(num) : reject(`${num} less then 0.5`);
    }, 200);
})

console.log(some) // panding

some.then((result) => {
    // console.log(result)
    console.log('good ' + result)
}, (error) => {
    console.log(error)
})