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
        cacheDOM: function(){
            this.textField = document.querySelector("#text")
        },
        getAllNames: function () {
            let allNames = this.name
            this.alias.forEach((alias) => {
                allNames += ` has alias ${alias} `
                // this.showAllNames(allNames)
                this.textField.appendChild(allNames)
            })
        },
        init: function () {
            this.cacheDOM()
            this.getAllNames()
        }
    }

    person.init()
})()