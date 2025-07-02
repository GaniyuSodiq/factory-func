// A closure is the ability to access a parent level scope 
// from a child scope, even after the parent function has been terminated.
console.log("IT IS WORKING")

function outer() {
    const outerVar = 'I am outer var'
    function inner() {
        const innerVar = 'I am inner var'
        console.log(innerVar);
        console.log(outerVar);
    }
//     inner()
    return inner
 }

// outer()

const innerFn = outer()
innerFn()