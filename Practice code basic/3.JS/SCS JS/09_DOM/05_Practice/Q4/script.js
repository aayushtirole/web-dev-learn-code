//Create a new image element with a placeholder source and add it at the top of a div 

let img = document.createElement("img");
img.setAttribute("src","https://tse2.mm.bing.net/th/id/OIP.CkCHW8oC6ryrP4sZR3pd6AHaEq?pid=Api&P=0&h=180");

document.querySelector("div").prepend(img);