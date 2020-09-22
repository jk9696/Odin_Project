//Strings in JavaScript
let string = 'The revolution will not be televised.';
string;
let badString = string;
badString;//badstring now has the same value as the string
let sglDbl = 'Would you eat a "fish supper"?';//this is a valid code
let dblSgl = "I'm feeling blue.";


let bigmouth = 'I\'ve got no right to take my place...';//this is also a valid code notice the 'I'
bigmouth;//the slash mark \ is used as a escaping character which make sure things are recognized as text



//Concatenating Strings
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two; //Hello how are you
joined;

let multiple = one + one + one + one + two;
multiple;

let response = one + 'I am fine — ' + two;
response;

//concatenation in context
<button>Press me</button>

const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

//converting strings and numbers
let myString = '123';
let myNum = Number(myString);//converts the string to number
typeof myNum;
let myNum = 123;
let myString = myNum.toString();//converts number to string
typeof myString;

//Template Literals can include everything in one quotation mark instead of seperating everything
song = `Fight the Youth`; //notice the backtick mark as opposed to the normal string literal which has
//" " or ''
output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;

output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';

output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100 }%.`;

//String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");//returns -1 if not found
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts 
//at position 15, and searches to the beginning of the string.

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
//This example slices out a portion of a string from position 7 to position 12 (13-1):
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6); 
var res = str.slice(7)//start at index 7 to the end
//If a parameter is negative, the position is counted from the end of the string

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);//sub strings from index 7 to 13

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);// substring from index 7 to the end
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);// If the first parameter is negative, the position counts from the end of the string.

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");//replace string content
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");//makes it case insensitive bc replace is case sensitive



//Converting to Upper and Lower Case
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

//The Concact() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); //the concat() method can be used instead of the plus operator. 
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

//String.trimn()
var str = "       Hello World!        ";//removes white spacing
alert(str.trim());

//The charAt() Method
var str = "HELLO WORLD";
str.charAt(0);            // returns H
//The charCodeAt() Method
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

//Property Access
var str = "HELLO WORLD";
str[0];                   // returns H

var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H

//Converting a String to an Array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

//example
var txt = "Hello";       // String
txt.split("");           // Split in characters


//Conditionals
if (hour < 18) {
    greeting = "Good day";
  }
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }

  if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }


  let shoppingDone = false;
//in the code below shoppingDone is treated as true
  if (shoppingDone) { // don't need to explicitly specify '=== true'
    let childsAllowance = 10;
  } else {
    let childsAllowance = 5;
  }

 //Switch Statements
//  switch (expression) {
//     case choice1:
//       run this code
//       break;
  
//     case choice2:
//       run this code instead
//       break;
      
//     include as many cases as you like
  
//     default:
//       actually, just run this code
//   }

//example below
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }

  //Ternary Operator
  ( condition ) ? run this code : run this code instead
  //example
  let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';


  switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}




//Logical Operators:
//OR
  alert( true || true );   // true
  alert( false || true );  // true
  alert( true || false );  // true
  alert( false || false ); // false
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

//AND(&&)
result = a && b;
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


//!(NOT)
result = !value;
alert( !true ); // false
alert( !0 ); // true
alert( !!"non-empty string" ); // true
alert( !!null ); // false
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false



























