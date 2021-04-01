// Function declaration

function showMessage() {
    console.log('Hello everyone!');
}
showMessage();

// Local variables

function showMessage1() {
    var message = "Hello! EveryOne?";
    console.log(message);
}
showMessage1();

// Outer variables

var userName = "John Bokasta";

function showMessage2() {
    var message = "Hello!, " + userName;
    console.log(message);
}
showMessage2();

// modifying the Outer Variables

var userName1 = "John";

function User() {
    userName1 = "Bokasta";

    var message = "Hello, " + userName1;
    console.log(message);
}
console.log(userName1);

User();
console.log(userName1);

// 

var userName2 = "John sena";

function user() {
    var userName2 = "Rey Mixterio";
    var message = "Hello!, " + userName2;
    console.log(message);
}
user();
console.log(userName2);

// Parameters (OR) Arguments

function show(text, form) {
    console.log(text + " " + form);
}
show("Hai!", 'Ann');
show("What's up?", 'Ann');

// 


function user2(form, text) {
    form = '*' + form + '*';
    console.log(form + " " + text);
}
var form = "Ann";
user2(form, "hello");
console.log(form);

// Deafult Value
function user3(form, text = "no text given") {
    console.log(form + ": " + text);
}
user3("John");

// Alternative default parameter
function user4(text) {
    if (text === undefined) {
        text = "Empty message";
    }
    console.log(text);
}
user4();

// ///
function user5(text1, form1) {
    if (text1 !== undefined) {
        text1 = "Empty message";
        console.log(text1);
    } else if (form1 === text1) {
        form1 = "Its True";
        console.log(form1);
    } else {
        vamoo = "Above all conditions are false";
        console.log(vamoo);
    }
}
user5();

// Operators in function
var opera = true;
opera1 = false;

function user6(text2) {
    if (text2 !== false && 0) {
        text2 = "The condition is " + opera;
        console.log(text2);
    } else {
        console.log("The Above Condition is " + opera1);
    }
}
user6();
// 
function users1(text3) {
    text3 = text3 || "Empty";
    console.log(text3);
}
users1();


// Return values

function sum(a, b) {
    return a + b;
}
var result = sum(1, 2);
console.log(result);

// 

// function checkAge(age) {
//     if (age >= 18) {
//         return;
//     } else if (age <= 70) {
//         return false;
//     } else {
//         return confirm("Do You Have Permission From Your Parents");
//     }
// }
// var age = prompt("How Old Are You?", 18);
// if (checkAge(age)) {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     console.log('Access granted');
// } else {
//     console.log('Access denied');
// }

// The Function without Return its Undefined

function doNothing() {

}
console.log(doNothing() === undefined);


function doNothing() {
    return;
}
console.log(doNothing() === undefined);


// 
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);
    }

}
showPrimes(22);

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

isPrime(22);

function showPrimes1(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log(i); // a prime
    }
}
showPrimes1(22);