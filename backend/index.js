const express = require('express')
const app = express();
const db = require('./Config/db')
const router = require('./routes/index')
const cors = require('cors')

app.get('/', (req,res)=> {
    res.json('hello')
})

app.use(express.json())
app.use(cors(
    {
        origin: ['https://mern-olx-frontend.vercel.app'],
        methods: ["POST", "GET"],
        credentials: true
    }
))

db.connection.once('open', () => {
    console.log('Mongodb Connected Successfully!');
})

app.listen(3001, ()=> {
    console.log('listening at PORT 3001');
})

app.use('/', router)
