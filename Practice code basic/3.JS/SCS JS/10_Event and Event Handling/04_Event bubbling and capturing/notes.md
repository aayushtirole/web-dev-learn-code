Event Bubbling:

Jab event trigger hota hai (like click), toh sabse pehle innermost element par event trigger hota hai,
phir wo event parent elements tak bubble karta hai (upar ke elements tak jata hai).

In English:
Event bubbling means the event starts from the target element and bubbles up to its ancestors (parents, grandparents, etc.) in the DOM tree.

Event Capturing (Trickling):

Yeh bubbling ka opposite hota hai.
Event sabse pehle outermost element (parent) se start hota hai aur andar jaata hai target element tak.

In English:
Event capturing means the event travels from the root (outermost) element down to the target element.

🎯 Event Flow Summary:
1️⃣ Capturing phase (Top → Down)
2️⃣ Target phase
3️⃣ Bubbling phase (Bottom → Up)

-----------------------------------------------------------------------------------------

jab bhi apn click krte hain ya koe bhi event raise karte hain toh event flow do phases main chalta hain :

phase 1: event top level element se neeche ki tarf aayega 
phase 2: event raised element se parent ki traf jayega 

**  hamesha phase 1 hi pahle hota hain par vo by default off rhta hain, agar usse on kar dein to pahle phase 1 ka ans milega 