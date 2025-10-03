//Dynamic Dom Manupulation

//1. createElement(tagname) :- It is used to create a new HTML element with the specified tag name.
//appendChild() :- It is used to add a new child element to the end of the list of children of a specified parent element.

//prepend() :- It is used to insert a set of Node objects or DOMString objects before the first child of the Parent element.

//append/prepend karo jaha bhi elment chahiye wah 

let h1 =document.createElement("h1");
h1.textContent ="This is created using createElement() method";

document.querySelector("body").append(h1);

 //prepend → kisi element ke start (pehle child) me content add karta hai.
 //append → kisi element ke end (last child) me content add karta hai. 

//remove() :- It is used to remove the element from the DOM.
//removeChild() :- It is used to remove a specified child element from the DOM and returns the removed element.

 let h1remove = document.querySelector("h1");
 h1remove.remove(); //removes the h1 element