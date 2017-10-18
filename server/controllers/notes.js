var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Note = mongoose.model('Note');

module.exports = {
    showAll: function(req, res) {
        Note.find({}).sort('-createdAt').exec(function(err, notes) {
            if (!err) {
                return res.json(notes);
            }
        });
    },
    addNote: function(req, res) {
        var note = new Note({text: req.body.text});
        note.save(function(err) {
            if (!err) {
                return res.json(note);
            }
        });
    }
}