var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// app.listen(8080, function (req, res) {
//   res.send('Hello World from 8080!');
//   console.log('Ready on port %d', server.address().port);
// });

const http = require('http');
// specifying the desired port
const port = 8080;
const server = http.createServer((req, res) => {
  // adding port information to the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, GeeksforGeeks! Server is running on port ${port}`);
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.get('/', function (req, res) {
//   res.send('Hello World!');
// });
