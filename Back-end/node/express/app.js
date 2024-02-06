const express = require('express');
const port = 3003;
const app = express();
const handlebars = require('express-handlebars');
const name = 'Haroldo';
const lastName = 'Mayworm';
const age = 22;
const items = ['keyboard', 'cellphone'];

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.send(`<a href="http://localhost:${port}/link">Server on - My link</a>`);
});

app.get('/data', function (req, res) {
  res.render('data', { name, lastName, age, items });
});

app.get('/link', function (req, res) {
  res.send('<a href="https://www.haroldomayworm.com" target="_blank">My web site</a>');
});

app.listen(port, function () {
  console.log(`Server on - http://localhost:${port}`);
});
