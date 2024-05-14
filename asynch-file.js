const { error } = require("console");
const fs = require("fs");

fs.readFile("./texts/read.txt", "utf-8" ,(err, data) => {
    if(err){
        throw Error("errror reading text")
    }
    console.log(data)

    fs.writeFile("./texts/write2.txt", data, (err) => {
        if(err){
            throw Error("error write file")
        }
    })
})