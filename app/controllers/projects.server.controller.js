/**
 * Created by anzubare on 20.12.2016.
 */

/**
 * Created by anton on 18.12.16.
 */

var mongoose = require('mongoose'),
    Project = mongoose.model('Project');

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
    var project = new Project(req.body);
    project.creator = req.user;
    project.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(project);
        }
    });
};

exports.list = function(req, res) {
    Project.find().sort('-created').populate('creator', 'name username').exec(function(err, projects) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(projects);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.project);
};

exports.projectByID = function(req, res, next, id) {
    Project.findById(id).populate('creator', 'name username').exec(function(err, project) {
        if (err)
            return next(err);

        if (!project)
            return next(new Error('Failed to load project ' + id));

        req.project = project;
        next();
    });
};

exports.update = function(req, res) {
    var project = req.project;
    project.title = req.body.title;
    project.comment = req.body.comment;
    project.completed = req.body.completed;

    project.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(project);
        }
    });
};

exports.delete = function(req, res) {
    var project = req.project;
    project.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(project);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.project.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};
