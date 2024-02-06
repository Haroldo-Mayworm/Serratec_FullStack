class TaskController {
  static routes(app) {
    app.get('/task', TaskController.list);
  }

  static list(req, res) {
    res.send('Route activated: Tasks list');
  }
}

module.exports = TaskController;
