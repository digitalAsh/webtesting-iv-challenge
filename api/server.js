const express = require('express');

const Videogames = require('../videogames/videogamesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/videogames', (req, res) => {
  Videogames.getAll()
    .then(videogames => {
      res.status(200).json(videogames);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;