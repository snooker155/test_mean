/**
 * Created by anzubare on 16.12.2016.
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    require('../app/models/task.server.model');
    require('../app/models/project.server.model');
    require('../app/models/issue.server.model');
    return db;
};