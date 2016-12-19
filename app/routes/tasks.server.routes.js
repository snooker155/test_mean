/**
 * Created by anton on 18.12.16.
 */

var express = require('express');
var router = express.Router();
var users = require('../controllers/users.server.controller'),
    tasks = require('../../app/controllers/tasks.server.controller');

router.route('/api/tasks')
      .get(tasks.list)
      .post(users.requiresLogin, tasks.create);

router.route('/api/tasks/:taskId')
      .get(tasks.read)
      .put(users.requiresLogin, tasks.hasAuthorization, tasks.update)
      .delete(users.requiresLogin, tasks.hasAuthorization, tasks.delete);

router.param('taskId', tasks.todoByID);

module.exports = router;



