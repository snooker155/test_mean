/**
 * Created by anzubare on 20.12.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
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
        default: '',
        trim: true
    },
    due_to: {
        type: Date,
        default: Date.now
    },
    progress: {
        type: String
    },
    team: {},
    tags: {},
    activities: {}
});

mongoose.model('Project', ProjectSchema);
