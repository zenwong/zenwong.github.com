var express = require('express'),
    app     = express.createServer().listen(80);
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendfile('index.html');
});
