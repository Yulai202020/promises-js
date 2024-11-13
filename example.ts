let first_promise = new Promise((resolve, reject) => {
    resolve("Hello from first promise!");
})

let second_promise = new Promise((resolve, reject) => {
    for (let i = 0; i < 5; i++) {

    }
    resolve("Hello from second promise!");
})

let third_promise = new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {

    }
    resolve("Hello from third promise!");
})

// Promise.race return promise which first ended
// Promise.any return promise which first success ended
// Promise.all return all promises sorted by finishing or first error

Promise.race([first_promise, second_promise, third_promise])
.then(wonPromise => {
    console.log(wonPromise); // first one
}).catch(error => {
    console.log(error); // error cuz first one is has reject
})

Promise.any([first_promise, second_promise, third_promise])
.then(wonPromise => {
    console.log(wonPromise); // second one is first cuz first ended without any errors
}).catch(error => {
    console.log(error)
})

Promise.all([first_promise, second_promise, third_promise])
.then((wonPromise) => {
    console.log(wonPromise); // all returns
}).catch(error => {
    console.log(error);
})