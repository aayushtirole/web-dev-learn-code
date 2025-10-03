//Attribute Manipulation
//1. setAttribute(attributename,value) :- It is used to set the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value.

let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1759352371478-6071563e058a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");




//2. getAttribute(attributename) :- It is used to get the value of an attribute on the specified element. If the attribute does not exist, it returns null.

let imgSrc = img.getAttribute("src");
console.log(imgSrc); //prints the src value of img element


//3. removeAttribute() :- It is used to remove the specified attribute from the element.

img.removeAttribute("alt");
console.log(img); //alt attribute is removed -> which is broken image text