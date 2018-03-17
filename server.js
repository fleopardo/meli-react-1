
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const router = express.Router();

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

// serve static assets from here
server.use('/build', express.static(__dirname + '/app/build'));

server.get('*', function (req, res) {
  res.sendFile('index.html', {root : __dirname});
});


// start the server
server.listen(3000);

module.exports = router;