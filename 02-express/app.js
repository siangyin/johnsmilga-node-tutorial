const http = require('http')

const server = http.createServer((req, res) => {
console.log(req.url) // /about or /

 if (req.url === "/") {
   res.writeHead(200, { "content-type": "text/html" })
 res.write("<h1>welcome to homepage</h1>")
 res.end()
 } else if(req.url === "/about") {
   res.writeHead(200, { "content-type": "text/html" })
 res.write("<h1>about page</h1>")
 res.end()
 } else {
  res.writeHead(404, { "content-type": "text/html" })
 res.write("<h1>page not found</h1>")
 res.end()
 }

})

server.listen(5000)