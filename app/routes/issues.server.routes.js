/**
 * Created by anzubare on 20.12.2016.
 */

var express = require('express');
var router = express.Router();
var users = require('../controllers/users.server.controller'),
    issues = require('../../app/controllers/issues.server.controller');

router.route('/api/issues')
    .get(issues.list)
    .post(users.requiresLogin, issues.create);

router.route('/api/issues/:issueId')
    .get(issues.read)
    .put(users.requiresLogin, issues.hasAuthorization, issues.update)
    .delete(users.requiresLogin, issues.hasAuthorization, issues.delete);

router.param('issueId', issues.issueByID);

module.exports = router;

