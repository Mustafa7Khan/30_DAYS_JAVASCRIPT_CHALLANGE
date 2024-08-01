// Functions

// 01 : Function Declaration 

// function checkOddEven(num){
//   return num % 2 ==0 ? "even": "odd";
// }

// console.log(checkOddEven(5));

// function calculateSquare(num){
//     return num * num;
// }

// console.log(calculateSquare(8));

// 02 : Function Expression

// function findmax(num1, num2){
//     return num1 > num2 ? "num1 is max": "num2 is max";
// }

// console.log(findmax(5,6));

// function concatenateStr(str1,str2){
//     concate = str1 +" "+ str2;
//     console.log(concate);
// }
// concatenateStr("hello", "world");

// 03 : Arrow Functions

// const sumOfTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(sumOfTwo(4,5));

// const checkStr = (str) => {
//     const result =str.includes("m");
//     console.log(result)
// }

// checkStr("musatafa");

// 04 : Function Parameters and Default Values

// function productOftwo(num1,num2 =5 ){
//     return num1 * num2;
// }

// console.log(productOftwo(5));

// function greeting(name, age = 18){
//     return `welcome ${name}`;
// }
// console.log(greeting("mustafa"));

// 05 : Higher-Order Function

// function functionExecutionLoop(func, number){
//     for (let i= 1; i<=number;i++) {
//         func();        
//     }
// }
// functionExecutionLoop(funcRun, 5)
// function funcRun(){
//     console.log("function execute")
// }

// function highOrderFunc(func1,func2,value){
//     const incrementedval = func1(value);
//     return func2(incrementedval);
// }
// function increment(val){
//     return val + 1;
// }
// function square1(val){
//     return  val * val;
// }
// const result = highOrderFunc(increment,square1,5);
// console.log(result);