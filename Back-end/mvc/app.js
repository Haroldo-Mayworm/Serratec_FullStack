const express = require('express');
const app = express();
const port = 3005;

const userController = require('./src/controllers/userControllers');
const taskController = require('./src/controllers/taskControllers');

userController.routes(app);
userController.routeHome(app);
taskController.routes(app);

app.get('/', function (req, res) {
  res.send('<h1>Home page</h1>');
});

app.listen(port, function (req, res) {
  console.log(`Server on - Port ${port}`);
});
