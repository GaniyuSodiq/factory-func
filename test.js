(function () {
    const person = {
        alias: ["Engr", "ife", "Ogbon"],
        name: "Sodiq Olaniyi Ganiyu",
        giveAlias: function (alias) {
            this.alias.push(alias)
        },
        showAllNames: function (names) {
            console.log(names)
        },
        cacheyDOM: function(){
            this.textField = document.querySelector("#text")
        },
        getAllNames: function () {
            let allNames = this.name
            this.alias.forEach((alias) => {
                allNames += ` has alias ${alias} `
                this.textField.textContent = allNames // the problem is not identify this dom
                // console.log(this.textField) // null
                
            })
        },
        init: function () {
            this.cacheyDOM()
            this.getAllNames()
        }
    }

    person.init()
})()