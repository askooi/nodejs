const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jun:jun102030!@cluster0.0syfwcw.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/',(req,res) => res.send('Hello World!ddddd'))

app.listen(port, () => console.log(`Example app listening on part ${port}!`))