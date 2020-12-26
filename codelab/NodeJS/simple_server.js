const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = require('url').parse(req.url, true);    
    let goodsArray = [];   
    if(req.method == 'POST'){
        let body = '';
        req.on('data', function (data) {
            body += data;            
        });
        req.on('end', function () {
            const json =JSON.parse(body);
            const good = new Good(json.name, json.price);
            goodsArray.push(good)
            res.statusCode = 201;
            res.end(JSON.stringify({result : true, list : goodsArray}))

        });

    } else {
        if(url.pathname === '/sub') {
            res.statusCode = 200;
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Content-Type', 'text/plain');
            res.write('sub');
            res.end();
        } else {
            res.statusCode = 200;
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify({result : true, list : goodsArray}))

        }
    }

    class Good {
        constructor(name, price) {
            this.name = name;
            this.price = price;            
        }
    }

});

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });