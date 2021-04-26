// Boolean Logic
// AND Operation
// if A && B are true  its // true
// If A && B any one false its //false
// OR operation 
// If both  A || B  are False its // false
// if A || B any one true its // true

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
const shouldDrive_1 = hasDriversLicense || hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should Drive...")
// }

if (shouldDrive_1) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should Drive...")
}
//

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense || hasGoodVision || !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should Drive...")
}

// Coading challenge
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the Trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the Trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the Trophy");
// }

// Bonus 1
const scoreDolphins = (91 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the Trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the Trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the Trophy");
} else {
    console.log("No one win's the Trophy");
}

// Switch Statement

const day = prompt(Number("Enter The day!"));

switch (day) {
    case 'monday':
        console.log("Go to coding");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log("This in Not a valid day!");
};

// Statements and Expressions
//Statement
var str = prompt(Number("Enter number"));
if (str > 20) { //its true if block execuites and value assign to str other wise its undefined
    var str = "44 is bigger";
} else {
    console.log("44 is smaller");
}
console.log(str);

// Expressions
3 + 4;
true && false && !false;

// Conditionay Operator
const age = 24;
age >= 18 ? console.log('I like to drink Wine') : console.log('I link to drink water');

let drink = age >= 18 ? 'wine' : 'Water';
if (age >= 18) {
    drink = 'Wine';
} else {
    drink = 'Water';
}
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'Water'}`);

// Coading Challenge

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);