// Operaters

// 01: Arithmetic Operarions

let num1 = 5;
let num2 = 4;
console.log(num1 + num2);

console.log(num1 - num2);

console.log( num1 * num2);

console.log( num1 / num2);

console.log( num1 % num2);

// 02 : Assignment Operators

num1 +=1;
console.log(num1)
num1 -=1;
console.log(num1)

// 03 : Comparison Operators

console.log( num1 > num2);
console.log( num1 < num2);

console.log( num1 <= num2);
console.log( num1 >= num2);

console.log( num1 == num2);
console.log( num1 === num2);


// 04 : Logical Operators

if (num1 > num2 && num2 != 0) {
    console.log("its true ");
}else{
    console.log("false");
}

if (num1 > num2 || num2 != 0) {
    console.log("its true ");
}else{
    console.log("false");
}


// 05 : Ternary Operator

num1 > 0 ? console.log("its positive"):"its negative";