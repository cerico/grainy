var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/')));

// app.use('/css', express.static(__dirname + '/main.css'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
                });
                
       



app.listen(3004)
