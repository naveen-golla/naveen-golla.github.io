'use strict';
// Arrays
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Naveen'
const naveen = [firstName, 'Kumar', 2021 - 1997, 'Learner', friends];
console.log(naveen);
console.log(naveen.length);

// Exercise

const calcAge = function(birthYear) {
    return 2021 - birthYear;
};
const years = [1991, 1967, 2002, 2021, 2010];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[4]);
const age3 = calcAge(years[1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[4]), calcAge(years[years.length - 2])];
console.log(ages);

// Add elenents
friends.push('Naveen');
console.log(friends);
friends.unshift('kumar');
console.log(friends);

// Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes( 23));