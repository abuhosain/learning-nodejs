const http = require("http");
const fs = require("fs")

// create server
const server = http.createServer();

server.on("request", (req, res) => {
    if(req.url === '/read' && req.method === "GET"){
        const readAbleStream = fs.createReadStream(__dirname + '/texts/read.txt');
        readAbleStream.on("data", (buffer) => {
            res.write(buffer)
        })
        readAbleStream.on("end", () => {
            res.end("hello world")
        })
    }
  
} )

server.listen(5000, () => {
    console.log("Server is running on 5000 port")
})