// THE CLASSICAL WAY OF DOING PUBSUB (PUBlish and SUBscribe)
// you will have pubSub module
// you will have pubSub.subscribe
// you will have pubsub.unsubscribe
// you will have pubsub.publish

// but here the author prefer to name it events module

// events.on - to subscribe | 
// events.on("peopleChanged", someHandler) 
// | send this handler fn into the peopleChange array in events{} pubsub
// when people change i waana run dis fn

// events.off - to unsubscribe 

// events.emit - to publish |
// events.emit("peopleChanged", 3) 
// | in events{}pubsub, find this array and run all the fn in it with this arg
// when people change i wanna run the fns in this event with the data(ie 3 in his case)
// soemtimes, events.trigger is use here


const events = {
    events: {}, // we have an events{} that is currently empty
    on: function (eventName, fn) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(fn)

        // what this does is create eventName array
        // say someone use/subscribe | events.on("peopleChange", someHandler) // from subscriber of the module
        // first line:
        // if peopleChange array is already in events{} we will replace it with itself
        // or if peopleChange array is not in the events{} we will create and assign it []
        // second line:
        // push the fn (here the 'someHandler') into the peopleChange array in events{}
        // this.events: {
        //      peopleChange: [somehandler]
        // }
        // if another person subscribe to peopleChange with another fn 
        // events.on("peopleChange", anotherHandler)
        // this.events: {
        //      peopleChange: [somehandler, anotherHandler]
        // }
        // and when somebody/module emits | events.emits("peopleChange", 3) // from the owner of the module
        // if that array already exist in that events{}
        // then loop through the array and call all the fn in there with this data 
        // this call all the func with the data
        // meaning it updates all the handlers submitted into the array with the data
    },
    of: function (eventName, fn) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] == fn) {
                    this.events[eventName].splice(i, 1)
                }
            }
        }
    },
    emit: function (eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fn) {
                fn(data)
            });
        }
    }
}


export {events}


// ⭐⭐⭐⭐⭐⭐ PUBSUB JAVASCRIPT DESIGN PATTERN IMPLEMENTATION⭐⭐⭐⭐⭐⭐
// we have 2 modules in our project
// pubsub is a great way to scale our app further
// and we can remove any module without affecting the main module
