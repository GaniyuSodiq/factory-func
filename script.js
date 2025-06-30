
// WE CAN HAVE A CONSTRUCTOR JUST AS THIS
function Person(name, age){
    this.name = name
    this.age = age
}

// WE CAN GIVE THE CONSTRUCTOR A PROTOTYPE
Person.prototype.sayName = function(){
    console.log(this.name)
}

// WE CAN USE THE CONSTRUCTOR
const jeff = new Person("Jeff", 33)

// AND CALL THE CONSTRUCTOR METHOD TOO
jeff.sayName() // Jeff


// ⭐ FACTORY FUNCTION

const personFactory = (name, age)=>{ // ARROW FUNCTION
    const sayName = ()=>{console.log("Hello")}
    return {name, age, sayName} // RETURNS AN OBJ WITH THESE PROPERTIES (KEYS AND VALUES)
    // RETURN HERE IS A SHORTHAND FOR 
    // return {name: name, age: age, sayName: sayName} THIS IS ECMA 2015 STANDARD
    // if u hv a var dat has same name as obj prop then u can condense them to just a word
    // return {name, age, sayName}
}


// INSTEAD OF USING 'new' TO CREATE A NEW OBJ, WE JUST CALL THE FUNCTION (HERE; FACTORY FUNCTION)
const sodiq = personFactory("Sodiq", 27)

sodiq.sayName() // Hello

console.log(sodiq.age) // 27


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
console.log({name, color, number, food})  // {name: 'Maynard', color: 'red', number: 13, food: 'rice'}
// NOW WE SEE KEY VALUE PAIRS ALL WITHIN OUR CURLY BRASES WITHIN OUR OBJ AND ALL VERY MEANINGFUL
