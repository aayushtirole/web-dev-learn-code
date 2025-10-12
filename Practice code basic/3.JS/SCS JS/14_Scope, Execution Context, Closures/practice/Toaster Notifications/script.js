function createToaster(config) {
  // Closure banaya gaya hai jisme config hamesha accessible rahega
  return function (str) {

    // Toast element create karna
    let div = document.createElement("div");
    div.textContent = str;

    // Theme ke hisaab se class lagana
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

    // Toast ko parent element ke andar daalna
    document.querySelector(".parent").appendChild(div);

    // Position ke hisaab se parent ki class update karna
    if (config.positionX !== "left" || config.positionY !== "top") {
      document.querySelector(".parent").className +=
        ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    // Duration ke baad toast ko remove karna
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

// Config set karke toaster function banana
let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});

// Alag-alag time par messages show karna
toaster("Download Done");

setTimeout(() => {
  toaster("Aayush accepted your request");
}, 2000);

setTimeout(() => {
  toaster("Rupesh send you a message");
}, 1500);
