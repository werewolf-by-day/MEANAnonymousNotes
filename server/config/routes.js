var notesControl = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes', function(req, res) {
        notesControl.showAll(req, res);
    });

    app.post('/notes', function(req, res) {
        notesControl.addNote(req, res);
    });

 //    app.all('*', function(req, res) {
 //        res.sendFile(path.resolve('./public/dist/index.html'))
	// });
}