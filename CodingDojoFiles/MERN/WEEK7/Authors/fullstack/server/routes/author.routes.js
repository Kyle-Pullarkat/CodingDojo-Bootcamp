const authorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/author', authorController.getAuthors);
    app.get('/api/author/:id', authorController.getAuthorById);
    app.post('/api/author/new', authorController.createAuthor);
    app.put('/api/author/:id', authorController.updateAuthor);
    app.delete('/api/author/:id', authorController.deleteAuthor);
};