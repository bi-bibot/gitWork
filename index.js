const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;



http.listen(port);
http.get("/listBooks", (request, response) => {
    const status = {
        "Status" : "Runnung"
    };

    response.write(status);
})

console.log(`Server running at http://localhost:${port}`); 