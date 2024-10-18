const express = require('express')
const productRoutes = require('./productRoute')
const router = express.Router()

router.use('/product', productRoutes)

module.exports = router