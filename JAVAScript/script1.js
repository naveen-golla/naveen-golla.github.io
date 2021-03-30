// NOT OPERATION

var x = 2;
y = "";

console.log(x != y); //true

var x1 = "";
y1 = " ";
console.log(y1 !== x1); //true


// 

var x2 = 0;
y2 = 1;
console.log(!(x2 !== y2));

// ..........

var x3 = {
    name: 'naveen',
}

y3 = {
    name: 'N@veen',
}

console.log(!(x3.name !== y3.name));

// Destructuring

var Foo = ['one', 'two', 'three'];

var one;
var two;
var three;

var [one, two, three] = Foo;
console.log(two); //one


// Delete
y4 = 3;
var x4 = 2;

var myObj = {
    r: 'name',
}
console.log(delete x4); // false
console.log(delete y4); //true
console.log(delete Math.PI); //false
console.log(delete myObj.r); //true
console.log(myObj);


// Conditional Statements
var xx = 3;
yy = xx;
if (xx != yy) {
    true1 = "good boy";

} else {
    true1 = "bad boy";
}
console.log(true1);


// if condition

var xx1 = "string";
yy1 = "string";
if (xx1 == yy1) {
    greeting = "condition is true";
}
console.log(greeting);

// 
// var x5 = "str";
// y5 = 3;
// if (x5 == y5) {
//     great = "false statement"
// }
// console.log(great);

// 
var fruit = "graps";
product = fruit;
if (product = "graps") {
    organ = "Fruit is a Product"
}
console.log(organ);

// boolean
var b = new Boolean(false);
if (b == 0) {
    boo = "If condition is True"
} else {
    boo = "false returns"
}
console.log(boo);
// 
var b2 = new Boolean(true);
if (b2 == 0) {
    boo1 = "If condition is True"
} else {
    boo1 = "This is condition"
}
console.log(boo1);

// else if

var e = 23;
e1 = "number";
if ((e || e1)) {
    eee = "E equal to e1";
} else if ((e && e1)) {
    eee = "E is not equal";
} else {
    eee = "Given all conditions are false ";

}
console.log(eee);

//Switch
var fruittype = "Papayas1";
switch (fruittype) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $0.56 a pound.');
        break;
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");
// //////
var arg = (3)
switch (arg) {
    case '0':
    case '1':
        console.log('One or zero');
        break;

    case '2':
        console.log('Two');
        break;

    case 3:
        console.log('Never executes!');
        break;
    default:
        console.log('An unknown value');
}
console.log(typeof(arg));

// ////
var arg = ('2')
switch (arg) {
    case '0':
    case '1':
        console.log('One or zero');
        break;

    case '2':
        console.log('Two');
        break;

    case 3:
        console.log('Never executes!');
        break;
    default:
        console.log('An unknown value');
}
console.log(typeof(arg));

// ////
var browser = "Chrome";
switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}

// ///
let a = 2 + 1;

switch (a) {
    case 3:
        console.log('Too small');
    case 4:
        console.log('Exactly!');
    case 5:
        console.log('Too big');
    default:
        console.log("I don't know such values");
}

// ////
let a3 = 3;

switch (a3) {
    case 4:
        console.log('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

    default:
        console.log('The result is strange. Really.');
}