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

// // 🥇🥇🥇🥇🥇🥇🥇🪜WHAT DOES AN ACTUAL MODULA PROGRAMMING LOOK LIKE🥇🥇🥇🥇🥇🥇🥇
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

// 🥇🥇🥇🥇🥇🥇🥇trying to implement the jquery code in vanilla js🥇🥇🥇🥇🥇🥇🥇
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

// 🥇🥇🥇🥇🥇🥇🥇NOW LETS TURN THIS CODE INTO MODULAR JAVASCRIPT CODE🥇🥇🥇🥇🥇🥇🥇
// it is not that the code is bad... but imagine if you have 1000s of line like this
// modular js improves perormace especially in large code base

// we make a function that runs immediately the app opens: IIFE
// if you are new to modular js you might think this is alot of thinking to pull off
// and you are right. 
// Thinking about how to code is an important stuff. 
// it helps the code base and reader on the long run

// // (function () {
//     const people = {
//         people: ["Sodiq", "Amirah", "Opeyemi"], // no any global variable
//         init: function () {
//             this.cacheDOM()
//             this.bindEvents()
//             this.render()
//         }, // init: init is how we kick-off our module
//         cacheDOM: function () {
//             this.peopleModule = document.querySelector("#peopleModule") // THIS CONTAIN ALL THE OTHER ELEMENTS
//             this.inputEl = this.peopleModule.querySelector("input")
//             this.buttonEl = this.peopleModule.querySelector("button")
//             this.ulEl = this.peopleModule.querySelector("ul")
//             // this.delEl = this.peopleModule.querySelector(".del")
//         }, // cacheDOM: one of the rule of modular js is few DOM call. so we want to cache our DOM here in cacheDOM
//         bindEvents: function () {
//             // we dont want to hv a fnc in here bcs then this bindEvents method ...
//             // ... will be doing several things so below code works but we dont want it...
//             // ... it is binding event listerner and also adding a person
//             // it is not a good idea to make a func in bindEvents
//             // this.buttonEl.addEventListener('click', () => { 
//             //     this.people.push(this.inputEl.value)
//             //     this.inputEl.value = ""
//             //     this.render()
//             // })
//             // below code bind the envent to function we declared in another part

//             // ONE THING YOU MUST KNOW WHEN BIDING AN EVENT
//             // the context is going to change
//             // so just this.addPerson will longer be people.addPerson
//             // it will be buttonEl.addPerson and that is not what we want 
//             // so we need to bind it to the people{} we want by using bind(this)
//             this.buttonEl.addEventListener("click", this.addPerson.bind(this))
//             // when you are doing modular js, if you want a method (e.g this.addPerson here)...
//             // ... to always run the context with the 'this' value pointing to the object
//             // then you have to bind it like we did in the buttonEl bindEvents
//             // this.delEl.addEventListener("click", this.deletePerson.bind(this))
//             this.ulEl.addEventListener("click", this.deletePerson.bind(this))
//         }, // bindEvents: to use the event listener only
//         render: function () {
//             this.ulEl.textContent = ""
//             // this.people.forEach(function (item) { // THIS GAVE ME ALOT OF PAIN BCS 
//             // 'this' in a callback function like here refers the global object
//             // but 'this' in an arrow function like below refers to the parent obj here (person{})
//             // and that is what i was expecting to happen
//             this.people.forEach((item) => {
//                 const personEl = document.createElement("li")
//                 const nameEl = document.createElement("span")
//                 const delEl = document.createElement("span")

//                 nameEl.textContent = item
//                 delEl.textContent = "❌"
//                 delEl.classList.add("del")

//                 personEl.appendChild(nameEl)
//                 personEl.appendChild(delEl)
//                 this.ulEl.appendChild(personEl) // we have this.ulEl cached from the cacheDOM
//             })
//         }, //  render: render is use to translate the current state of our module into html DOM
//         // ideally, .render() is the only thing that ever touches the dom
//         // one thing abt modular js is that you can look at it and most methods have a name
//         // and you can see what is going on based on the name
//         addPerson: function (name) {
//             this.people.push(name || this.inputEl.value) // if name is passed in or input from the html
//             this.inputEl.value = ""
//             this.render()
//         },
//         // when you are doing modular js, if you want a method to always run the context...
//         // ... with the 'this' value pointing to the object
//         // then you have to bind it like we did in the buttonEl bindEvents

//         // deletePerson: function (event) {
//         //     const removeItem = event.target.closest("li")
//         //     console.log("Item to remove (clicked)", removeItem)
//         //     // removeItem.remove() // nothing touches our DOM  again except .render()
//         //     console.log("this.people is:", this.people)
//         //     const indexToRemove = (()=>{
//         //         for (let i = 0; i < this.people.length; i++) {
//         //             console.log("going into the if statment", i)
//         //             if (this.people[i] === event.target.textContent) {
//         //                 console.log("in the if statment", i)
//         //                 return i
//         //             }
//         //         }
//         //     })()
//         //     this.people.splice(indexToRemove, 1) // remove from the people array
//         //     console.log("the value of indexToRemove is:", indexToRemove)
//         //     this.render()
//         // }
//         //  THE DELETE SECTION BELOW WAS MY FIRST AND DIDNT WORK AS EXPECTED
//         // The main bug is that you're comparing against event.target.textContent (which can be ❌) 
//         // instead of the actual person's name.
//         // Use the name inside the first span inside <li> instead.
//         // Also, add a safety check to handle clicks that aren't on list items.

//         deletePerson: function (event) {
//             const removeItem = event.target.closest("li")
//             if (!removeItem) return; // safeguard in case click outside li
//             const personName = removeItem.querySelector("span").textContent; 
//             // picks the first span which is the name span. the second is for ❌

//             const indexToRemove = (() => {
//                 for (let i = 0; i < this.people.length; i++) {
//                     if (this.people[i] === personName) {
//                         return i
//                     }
//                 }
//                 return -1; // in case person not found
//             })()

//             if (indexToRemove > -1) {
//                 this.people.splice(indexToRemove, 1) // remove from the people array
//                 this.render()
//             }
//         }

//     }
//     people.init()
// // })()

// // what you have above is how you do modular javascript
// // most time you might not want to expose all your methods to the API
// // e.g casheDOM, render, bindEvents - we dont want to expose them
// // but you want to expose addPerson and deletePerson

// // so test what we are saying
// // if you make the people{} object a global variable ie remove it from being IIFE

// // maybe be another part of our code or program wants to add person to our list
// people.addPerson("Olatunji")
// people.addPerson("Aminat")
// people.addPerson("Kenny")
// // now we can add as many as possible name
// // a module/ program / feature can call/use our addperson method
// // but i dont want them to be able to call cacheDOM, bindEvents and render
// // the next topic covers how to do that



// 🥇🥇🥇🥇🥇🥇🥇PREBUL 🥇🥇🥇🥇🥇🥇🥇
// the example above is called object literal pattern
// bcs we made an object and object will have key: value pairs

