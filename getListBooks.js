const http = require('http');
const port = process.env.PORT || 3000;
const path = '/listBooks';

http.listen(port);

http.get("/listBooks", (request, response) => {
    const status = {
        "Status" : "Runnung"
    };

    response.write(status);
})

