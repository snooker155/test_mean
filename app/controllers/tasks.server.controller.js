/**
 * Created by anton on 18.12.16.
 */

var mongoose = require('mongoose'),
    Project = mongoose.model('Project');
    Task = mongoose.model('Task');

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
    var task = new Task(req.body);
    task.creator = req.user;
    task.project = req.body.project;
    task.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            Project.findById(task.project).exec(function(err, project) {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    project.tasks.push(task);
                    project.save(function(err) {
                        if (err) {
                            return res.status(400).send({
                                message: getErrorMessage(err)
                            });
                        } else {
                            res.json(task);
                        }
                    });
                }
            });
        }
    });
};

exports.list = function(req, res) {
    Task.find().sort('-created').populate('creator project assign_to', 'name username title name username').exec(function(err, tasks) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(tasks);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.task);
};

exports.taskByID = function(req, res, next, id) {
    Task.findById(id).populate('creator project assign_to', 'name username title name username').exec(function(err, task) {
        if (err)
            return next(err);

        if (!task)
            return next(new Error('Failed to load task ' + id));

        req.task = task;
        next();
    });
};

exports.update = function(req, res) {
    var task = req.task;
    task.title = req.body.title;
    task.comment = req.body.comment;
    task.completed = req.body.completed;
    task.todos = req.body.todos;
    task.project = req.body.project;
    task.assign_to = req.body.assign_to;
    task.due_to = req.body.due_to;
    task.progress = req.body.progress;
    task.activities = req.body.activities;
    if(task.completed == true){
        task.status = 'Completed';
    }else{
        task.status = 'Active';
    }

    task.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            if(task.completed == true) {
                Project.findById(task.project).exec(function (err, project) {
                    if (err) {
                        return res.status(400).send({
                            message: getErrorMessage(err)
                        });
                    } else {
                        var completed_tasks_num = 0;
                        project.tasks.forEach(function (task) {
                            if(task.completed == true){
                                completed_tasks_num++;
                            }
                        });
                        project.progress = (completed_tasks_num + 1) / project.tasks.length * 100;
                        project.save(function (err) {
                            if (err) {
                                return res.status(400).send({
                                    message: getErrorMessage(err)
                                });
                            } else {
                                res.json(task);
                            }
                        });
                    }
                });
            }else{
                res.json(task);
            }
        }
    });
};

exports.delete = function(req, res) {
    var task = req.task;
    task.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(task);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.task.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};
