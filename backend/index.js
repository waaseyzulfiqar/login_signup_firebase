const express = require('express')
const app = express();
const db = require('./Config/db')
const router = require('./routes/index')
const cors = require('cors')

app.get('/', (req,res)=> {
    res.json('hello')
})

app.use(express.json())
app.use(
    cors({
      origin: ['http://mern-olx-frontend.vercel.app','http://mern-olx-frontend.vercel.app/product/allProducts', 'http://mern-olx-frontend.vercel.app/product/create'],// Allow specific origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Expose headers
      credentials: true, // Allow credentials
      preflightContinue: true // Handle preflight requests
    })
  );

db.connection.once('open', () => {
    console.log('Mongodb Connected Successfully!');
})

app.listen(3001, ()=> {
    console.log('listening at PORT 3001');
})

app.use('/', router)
