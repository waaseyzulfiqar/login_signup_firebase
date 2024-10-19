const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel