const express = require('express');
const controllerProduto = require('./controllers/produtoController.js');
const routes = express.Router();

routes.get('/List', controllerProduto.List);
routes.post('/Create', controllerProduto.Create);
routes.post('/Update', controllerProduto.Update);

// routes.get('/GetOne', controllerProduto.GetOne);

routes.post('/GetOne', controllerProduto.GetOne); // MUDAMOS PARA POST
routes.delete('/Delete', controllerProduto.Delete);
module.exports = routes;
