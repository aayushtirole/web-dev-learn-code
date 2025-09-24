 let day = 3;

switch(day) {
  case 1:
    console.log("Monday");   // agar day == 1
    break;                   // break zaroori hai warna niche ke cases bhi run ho jayenge

  case 2:
    console.log("Tuesday");  // agar day == 2
    break;

  case 3:
    console.log("Wednesday"); // agar day == 3
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day"); // agar koi bhi match nahi hua
}
