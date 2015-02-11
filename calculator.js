function squareNum(num1) {
    var result = num1 * num1;
    console.log("The result of squaring the number " + num1 + " is " + result + ".");
}

squareNum(4);
squareNum(2);
squareNum(5);
squareNum(3);


function halfNum(num1) {
    var result = num1 / 2;
    console.log("Half of " + num1 + " is " + result + ".");
}

halfNum(10);
halfNum(5);
halfNum(20);


function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    console.log(num1 + " is " + result + "% of " + num2 + ".");
}

percentOf(5, 10);
percentOf(5, 20);
percentOf(2, 4);


function areaOfCircle(radius) {
    var result = (radius * radius) * Math.PI;
    console.log("The area of a circle with radius " + radius + " is " + result + ".");
}
areaOfCircle(2);
areaOfCircle(5);


function areaOfCircle(radius) {
    var result = (radius * radius) * 3.14;
    console.log("The area of a circle with radius " + radius + " is " + result + ".");
}

areaOfCircle(2);
areaOfCircle(5);


function megaFunction(num1) {
    var halfed = num1 / 2;
    var squared = halfed * halfed;
    var area = (squared * squared) * Math.PI;
    var result = (area / squared) * 100;
    console.log(result);
}
megaFunction(10);


