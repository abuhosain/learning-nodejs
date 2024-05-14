const EvenEmmiter = require("events")

const myEmmiter = new EvenEmmiter;

// listener

myEmmiter.on("birthday", () => {
    console.log(`Happy birthday`)
})
myEmmiter.on("birthday", (gift) => {
    console.log(`I will send you a   ${gift} `)
})

myEmmiter.emit("birthday", "watch")

