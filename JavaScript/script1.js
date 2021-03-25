// arrays
// object use name to access its members

var person = { firstName: "Naveen", lastName: "Kumar", age: 24 };
console.log(person["age"]);

// accesing the last array element

var x = ["banana", "mango", "carrot", "water-melon"];
console.log(x[x.length - 2]);
console.log(x[1]);
// 
let arr = ['Apple', { name: 'John' }, true, function() { console.log('hello'); }];
console.log(arr[arr.length - 1]); //
console.log(arr[1].name);
console.log(arr[3]());

// pop and push
var x = ["banana", "mango", "carrot", "water-melon"];
console.log(x.pop());
console.log(x);
console.log(x.push('lemon'));
console.log(x);

// shift and unshift
var y = ["banana", "mango", "carrot", "water-melon"];
console.log(y.shift());
console.log(y);
console.log(y.unshift('graps'));
console.log(y);

// two variables refers the same array
var x = ["apple"];
var y = x;
console.log(y === x);
console.log(y.push("banana"));
console.log(y);

// loops in array

let z = ["apple", "banana", "mango"];
for (
    let i = 0; i < z.length; i++
) {
    console.log(z[i]);
}

// for-of 

var fruits = ["apple", "banana", "mango"];
for (var fruit of fruits) {
    console.log(fruit);
}
// for-in
var arr1 = ["banana", "graps", "lemon"];
for (var key in arr1) {
    console.log(key);
}

// word about length

var fruits = [];
fruits[3] = "apple";
console.log(fruits.length);

// decreases the array length

var A = [1, 2, 3, 4, 5, 6];
A.length = 3;
console.log(A);

var A = [1, 2, 3, 4, 5, 6];
A.length = 20;
console.log(A);

var A = [1, 2, 3, 4, 5, 6];
A.length = 0;
console.log(A);

// multidimentional array

var matrix = [
    [1, 2, 3, 3, 5],
    [3, 4, 5, 4, , 7, 6],
    [5, 6, 7]
];
console.log(matrix[1][5]);
console.log(matrix.length);
console.log(matrix);

// tostring

var b = [1, 2, 3, 45];
console.log(b)
console.log(String(b) === '1,2,3,45'); // i dont know

var c = ["abc", "bcd", "cde"]
console.log(c.toString());

// join

var c = ["abc", "bcd", "cde"]
console.log(c.join("*"));

// changing the Elements

var v = ["abc", "bca", "cab"];
console.log(v[0] = "ddd");
console.log(v);

// Deleting elements

var d = ["123", "234", 4, 6, 8];
console.log(d);
console.log(delete d[3]);
console.log(d);
console.log(d[3] = "asas");
console.log(d);

// splicing an array

var s = ["123", "234", 4, 6, 8];
s.splice(2, 2, "lemon", "graps");
console.log(s);
s.splice(4, 0, "nano", "micro");
console.log(s);

// splice to remove without leaving a holes
var s1 = ["123", "234", 4, 6, 8];
s1.splice(0, 1);
console.log(s1);

// merging elements

var m = ["ola", "ubber"];
var m1 = ["swiggy", "zomato"];
var m1m = m.concat(m1);
console.log(m1m);


// merging three elements

var m1 = ["1", 2];
var m2 = [2, "3"];
var m3 = [4, 5];
var m4 = m1.concat(m2, m3);
console.log(m4);
var m4 = m2.concat(m3, m1);
console.log(m4);

// merge an array with values
var arra = ["email", "naveen", "linux"];
var arra1 = arra.concat("peter");
console.log(arra1);

// slicing an array

var fruit = ["banana", "graps", "Lemon", "Apple", "Mango"];
var g = fruit.slice(2);
console.log(g);

var e = fruit.slice(1, 3);
console.log(e);

// array sorting
var fruit = ["Banana", "Graps", "Lemon", "Apple", "Mango"];
var s = fruit.sort();
console.log(s);

// reverse the order an array
var fruit = ["Banana", "Graps", "Lemon", "Apple", "Mango"];
var f = fruit.sort();
f.reverse();
console.log(f);

// number sorting

var points = ["23", "45", "3", "7", "98", "254"];
points.sort(function(a, b) {
    return a - b
});
console.log(points);

var point = [1, 33, 24, 45, 873, 0, 20000, 6];
point.sort(function(a, b) {
    return a - b
});
console.log(point);

// sorting an aray in random order
var point = [1, 33, 24, 45, 873, 0, 20000, 6];
point.sort(function(a, b) {
    return 0.5 - Math.random()
});
console.log(point);

// fisher yates method //i dont under stand
var fisher = [1, 2, 3, "4", "6", 5];
var i, j, k;
for (i = fisher.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = fisher[i]
    fisher[i] = fisher[j]
    fisher[j] = k
}
console.log(fisher);