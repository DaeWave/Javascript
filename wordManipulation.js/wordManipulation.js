//Word Manipulation
//Asks user to input a word and log the following, replace 2 letter with !, reverse the word, every 6 letter is uppercase and ASCII.

//Prompt to store users data.
let input = prompt('Please insert a word below');
//Create variables 
var arr = input.split(""); //Turn sting into array 
var nth1 = 2; //Every second character is replaced with a ’!’
var replace1 = "!"; 
var nth2 = 6; //Every sixth letter is Capital 

//Every second digit to make a !.
function second(input) {
  arr = input.split("");
  //For loop to run through the array and replace the second charater with !
  for (var i = nth1 - 1; i < arr.length; i += nth1) {
    arr[i] = replace1;
  }
  console.log(arr.join(" "));
}

//To create a reverse of the word the user has choosen.
function reverseString(input) {
  //New var and for loop so that it can run through array and reverse it.
  var arr1 = "";
  for (var i = input.length - 1; i >= 0; i--) { 
    arr1 += input[i]; 
  }
  console.log(arr1);
}

//For every 6th letter to be in capital.
function upperCase(input) {
  var arr2 = input.split("");
  //Running a for loop through the array so that it can make every 6th letter uppercase.
  for (var i = nth2 - 1; i < arr2.length; i += nth2) {
    arr2[i] = arr[i].toUpperCase()
  }
  console.log(arr2.join(" "));
}

//ASCII American Standard Code for Information Interchange.
function ascii(input) {
  //Creating a split thena forEach function to get CharCode for every letter.
  input.split('').forEach(function (c) {
    console.log(c + ': ' + c.charCodeAt(0));
  });
}

//Console log to see users input.
console.log(input);
//Run all the functions to the console.
second(input);
reverseString(input);
upperCase(input); 
ascii(input); 

//Resourses:
//https://www.w3schools.com/jsref/jsref_foreach.asp - To understand forEach() functions.
//https://www.programiz.com/javascript/examples/ascii-value-character
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
//DONE!