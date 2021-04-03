var myElement = document.getElementById('intro');
document.getElementById('demo').innerHTML = "The text From the Intro paragraph is " + myElement.innerHTML;

// Tag Name

var x = document.getElementsByTagName('p');
document.getElementById("demo1").innerHTML = "The Text in first paragraph (index 0) is: " + x[2].innerHTML;

// 

document.getElementById("demo2").innerHTML = "The Text in first paragraph (index 0) is: " + x[6].innerHTML;

// 
var y = document.getElementById('main');
var z = y.getElementsByTagName('p');
document.getElementById('demo3').innerHTML = 'the first paragraph inside "main" index(4) is : ' + z[4].innerHTML;

// Finding HTML Elements by Class Name

var e = document.getElementsByClassName("intro1");
document.getElementById("demo4").innerHTML = "The First paragraph 'index(3)' with class='intro': " + e[3].innerHTML;

var x1 = document.querySelectorAll('p.intro2');
document.getElementById('demo5').innerHTML = "This paragraph will print in p ID='demo5'" + x1[2].innerHTML;

// ///
function myFunction() {
    console.log()
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo6").innerHTML = text;
}