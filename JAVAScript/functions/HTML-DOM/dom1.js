document.getElementById("demo").innerHTML = "Number of anchors are : " + document.anchors.length;

//
console.log(document.documentElement.innerHTML);
// 
document.getElementById("demo3").innerHTML = "Number of Links: " + document.links.length;
// 
document.getElementById("demo4").innerHTML = "Number of Scripts: " + document.scripts.length;
// 
document.getElementById("title").innerHTML = "The Title of this Document is: " + document.title;
// 
document.write(Date());
document.write("hello World!");

// 
document.write("<h1>Hello World!</h1><p>Have a <b>nice</b> day!</p>");
// 
function myFunction() {
    document.write("hello");
}
// 
document.getElementById("change").innerHTML = "This Is New Text!";
// 
var element = document.getElementById("change1");
element.innerHTML = "New Heading!";
// 

document.getElementById("image").src = "https://images-na.ssl-images-amazon.com/images/I/91EmIYaUFQL.jpg";

// 
document.getElementById("image1").href = "https://images-na.ssl-images-amazon.com/images/I/91EmIYaUFQL.jpg";
// 
document.getElementById("style").style.color = "blue";

// 

var id = null;

function myMove() {
    debugger;
    var elem = document.getElementById("animate");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
// 
function changeText(id) {
    id.innerHTML = "Ooops!";
}
// 
function displayDate() {
    document.getElementById("mydemo").innerHTML = Date();
}
// 
function myFunction() {
    var x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}
// 

function mOver(obj) {
    obj.style.backgroundColor = "yellow";
    obj.innerHTML = "Pit Bull";
}

function mOut(obj) {
    obj.style.backgroundColor = "#D94A38";
    obj.innerHTML = "Rain Over Me";
}

// 

function mDown(obj1) {
    obj1.style.backgroundColor = "yellow";
    obj1.innerHTML = "Release Me";
}

function mUp(obj1) {
    obj1.style.backgroundColor = "orange";
    obj1.innerHTML = "Thank You";
}
// 

function lightOn() {
    document.getElementById('myimage').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4IgE3Rf_ApR8pmvXH7z9Fb-u5OsRc1vcnVNwg1OUG37RygGWL08PhwK1GT0ugHOSFbNk&usqp=CAU";
}

function lightOff() {
    document.getElementById('myimage').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiq0dITUbJn8PdyNJjOg9vy1T9nUK7jTvYIcCcCvaUqWn9Gh2h3H_6ssH69YfGnrZzJEI&usqp=CAU";
}

// 

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("myP").innerHTML = Date();
}

// 
document.getElementById('myAnchor').addEventListener('click', function() {
    alert("hello");
});

// 
var xx = document.getElementById("myAnchor1");
xx.addEventListener("click", myFunction4());
xx.addEventListener("click", myFunction5());

function myFunction4() {
    alert("hello World!");
}

function myFunction5() {
    alert("this Function was also exicuted");
}
// 
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn1").addEventListener("click", function() {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    var result = a * b;
    document.getElementById("dem1").innerHTML = result;
}

// 

document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
// 
document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;
// 
document.getElementById("id06").innerHTML = document.getElementById("id05").childNodes[0].nodeValue;
// 
document.getElementById("p2").innerHTML = document.getElementById("h1").nodeName;