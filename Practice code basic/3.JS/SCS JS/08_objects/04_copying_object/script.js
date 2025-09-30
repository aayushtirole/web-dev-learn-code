// coping object : Spread,Object.assign,deep clone 


let person = {
    name: "Aayush",
    address: {
        city: "Indore"
    }
};


//  1) Shallow Copy → Spread Operator (`...`)


let copy1 = { ...person };   // copy bana diya

copy1.address.city = "Bhopal";   // nested object change

console.log(person.address.city);  // Output: Bhopal ❌ (original bhi change ho gaya)


// 2) → Object.assign()
// -> Ye bhi shallow copy banata hai, bilkul spread operator ki tarah.
// -> Syntax: Object.assign(target, ...sources)
// -> Yahan hum ek empty object `{}` ko target bana rahe hain jisme `person` se properties copy kar rahe hain.

let copy2 = Object.assign({}, person);

copy2.address.city = "Delhi";

console.log(person.address.city);  // Output: Delhi ❌ (original firse change ho gaya)




// 3) Deep Copy /Deep clone 


// Maan lo original object hai:
let obj = {
  name: "Aayush",
  address: { city: "Indore" }
};

// 1) JSON.stringify(obj)
// -> Pure JS object ko ek JSON string me convert karta hai.
// -> Reason: String me convert karke hum memory reference tod dete hain.
// -> Is step me sirf "serializable" data rehta hai (number, string, boolean, null, arrays, plain objects).
//    NOTE: functions, undefined, Symbol, Date (string ban jata hai), Map/Set (drop ho jate) — ye lose ho sakte hain.
const jsonString = JSON.stringify(obj);
// Example: jsonString === '{"name":"Aayush","address":{"city":"Indore"}}'

// 2) JSON.parse(jsonString)
// -> JSON string ko wapas NEW JS object me convert karta hai.
// -> Reason: Ab naya object ban gaya jiski apni memory/reference hai (original se link nahi).
let deepCopy = JSON.parse(jsonString);

// 3) deepCopy.address.city = "Goa";
// -> Ab hum copied object ke nested path ko change kar rahe hain.
// -> Kyun? Deep copy ka test: agar nested change se original par asar na pade to deep copy sahi hai.
deepCopy.address.city = "Goa";

// 4) Console check: copied vs original
console.log(deepCopy.address.city);  // "Goa"  (copied me change dikh raha hai)
console.log(obj.address.city);       // "Indore" (original safe hai, change nahi hua)

// ✅ Conclusion:
// JSON method ne "deep copy" banayi — nested object (address) bhi naya ban gaya.
// Isliye deepCopy me change karne se obj par koi effect nahi pada.
