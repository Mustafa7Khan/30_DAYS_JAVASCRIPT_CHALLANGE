// Objects

// 01 : Object Creation and Access

// const book = {
//     title : "can't hurt me",
//     author: "David Gogain",
//     year: "2011",
//     titleAndauthor: function(){
//         return this.title+ " "+ this.author;
//     },
//     updateYear: function(year){
//         return this.year = year;
//     }
// };
// console.log(book);
// console.log(book.title,book.auther);

// 02 : Object Methods

// console.log(book.titleAndauthor())
// book.updateYear(2020);
// console.log(book);


// 03 : Nested Objects

// const library = {
//     name : "library1",
//     books: [
//         {title: "atomic habit", author: "robert green"},
//         {title: "meditations", author: "marcus aurieles"}
//     ]
// }

// console.log(library)

// library.books.forEach(book => {
//     console.log(book.title);
// });

// 04 : Object Iteration

// const book = {
//     title : "can't hurt me",
//     author: "David Goggins",
//     year: "2011",
//     titleAndauthor: function(){
//         return this.title+ " "+ this.author;
//     },
//     updateYear: function(year){
//         return this.year = year;
// }
// };
// for (let x in book) {
//     console.log(x,book[x]);
// };

console.log(Object.keys(book));

console.log(Object.values(book));