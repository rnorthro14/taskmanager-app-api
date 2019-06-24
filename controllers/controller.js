const Task  = require('../models/Task');

const controllers = {
    getTasks(req, res) {
        Task.find((err, tasks) => {
            if (err) {
                console.log(err)
            } else {
                res.json(tasks);
            }
        });
    },
    getTaskById(req, res) {
        Task.findById(req.params.id, (err, task) => {
            if (err) {
                console.log(`cannot get task: ${err}`);
            } else {
                res.json(task);
            }
        });
    },
    addTask(req, res) {
        let task = new Task(req.body);
        task.last_updated = new Date();
        task.save()
            .then(task => {
                res.status(200).json({'task': 'Added successfully'});
            })
            .catch(err => {
                res.status(400).send(`Failed to create a new record: ${err}`);
            })
    },
    updateTask(req, res) {
        Task.findById(req.params.id, (err, task) => {
            if (!task)
                return next(new Error('Could not load document'));
            else {
                task.title = req.body.title;
                task.responsible = req.body.responsible;
                task.description = req.body.description;
                task.severity = req.body.severity;
                task.status = req.body.status;
                task.last_updated = task.last_updated ? new Date() : task.last_updated;
                task.save().then(task => {
                    res.json('Update done');
                }).catch(err => {
                    res.status(400).send('Update failed');
                });
            }
        });
    },
    deleteTask(req, res) {
        Task.findByIdAndRemove({_id: req.params.id}, (err, task) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Removed successfully');
            }
        });
    }
};

module.exports = controllers;
