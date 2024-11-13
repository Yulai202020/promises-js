let count = 0;

let first_promise = new Promise((resolve, reject) => {
    resolve(`Hello from 1 promise!`);
});

let second_promise = new Promise((resolve, reject) => {
    resolve(`Error from 2 promise!`);
});

let third_promise = new Promise((resolve, reject) => {
    resolve(`Hello from 3 promise!`);
});

// wins always first one cuz Promise.race, Promise.any and Promise.all run first of all first one then second one and so on.
Promise.race([first_promise, second_promise, third_promise])
.then(wonPromise => {
    console.log(wonPromise);
})
.catch(error => {
    console.log(error);
});
