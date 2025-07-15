import {events} from "/pubSub.js";

// this is another Revealing Model for stats
const stats = (function(){
    let people = 0;

    //cache DOM
    const statsModule = document.querySelector("#statsModule")
    const statsSpan = statsModule.querySelector("p").querySelector("span")

    events.on("peopleChanged", setPeople)
    // i subscribe to peopleChanged and i want setPeople to fire

    _render()

    function _render(){
        statsSpan.textContent = people
    }

    function setPeople(newPeople){  // gets the number of people
        people = newPeople.length // give it to our people variable here
        _render() // render the value to screen
    }

    function destroy(){
        statsModule.remove()
    }

    // return {setPeople} // we are exposing just one method. no longer needed if we use use pubSub
})()
// stats.setPeople(23)

export {stats} // the import gave me some challenge
// i needed to use 'type="module"' in the the html tag <script type="module" src="module.js" defer></script>
// for both import script and export script. Most needed for import script
// use 'import {stats} from "/stats.js";' in the import location


