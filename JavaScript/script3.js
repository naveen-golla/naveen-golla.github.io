var a = [1, 2, 3];
for (i = 0; i < a; i++);
console.log(a[i]);


// OBJECTS

// create an objet

var creat = new Object();
var create1 = {};

// properties in object

var user = {
    name: "naveen",
    age: 24
}
console.log(user.name);

// delete the property
var d = {
    name: "Naveen",
    age: 24,
    isAdmin: true
}
console.log(delete d.age);

// multi word property
var m = {
    name: "x",
    age: 2,
    like_birds: true,
    "like what": "cricket"
}
console.log(m.like_birds);
console.log(m["like what"]);


// promt 

// var p = {
//     name: "john",
//     age: 24,
// }
// var key = prompt("What do you knw about user?", "name");
// console.log(p[key]);

// 
var p = {
    name: "john",
    age: 24,
}
var key = "name";
console.log(p.key); //undefined

// computed properties
// var f = prompt("Which fruit you want to buy?", "apple");
// var bag = {
//     [f]: 5,
// };
// console.log(bag.apple);
// 

let fruit = 'apple';
let bag = {
    [fruit + ' boxes']: 5 // bag.appleComputers = 5
};
console.log(bag);

// shorthan properties

function make(name, age) {
    return {
        name: name,
        age: age,
    };
}
var use = make("John", 24);
console.log(use.name);

// 

function makeUse(name, age) {
    return {
        name,
        age,
    };
};
var user1 = makeUse("john", 30);
console.log(user1.name);

// property names liminations

var obj = {
    for: 1,
    let: 2,
    return: 3,
};
console.log(obj.for+obj.let+obj.return); //6

// 

var obj1 = {
    0: "test",
};
console.log(obj1["0"]);
console.log(obj1[0]);

// prototype
var obj2 = {};
obj2.__proto__ = 5;
console.log(obj2.__proto__);

// let obj3 = {};
// obj3.create() = 5; // assign a number
// alert(obj3);

// "in" operator

var test = {};
console.log(test.noSuchproperty === undefined);

// "in" operator

var user3 = { name: "John Bokasta", age: 33 };
console.log("age" in user3);
console.log("John" in user3);

// variable 

var user4 = { name: "john", age: 33 };
var key = "age";
console.log(key in user4);

//
var obj4 = {
    text: undefined,
};
console.log(obj4.text); //undefined is a data type
console.log("test" in obj4); //true

// for in loop

var user5 = {
    name: "john3",
    age: 23,
};
for (var x in user) {
    console.log(x);
    console.log(user[x]);
};

// ordered like an object
var codes1 = {
    "23": "germany",
    "1.2": "england",
    "+34": "australia",
    "1": "India"
};
for (var c in codes1) {
    console.log(c);
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);


function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}
console.log(isEmpty(obj));


// 

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.color);
console.log(myCar.model);

// 
var mycar1 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
}
console.log(mycar1.make);

// using barckets

var myCar1 = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myCar1.type = 'Dot Syntax';
myCar1["Date created"] = 'string type';
myCar1[str] = 'string value';
myCar1["phase"] = 'what is it'

obj.type = 'double Dot';
obj["name year"] = 2016;
obj[name] = 'naveen'

console.log(myCar1.type);
console.log(obj["name year"]);
console.log(mycar1);

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   }




function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    return result;
}
console.log(showProps.objName);

let color02 = [
    [1, 2, 3],
    [2, 3, 4],
    [2, 6, 7]
];

for (i in color02) {
    for (j in color02[i]) {
        console.log(color02[i][j]);
    };
};

let color01 = [
    [1, 2, 3],
    [2, 3, 4],
    [2, 6, 7]
];

for (let i of color01) {
    for (let j of i) {
        console.log(j);
    };
};

// 



// .............

// while
function listAllProperties(o) {
    var objectToInspect = o;
    var result = [];

    while (objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect);
    }

    return result;
}
console.log(listAllProperties(Number(5)));

//   for 
function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

    return result;
}
console.log(listAllProperties(Number(5)));

// 
const a1 = 'foo';
const b = 42;
const c1 = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);

// 

var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };

console.log(myHonda.color);

const newLocal = "model";
// constructor

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var myCar1 = new Car("eagle", "tesla tsi", 1993);
console.log(myCar1.make);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
console.log(kenscar);

// 
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

console.log(ken.age);

// using the Object.creat method

// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates',
    displayType: function() {
        console.log(this.type);
    }
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType();

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();

// 


function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;

    function displayCar() {
        var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
        pretty_print(result);
    }
}
var displayCar = new Car('ford', 'tesla tri', 102 - 1, 'naveen');
console.log(displayCar.owner);

// const

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
}

function sayHi() {
    console.log('Hello, my name is', this.name)
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi() // Hello, my name is John'
Intern.sayHi() // Hello, my name is Ben'

// 


function howOldAmI() {
    console.log('I am ' + this.age + ' years old.')
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI() // I am 27 years old.

// getter and setter

var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};

console.log(o.a);
o.c = 25;
console.log(o.a);

// 
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log('a' in myobj); // output: "false"
console.log(delete myobj.a);