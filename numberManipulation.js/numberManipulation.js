//Number Mainpulation 
//Creating a program that asks a user to input 10 numbers and the program will then calculate the sum, index max, index min, average and the median number. 

//Creating variables.
let input = [];
var i = 0;
var max = 10;

//Creating a for loop so it can prompt and store the data the user inputs.
for (i; i < max; i++) {
  input[i] = Number(prompt(`Please enter in 10 numbers: you are currently entering: Number ${i + 1}.`));
  }

//Now to create functions for each (sum, indexes, average and median)
function sum(input) {
  //reduce along with a type of arrow function to add the numbers.
  console.log(input.reduce((a,b) => a + b, 0));
}

function indexOfMax(input) {
  //index of max to find along with math.max to find the max.
  console.log(input.indexOf(Math.max(...input))); //Watch as it will give you the index and not the actual highest number of the user input. If you want to the highest number the user input in the log, it would look like this,
  // console.log(Math.max(...input));
}

function indexOfSmall(input) {
  //index of min ... helps find input.
  console.log(input.indexOf(Math.min(...input))); //Watch as it will give you the index and not the actual lowest number of the user input. If you want to the smallest number the user input in the log, it would look like this,
  // console.log(Math.min(...input));
}

function avarage(input) {
  //yet agian we use reduce to add the numbers together and then divide it to find avarage and the toFixed maintains it to 2 decimal places.
  console.log((input.reduce((a,b) => a + b, 0) / input.length).toFixed(2));
}

function median(input) {
  //sort the function 
  input.sort( function(a,b) {return a - b;} );
  //create variable so we can use Math.floor to sind median.
  var half = Math.floor(input.length/2);
  //if and else statements to create conditions for the user input.
  if(input.length % 2) {
      return input[half];
  } else {
      console.log((input[half-1] + input[half]) / 2.0);
  }
}

//log the input to create a visual representation of what the user has input into the console.
console.log(input);
//This is to then activate all the specific function created above.
sum(input);
indexOfMax(input);
indexOfSmall(input);
avarage(input);
median(input);


//Resourses:
//https://www.programiz.com/javascript/examples/ascii-value-character
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
//https://www.w3schools.com/jsref/jsref_tofixed.asp
//https://www.verywellmind.com/how-to-identify-and-calculate-the-mean-median-or-mode-2795785
//https://www.w3schools.com/js/js_math.asp
//https://www.w3schools.com/jsref/jsref_reduce.asp
//https://www.digitalocean.com/community/tutorials/understanding-arrow-functions-in-javascript - understanding arrow functions.
//Done!