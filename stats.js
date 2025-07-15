import {events} from "/pubSub.js";

// this is another Revealing Model for stats
const stats = (function(){
    let people = 0;

    //cache DOM
    const statsModule = document.querySelector("#statsModule")
    const statsSpan = statsModule.querySelector("p").querySelector("span")

    // bind event
    events.on("peopleChanged", setPeople)
    // i subscribe to peopleChanged in pubSub and i want setPeople to fire

    _render()

    function _render(){
        statsSpan.textContent = people
    }

    function setPeople(newPeople){  // gets the number of people
        people = newPeople.length // give it to our people variable here
        _render() // render the value to screen
    }

    // if we want to destroy this stats module from DOM and javascript
    function destroy(){
        statsModule.remove() // remove statsModule from the DOM
        events.off("peopleChanged", setPeople) // unbind event
    }

    // return {setPeople} // we are exposing just one method. this api no longer needed if we use use pubSub
    return{destroy}
})()
// stats.setPeople(23)

export {stats} // the import gave me some challenge
// i needed to use 'type="module"' in the the html tag <script type="module" src="module.js" defer></script>
// for both import script and export script. Most needed for import script
// use 'import {stats} from "/stats.js";' in the import location


