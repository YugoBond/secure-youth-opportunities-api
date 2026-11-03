const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const opportunities = require('./opportunities');

const HOST = '127.0.0.1';
const PORT = 3000;

function send(response, statusCode, contentType, body){
    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(body);
}

const server = http.createServer((request, response) => {
    send(response, 404, 'application/json; charset=utf-8', JSON.stringify({error: 'Not Found'}),
);
});

server.listen(PORT, HOST, () => {
    console.log(`Youth Opportunities API running at http://${HOST}:${PORT}/`);
});

if(request.method === 'GET' && request.url === '/api/opportunities') {
    send(response, 200, 'application/json; charset=utf-8', JSON.stringify(opportunities));
    return;
}