var express = require('express');
var app = express();
var path = require('path');
const PORT = 8081;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname)));
app.use("/js", express.static(__dirname + '/js'));
app.use("/meta", express.static(__dirname + '/meta'));
app.use("/style", express.static(__dirname + '/style'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

// viewed at based directory http://localhost:8000/
app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname + 'views/index.html'));
  res.sendFile(path.join(__dirname + 'index.html'));

});

//app.listen(process.env.PORT || PORT)
app.listen(PORT,HOST);
console.log(`server run on port ${PORT} and host ${HOST}`);
