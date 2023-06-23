const { response } = require('express');
const Product = require('../models/product.model')


module.exports.index = (request,response) => {
    response.json({message: 'Hello World'});
}

module.exports.create = (req, res) => {
    const {title, price, description} = req.body;
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.inventory = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.singleItem = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err=> res.json(err))
}

module.exports.soldProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}