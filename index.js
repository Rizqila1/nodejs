const {hello, world} = require('./module');
const http = require("http");
const PORT = 2000

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/json');
    res.write(JSON.stringify ({
        status: "Successfully",
        message: "This is the usage from Node Backend"
    }));
    res.end();
});

server.listen(PORT, () => console.log('Server running at localhost'));

console.log(hello(), world());