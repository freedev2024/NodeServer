const http = require('http');

const hostname = 'localhost';
const port = 8000;

const serverConfigGet = require('./NodeUrlConfigForGet');
const serverConfigPost = require('./NodeUrlConfigForPost');
const serverConfigPut = require('./NodeUrlConfigForPut');

const server = http.createServer(serverConfigGet);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', serverConfigPost);
server.on('request', serverConfigPut);
