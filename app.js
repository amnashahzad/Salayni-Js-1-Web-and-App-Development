var name, name1;
name = "Amna Shahzad";
name1 = "Shahzad";
alert(name1);
alert(name);

var a = 5;
var b = "10";
var c = 6 + 7 * 4 / 2;
var d = 10 % 3;
alert(c);
alert(d);
document.write(100);

var a = 1 + 1 - 3;
a = a + 5;
a = 5 + a;
alert(a);

var b = 1;
alert(b++);

var c = 1;
alert(++c);

var d = 1;
alert(d--);

var e = 1;
alert(e--);

var b = 1;
alert(b++);

var e = 5;
e = 6;
alert(e);

var f = 5;
f = f++ + 5;

var f = 5;
f = ++f + 5;

f = 5;
f = 6;
f = 10;

var g = "My name is:    ";
document.write(g + "Amna");

var a = prompt("Enter string", "Your string");
var b = prompt("Enter string", "Your string");
var c = a + b;
alert(c);


var x = prompt("Enter Number", "Your number");
var y = prompt("Enter Number", "Your Number");
var z = parseInt(x) + parseInt(y);
alert(z);


var a = prompt("Enter your Name");
if (a === "Amna") {
    document.write("True");
}
else {
    document.write("False");
}


var x = prompt("Enter your Percentage", "Your Percentage");
if (x <= 100 && x >= 90) {
    alert("A+");
}
else if (x < 90 && x >= 80) {
    alert("A");
}
else if (x < 80 && x >= 70) {
    alert("B");
}
else if (x < 70 && x >= 60) {
    alert("C");
}
else if (x < 60 && x >= 50) {
    alert("D");
}
else if (x < 50 && x >= 40) {
    alert("E");
}
else {
    alert("F");
}



if ((SAT > avg && GPA > 2.5) || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}


for (var i = 0; i < 10; i++) {
    document.write(i);
}


var i;
for (i = 0; i <= 50; i = i + 1) {
    document.write(i);
}


var i;
for (i = 0; i <= 50; i = i + 5) {
    document.write(i);
}


var cities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
for (var moiz = 0; moiz <= cities.length - 1; moiz++) {
    document.write("Best city of Pakistan " + cities[moiz]);
}


var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}


var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
var matchFound = false;
for (var i = 0; i < 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}


var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
document.write(fullNames);

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("no double spaces!");
    }
}

var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}
document.write(text);


var text = "My name is Muhammad Ali";
var findingindex = text.indexOf("are");
document.write(findingindex);

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
document.write(text);

var a = "this is a class which is a good class";
var b = a.lastIndexOf("is");
document.write(b);

var name = "Muhammad Ali";
var firstChar = name.charAt(name.length - 1);
document.write(firstChar);

var score = .0678437;
var roundofvalue = Math.round(score);
document.write(roundofvalue);

var score = .0678437;
var roundofvalue = Math.ceil(score);
document.write(roundofvalue);


var score = 7.9678437;
var roundofvalue = Math.floor(score);
document.write(roundofvalue);



var randomValue = Math.random() * 10;
var finalWinner = Math.round(randomValue);
document.write(finalWinner);


var a = +prompt("Enter your value");
document.write(a + 1);

var a = prompt("Enter your value");
document.write(parseInt(a) + 1);

var a = prompt("Enter your value");
document.write(+a + 1);

var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]

var found = 0;
for (var i = 0; i < arr.length; i++) {
    document.write("arr[i] == 5", arr[i], 5)
    if (arr[i] == 5) {
        found++;
    }
}

document.write(found)


var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        found = true;
        break;
    }
}
document.write(found)



var a = Date.now();
for (var i = 0; i < 100; i++) {
    document.write(i);
}
document.write(Date.now() - a)





var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]

var found = false;
var found2 = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        found = true;
    }
    if (arr[i] == 2) {
        found2 = true;
    }
    if (found == true && found2 == true) {
        document.write("true");
        break;
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == 2) {
                found = true;
                break;
            }
        }
        break;
    }


}

if (found == true) {
    document.write("true");
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        found = true;
        break;
    }
}

if (found == true) {
    document.write("true");
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (!found) {
            if (found != arr[i]) {
                document.write("TRUE");
                break;
            }
        } else {
            document.write("SET foun")
            found = arr[i];
        }
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var needToFound = [1, 2, 200, 300, 5]
var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 200, 300]

for (var i = 0; i < needToFound.length; i++) {
    var index = arr.indexOf(needToFound[i]);
    if (index != -1) {
        needToFound.splice(i, 1);
        i--;
    }
}
if (!needToFound.length) {
    document.write("Found All")
} else {
    document.write("Not Found these numbers : " + needToFound.join(",,"));
}

