/**
 * Created by anzubare on 16.12.2016.
 */

var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne(
            {_id: id},
            '-password',
            function(err, user) {
                done(err, user);
            }
        );
    });

    require('./strategies/local.js')();
};