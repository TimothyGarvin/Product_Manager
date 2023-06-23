const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.get('/api', ProductController.index);

    //create
    app.post('/api/create/product/', ProductController.create)

    //read
    app.get('/api/inventory',ProductController.inventory);
    app.get('/api/inventory/:id', ProductController.singleItem)
}