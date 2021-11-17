//Calculator
//Asking the user 2 number then creating seperate funtions to exacute the addition, subtraction, multiplication and division of these 2 numbers given by the user.

//First asking the user the which 2 numbers they choose and which opperation they want the exacute, while storing their the data given for opperations.
const input1 = prompt('Please enter in your first number. ');
const input2 = prompt('Please input your second number.');
const choose = prompt('What operationwould you like to preform: D - Divide, M - Multiply, S - Subtract, A - Add.').toLowerCase(); //Making sure this is lower case, to making the if and else statements a bit easier for later use.

//Creating variables that asked the user for the 2 numbers and storing them as parseInt(), to convert them from string into numbers.
var num1 = Number(input1);
var num2 = Number(input2);

//Creating the funtion to add these numbers together.
function add(num1, num2) {

  console.log(`${input1} + ${input2} = ${num1 + num2}`);  //Just to log it to the browser console.
  return(`${input1} + ${input2} = ${num1 + num2}`);  //Returning it for the alert so that the user may view the answer.
}

//Creating a subtraction function, to subtract the 2nd number from the 1st.
function subtract(num1, num2) {

  console.log(`${input2} - ${input1} = ${num2 - num1}`); 
  return(`${input2} - ${input1} = ${num2 - num1}`);
}

//Creating a multiplication function to multiply the 2 numbers together.
function multiply(num1, num2) {

  console.log(`${input1} * ${input2} = ${num1 * num2}`);   
  return(`${input1} * ${input2} = ${num1 * num2}`);
}

//Creating division function, to divide the 1st number from the 2nd number.
function divide(num1, num2) {

  console.log(`${input1} / ${input2} = ${num1 / num2}`);  
  return(`${input1} / ${input2} = ${num1 / num2}`);
}

//Creating if and elese statements so there can be conditions as to what opperation to exacute.
if (choose === 'd') {
  alert (divide(num1, num2)); 
} 
else if (choose === 'm') {
  alert (multiply(num1, num2));
}
else if (choose === 's') {
  alert (subtract(num1, num2));
}
else if (choose === 'a') {
  alert (add(num1, num2));
} 
else {
  alert ('Please enter in correct key.')
}

//Done!