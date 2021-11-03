const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

consT server = http.createServer(routes.handler);

server.listen(3000, () => {
    console.log("SERVER IS RUNNING");
});
