const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const post = require('./models/post');
const port = 3005;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

layoutsDir: __dirname + './views/layouts';

app.engine(
    'handlebars',
    handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })
);

app.get('/form', function (req, res) {
    res.render('layouts/form');
});

app.get('/edit', function (req, res) {
    res.render('layouts/edit');
});

app.post('/update', function (req, res) {
    const idPost = req.body.id;
    post.update({
        title: req.body.title,
        content: req.body.content,
    });
});

