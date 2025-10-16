🔥 Callback Hell kya hota hai

Jab hum bohot saare callbacks ek ke andar ek likhte hain, tab code bohot messy aur samajhne mein mushkil ho jaata hai.
Isko hi kehte hain callback hell ya pyramid of doom.

⚠️ Example:
getData(function(a){
  processData(a, function(b){
    saveData(b, function(c){
      notifyUser(c, function(d){
        console.log("Sab ho gaya!");
      });
    });
  });
});


😣 Problem kya hoti hai:

Code bohot nested ho jaata hai.

Samajhna aur debug karna mushkil.

Flow confuse kar deta hai.

✅ Callback Hell se bachne ke tarike

Modern JavaScript mein do best solutions hain 👇

Promises

getData()
  .then(processData)
  .then(saveData)
  .then(notifyUser)
  .catch(handleError);


Async / Await

async function handleData() {
  try {
    const a = await getData();
    const b = await processData(a);
    const c = await saveData(b);
    await notifyUser(c);
    console.log("Sab ho gaya!");
  } catch (err) {
    console.error(err);
  }
}

handleData();
