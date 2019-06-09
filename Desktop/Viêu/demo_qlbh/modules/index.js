module.exports = app => {
    global.Product = require('./products/product.model')
    const productRouter = require('./products/product.routes')
    app.use('/products', productRouter)
    app.use('/', (req,res,next)=> res.json({"message": "Hello my api"}));
}