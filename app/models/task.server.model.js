/**
 * Created by anton on 18.12.16.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: "Title can't be blank"
    },
    comment: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    completed: {
        type: Boolean,
        default: false
    },
    progress: {
        type: Boolean,
        default: false
    },
    assign_to: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    due_to: {
        type: Date,
        default: Date.now
    },
    todos: {},
    tags: {}
});

mongoose.model('Task', TaskSchema);
