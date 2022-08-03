const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAJoke);
}