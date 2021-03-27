// 

function displayCar1(make, model, year) {
    var result = "A beatuful " + "make:" + make + "  model:" + model + "  year:" + year;
    console.log(result);
}
displayCar1("BMW", "BMW 456", "1999");

// method definitions

const obj = {
    foo() {
        return 'bar';

    }
};
console.log(obj.foo());

//

function displayCar1(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    var result = `A Beautiful ${this.make} ${this.model} ${this.year}`;

}
displayCar1("hundai", "vernaa", 2000);

// 

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
};
employ = new emp(103, 'naveen', 5000);
console.log(employ.id + " " + employ.name + " " + employ.salary);

// 
function emp1(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;

    function changeSalary(otherSalary) {
        this.otherSalary = otherSalary;
    }
}
employ1 = new emp1(104, "naveen", 25);
console.log(employ1);
employ1.changeSalary(4500);
console.log(employ1);


// declaring an array in two ways

// first way
var arr = new Array();
arr[0] = 2;
arr[1] = 3;
arr[3] = "abc";
console.log(arr);

// second way
var arr1 = [1, 2, 3, , "", '4', "bca"];
console.log(arr1);

// elements

var fruits = ["apple", "banana", 'plum'];
// accing the elements by index number
console.log(fruits[0]);
console.log(fruits[2]);
// replacing the element into array
console.log(fruits[2] = "pear");
console.log(fruits);
// adding an element into array
console.log(fruits[3] = "graps");
// count of elements in array
console.log(fruits.length);

// an array elements can be any type

var x = [1, "abr", { name: "naveen" }, true];
console.log(x[2].name);

// pushing and poping an element in array

var y = [1, 2, 3, 4, 5];
console.log(y.pop()); //it delets an last element output is [1,2,3,4]
console.log(y);
console.log(y.push("naveen"));
console.log(y);

// shifting and unshifting an element in array

var s = [1, 2, 3, 4, 'naveen'];
console.log(s.shift());
console.log(s.unshift(0));
console.log(s);

// loop in array

var l = ['apple', 'banana', 'grapas'];
for (var i = 0; i < l.length; i++); {
    console.log(i);
}
console.log(l);

// for....in

var arr2 = [1, 2, 3, 4, 5];

for (var key in arr2) {
    console.log(arr2[key]); // Apple, Orange, Pear
}

// word of length
var fruit = [];
fruit[12] = "apple";
console.log(fruit.length);

// multidimentional array
var matrix = [
    [1, 2, 'a'],
    ['a', 'b', 'c'],
    ['naveen', 'hai']
];
console.log(matrix);
console.log(matrix[2][1], matrix[2][0]);

// objects

// objects also create in two ways
// first way

var obj3 = new Object();

obj3.name = 'naveen',
    obj3.age = 24

console.log(obj3);

// second way
var obj4 = { name: 'naveen', age: 24 };
console.log(obj4);
console.log(delete obj4.age);

// property value shorthand

function make2(name, age) {
    return {
        name: name,
        age: age,
    };
};
var user = make2('naveen', 24);
console.log(user.name);

// another way of Shorthand

function make3(name, age) {
    return {
        name,
        age,
    }
}
var user1 = make2('sathish', 23);
console.log(user1.name);

// in operator objects

var user3 = { name: 'naveen', age: 24 };
console.log("age" in user3);
var key = "age";
console.log(key in user3);

// for...in 

var user4 = {
    name: 'naveen',
    age: 24,
    isAdmin: true,
};
for (var key in user4) {
    console.log(key);
    console.log(user4[key]);
}

// objects and properties

var myCar = new Object();
myCar.make = "ford";
myCar.model = "mustang";
myCar.year = 2020;

console.log(myCar.make);

// declaration in array formate