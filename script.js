
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

// 2 another example

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


// 3 another example of closure


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
            console.log(enemy.getName() + "has damaged " + name)
        }
        if (enemy.getLevel() < level) {
            enemy.damage(1);
            console.log(name + "has damaged " + enemy.getName())
        }
    }
}