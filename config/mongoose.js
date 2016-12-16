/**
 * Created by anzubare on 16.12.2016.
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};