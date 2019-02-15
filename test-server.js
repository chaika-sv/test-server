const http = require('http');

const port = process.env.PORT || 3000;
//const hostname = process.env.host;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!! How are you??? This is Sergey\n');
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
