const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = require('url').parse(req.url, true);    
    let goodsArray = [];   
    if(req.method == 'POST'){
        console.log("post called")        
        let body = '';
        req.on('data', function (data) {
            body += data;            
        });
        req.on('end', function () {
            const json =JSON.parse(body);
            const good = new Good(json.name, json.price);
            let goodsArrays = [good];
            let newDb;
            fs.readFile('database.json', 'utf8', function(err, data) {                
                if(data){
                    let originDb = JSON.parse(data);
                    let arrayDb = Array.from(originDb);
                    arrayDb.push(good);
                    newDb = JSON.stringify(arrayDb);

                } else {
                    // no data exists
                    newDb = JSON.stringify(goodsArrays);
                }

                fs.writeFile('database.json', newDb, 'utf8', function(err) {
                    res.statusCode = 201;
                    res.end(JSON.stringify({result : true, list : newDb}))
                });
            });            
        });

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