/**
 * Created by anzubare on 20.12.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
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
    status: {
        type: String,
        default: 'Active',
        trim: true
    },
    due_to: {
        type: Date,
        default: Date.now
    },
    assign_to: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        default: 'Basic',
        trim: true
    },
    tags: {}

});

mongoose.model('Issue', IssueSchema);