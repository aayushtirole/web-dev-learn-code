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