// ES6 + Features

// 01 : Template Literals

// let name = "mustafa";
// let age = 21;
// const me = `hello my name is ${name} and i am ${age} year old`;
// console.log(me)

// let multiLineString = `how to start learning web development 
// -Learn HTML
// -Learn CSS
// -Learn JavaScript`;

// let multiLineString2 = 'how to start learning web development \n \
// -Learn HTML \n \
// -Learn CSS \n \
// -Learn JavaScript';
// console.log(multiLineString2);

// 02 : Destructuring

// let arr = [1 ,2 ,3 ,4 ,5];
// const [first, second] = arr;
// console.log(first,second)

// const book = {
//         title : "can't hurt me",
//         author: "David Gogain",
//         year: "2011"
//     };

// const {title,author} = book;
// console.log(title,author);

// 03 : Spread and Rest Operators

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr,6, 7, 8 ,9, 10];
// console.log(arr2);

// const { log, warn, error } = console;

// log('I log into the browser console');
// warn('I am a warning');
// error('I am an error');

// let result = 0
// function addAll(...nums) {
//    return nums.reduce((acc, num) => acc + num, 0);
// };
// console.log(addAll(1, 2 ,3, 4, 5));

// 04 : Default Parameters

// function add(num1, num2 = 5) {
//     return num1 + num2;
// }
// console.log(add(5));

// 05 : Enhanced Object Literals

// const book = {
//         title : "can't hurt me",
//         author: "David Gogain",
//         year: "2011",
//         titleAndauthor(){
//             return this.title+ " "+ this.author;
//         },
//         updateYear(year){
//             return this.year = year;
//         }
//     };
// console.log(book.titleAndauthor())

// const title = "the problem of philosophy";
// const auther = "Bertrand Russell";
// const year = 2010;

// const book2 = {
//     title,
//     auther,
//     year
// }
// console.log(book2)