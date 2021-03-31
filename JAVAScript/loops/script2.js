// while loop

var i = 0;
while (i < 4) {
    console.log(i);
    i++;
};

var ii = 4;
while (ii) {
    console.log(ii);
    ii--;
};
// /////////
var i3 = 4;
while (i3) console.log(i3--);
console.log(typeof(i3));

// ///

var z = "hello";
y = "hai";
while (z += y) {
    console.log(z);
    break;
};

// ///////

var y1 = 20;
do {
    console.log(y1);
    y1--;

}
while (y1 >= 4) {
    console.log(y1);
}

// ////////
// for
let i1 = 0;
for (let i1 = 0; i1 < 3; i1++) { // shows 0, then 1, then 2
    console.log(i1);
}
/////
let i5 = 0;

for (; i5 < 9;) {
    console.log(i5++);
}

// 
var x5 = [1, 2, 3, 4, 5, 6, "what", 'why', 'which', 'who'];
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}



// break

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         if (!input);
//         console.log(i, j);
//     }
// }

// console.log('Process Done!');

// //
// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input) break outer;
//         console.log(i, j)
//     }
// }
// console.log('Insert The Input');

// 

for (let i = 0; i < 5; i++) {

    if (i % 2) {
        console.log(i);
    }

}
// 
let sum9 = 0;
let number9 = 0;

while (number9 >= 0) {

    // add all positive numbers
    sum9 += number9;

    // take input from the user
    number9 = parseInt(prompt('Enter a number: '));
    console.log(sum9);
    // continue condition
    if (isNaN(number9)) {
        console.log('You entered a string.');
        number9 = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum9}.`);