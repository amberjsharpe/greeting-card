const CardMaker = {
    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    }
  }

// Add inside message
CardMaker.makeInnerMessage = function(string) {
    return `<h2>${string}</h2>`
} 
 
// Add two objects (kinds of greeting cards)

let ValentineCard = Object.create(CardMaker);

let BirthdayCard = Object.create(CardMaker);


// Make additional objects (more specific card types) that inherit 
// BirthdayCard object

let adultBirthdayCard = Object.create(BirthdayCard);
let kidBirthdayCard = Object.create(BirthdayCard);

// (Front, Inner) to the console
console.log(CardMaker.makeFrontMessage("Happy Birthday!"));
console.log(CardMaker.makeInnerMessage("You are great!"));

console.log(ValentineCard.makeFrontMessage("I love you!"));
console.log(ValentineCard.makeInnerMessage("XOXO"));

console.log(adultBirthdayCard.makeFrontMessage("You are old"));
console.log(adultBirthdayCard.makeInnerMessage("JK, not really"));

// Output the HTML strings with classes to the DOM that you can style with CSS
document.getElementById("front").innerHTML = CardMaker.makeFrontMessage("Happy Birthday!");
document.getElementById("inner").innerHTML = CardMaker.makeInnerMessage("Yay!");















