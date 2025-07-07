const Formatter = (function () {
    const log = (message) => {
        console.log(`[${Date.now()}] Logger : ${message}`)
    }
})()

// const Formatter = (function() {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// })();


// Formatter.log("Hello"); // Uncaught TypeError: Cannot read properties of undefined (reading 'log')

