//Create a Shopping List

//Array from previous task
const array = ['IceCream', ' Sugar', ' Mince', ' Chicken']

//Creating constants to select from the document for functions.
const addItemInput = document.querySelector('input');
const addItemBtn = document.querySelector('#addBtn');
const list = document.querySelector('#itemList');

//Load all event listeners and fuctions
loadEventListerners();

// Function to load all event listeners and functions.
function loadEventListerners() {
  //Array function
  arrItemList(array);
  //Remove a Grocery Item
  list.addEventListener('click', removeItems);
  //Checked class on event element 
  list.addEventListener('click', checked);
  //Enter Key Up
  addItemInput.addEventListener('keyup', enterKey);
}

function updateList() {
  if (addItemInput.value === '') {
    alert('Please add a Item to your Grocery List.');
  } else {
    //Creating new li to add items to list
    const newLi = document.createElement('li');
    newLi.className = 'groceryItem';
    //Adding the value from the user input box.
    const groceryItem = document.createTextNode(addItemInput.value);
    newLi.appendChild(groceryItem);
    //Span element called 'closed' to delete a item off the list
    const close = document.createElement('span');
    close.className = "close";
    close.innerHTML = '<i class="fa fa-close"></i>';
    newLi.appendChild(close);
    //Appending the new list to the list in the dom and making sure it clears up after input.
    list.appendChild(newLi);
    addItemInput.value = '';
  }
}

//Creating a function which will display each item in the array as list elements in the <ul> tag.
function arrItemList(array) {
  //Using a loop so that it can run through the array.
  for (i = 0; i < array.length; i++) {
    //Creating a li element in the <ul> tag to display array.
    let newLi2 = document.createElement('li');
    newLi2.className = 'groceryItem';
    //Joining the arrayto the <li>. 
    newLi2.append(array[i]);
    list.append(newLi2);
    //Joing the <li> to the <ul>.
    const close = document.createElement('span');
    close.className = "close";
    close.innerHTML = '<i class="fa fa-close"></i>';
    newLi2.appendChild(close);
  }
  console.log(list);
}

//Checked toggle class list 
function checked(e) {
  //Toggle checked class 
  if (e.target.classList.contains('groceryItem')) {
    e.target.classList.toggle('checked');
  }
}

//Remove Item from Grocery List.
function removeItems(e) {
  if (e.target.parentElement.classList.contains('close')) {
    if (confirm('Are You Sure')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Function for up Enter Key
function enterKey(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    updateList(e);
  }
}

//Resourses:
//https://www.w3schools.com/w3css/w3css_icons.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
//https://www.geeksforgeeks.org/how-to-toggle-an-element-class-in-javascript/

//Done!