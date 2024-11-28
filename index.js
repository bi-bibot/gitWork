const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.get('https://brofuckingwork.azurewebsites.net', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }

    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
    }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
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
    

    
  
}).listen(port);

console.log(`Server running at http://localhost:${port}`); 