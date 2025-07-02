// A closure is the ability to access a parent level scope 
// from a child scope, even after the parent function has been terminated.
// console.log("IT IS WORKING")

// function outer() {
//     const outerVar = 'I am outer var'
//     function inner() {
//         const innerVar = 'I am inner var'
//         console.log(innerVar);
//         console.log(outerVar);
//     }
// //     inner()
//     return inner
//  }

// // outer()

// const innerFn = outer()
// innerFn()

function createGreeting  (greeting = "") {
    const myGreet = greeting.toUpperCase()
    return function (name) {
        return `${myGreet} ${name}`
    }
}
// Since our inner scope references a variable that was created in our outer scope, 
// that is what is referred to as closure.
// Why did we do this in two separate functions?
// Because you can create functions that are based off whichever greeting you like.
const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi")
console.log(sayHello("Sodiq"))
// We still are able to access our outer variables inside of the outer function scope, 
// inside of our inner even after the createGreeting() function has been closed over. 
// That is the whole idea behind closures, it's been closed.


// PRIVATE VARIABLES
function createGame(name){
    let score = 0;
    return function win(){
        score ++
        return `${name} ${score}`
    }
}

const hockeyGame = createGame("Hockey")
console.log(hockeyGame()) // Hockey 1
console.log(hockeyGame()) // Hockey 2

const soccerGame = createGame('Soccer');
console.log(soccerGame()) // Soccer 1
console.log(soccerGame()) // Soccer 2

// Even though the score variable 👆 is the same variable name, 
// because we have created two separate win() functions by using the createGame() function, 
// they each have their own private variable score.
// Currently there is no way for us to access score.
// If you try to access it in the console, you will get an error

// Closures are the ability of a child function, or an inner function, 
// to access variables from a higher level scope even after the functions 
// have been called or closed or closed over.