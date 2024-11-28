const http = require('http');
const xml2js = require('xml2js');
const fs = require('fs');
const port = process.env.PORT || 8080;

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

        var xml = fs.readFileSync('books.xml', 'utf8');
        var result = convert.xml2json(xml, {compact: true, spaces: 4});
        response.write(result);


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

console.log(`Server running at http://localhost:${port}`); 