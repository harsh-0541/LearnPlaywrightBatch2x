// IIFE (Immediately Invoked Function Expression) invoke right now without calling it.

(function () {
    console.log("I am IIFE");
})();

(function () {
    // playwright code here
})();


(() => {
    console.log("Arrow with IIFE");
})();
