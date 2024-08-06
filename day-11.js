// Promises and Async/Await

// 01 : Understanding Promises

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("message")
//     }, 2000);
// })

// const p1 = new Promise((resolve, reject) => {
//     resolve("promise resolve");
//     reject("promise rejected");
// });

// p1.then(value => {
//     console.log(value);
// }).catch(value => {
//     console.log(value);
// })

// 02 : Chaining Promises

// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("server 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("server 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve) =>{
//     setTimeout(() => {
//         resolve("server 3")
//     }, 1500);
// })

// //lets chain them

// p1.then((message) => {
//     console.log(message);
//     return p2;
// }).then((message) => {
//     console.log(message);
//     return p3;
// }).then((message) => {
//     console.log(message);
//     console.log("All data fetched and in order");
// }).catch((err) => {
//     console.error("An error occered", err)
// })

// 03 : Using Async/Await

// const hello = async () => {
//     let x = await "hello world"
//     console.log(x);
// }
// hello();

// const hello = async () => {
//     try {
//         let x = await "hello world"
//     console.log(x);
//     } catch (error) {
//         console.error(error);
//     }
// }
// hello();


// 04 : Fetching Data from an API

//using promise
// fetch('https://freeCodeCamp.com/Api/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));

//using async/awite
// async function fetchData() {
//     try {
//         const response = await fetch('https://freeCodeCamp.com/Api/1')
//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();

// 05 : Concurrent Promises

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("server 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("server 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         reject("server 3")
//     }, 1500);
// })

// Promise.all([p1, p2, p3]).then((value) => {
//     console.log(value);
// })

// Promise.race([p1, p2, p3]).then((value) => {
//     console.log(value);
// })