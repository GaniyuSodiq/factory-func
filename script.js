
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
