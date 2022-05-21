const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is my first web server')
    }
    if(req.url === '/about'){
        res.end('This is about page')
    }
    res.end(
        `<h1>Oops!!</h1>
        <p>Something went wrong...</p>
        <a href="/">back home</a>`
        
    )
})

server.listen(8080)