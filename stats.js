const stats = (function(){
    let people = 0;

    //cache DOM
    const statsModule = document.querySelector("#statsModule")
    const statsSpan = statsModule.querySelector("p").querySelector("span")

    _render()

    function _render(){
        statsSpan.textContent = people
    }

    function setPeople(newPeople){
        people = newPeople
        _render()
    }

    function destroy(){
        statsModule.remove()
    }

    return {setPeople}
})()
// stats.setPeople(23)

export {stats} // the import gave me some challenge
// i needed to use 'type="module"' in the the html tag <script type="module" src="module.js" defer></script>
// for both import script and export script. Most needed for import script
// use 'import {stats} from "/stats.js";' in the import location


