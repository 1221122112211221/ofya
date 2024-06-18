var http = require('http');

http.createServer(function(reg, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);