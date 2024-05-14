// local module
const {add, a} = require("./local-1");
const {add : add2, a : a1} = require("./local-2");
// console.log(add(3,4))
// console.log(add2(3,4,5))

// buildin module

const path = require("path")
console.log(path.dirname("/D:/Leaarning/learning-node/index.js"))