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
    post.update(
        {
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: { id: idpost },
        }
    )
        .then(function () {
            res.send('Atualizado!');
        })
        .catch(function (error) {
            res.send('Não Atualizado' + error);
        });
});

app.get('/list', function (res, req) {
    post.allowMethods;
    post.findAll().then(function (posts) {
        res.render('layouts/list', { p: post });
    });
});

app.get('/home', function (req, res) {
    res.render('layouts/home');
});

app.post('/save', function (req, res) {
    post.create({
        title: req.body.titulo,
        content: req.body.conteudo,
    })
        .then(function () {
            res.send('Criado com sucesso');
        })
        .catch(function (erro) {
            res.send('Houve um erro' + erro);
        });
});

app.set('view engine', 'handlebars');

app.listen(post, function () {
    console.log(`servidor rodando na porta ${port}`);
});
