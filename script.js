
// WE CAN HAVE A CONSTRUCTOR JUST AS THIS
function Person(name, age) {
    this.name = name
    this.age = age
}

// WE CAN GIVE THE CONSTRUCTOR A PROTOTYPE
Person.prototype.sayName = function () {
    console.log(this.name)
}

// WE CAN USE THE CONSTRUCTOR
const jeff = new Person("Jeff", 33)

// AND CALL THE CONSTRUCTOR METHOD TOO
jeff.sayName() // Jeff


// ⭐ FACTORY FUNCTION

const personFactory = (name, age) => { // ARROW FUNCTION
    const sayName = () => { console.log("Hello") }
    return { name, age, sayName } // RETURNS AN OBJ WITH THESE PROPERTIES (KEYS AND VALUES)
    // RETURN HERE IS A SHORTHAND FOR 
    // return {name: name, age: age, sayName: sayName} THIS IS ECMA 2015 STANDARD
    // if u hv a var dat has same name as obj prop then u can condense them to just a word
    // return {name, age, sayName}
}


// INSTEAD OF USING 'new' TO CREATE A NEW OBJ, WE JUST CALL THE FUNCTION (HERE; FACTORY FUNCTION)
const sodiq = personFactory("Sodiq", 27)

sodiq.sayName() // Hello

console.log(sodiq.age) // 27

// ⭐ HOW FACTORY FUNCTION RETURN STATMENT WORKS

// LEST SAY WE ARE TASKED TO LOG ALL THESE VALUES TO THE CONSOLE
const name = "Maynard"
const color = "red"
const number = 13
const food = "rice"

// we can console.log each one
console.log(name)
console.log(color)
console.log(number)
console.log(food)
// BUT THIS IS REPETITIVE AND SHOWS NO CLEAR CONNECTION BTW THE VALUES


// we can have all values in a single console log separated by comma
console.log(name, color, number, food)
// NOW WE LOG ALL VALUES ON THE SAME LINE BT IT IS STILL ABIT DISOGANIZED


// what if we wrap all the values in curly brases like in our factory func return statement
console.log({ name, color, number, food })  // {name: 'Maynard', color: 'red', number: 13, food: 'rice'}
// NOW WE SEE KEY VALUE PAIRS ALL WITHIN OUR CURLY BRASES WITHIN OUR OBJ AND ALL VERY MEANINGFUL


// ⭐ CLOSURES

// scope determines where variables and functions can be used in your code

let a = 17  // GLOBAL SCOPE... WE CAN ACCESS THIS ANYWHERE IN OUR CODE

const func = x => {
    a = x  // LOCAL SCOPE AND WE CAN ONLY ACCESS IT OUTSIDE IF WE RETURN THE VALUE
    return a
}

func(99)
console.log(a) // 99

// ⭐2 another example

// WE DEFINE 2 OTHER FUNCTION IN OUR FACTORY FUNCTION
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase() // FUNC 1
    const printString = () => console.log(`-----${capitalizeString()}------`) // FUNC 2
    return { printString }
}

// WE ARE CREATING AN OBJ BY CALLING OUR FACTORY FUNCTIONAND WE GAVE IT taco AS PARAMETER
const taco = FactoryFunction("taco")
console.log(taco) // {printString: () => console.log(`-----${capitalizeString()}------`)}
// printString() // undefined ❌
// capitalizeString() // undefined ❌
// taco.capitalizeString() // undefined ❌
taco.printString() // bcs we returned printString ✅
// this is closure: Closure means function retain their scope even if they are passed around
// ... or called outside of that scope
// printString has access to everything inside of our function FactoryFunction
// even if thry get called outside of that function


// ⭐3 another example of closure


const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
}

const counter = counterCreator()
// the function (counter) is closure 
// bcs it has access to the variables in the counterCreator function
// from the return statement. Otherwise we cant have access to the variables in the counterCreator
counter() // 0
counter() // 1
counter() // 2
counter() // 3
// WHAT IS CLOSURE
// So in the concept of Factory Functions...
// ... closures allow us to create private variables and functions
// this allow us to make separate concerns which make our code cleaner to read
// we only need to export the function that the rest of the program is going to use
// in our 2 example above
// capitalizeString() is a private function
// printString() is a publick function be we exported it i.e return

// the concept of clusure makes:
// supporting finction inaccessssible which then
// makes the code easiear to refactor and test
// and easier to understand how to use obj in your code

// ⭐4 another example

const Player = (name, level) => {
    let health = level * 2;
    const getName = () => name;
    const getLevel = () => level;
    const die = () => {
        // Oh no
    }
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die()
        }
    }
    const attack = enemy => {
        if (enemy.getLevel() > level) {
            damage(1);
            console.log(enemy.getName() + " has damaged " + name)
        }
        if (enemy.getLevel() < level) {
            enemy.damage(1);
            console.log(name + " has damaged " + enemy.getName())
        }
    }
    return { attack, damage, getName, getLevel }
}

const jimmie = Player("Jim", 10)
const badGuy = Player("Jeff", 5)

jimmie.attack(badGuy)
// health++ // this is not exported publicly from the person function
// jimmy.die() // this is not exported publicly from the person function

// Creating and setting obj this way makes them easiear to use
// bcs we have encapsulated it and we can only access it by exporting a function

// ⭐5 another example
// in constructor, there is the concept of prototypial inheritance
// meaning giving our obj access to the methods and properties of other objects

// the cool thing here is that...
// ...we can be selective in what function we include in our new obj using Object.assign()
// we can select some of the obj or all of them
const Persona = name => {
    const sayName = () => console.log(`my name is ${name}`)
    return { sayName }
}

const Nerd = name => {
    const sayName = Persona(name)
    const doSomethingNerdy = () => console.log(`${name} doing something nerdy`)
    return { sayName, doSomethingNerdy }
}

const Jeffo = Nerd("Jeffo")

// Jeffo.sayName() NOT A FUNCTION
Jeffo.sayName.sayName()
Jeffo.doSomethingNerdy()

const Nerd2 = name => {
    const prototype = Persona(name)
    const doSomethingNerdy = () => console.log(`${name} doing something Nerdy`)
    return Object.assign({}, prototype, { doSomethingNerdy })
    // Object.assign() will copy all the properties ie prototype, {doSomethingNerdy}
    // ... from one or more source objects to a target Obj {}
    // ... and return the target obj
    // {doSomethingNerdy} here is for us to have {doSomethingNerdy: doSomethingNerdy} returned
    // instead of returning doSomethingNerdy
}

const stevo = Nerd2("Stevo")
stevo.doSomethingNerdy()
stevo.sayName()


// ⭐6 another example MODULES 
// similar to factory function

// Module's concept is same as factory function
//bt instead of creating factory function to use over and over...
// ... the module pattern will wrap the factory function in an IIFE
// IIFE: Immediately Invoked Function Expression
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div }
})();
// const calculator = ()()  
// the second bracket means the function in the first bracket is immediately called
// the function in our IIFE is a simple factory function
// we can assign the obj to a variable and bcs we only need one variable here, calculator
// the one variable is given the return of everuthing in our factory function: return { add, sub, mul, div }
// the private functions add(), sub(), mul(), div()
// are only available in this module
// we use calculator. to pick the one we need at any point in our program

calculator.add(2, 3)
calculator.mul(14, 5534)


// ⭐ DECONSTRUCTURING
let y, z, rest;

[y, z] = [10, 20];

console.log(y);
// Expected output: 10

console.log(z);
// Expected output: 20

[y, z, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]


// The destructuring uses similar syntax but uses it on the left-hand side of the assignment instead. 
// It performs the reverse operation of an array declaration, 
// by declaring each element in the collection as a separate variable.
// FOR ARRAY
// const obj = { a, b, c };
// const { a, b, c } = obj;
// // Equivalent to:
// // const a = obj.a, b = obj.b, c = obj.c;

// const obj = { prop1: x, prop2: y, prop3: z };
// const { prop1: x, prop2: y, prop3: z } = obj;
// // Equivalent to:
// // const x = obj.prop1, y = obj.prop2, z = obj.prop3;
