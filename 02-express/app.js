const http = require('http')

const server = http.createServer((req, res) => {
 console.log("user at server")
})

server.listen(5000)