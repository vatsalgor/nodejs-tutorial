var http = require('http');


//create a server object
http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});  
  res.write(req.url);
  res.end(); // end the response
}).listen('8080');
