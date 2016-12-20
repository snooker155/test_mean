/**
 * Created by anzubare on 20.12.2016.
 */

/**
 * Created by anton on 18.12.16.
 */

var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var issue = new Issue(req.body);
    issue.creator = req.user;
    issue.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(issue);
        }
    });
};

exports.list = function(req, res) {
    Issue.find().sort('-created').populate('creator', 'name username').exec(function(err, issues) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(issues);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.issue);
};

exports.issueByID = function(req, res, next, id) {
    Issue.findById(id).populate('creator', 'name username').exec(function(err, issue) {
        if (err)
            return next(err);

        if (!issue)
            return next(new Error('Failed to load issue ' + id));

        req.issue = issue;
        next();
    });
};

exports.update = function(req, res) {
    var issue = req.issue;
    issue.title = req.body.title;
    issue.comment = req.body.comment;
    issue.completed = req.body.completed;

    issue.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(issue);
        }
    });
};

exports.delete = function(req, res) {
    var issue = req.issue;
    issue.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(issue);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.issue.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};
