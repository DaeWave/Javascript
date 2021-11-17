//Cypher 
//Create a program to that of a ceaser cypher, where the letters choosen must be 15 letters ahead of the original letter choosen.

//Create input for user to enter word, the user input must also be stored.
let input = prompt('Please enter in a word.')

function cypher(input) {
  //Creating empty var so that we can solve this loop later.
  var encode = "";
  //The way this cypher will work is with the ASCII numbers used with the charCodeAt() function.
  //This way we can get capital and lower case letters.
  //Creating a loop to loop through the array and create hidden message.
  for (var i = 0; i < input.length; i++) {
    var asciiNum = input[i].charCodeAt();  //Using charCodeAt to find the ASCII number
    //if and else statements to create conditions.
    if (asciiNum >= 64 && asciiNum <= 75 || asciiNum >= 97 && asciiNum <= 107) { //Using the ASCII for Cap and lower case letters.
      encode += String.fromCharCode(asciiNum + 15); 
      //Returning a string for unicode values, crutial that we use 15 to count forwards until said limit.
    } else if (asciiNum >= 76 && asciiNum <= 90 || asciiNum >= 108 && asciiNum <= 122) {
      encode += String.fromCharCode(asciiNum - 11); 
      //Returning a string for unicode values, curtial to count 11 backwards as it doesnt loop through and or otherwise it will clock over and you wont get the right ASCII value. 
    } else {
      encode += str[i];  //So that spaces and punctuation marks remain the same, it only inclueds all the ASCII values metioned in the conditions.
    }
  }
  console.log(encode); //loging it to the browser console.
  return encode; //Returing it for the alert for the user to view.
}

//Log it to the console and give the user an alert of the encoded word/sentence.
alert (cypher(input));

//Resourses:
//http://www.asciitable.com/

//Done!