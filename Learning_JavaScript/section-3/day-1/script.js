'use strict';

function logger() {
    console.log('My name is naveen')
};

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcesser(apples, graphs) {
    const juice = `juice with ${apples} apples and ${graphs} graphs.`
    return juice;
};
const appleJuice = fruitProcesser(3, 4);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesser(2, 6);
console.log(appleOrangeJuice)

// Function decloration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1996);

// Function Expression
const calcAge2 = function(birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age1, age2);

// Arrow Function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
};

console.log(yearsUntilRetirement(1997, 'naveen'));

// Function Calling other Functions
const cutpieces = function(fruit) {
    return fruit * 4
};

function fruitProcesser1(apples, graphs) {
    const applePices = cutpieces(apples)
    const graphsPices = cutpieces(graphs)
    const juice1 = `juice with ${applePices} apples and ${graphsPices} graphs.`
    return juice1;
};
console.log(fruitProcesser1(2, 4));

// 

const calcAge = function(birthYear) {
    return 2021 - birthYear;
};

const yearsUntilRetirement1 = function(birthYear, firstName) {

    const age_1 = calcAge(birthYear);
    const retirement_1 = 60 - age_1;

    if (retirement_1 > 0) {
        console.log(`${firstName} retires in ${retirement_1} years`);
        return retirement_1;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    };
};

console.log(yearsUntilRetirement1(1997, 'Naveen'));
console.log(yearsUntilRetirement1(1960, 'Officer'));

// Coding challenge

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 5, 7));

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win trophy! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win trophy! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No teams win's...");
    };
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 123);