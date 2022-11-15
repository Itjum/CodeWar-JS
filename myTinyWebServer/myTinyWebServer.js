const req = require('express/lib/request');
const res = require('express/lib/response');

function isJsonObject(strData) {
    try 
    {
        JSON.parse(strData);
    } 
    catch (e) 
    {
        return false;
    }
    return true;
}

function myTinyWebServer(port, host)
{
    const http = require('node:http');
    const data = require('./data.json');
    const requestListener = function (req, res) {
        let message = {};
        if (req.method === "GET")
        {
            if (req.url === "/")
            {
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify({message: "Hello World!"}));
            }
            else if (req.url === "/articles")
            {
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }
            else if (req.url === "/about")
            {
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify({message: "About page"}));
            }
            else
            {
                //message not found
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify({message: "Not found"}));
            }
        }
        else if (req.method === "POST")
        {
            let d = '';
            req.on('data', chunk => {
                d += chunk;
                //d = d.replace(/\r|\n|\r\n/,"");
                if (isJsonObject(d))
                {
                    res.setHeader('content-type', 'application/json');
                    res.writeHead(200);
                    res.end(d);
                }
                else
                {
                    let newObj = {};
                    newObj['message'] = d;
                    res.setHeader('content-type', 'application/json');
                    res.writeHead(200);
                    res.end(JSON.stringify(newObj));
                }
            });
            
        }
    }

    console.log("Server running at http://" + host + ":" + port + "/")
    const server = http.createServer(requestListener);
    server.listen(port, host);

    return server;
}

module.exports = {
    myTinyWebServer,
    isJsonObject,
}

myTinyWebServer(8080, 'localhost');``