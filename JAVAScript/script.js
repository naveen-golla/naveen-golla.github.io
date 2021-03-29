// assigning values

var x = 2;
var y = 4;
console.log(x = x * y);

// 

var x = 4;
y = 5;
z = 76;
console.log(x = y = z);

// addition assigning

var a = 2;
b = "hello";
console.log(a += 4);
console.log(b += " world");

// 
var x = 4;
y = 50;
console.log(x += y);
console.log(x = x + y);

var foo = 'foo';
bar = 5;
baz = true;

//  number + number
console.log(bar += 2); //addition

// boolean + number
console.log(baz += 0); //addition

// boolean + boolean
console.log(baz += false); //addition

// number + string
console.log(bar += ' foo'); //concatination

// string + boolean
console.log(foo += false); //concatination

// string + string
console.log(foo += ' bar'); //concatination



// subtraction

var a = 4;
console.log(a -= 8);

console.log(a -= 'hello');

var b = 23;
console.log(b -= 3); //20

console.log(b -= 20); //0

// multiplication

var mul = 20;
console.log(mul *= 2);

console.log(mul *= '34');

// 
var mul1 = 22;
console.log(mul1 *= 2);
console.log(mul1 = mul1 * mul1); //

// divisions

var div = 4;
console.log(div /= 2);

console.log(div /= 0);

console.log(div /= 'hai');


// Remainder 

var rem = 4; // left operand is rem
console.log(rem %= 3);

console.log(rem %= 0);

console.log(rem %= 'hai');

// Exponentiation

var expo = 4;
console.log(expo **= 3);

console.log(expo **= 0);
console.log(expo **= 'heo');


// Left Shift  

var left = 5;
console.log(left <<= 6);


// AND operation Doubt

var x = 1;

y = 0;


console.log(x && (x = x));
// OR operation Doubt
// NOT operation Doubtvar



// Comparision 
var x = 3;
var y = 3;
console.log(x == y);

console.log(x != y);

// not equals toue
var var1 = 3;
console.log(var1 != 4);

// srtict equal
var str = 'try';
console.log(str === 'try');

// strict not equal
var str1 = 'tire';
console.log('tire' !== str1);

// Greater than 
var greater = 5;
console.log(greater > 4); //True

var greater = 5;
console.log(greater > 6); //false

// // Greater than or equalto
var greater1 = 5;
console.log(greater1 >= 6); //flase

//less than
var greater = 5;
console.log(greater < 6); //true

// less than or equal to
var greater = 30;
console.log(greater <= 6); //false

// increment ++ prefix

var pre = 3;
++pre;
console.log(pre);

// increment by 1 postfix ++
var post = 4;
post++;
console.log(post);

// Decrement by 1 --prefix

var pre = 3;
--pre;
console.log(pre);

// Decrement by 1 postfix--

var post = 6;
post--;
console.log(post);

// unary notation 

var unary = 4;
y = -unary;
console.log(y);

// 

var unary = 4;
y = -unary;
console.log(+unary);
// Exponentiation operator (**)

var expo1 = 4;
y = 4;
console.log(expo1 ** y);


// LOGICAl OPERATIONS

// AND OPERATION
var a1 = 3;
var b1 = -2;

console.log(a1 > 0 && b1 > 0); //false

var a2 = 4;
b2 = -7;
console.log(a1 < 4 && b2 < 0) //true 

// condition-1  conditon-2  AND-operation

//    false     false       false
//    false     true        false
//    true      false       false
//    true      true         true

// OR operation

var x1 = 'name';

y1 = '3';
console.log(x1 == 'name' || y1 == 3); //true

var x2 = ['array'];
y2 = { name: name };

console.log(x2 == { name: name } || y2 == ['array']); //false


// condition-1  conditon-2  OR-operation

//    false     false       false
//    false     true        true
//    true      false       true
//    true      true         true

// NOT Operation

var x3 = 77;
y3 = 'hello';
console.log(x3 != y3); //true

var x3 = 77;
y3 = 'hello';
console.log(x3 != 77); //true

// String Operators
var myString = 'Alpha';
myString += " bet";
console.log(myString);

// comma operator

// var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var a = [x, x, x, x, x];

// for (var i = 0, j = 9; i <= j; i++, j--) {

//     console.log('a[' + i + '][' + j + ']= ' + a[i][j]);

// };


// just tryed new 
var x = 4;
y = 6;
z = 2;

console.log(z -= (x += y) + (x *= y) + (y += 6));