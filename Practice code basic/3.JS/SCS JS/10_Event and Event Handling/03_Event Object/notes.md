1. Event Object:
Jab bhi koi event (like click, keypress, submit) trigger hota hai, browser ek event object automatically banata hai.
Ye object us event ke baare me puri information rakhta hai — jaise kis element par event hua, kis type ka event tha, mouse ka position, etc.

2. event.target:
Ye batata hai kis element par event actually trigger hua.
Example: agar tumne button par click kiya, to event.target wo button hoga.

3. event.type:
Ye batata hai kis type ka event trigger hua — jaise "click", "submit", "keydown", etc.

4. event.preventDefault():
Agar koi element ka default behavior hota hai (like form submit hone par page reload hona), to preventDefault() use karke tum wo behavior rok sakte ho.