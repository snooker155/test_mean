/**
 * Created by anzubare on 20.12.2016.
 */

var express = require('express');
var router = express.Router();
var users = require('../controllers/users.server.controller'),
    projects = require('../../app/controllers/projects.server.controller');

router.route('/api/projects')
    .get(projects.list)
    //.post(users.requiresLogin, projects.create);
    .post(projects.create);

router.route('/api/projects/:projectId')
    .get(projects.read)
    //.put(users.requiresLogin, projects.hasAuthorization, projects.update)
    //.delete(users.requiresLogin, projects.hasAuthorization, projects.delete);
    .put(projects.update)
    .delete(projects.delete);

router.param('projectId', projects.projectByID);

module.exports = router;

