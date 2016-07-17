
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/form', function(req, res){
  res.render('form');
});
app.get('/form_receiver', function(req,res){
  var title = req.query.title;
  var desc = req.query.desc;
  res.send(title+','+desc);
});
app.post('/form_receiver',function(req, res){
  var title = req.body.title;
  var desc = req.body.desc;
  res.send(title + ','+desc);
});

app.get('/topic/:id', function(req, res){
  var topics = [
    'javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var as = `
  <a href="/topic?id=0">J</a><br>
  <a href="/topic?id=1">N</a><br>
  <a href="/topic?id=2">E</a><br>
  ${topics[req.params.id]}
  `;

  res.send(as);
  // res.send('Hello Topic');
});

app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id+','+req.params.mode)
});


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
