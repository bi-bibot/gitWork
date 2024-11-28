const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.get('https://brofuckingwork.azurewebsites.net', (res) => {
    const { statusCode } = response;
    const contentType = response.headers['content-type'];
  
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello');

  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
  

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
    

    
  
});

http.listen(port);

console.log(`Server running at http://localhost:${port}`); 