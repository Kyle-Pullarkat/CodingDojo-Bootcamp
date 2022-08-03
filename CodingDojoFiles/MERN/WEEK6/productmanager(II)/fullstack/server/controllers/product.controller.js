const Product = require('../models/product.model');

module.exports = {

    getProducts: (req, res) => {
        Product.find({})
        .then((products) => {
            res.json(products);
        })
        .catch((err) =>
            console.log(err));
    },

    getProductById: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => 
            console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => {
            res.status(201).json(newProduct);
        })
        .catch((err) => 
            console.log(err));
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                console.log('ERROR in update product', err);
                res.status(400).json({ message: 'something went wrong in update Product', error: err});
            });
    },


    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                console.log('ERROR in delete product', err);
                res.status(400).json({ message: 'something went wrong in delete product', error: err});
            })
    }




};