// Control Structures

// 01 : If-Else Statements

let num = 5;

if (num > 0) {
    console.log("num is positive");
} else if(num < 0 ){
    console.log("num is negative");
}else {
    console.log("num is zero");
};

let age = 19;

if (age >= 18) {
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligibale to vote");
};


// 02 : Nested If-Else Statements


let num1 = 5;
let num2 = 7;
let num3 = 3;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is the largest");
    } 
}else if(num2 > num1){
    if (num2 > num3) {
        console.log("num2 is the largest");
    }
}else{
    console.log("num3 is the largest");
};

// 03 : Switch Case

let day = new Date().getDay()
switch (day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("thousday");
        break;
    case 3:
        console.log("weansday");
        break;
    case 4:
        console.log("thersday");
        break; 
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("sathurday");
        break;
    default:
        console.log("enter a number from 0 to 6")
        break;
}


let score = 35;
let grade;

switch (true) {
    case score>90:
        grade = "A"
        console.log("you have A grade");
        break;
    case score > 70:
        grade = "B"
        console.log("you have B grade");
        break;
    case score > 60:
        grade = "C"
        console.log("you have C grade");
        break;
    case score > 45:
        grade = "D"
        console.log("you have D grade");
        break;
    case score > 30:
        grade = "E"
        console.log("you have E grade");
        break;
    default:
        console.log("enter a score upto 1 to 100")
        break;
}

// 04 : Conditional (Ternary) Operator

let number = 5;

number % 2 == 0 ? console.log("even"): console.log("Odd");


// 05 : Combining Conditions

let year = 2022;

if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a leap year`)
}else if(year % 400 == 0){
    console.log(`${year} is a leap year`)
}else{
    console.log(`${year} is not a leap year`)
}