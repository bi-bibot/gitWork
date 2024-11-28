const http = require('http');
const xml2js = require('xml2js').parseString;
const fs = require('fs');
const port = process.env.PORT || 8080;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    if(request.url == '/listBooks')
    {
        
        var xml = fs.readFileSync('books.xml', 'utf8')
        xml2js(xml, function(error, result)
        {
            response.write(JSON.stringify(result));
        });
        response.end() 

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