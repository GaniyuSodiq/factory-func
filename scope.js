// // all are global scope as they are now but
// const first = 'wes'; // not attached to window obl ie window.first = undefined
// let second = 'bos'; // not attached to window obl ie window.second = undefined
// var age = 100; // attached to window obl ie window.age = 100

function sayHi(){
    console.log('Say Hi')
}
// sayHi() // Say Hi
// window.sayHi() // Say Hi
// // anything that is in the global scope is attached to the 
// // window object with the exception of const and let variables.

const age = 100;

function go() {
  const age = 200;
  const hair = 'blonde';
  console.log(age);
  console.log(hair);
}
// In the example above 👆, if we wanted to access the age = 100; from the go() function, 
// there is no way to do that because the variable has been shadowed (meaning it has been over-written).
// A tip is that if you ever have a variable inside of a function that is very similar to a...
// variable outside of a function, name the variable inside of the function more specifically... 
// so you have access to both.
// In this case, inside of the function you could declare a variable like const myAge = 200; 
// instead of just calling it age.

for (var i = 0; i < 10; i++) {
   console.log(i);
}

// That will log 0 - 9 as shown below 
// If you type i in the console, it will return 10.
// We have this random variable that is out floating called i, 
// which should have been contained within the for loops but because it's a var, it has leaked outside.
// By simply making it a let variable, 
// that random i variable will no longer be floating because it will be scoped to the curly brackets.
// Block scoping is one of the reasons people say use const by default, 
// let when you want to re-assign it and don't use var unless there is a specific use case for it.