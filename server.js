const http = require('http');

const myServer = http.createServer((req, res) => {

    res.end('Requette envoyée');
})

myServer.listen(3000);