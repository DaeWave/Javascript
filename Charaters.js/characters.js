//Create aprogram that can ask a user to input a upper case letter, a lower case letter or a number.
//if character is a upper case-->"(Users input) is an upper case letter".
//If the character is is lower case-->'(Users input) is a lower case'.
//If the character is a number-->"(Users input) is a number".
//If the character is not a number, or a letter-->'(User input) is not a letter or a number'.

// Create prompt for user input.
let input = prompt('Please insert a upper or lower case letter, you may also enter in any number.');
 
// if and else statements creating conditions that allow to differentiate the difference between Numbers, UpperCaseletters and LowerCaseLetters.
// for this first if statement I have used regular expressions. 
if ( (/[a-zA-Z0-9]/).test(input)){

  if (input == Number.parseFloat(input)){        
    console.log(input + ' is a number.');
  }
  else if (input == input.toLocaleUpperCase()){
    console.log(input + ' is a upper case letter.');
  }
  else if (input == input.toLocaleLowerCase()){
    console.log(input + ' is a lower case letter');
  }
}
else {
  console.log(input + ' is not a number or a letter.');
};

// Resourses I used:
// One on One mentorship from Pieter :)
// For regular regular expressions: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// For understanding UpperCase and LowerCase: https://www.w3schools.com/jsref/jsref_touppercase.asp 
// For understanding how to convert strings into numbers: https://www.w3schools.com/js/js_numbers.aspw2ww
