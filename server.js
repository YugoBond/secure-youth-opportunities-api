const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { opportunities } = require('./opportunities');

const HOST = '127.0.0.1';
const PORT = 3000;

function send(response, statusCode, contentType, body) {
  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.end(body);
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/api/opportunities') {
    send( response, 200, 'application/json; charset=utf-8', JSON.stringify(opportunities),
);
    return;
  }

  if (request.method === 'GET' && request.url === '/') {
    const pagePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(pagePath, 'utf8', (error, html) => {
      if (error) {
        send( response, 500, 'application/json; charset=utf-8',  JSON.stringify({ error: 'Could not load the dashboard.' }),
        );
        return;
      }

      send(response, 200, 'text/html; charset=utf-8', html);
    });
    return;
  }

  send( response, 404, 'application/json; charset=utf-8',  JSON.stringify({ error: 'Not found.' }),
  );
});

server.listen(PORT, HOST, () => {
  console.log(`Youth Opportunities API running at http://${HOST}:${PORT}`);
});