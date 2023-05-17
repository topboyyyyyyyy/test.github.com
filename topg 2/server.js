const http = require('http');

const myVariable = process.env.PRIVATE_KEY || 'b117c3687a5a17612921828ba8d378c0ac99c4140421e39702f717d728fd72a9';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(myVariable);
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});