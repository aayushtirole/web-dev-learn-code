// Hoisting impact per type

// Hoisting -> ek variable ko jab "js" main banaate hain toh wo variable do hissa main toot jaata hain and uska declare part upar chala jaata hain and uska initialize part neeche reh jaata hain.

// Hoisting ka impact variable ke type per depend karta hain.


var a = 12;

// do hisso main yese tutati hain -

var a = undefined; // declare part (hoisted)
a = 12; // initialize part (not hoisted)