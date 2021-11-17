//Translator 
//Creating a translator from English to French.

//First thing is to create a map and then input English words as the Key and the french words ass the Value.
let myMap = new Map();
myMap.set('hello', 'Bonjour');
myMap.set('goodbye', 'Au Revoir');
myMap.set('yes', 'Oui');
myMap.set('no', 'Non');
myMap.set('thank you', 'Merci');
myMap.set('man', 'Homme');
myMap.set('woman', 'Femme');
myMap.set('love', 'Amour');
myMap.set('french', 'Francias');
myMap.set('world', 'Monde');

//Next is to create a loop to run through the map and (acording to the users choice of words), match the correct Key and Value.
for (let [key, value] of myMap) {
  let input = prompt('Please enter in one of the following words and it shall be tanslated into French: Hello, Goodbye, Yes, No, Thank you, Man, Woman, Love, French, World.').toLowerCase();

  alert (`The English word ${input} is ${myMap.get(input)} in French.`);
  
  continue;
};

//Resourses:
//https://www.rosettastone.com/languages/french-words/
//Done