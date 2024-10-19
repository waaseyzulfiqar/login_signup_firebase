const express = require('express')
const router = express.Router()
const productModel = require('../Model/products')

router.get('/allProducts', async (req, res) => {
    try {
      const products = await productModel.find();
      res.status(201).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

router.post('/create', async (req, res) => {
    const data = await productModel.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.image
    })
})

router.get('/singleProduct/:id', async (req,res) => {
  const product = await productModel.find({_id: req.params.id})
  res.send(product)
})

module.exports = router