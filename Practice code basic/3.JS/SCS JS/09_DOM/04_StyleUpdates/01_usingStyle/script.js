// Js se css badlana 
//single style change (.style.propertyName=value)
let h1 = document.querySelector("h1");
h1.style.color="red";
h1.style.backgroundColor="black";
h1.style.textAlign="center";
h1.style.padding="20px";
h1.style.borderRadius="10px";

//multiple style change
h1.style.cssText="color:blue; background-color:yellow; text-align:center; padding:20px; border-radius:10px";


//classList :- It is used to access the list of classes of an element as a DOMTokenList object. It provides methods to add, remove, toggle, and check for the presence of classes on an element.

//add() :- It is used to add one or more class names to the element's class list.
//remove() :- It is used to remove one or more class names from the element's class list.
//toggle() :- It is used to toggle a class name in the element's class list. If the class is present, it removes it; if not, it adds it.
//contains() :- It is used to check if a specific class name is present in the element's class list. It returns true if the class is present, otherwise false.
//replace() :- It is used to replace an existing class name with a new class name in the element's class list.
//forEach() :- It is used to iterate over the class names in the element's class list and execute a provided function for each class name.
