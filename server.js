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