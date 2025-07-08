// 🪜MODULA JAVASCRIPT - allows you to break your code into logical components
// Each component that do one thing really well and work together with other components

// 📃imagine having a basic todo app
// tou have a button that adds something to the list
// and another button that removes item from the list
// HOW CAN U TURN THIS INTO MODULA JS CODE

// MODULA JS RULES for each module (component)
// - self contained module
// - - everything to do with my module is in my module
// - - no global variables - global variables slow down perfomance
// - - if a module manages more than one thing it should be split up
// - separation of concerns
// - DRY code - Dont Repeat Yourself
// - efficient DOM usage
// - - very few getElementBy 
// - no memory leaks
// - - all events can be unbound

// 🪜WHAT DOES AN ACTUAL MODULA PROGRAMMING LOOK LIKE
// u will use a pattern in our case here Object literal pattern (mostly used pattern)
// see as the whole namimg and getting is living inside one object

const myModule = {
    name: "Sodiq",
    age: 28,
    sayName : function(){
        alert(this.name)
    },
    setName : function(newName){
        this.name = newName
    }
}
myModule.setName("Olaniyi")
myModule.sayName()

// the methods that u expose to other modules eg here .setName() .sayName()...
// (the things that let other modules do action) are called API
// so our API have 2 methods sayName and setName

// with object literal pattern, everything is hackable
myModule.name = "Alao Olaniyi"
myModule.sayName() // Alao Olaniyi
// this is not how to interact with module. 
// you should use methods that are provided for you
// in revealing module pattern we can hide away some of the  


