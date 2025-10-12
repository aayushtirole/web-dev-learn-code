// Ek function banaya gaya hai jiska naam hai createToaster
// Ye ek config object leta hai (position, theme, duration etc.)
// Aur ek function return karta hai jo actual toast banata hai
function createToaster(config) {
  
  // Ye inner function hi closure hai — iske paas 'config' ka access hamesha rahega
  return function (str) {

    // Ek naya div element create kiya (ye ek toast box hoga)
    let div = document.createElement("div");

    // div ke andar message (jo parameter 'str' main aaya) set kar diya
    div.textContent = str;

    // div ko style dene ke liye className set ki — theme ke hisaab se color change hota hai
    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"  // agar theme dark hai to ye class
        : "bg-gray-100 text-black"  // warna ye class
    } px-6 py-3 rounded shadow-lg pointer-events-none`;

    // div ko HTML ke ek parent element (jiska class .parent hai) ke andar daal diya
    document.querySelector(".parent").appendChild(div);

    // Agar position default top-left nahi hai to, position classes add karo
    // Yaha ek galti thi: positionY likhne ke jagah config.positionY likhna chahiye
    if (config.positionX !== "left" || config.positionY !== "top") {
      document.querySelector(".parent").className +=
        ` ${
          config.positionX === "right" ? " right-5" : " left-5"
        } ${
          config.positionY === "bottom" ? " bottom-5" : " top-5"
        }`;
    }

    // SetTimeout se toast ko remove karne ka timer lagaya gaya hai
    // duration seconds ke baad div delete ho jayega
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

// Ab ek toaster object banaya jisme config diya gaya hai
let toaster = createToaster({
  positionX: "right",  // toast right side aayega
  positionY: "bottom", // bottom main show hoga
  theme: "light",      // light theme select ki
  duration: 3,         // 3 second tak toast visible rahega
});

// Ab alag-alag messages dikhaye ja rahe hain specific interval par

// Pehla toast message: 'Download Done'
toaster("Download Done");

// 2 second ke baad dusra toast show hoga
setTimeout(() => {
  toaster("Harsh accepted your request");
}, 2000);

// 1.5 second ke baad teesra toast show hoga
setTimeout(() => {
  toaster("Rupesh send you a message");
}, 1500);
