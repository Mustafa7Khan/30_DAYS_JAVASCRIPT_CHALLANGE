// Error Handling

// 01 : Basic Error Handling with Try-Catch
// try {
//     console.log(hello)
// } catch (error) {
//     console.log(error);
// }
// console.log("hello")

// function divideNum(num, denominator) {
//     try {
//         if (denominator === 0) {
//         throw new Error("denominator should not be ero");
//     }
//     return num / denominator;
//     } catch (error) {
//         console.log(error);
//     }
// }
// divideNum(5,0);

// 02 : Finally Block

// function divideNum(num, denominator) {
//     try {
//         if (denominator === 0) {
//         throw new Error("denominator should not be ero");
//     }
//     return num / denominator;
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log("divideNum function")
//     }
// }
// console.log(divideNum(10,2));

// 03 : Custom Error Objects

// class checkCondition extends Error {
//     constructor(message) {
//         super(message);
//     }
// }
// try {
//     if (5 !=10) {
//         throw new checkCondition("5 is not equal to 10");
//     }
// } catch (error) {
//     console.log(error);
// }

// let input = "";
// function validateUserInput(msg) {
//     this.msg = msg;
//     this.name = "checkUserInput";
// }
// validateUserInput.prototype = Error.prototype;

// try {
//     if (input == "") {
//         throw new validateUserInput("input should not be empty");
//     }
// } catch (error) {
//     console.log(error);
// }

// 04 : Error Handling in Promise

// new Promise((resolve, reject) => {
//     resolve("ok");
// }).then((result) => {
//     throw new Error("its an error");
// }).catch(err => console.log(err));

// function handleError(err) {
//     console.log('Ohhhh nooo');
//     console.log(err);
//   }
// async function go() {
//     const pizza = await makePizza(['pineapple']).catch(handleError);
//     console.log(pizza);
//     return pizza;
//   }
//   const result = go().catch(handleError);
//   console.log(result);

// 05 : Graceful Error Handling in Fetch

// fetch('https//:abc.com')
// .then(
//     function(response){
//     if(response.status !== 200) {
//         console.log("there is a problem" + response.status);
//         return;
//     }
//     response.json().then(function(data) {
//         console.log(data);
//     });
// }
// )
// .catch(function(err) {
//     console.log("fetch error", err);
// });

// fetch('https://frm')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log("some error oceard",error));