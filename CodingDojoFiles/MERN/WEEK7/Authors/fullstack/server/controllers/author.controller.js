const Author = require('../models/author.model');

module.exports = {

    getAuthors: (req, res) => {
        Author.find({})
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) =>
            console.log(err));
    },

    getAuthorById: (req, res) => {
        Author.findOne({ _id: req.params.id })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => 
            console.log(err));
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => {
            res.status(201).json(newAuthor);
        })
        .catch((err) => 
            console.log(err));
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                console.log('ERROR in update author', err);
                res.status(400).json({ message: 'something went wrong in update author', error: err});
            });
    },


    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                console.log('ERROR in delete author', err);
                res.status(400).json({ message: 'something went wrong in delete author', error: err});
            })
    }




};