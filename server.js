const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(logger)
server.use(express.json());
server.use('/api/schemes', SchemeRouter);

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl}`)
    next();
  }

module.exports = server;