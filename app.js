
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));

app.get('/topic', function(req, res){
  res.send(req.query.name);
  // res.send('Hello Topic');
})

app.get('/template', function(req,res){
res.render('temp', {time:Date(), _title:'Jade'});
});

app.get('/route', function(req,res){
res.send('Hllo Route, <img src="/abc.jpg">');
});

app.get('/dynamic', function(req,res){
  var lis = '';
  var time = Date();
  for (var i = 0; i < 5   ; i++) {
    lis = lis + 'coding';
  }
  var output = `
  <html>
  <body>Hello, dynamic
  <br> ${lis}
  <br> ${time}
  </html>
  `;
  res.send(output);
});

app.get('/', function(req, res){
  res.send('hello home');
});

app.get('/login', function(req, res){
  res.send('Login please');
})
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
