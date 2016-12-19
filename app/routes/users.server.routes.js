var express = require('express');
var router = express.Router();
var users = require('../controllers/users.server.controller'),
    passport = require('passport');

router.route('/users').post(users.create).get(users.list);

router.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

router.param('userId', users.userByID);

router.route('/register').get(users.renderRegister).post(users.register);

router.route('/login').get(users.renderLogin).post(
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/logout', users.logout);

module.exports = router;
