var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 3, maxlength: 256},
}, {timestamps: true});

mongoose.model('Note', NoteSchema);