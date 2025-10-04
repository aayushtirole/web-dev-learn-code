//DOM : Document Object Model
//Dom is a programming interface for HTML and XML documents.
//DOM manupulation is a way to change the document structure, style, and content.
//DOM is a tree-like structure where each node is an object representing a part of the document.
//DOM can be manupulated using JavaScript to create dynamic and interactive web pages.


// //selecting elements
// //1.getElementById()
// //id ki help se element ko select krta hai
// let element=document.getElementById('click');
// console.log(element);

// //2.getElementsByClassName()
// //class ki help se element ko select krta hai
// let elements=document.getElementsByClassName('container');
// console.log(elements);

// //3.getElementsByTagName()
// //tag ki help se element ko select krta hai
// let elementsByTag=document.getElementsByTagName('div');
// console.log(elementsByTag);

// //4.querySelector()
// //css selector ki help se element ko select krta hai
// let elementByQuery=document.querySelector('.container');
// console.log(elementByQuery);

// //5.querySelectorAll()
// //css selector ki help se sare elements ko select krta hai
// let elementsByQueryAll=document.querySelectorAll('.container');
// console.log(elementsByQueryAll);

let h1 = document.querySelector("h1");
console.dir(h1);

//Manupulating 
//innerHTML ka means hain html ke andar ka value change kr skte hain 
h1.innerHTML = "<i>hey</i>"; //italic main change kr diya 


