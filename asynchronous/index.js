// //setTimeout
// const slowTask = () => {
//     let i = 0;
//     do {
//         i++;
//     } while (i < 500000000);
//     return "task is completed.";
// };

// console.log("¯\\_(ツ)_/¯");
// console.time("bir");
// // setTimeout
// console.log("hello1");
// console.timeLog("bir");
// slowTask();
// setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
// }, 1000);
// console.log("hello2");
// console.timeLog("bir");
// console.log("hello3");
// console.timeLog("bir");
const slowTask = () => {
    let i = 0;
    do {
        i++;
    } while (i < 900 _000_000);
    return "task is completed.";
};

console.time();
console.log("hello");
console.timeLog();
// slowTask();
console.log("ara 1");
console.timeLog();
// slowTask();
console.log("son");

console.timeEnd();