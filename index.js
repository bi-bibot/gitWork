const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data)
    {
        if(error)
        {
            response.writeHead(404);
            response.write('Error : File Not Found')
        }
        else
        {
            response.write(data);
        }
 
        response.end()
    })
   
 
 
   
 
}).listen(port);

console.log(`Server running at http://localhost:${port}`); 