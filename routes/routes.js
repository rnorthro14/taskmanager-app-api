const Task  = require('../models/Task');
const controller = require('../controllers/controller');


module.exports = function(app) {
    app.route('/tasks').get(controller.getTasks);

    app.route('/tasks/:id').get(controller.getTaskById);
    
    app.route('/tasks/add').post(controller.addTask);
    
    app.route('/tasks/update/:id').post(controller.updateTask);
    
    app.route('/tasks/delete/:id').get(controller.deleteTask);
};

