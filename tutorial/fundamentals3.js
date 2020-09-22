//Built in Functions------------------------------------------------------
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string, 
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

let myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number


//Functions versus Methods--------------------------------------------------------
//functions are part of objects called methods examples of function in js below
function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  function random(number) {
    return Math.floor(Math.random()*number);
  }
  //Invoking Functions---------------------------------------------------------------
  function myFunction() {
    alert('hello');
  }
  myFunction();
  // calls the function once

  //Anonymous Functions--------------------------------------------------------------
  function myFunction() {
    alert('hello');
  }
  function() { //this is called anonymous function you can set this anonoymous function to a button below
    alert('hello');
  }
    const myButton = document.querySelector('button');
    myButton.onclick = function() {
        alert('hello');
    }

    const myGreeting = function() {//this assigns an anonymous function to be the value of a variable
        alert('hello');
      }
      let anotherGreeting = myGreeting; //this would make the variable same as the function declared above
     

      
//Function Parameters
let myNumber = Math.random();
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');//two parameters here

//Functions inside functions //example below
function myBigFunction() {
    let myValue;
  
    subFunction1();
    subFunction2();
    subFunction3();
  }
  
  function subFunction1() {
    console.log(myValue);
  }
  
  function subFunction2() {
    console.log(myValue);
  }
  
  function subFunction3() {
    console.log(myValue);
  }

















