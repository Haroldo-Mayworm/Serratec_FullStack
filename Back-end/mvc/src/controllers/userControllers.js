class UserController {
  
  static routeHome(app) {
    app.get('/home', UserController.listHome);
  }
  
  static routes(app) {
    app.get('/user', UserController.list);
  }

  static list(req, res) {
    res.send('Route activated: Users list');
  }

  static listHome(req, res) {
    res.send('Route activated: Home page');
  }
}

module.exports = UserController;
