// // 🪜MODULA JAVASCRIPT - allows you to break your code into logical components
// // Each component that do one thing really well and work together with other components

// // 📃imagine having a basic todo app
// // tou have a button that adds something to the list
// // and another button that removes item from the list
// // HOW CAN U TURN THIS INTO MODULA JS CODE

// // MODULA JS RULES for each module (component)
// // - self contained module
// // - - everything to do with my module is in my module
// // - - no global variables - global variables slow down perfomance
// // - - if a module manages more than one thing it should be split up
// // - separation of concerns
// // - DRY code - Dont Repeat Yourself
// // - efficient DOM usage
// // - - very few getElementBy 
// // - no memory leaks
// // - - all events can be unbound

// // 🪜WHAT DOES AN ACTUAL MODULA PROGRAMMING LOOK LIKE
// // u will use a pattern in our case here Object literal pattern (mostly used pattern)
// // see as the whole namimg and getting is living inside one object

// const myModule = {
//     name: "Sodiq",
//     age: 28,
//     sayName : function(){
//         alert(this.name)
//     },
//     setName : function(newName){
//         this.name = newName
//     }
// }
// myModule.setName("Olaniyi")
// myModule.sayName()

// // the methods that u expose to other modules eg here .setName() .sayName()...
// // (the things that let other modules do action) are called API
// // so our API have 2 methods sayName and setName

// // with object literal pattern, everything is hackable
// myModule.name = "Alao Olaniyi"
// myModule.sayName() // Alao Olaniyi
// // this is not how to interact with module. 
// // you should use methods that are provided for you
// // in revealing module pattern we can hide away some of the  

// trying to implement the jquery code in vanilla js
// THE PLAN IS TO CREATE A TODO LIST OF NAMES
// THE NAME IS PUT INTO ARRAY
// THEN RENDER FROM THE ARRAY
// DELETE REMOVES FROM THE ARRAY AND RE-RENDER ARRAY

// const people = []

// // this is my normal way of getting html tag, however this queries the DOM each time for each variable
// // so the tutor gets just the parent of this elements, to optimize performance ()
// // then gets all the other elemets from the parent, so it looks like below
// const peopleModule = document.querySelector("#peopleModule")
// const inputEl = peopleModule.querySelector("input")
// const buttonEl = peopleModule.querySelector("button")
// const ulEl = peopleModule.querySelector("ul")

// // const inputEl = document.querySelector("input")
// // const buttonEl = document.querySelector("button")
// // const ulEl = document.querySelector("ul")

// // PUT NAME INTO THE ARRAY
// buttonEl.addEventListener('click', function () {
//     people.push(inputEl.value)
//     inputEl.value = ""
//     renderItem()
// })

// // RENDER THE ARRAY
// function renderItem() {
//     ulEl.textContent = ""
//     people.forEach(function (item) {
//         const personEl = document.createElement("li")
//         const nameEl = document.createElement("span")
//         const delEl = document.createElement("span")
//         nameEl.textContent = item
//         delEl.textContent = "❌"
//         personEl.appendChild(nameEl)
//         personEl.appendChild(delEl)
//         ulEl.appendChild(personEl)
//     })
// }

// // DELETE FROM THE ARRAY AND DOM
// ulEl.addEventListener("click",
//     function (event) {
//         const removeItem = event.target.closest("li")
//         removeItem.remove() // remove from the DOM
//         const indexToRemove = function () {
//             for (let i = 0; i < people.length; i++) {
//                 if (people[i] === event.target.textContent) {
//                     return i
//                 }
//             }
//         }
//         people.splice(indexToRemove, 1) // remove from the people array
// })

// NOW LETS TURN THIS CODE INTO MODULAR JAVASCRIPT CODE
// it is not that the code is bad... but imagine if you have 1000s of line like this
// 

// we make a function that runs immediately the app opens: IIFE
(function () {
    const people = {
        people: ["Sodiq", "Amirah"], // no any global variable
        init: function () {
            this.cacheDOM()
            console.log(this.ulEl) // unidentified
            this.render()
        }, // init is how we kick -off our module
        cacheDOM: function () {
            this.peopleModule = document.querySelector("#peopleModule") // THIS CONTAIN ALL THE OTHER ELEMENTS
            this.inputEl = this.peopleModule.querySelector("input")
            this.buttonEl = this.peopleModule.querySelector("button")
            this.ulEl = this.peopleModule.querySelector("ul")
        }, // one of the rule of modular js is few DOM call. so we want to cache our DOM here in cacheDOM
        // showAllNames: function(person){
        //     this.ulEl.appendChild(person)
        // },
        render: function () {
            this.ulEl.textContent = ""
            this.people.forEach(function (item) {
                const personEl = document.createElement("li")
                const nameEl = document.createElement("span")
                const delEl = document.createElement("span")
                nameEl.textContent = item
                delEl.textContent = "❌"
                personEl.appendChild(nameEl)
                personEl.appendChild(delEl)
                // this.ulEl.appendChild(personEl) // we have this cached from the cacheDOM
                // this.showAllNames(personEl)
                console.log(this.ulEl) // unidentified
            })
        } // render is use to translate the current state of our module into html DOM
    }
    people.init()
})()