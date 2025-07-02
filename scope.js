// all are global scope as they are now but
const first = 'wes'; // not attached to window obl ie window.first = undefined
let second = 'bos'; // not attached to window obl ie window.second = undefined
var age = 100; // attached to window obl ie window.age = 100



function sayHi(){
    console.log('Say Hi')
}
sayHi() // Say Hi
window.sayHi() // Say Hi
// anything that is in the global scope is attached to the 
// window object with the exception of const and let variables.
