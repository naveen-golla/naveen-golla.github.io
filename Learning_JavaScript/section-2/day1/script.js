 let x, y;
 x = y = 25 - 10 - 5; //x = y = 10
 console.log(x, y);
 //   Coading challenge
 const massMark = 78;
 const hightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95;

 const BMIMark = massMark / hightMark ** 2;
 const BMIJohn = massJohn / (heightJohn * heightJohn);
 const markHigherBMI = BMIMark > BMIJohn
 console.log(BMIMark, BMIJohn, markHigherBMI);

 //  String and Template literals

 const firstName = "Naveen";
 const job = "Learner";
 const birthYear = 1997;
 const year = 2021

 const naveen = "I'm " + firstName + ", a " + (year - birthYear) + " years Old " + job + "!";
 console.log(naveen);

 const naveenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
 console.log(naveenNew);

 console.log('String With \n\ multiple \n\ lines');

 console.log(`String 
 multiple
 lines`);

 //  if/else statements

 const age = 17;
 //  const isOldEnough = age >= 18;
 //  if (isOldEnough) {
 //      console.log('Sarah can start driving license');
 //  }

 if (age >= 18) {
     console.log('Sarah can start driving license');
 } else {
     const yearsLeft = 18 - age;
     console.log(`Sarah is too Young. Wait another ${yearsLeft} years :)`)
 }
 //  
 const birthYear_1 = 2001;

 let century;
 if (birthYear_1 <= 2000) {
     century = 20;
 } else {
     century = 21;
 };
 console.log(century);

 //  Code Challenge
 //  const massMark = 78;
 //  const hightMark = 1.69;
 //  const massJohn = 92;
 //  const heightJohn = 1.95;

 //  const BMIMark = massMark / hightMark ** 2;
 //  const BMIJohn = massJohn / (heightJohn * heightJohn);
 //  const markHigherBMI = BMIMark > BMIJohn
 //  console.log(BMIMark, BMIJohn, markHigherBMI);

 if (BMIMark > BMIJohn) {
     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
 } else {
     console.log(`John's BMI (${BMIJohn}) i shigher than Mark's (${BMIMark})!`)
 }

 //  Conversion type

 const inputYear = "1997";
 console.log(Number(inputYear) + 24);

 console.log(String(23), 23)

 //  Coerction Type
 console.log("I'm " + 24 + " Years old");
 console.log('23' - '10' - 3);
 console.log('23' + '10' + 3);
 console.log('23' * '10' * 3);
 console.log('23' / '10' / 3);
 console.log('23' > '18');

 let n = '1' + 1;
 n = n - 1;
 console.log(n);
 //  Truthy and Falsy values: 0, "",undefined,null,NaN
 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean("naveen"));
 console.log(Boolean({}));
 console.log(Boolean(''));

 const money = 0; //0 is Falsy value
 if (money) {
     console.log("don't spend it all")
 } else {
     console.log('You should get a job!')
 }

 var height; // Height is not Defined
 if (height) {
     console.log('YAY! Height is Defined');
 } else {
     console.log('Height is undefined');
 }
 //  Equaality operators: == & ===

 const age_1 = '18';
 if (age_1 === 18)
     console.log("You just became an adult");

 if (age_1 == 18)
     console.log("you just became an adult (loose)");

 const favorite = Number(prompt("What's your favorite number?"));
 console.log(favorite);
 console.log(typeof favorite);

 if (favorite === 23) {
     console.log('Cool! 23 is an anazing number');
 } else if (favorite === 7) {
     console.log('Cool given number is 7')
 } else {
     console.log('Number is not 23 or 7')
 }

 if (favorite !== 23) console.log("Why not 23");