'use strict';

// Coding Challenge 2
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
console.log(bills, tips);

// Objects 
const jonas = {
    firstName: 'jonas',
    lastName: 'schmed',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const intrestedIn = prompt('What do you want to know about jonas? Choose between firstName,age,lastName,job and friends');
// if (jonas[intrestedIn]) {
//     console.log(jonas[intrestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName,age,lastName,job and friends')
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} Friends, and his best friend is called ${jonas.friends[0]}`);

// Objeect Method

const jonas_1 = {
    firstName: 'jonas',
    lastName: 'schmed',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas_1.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas_1.calcAge());
// console.log(jonas_1['calcAge'](1991));

console.log(jonas_1.getSummery());

//  Coding Challenge

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'Mark Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)

}
// The for loops

// console.log('Lifting weights repetition 1!');
// console.log('Lifting weights repetition 2!');
// console.log('Lifting weights repetition 3!');
// console.log('Lifting weights repetition 4!');
// console.log('Lifting weights repetition 5!');
// console.log('Lifting weights repetition 6!');
// console.log('Lifting weights repetition 7!');
// console.log('Lifting weights repetition 8!');
// console.log('Lifting weights repetition 9!');
// console.log('Lifting weights repetition 10!');

// for loop keeps running while condition true
for (var rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}!`);
};

const jonasArray = [
    'jonas', 'schemed', 2037 - 1991, 'teacher', ['micheal', 'peter', 'steven'], true
];
const types = [];
for (var i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    types[i] = typeof jonasArray[i];
};
console.log(types);

const years = [1991, 2007, 1969, 2011];
const ages = [];

for (var i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages);

// Continue and break
console.log('---- ONLY STRINGS----')
for (var i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---- BREAK WITH NUMBER----')
for (var i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
};

const jonas_2 = [
    'jonas',
    'schmed',
    2037 - 1991,
    'teacher', ['Michael', 'Peter', 'Steven'],
];

// index 0,1,...,4
// index 4,3,...,0

for (var i = jonas_2.length - 1; i >= 0; i--) {
    console.log(i, jonas_2[i]);
};

//Loops in Loops

for (var exercise = 1; exercise < 4; exercise++) {
    console.log(`--------------Starting exercise ${exercise}`);

    for (var rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
    };
};

// While Loop

var rep_1 = 1;

while (rep_1 <= 10) {
    // console.log(`While : Lifting weights repetition ${rep_1}`);
    rep_1++;
};

var dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end...')
};

// Coding Challenge

const calcTip_1 = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills_1 = [22, 295, 176, 440, 205, 38, 20, 1100, 53];
const tips_1 = [];
const totals_1 = [];

for (var i = 0; i < bills_1.length; i++) {
    const tip = calcTip_1(bills_1[i]);
    tips_1.push(tip);
    totals_1.push(tip + bills_1[i]);
}

console.log(bills_1, tips, totals_1);

const calcAverage = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    };
    return sum / arr.length;
};
console.log(calcAverage([2, 3, 10]));
console.log(calcAverage(totals_1));
console.log(calcAverage(tips_1));
console.log(calcAverage(bills_1));