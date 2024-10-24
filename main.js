// setTimeout(function () {
//     console.log("Hello World 3!");
// }, 3000);

// setTimeout(function () {
//     console.log("Hello World 1!");
// }, 1000);

// setTimeout(function () {
//     console.log("Hello World 2!");
// }, 2000);

// function consoleHello(a, b) {
//     console.log("Hello World Console! " + a + b);
// }

// consoleHello("Привет!");

// setTimeout(consoleHello, 4000, "Привет 2!", "Текст!");
// setInterval(consoleHello, 2000, "Привет 2!", "Текст!");

// let a = 0;

// setInterval(function () {
//     a++;
//     console.log(a);
// }, 1000);

// let timer = setTimeout(function () {
//     alert("Поздно!");
// }, 5000);

// setTimeout(function () {
//     clearTimeout(timer);
//     alert("Завершено!");
// }, 2000);

let t = setInterval(function () {
    console.log("hello");
}, 1000);

setTimeout(function () {
    clearInterval(t);
}, 10000);