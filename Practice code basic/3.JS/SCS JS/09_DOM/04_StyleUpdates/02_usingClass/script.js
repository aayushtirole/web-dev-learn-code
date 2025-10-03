//classList :- It is used to access the list of classes of an element as a DOMTokenList object. It provides methods to add, remove, toggle, and check for the presence of classes on an element.
//methods
//add() :- It is used to add one or more class names to the element's class list.
//remove() :- It is used to remove one or more class names from the element's class list.
//toggle() :- It is used to toggle a class name in the element's class list. If the class is present, it removes it; if not, it adds it.
//contains() :- It is used to check if a specific class name is present in the element's class list. It returns true if the class is present, otherwise false.
//replace() :- It is used to replace an existing class name with a new class name in the element's class list.
//forEach() :- It is used to iterate over the class names in the element's class list and execute a provided function for each class name.


let h1 = document.querySelector("h1");
h1.classList.add("hulu");