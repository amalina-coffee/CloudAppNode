var http = require('http');
var userCount = 0;
http.createServer(function (req, res) {
  userCount++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!\n');
  res.write('We have had ' + userCount + visitors!\n');
  res.end();
}).listen(8080);










