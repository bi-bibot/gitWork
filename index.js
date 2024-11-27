const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    if(request.url == '/listBooks')
    {
        fs.readFile('listBooks.html', function(error, data)
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

    }
    else
    {
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
    }

    
  
}).listen(port);

http.createServer()

console.log(`Server running at http://localhost:${port}`); 