//Select all <li> elements and print their text using a loop 

let lis = document.querySelectorAll("li");

for (let i=0; i <lis.length; i++){
    console.log(lis[i].textContent);
}
