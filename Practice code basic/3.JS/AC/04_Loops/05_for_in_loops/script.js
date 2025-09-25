// for of loops use in object and  array main mostly use hote hain 

let student = {
    name: "aayush",
    age: 20,
    isPass: true
}

for (let key in student){
    console.log(key, ":", student[key]);
}