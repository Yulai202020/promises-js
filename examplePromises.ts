// promise.resolve: exit with success
// promise.reject: exit with error

function sleep(ms: number) {
    new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

function some_promise() {
    return new Promise((resolve, reject) => {
        let a: number = Math.round(Math.random());
        if (a) {
            reject("Somethink wet wrong!");
        } else {
            resolve("OK!");
        }
    })
}

some_promise().then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err);
})