// slicing

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 2));


// sorting 
var fruits = ["Banana", "Orange", "Lemon", "///Apple", "1Mango", "4Banana", "/Orange", ".@Lemon", "._Apple", "{Mango"];
console.log(fruits.sort());

// numbers sort

var n = [1, 4, 6, 9, 2, 3, 4, 564748, 4, 467, 4576, 687, 4, 8433, 12];
n.sort(function(a, b) {
    return a - b
});
console.log(n);

// finding the highest value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return b - a });
console.log(points[0]);

// finding the lowest value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });
console.log(points[0]);


// highest number
var points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));

// another example for min value
var x = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};
console.log(myArrayMin(x));

// max value
var a = [2, 45, 65, 754, 8767, 9898];

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
};
console.log(myArrayMax(a));


// sorting objects in array

var cars = [
    { type: "volvo", year: 2016 },
    { type: "Bmw", year: 2013 },
    { type: "saab", year: 2011 }

];
cars.sort(function(a, b) {
    return a.year - b.year
});
console.log(cars);

// map() method
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}
console.log(numbers2);

// filter in array 
var f1 = [1, 45, 34, 23, 7, 8, 65];
var f2 = f1.filter(myFunction);

function myFunction(value, index, array) {
    return value < 20;
}
console.log(f2);

// reduce 
var r1 = [1, 45, 34, 23, 7, 8, 65];
var sum = r1.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
console.log(sum);

//another way

var r1 = [1, 45, 34, 23, 7, 8, 65];
var sum1 = r1.reduce(myFunction, 100);

function myFunction(total, value, index, array) {
    return total + value;
}
console.log(sum1);

//indexof

var in1 = ["apple", "2", 3, 4, 7, "string"];
var a = in1.indexOf(7);
console.log(a);

// repeated items
var in2 = ["apple", "2", 3, 4, 7, "string", 3, 4];
var a2 = in2.indexOf(3);
console.log(a2);

// if we use two values in index
var in3 = ["apple", "2", 3, 4, 7, "string", 3, 4, 7];
var a3 = in3.indexOf(4, 7, "string");
console.log(a3);

// OBJECTS

var user = {
    name: "naveen",
    age: "24"
};
console.log(user.name);

// deieting object
var user1 = {
    name: "naveen",
    age: "24"
};
console.log(delete user1.age);
console.log(user1);

// multiword property names

var user2 = {
    name: "naveen",
    age: "24",
    "like birds": "butterfly"
};
console.log(user2["like birds"]);

//

// var users = {
//     name: "Naveen",
//     age: "24"
// };
// var key = prompt("what you want to know about the user?", "age");
// console.log(users[key]);


// computed properties

// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5,
// };
// console.log(bag.apple);

// computed 

// var person = {
//     name: "Naveen",
//     age: 24,
//     "which year": 1997
// };

// var key = prompt("You want to say Hai?", "Naveen");
// console.log("Hello " + person.name + " How Are You");

// 

// var fruit1 = 'apple';
// var bag1 = {
//     [fruit1 + "Computers"]: 5,
// };
// console.log(bag1);

// property value shorthan

function makeuser(name, age) {
    return {
        name: name,
        age: age
    };
}
let user4 = makeuser("Naveen", 24);
console.log(user4.name);

// property existance test

var userx = { name: "naveen", age: 24 };
console.log("name" in userx);
console.log("naveen" in userx);

// key 
var usersx = {
    age: 24
};
let key1 = "age";
console.log(key1 in usersx);

// for in loop

var f3 = {
    name: " Naveen",
    age: 24,
    isAdmin: true
};
for (var key2 in f3) {
    console.log(key2 + f3[key2]);

};

// Ordered like Property

var code = {
    '1': "India",
    "23": "pakistan",
    '5': "australia",
    "45": "England",
    "34": "South africa"
};

for (var code in code) {
    console.log(code);
};