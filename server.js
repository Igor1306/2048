var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/js", express.static(__dirname + '/js'));
app.use("/meta", express.static(__dirname + '/meta'));
app.use("/style", express.static(__dirname + '/style'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});

app.listen(process.env.PORT || 8080)
console.log("server run on port 8080");
