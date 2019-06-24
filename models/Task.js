const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Task = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    }, 
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', Task);