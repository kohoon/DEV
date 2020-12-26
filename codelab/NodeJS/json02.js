const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');

    const schoolArrays = []

    if(req.method == 'POST'){
        console.log("post called")        
        let body = '';
        req.on('data', function (data) {
            body += data;            
        });
        req.on('end', function () {
            const school = JSON.parse(body);
            // const school = new School(json.name, json.address, json.type);
            schoolArrays.push(school)
            res.statusCode = 201;
            res.end(JSON.stringify({result : true, list : schoolArrays}))
        });
    }

    const url = require('url').parse(req.url, true);
    if(url.pathname === '/sub') {
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'text/plain');
        res.write('sub');
        res.end();
    }else {
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

