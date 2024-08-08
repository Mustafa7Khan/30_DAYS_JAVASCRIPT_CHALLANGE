// Modules

// 01 : Creating and Exporting Modules

// export function sum(num1, num2){
//     return num1 + num2;
// }
// //other file
// import {sum} from "./day-13.js";

// const person = {
//     name: "Wes",
//     last: "Bos",
//     function(){
//         return this.name + this.last;
//     },
//   };
//   export default person;
//   import {person} from "./day-13"

// Named and Default Exports
// Named
// module.export = {function1, function2};
// Other File
// import {function1, function2} from "./day-10";

// Default 
// math.js
// function sum(num1, num2){
//    return num1 + num2;
// }
// export default sum;

// main.js
// import random from "./math.js"

// 03: Importing Entire Modules
// import * as moduleName from "./file.js"

// 04: Using Third-Party Modules
// npm install lodash
//import _ from 'lodash';

// CommonJs syntex
// const _ = require('lodash');

//npm install axios
// import axios from 'axios'
// or
// const axios = require('axios')

// 05 : Module Bundling (Optional)
//parcel
// mkdir parcel-demo
// cd parcel-demo
// npm init -y
// npm install --save-dev parcel
// mkdir src
//src/index.js
// import { greet } from './greet';
// console.log('This is the entry point');
// greet('World');
//src/greet.js
// export function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
//   "scripts": {
//   "start": "parcel src/index.html"
// }
// npm start



