//Guest List with added functionality
//If user adds a 11th name, the user will then have to replace one of the 10 names.

//Creating variables to help store data for the loop, along with a sort() to sort the array of names itself
let arr = [];
arr.sort();

//Creating a for loop to run through all the prompts asking a user for all the names and checking the array 
//for what names there are and how we will be able to replace a name later.
for(var i = 0; i < 10; i++){
  arr.push(prompt('Enter Name '  + (i+1)  + ' Please!')); //Push to add a new name until set limit.
  var counter = [i + 1]; //Counter will run until set limit is complete by keeping count of the loop. 
}

//Running if and else satements to fillter through some of the conditions for when the user would like to add names
//and replace one.
if (arr.length === 10 || arr === null) {
  let choice = prompt ('You have already have 10 people to your guest list. Would you like to replace someone on the list with this person? y/n').toLowerCase(); //User chooses wheather they want to replace a person on the guestlist or not.
  if (choice === 'y') {
    let replace = prompt ('Choose a name you are going to replace: ' + arr.join(', ')).toLowerCase(); //The user then chooses a current name on the guestlist that they want to replace.
    if (arr.includes(replace)) {
      let newName = prompt ('With whom would you like to replace?').toLowerCase(); //The user then gets to choose a new name they want to add to the guestlist.
      arr.splice(arr.indexOf(replace), 1, newName) //Tucking giving splice index, the how many values you want to replace in the array (1), and replacing it with the new name. Mentor Dayles Help right here!
      alert('Now Current Guest List: ' + arr.join(', '));  //The program then shows new the user the current Guest List.
    } else {
      alert ('Sorry this name might not be on the guestlist. Please try agian.');
      alert('Now Current Guest List: ' + arr.join(', '));
    }
  } else {
    alert ('Thank you. Please refresh browser to input new list.');
    alert('Now Current Guest List: ' + arr.join(', '));
  }
} else {
  alert ('Thank you for trying, See you soon!');
}

//Done!