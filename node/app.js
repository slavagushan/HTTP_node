const http = require('http');
const host = 'localhost';
const port = 3000;


const server = http.createServer(async (req, res) => {
    let cats = ['Bob', 'Willy', 'Mini', 'Moni', 'Min','Mo'];
if (req.method === 'POST'){
        if (cats.length <= 5) {
            cats.push('Helly');
        }
        else {
            cats.shift(); 
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(console.log(cats));
    }
    
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(console.log(cats));
    }

});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});

