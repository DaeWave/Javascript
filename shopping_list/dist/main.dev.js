"use strict";

//Create a Shopping List
var array = ['IceCream', ' Sugar', ' Mince', ' Chicken']; //Creating constants to select from the document for functions.

var addItemInput = document.querySelector('input');
var addItemBtn = document.querySelector('#addBtn');
var list = document.querySelector('#itemList'); //Load all event listeners and fuctions

loadEventListerners(); // Function to load all event listeners and functions.

function loadEventListerners() {
  // //Array function
  arrItemList(array); //Add a Grocery Item

  addItemBtn.addEventListener('click', addGroceryItem); //Remove a Grocery Item

  list.addEventListener('click', removeItems); //Enter Key Up

  addItemInput.addEventListener('keyup', enterKey);
}

function addGroceryItem(e) {
  if (addItemInput.value === '') {
    alert('Please add a Item to your Grocery List.');
  } else {
    //Creating new li to add items to list
    var newLi = document.createElement('li');
    newLi.className = 'groceryItem'; //Adding the value from the user input box.

    var groceryItem = document.createTextNode(addItemInput.value);
    newLi.appendChild(groceryItem); //Span element called 'closed' to delete a item off the list

    var close = document.createElement('span');
    close.className = "close";
    close.innerHTML = '<i class="fa fa-close"></i>';
    newLi.appendChild(close); //Appending the new list to the list in the dom and making sure it clears up after input.

    list.appendChild(newLi);
    addItemInput.value = '';
  }
} //Creating a function which will display each item in the array as list elements in the <ul> tag.


function arrItemList(array) {
  //Using a loop so that it can run through the array.
  for (i = 0; i < array.length; i++) {
    //Creating a li element in the <ul> tag to display array.
    var newLi2 = document.createElement('li');
    newLi2.className = 'groceryItem'; //Joining the arrayto the <li>. 

    newLi2.append(array[i]);
    list.append(newLi2); //Joing the <li> to the <ul>.

    var close = document.createElement('span');
    close.className = "close";
    close.innerHTML = '<i class="fa fa-close"></i>';
    newLi2.appendChild(close);
  }

  console.log(list);
} //Remove Item from Grocery List.


function removeItems(e) {
  if (e.target.parentElement.classList.contains('close')) {
    if (confirm('Are You Sure')) {
      e.target.parentElement.parentElement.remove();
    }
  }
} //Function for Enter Key


function enterKey(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addGroceryItem(e);
  }
} //Resourses:
//https://www.w3schools.com/w3css/w3css_icons.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
//https://www.geeksforgeeks.org/how-to-toggle-an-element-class-in-javascript/
//Done!