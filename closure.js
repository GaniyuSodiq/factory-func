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

function createGreeting(greeting = "") {
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
function createGame(name) {
    let score = 0;
    return function win() {
        score++
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



// ⭐⭐⭐ CLOSURE EXPLAINED IN ANOTHER WAY ⭐⭐⭐

// CLOSURE is a function with preserved data.
// gives you access to an outer function scope from an inner function
// BENEFITS OF CLOSUE:
// State of variables in outer scope are 'saved'
// Variables in outer scopre are considered 'private'

// as an example, lets pretent we are playing a game.

// global varaibale
// let points = 0;

// function stored in a variable called 'score'
// let score = function(){

//     return points += 1
// }

// so increament our points, we just need to invoke score
// console.log(score()) // 1
// console.log(score()) // 2
// console.log(score()) // 3

// but there is a problem with this way. Since 'points' is a global variable, 
// someobody writing malicious code can actually change it.

// lest say somebody is cheating and they give themselve 100 points
// points += 100
// console.log(score()) // 104


// one way we can prevent this is to place our points variable with the function
// so that 'points' will be a local variable and not a global variable
// let score = function(){
//     let points = 0;
//     return points += 1
// }
// so 'points' is now effectively private and you can access it from outside the function

// console.log(score()) // 1
// console.log(score()) // 1
// console.log(score()) // 1

// Now we have another problem, the value stored within 'points' is not being saved
// everyting we invoke score, we are effectly reseting our points to zero
// then increamenting it so our output remains 1 everytime.
// so how can we solve this? use Closure


// One we we can save the data stored within a unction is to create a CLOSURE
// remember from our definition: closure is a function with preserved data
// here is how we can use closure in our points and score example

// we will retun an inner anonymous function
// that does the increament and return points
let score = function () {
    let points = 0;
    return function () {
        points += 1
        return points
    }

}(); 
// we can invoke our score function immediately by adding () after its closing declaration curly brace here
// not only is our value saved within our variable
// also we cannot access points outside our function
// bcs it is effectively 'private'. this adds a layer of security 

// KEY POINT TO REMEMBER
// THINGS ON THE INSIDE USUSLLAY HAVE ACCESS TO THINGS ON THE OUTSIDE
// ANYTHING IN THE CURLY BRACES IN OUR OUTER FUNCT IS CONSIDERED LEXECAL SCOPE

console.log(score()) // 1
console.log(score()) // 2
console.log(score()) // 3

// so calling outer function immediately gives us 
// score = function () {
//     points += 1
//     return points
// }
// with saved 'let points = 0;' in the outer function we called immediately
// so invoking score in the console logs just keeps increamenting and returning points

