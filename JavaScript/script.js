//  changing inner html
document.getElementById("demo2").innerHTML = "My First JavaScript";

// calling function
function myfunction() {
    document.getElementById('function').innerHTML = "paragraph changed.";
}
// changing inner html 
document.getElementById("demo").innerHTML = "My First JavaScript";

var x = '123';
console.log(x);


// no error
let message = "hello";
message = 123456;
console.log(message);

// number
var n = 1234;
m = 'hello';
console.log(n);
document.getElementById('demo').innerHTML = n + "<br>" + m;

// infinity method
console.log(1 / 0);
// NAN Not A number
console.log('not' / 2);

// Extra Large or Extra small number
var x = 1234e5;
var y = 123e-5;
document.getElementById('extra').innerHTML = x + "<br>" + y;

// Precision
var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000
document.getElementById('Precision').innerHTML = x + "<br>" + y;

// max-number

var x = 0.1 + 0.2;
document.getElementById("max").innerHTML = "0.2 + 0.1 = " + x;

// multiply and devide
var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

var y = (0.2 * 20 + 23 * 5) / 10;
console.log(y);
// 

var z = 119 / 10;
console.log(z);
// 

// addition
var x = 10;
var y = 20;
var z = x + y;
console.log(z);

// if we give "" or '' for number
var x = '10';
var y = "20";
var z = x + y;
console.log(z);

// if we give number and number in ""
var x = 10;
var y = "20";
var z = x + y;
console.log(z);

// 
var x = 10;
var y = 20;
var z = "The result is:" + x + y;
console.log(z);

// numeric string
var x = 10;
var y = 20;
var z = x / y;
console.log(z);

// multiplication
var x = 10;
var y = 20;
var z = x * y;
console.log(z);

// infinity
var x = 4;
while (x != Infinity) {
    x = x * x;
    console.log(x);
}


// bigint
var x = 2;
while (x != Infinity) {
    x = x * x;
    console.log(x);
}

// string

var str = "hello";
var str1 = ' single quotes are to ok'
var phrase = `can emded another ${str}`;

console.log(phrase);

var x = 2;
var y = 5;
var z = `${x+y}`;
console.log(z);


var x = 'A' + 'B';
var y = 'a' - 1;
var z = `${x+y}`;
console.log(z);

// 
var x = 1.23 + 'c';
var y = 'c' + 3;
var z = `${x+y}`;
console.log(z);


var x = "hello";
var y = 'naveen';
var z = `hello ${y}!`;
console.log(z);

var x = "hello";
var y = 'naveen';
var z = `hello ${y} ${x}!`;
console.log(z);

// using backticks 
console.log(`"the result is ${1 + 2}"`); // the result is ${1 + 2} (double quotes do nothing)

console.log("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

// Boolean it has two values true or false

var x = 4 > 1;
console.log(x);

var x = 4 < 1;
console.log(x);

// 

var x = 20 * 8;
var y = 159;
console.log(y == x);

// 
var x = 20 - 5;
var y = 15;
console.log(x == y);

// 
var x = 'naveen';
var y = 'kumar';
console.log(x == y);
null
var x = 55;
var y = 24;
var z = 26;
console.log(x != y + z);

// null
var age = null;
console.log(age);

// undefined



// 
var age;
console.log(age);

// 
var age = 25;
age = undefined;
console.log(age)

// the type of operator

typeof 0;

var v1 = 123;
var v2 = [2];
var v3 = 1.2;
var v4 = '5';


console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof(v4));


// string quotes

var name = "Naveen"

console.log(`hello ${1}`); // It will prient hello
console.log(`hello ${"name"}`); //
console.log(`hello ${name}`);



// Arrays

var fruits = ["apple", 'orange', "banana", 'name', 'print'];
console.log(fruits[1]);
console.log(fruits[6]);
console.log(fruits[4]);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits);

// mix of values

var arr = ["apple", { name: 'naveen' }, true, function() { console.log(arr); }];
console.log(arr[2]);

// join

var arr = [
    'apple',
    'banana',
    'carrot',
    'palm'
];
console.log(arr.join("*"));
// tostring

var arr = [
    'apple',
    'banana',
    'carrot',
    1,
    4
];
console.log(arr.toString('+'));

// poping

var arr = [
    'apple',
    'banana',
    'carrot',
    1,
    4
];
console.log(arr.pop());
console.log(arr);

// push
var arr = [
    'apple',
    'banana',
    'carrot',
    1,
    4
];
console.log(arr.push(6));
console.log(arr);


// pushing the new element
var x = ["banana", 'apple', 'palm']
document.getElementById('push1').innerHTML = x;

function myFunction() {
    document.getElementById('push2').innerHTML = x.push('Pine');
    document.getElementById('push1').innerHTML = x;
}

// shifting

var y = ["banana", 'apple', 'graps', 'orange'];
console.log(y)
console.log(y.shift());
console.log(y);

// unshift

var z = ["banana", 'apple', 'graps', 'orange'];
console.log(z)
console.log(z.unshift('lemon'));
console.log(z)

// changing elements
var x = ["banana", 'apple', 'graps', 'orange'];
console.log(x)
console.log(x[0] = "lemon");
console.log(x)

// length 
var x = ["banana", 'apple', 'graps', 'orange'];
console.log(x)
console.log(x[x.length] = "lemon");
console.log(x)

// deleting and inserting

var x = ["banana", 'apple', 'graps', 'orange'];
console.log(x);
console.log(delete x[3]);
console.log(x);
console.log(x.push("lemon"))
console.log(x);

console.log(x[3] = "water");
console.log(x);

// splicing an array

var b = ["banana", 'apple', 'graps', 'orange', 'name', 'fest'];
console.log(b.splice(2, 2, "water", 'lemon'));
console.log(b);

// accessing element by array
var cars = ["sab", "volvo", "bmw"];
console.log(cars[0]);