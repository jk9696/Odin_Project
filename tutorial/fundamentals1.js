//JavaScript Numbers

var x = 3.14;
var y = 3;
var x = 123e5;//123*10^5
var y = 123e-5//123*10^-5

//Integers (numbers without a period or exponent notation) 
//are accurate up to 15 digits.
//example
var x = 999999999999999;
var y = 9999999999999999;  // y will be 10000000000000000

//Operations
var x = 0.2+ 0.1;
var x = (0.2*10 + 0.1*10)/10;

//adding numbers and strings
var x = 10;
var y = 20;
var z = x + y;

var x = 10;
var y = "20";
var z = x + y; //z will be 1020 (a string not numbers) aka concatenated string

var x = 10;
var y = 20;
var z = "The result is: " + x + y; //prints out 1020 not 30 since "+"" concatenates with previous string

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z; //prints 3030 b/c it adds 10+20 and concatenates 30 -> 3030

//Numeric Strings
var x = 100;
var y =  "100";

var x = "100";
var y = "10";
var z = x / y;   // z will be 10

var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)
//remnember that + can be used as a operator to concatenate strings together


//NaN - Not a Number
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10 takes on the string value which will be 10 resulting in a numeric
var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number
typeof NaN;            // returns "number" NaN is technically a number


//Infinity
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity Inifinity is a number as well

//Hexadecimal
//by default Javascript display numbers as base 10 decimals
var x = 0xFF;        // x will be 255
var myNumber = 32; 
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//Numbers can be Objects
var x = 123;
var y = new Number(123);
var x = 123;
var y = new Number(123);

var x = 500;             
var y = new Number(500);
// (x === y) this conseders types as well is false because x and y have different types but x==y is true bc number matches

var x = new Number(500);             
var y = new Number(500);
// (x == y) is false because objects cannot be compared

//Examples
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23",

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5 unary plus is applied here first so the values are converted to numbers here

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


//Sizing a Canvas Box
let x = 50; let y = 50;

// Edit the two lines below here ONLY
x = 50;
y = 50;

ctx.fillStyle = 'black';
ctx.fillRect(100, 10, x, y); //100, 10 are coordinate x and y are width and height
   

//making buttons in javascript
<button>Start machine</button>//makees the button that says ""
<p>The machine is stopped.</p>

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);//click then update

function updateBtn() {
  if (btn.textContent === 'Start machine') {//if it is start machine when clicked machnes stoped
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

//Variables in depth
let user = 'John';
let age = 25;
let message = 'Hello';

let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' you cant decalre the same thing twice

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

const myBirthday = '18.04.1982';//const cant be changed
myBirthday = '01.01.2001'; // error, can't reassign the constant!

//good uppercase constant practice
//widespread practice to use constants as aliases for difficult-to-remember values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00