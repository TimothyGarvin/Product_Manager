const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.get('/api', ProductController.index);

    //create
    app.post('/api/create/product/', ProductController.create)

    //read
    app.get('/api/inventory',ProductController.inventory);
    app.get('/api/inventory/:id', ProductController.singleItem)

    //update
    app.patch('/api/inventory/:id', ProductController.updateProduct)

    //delete
    app.delete('/api/inventory/:id', ProductController.soldProduct)
}