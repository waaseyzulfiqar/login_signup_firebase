const express = require('express')
const app = express();
const db = require('./Config/db')
const router = require('./routes/index')
const cors = require('cors')


app.use(express.json())
app.use(cors())

db.connection.once('open', () => {
    console.log('Mongodb Connected Successfully!');
})

app.listen(3001, ()=> {
    console.log('listening at PORT 3001');
})

app.use('/', router)