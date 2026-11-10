const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send("hello jee")
})

app.get('/about',(req,res) => {
    res.send("Naai kaab kaab")
})

app.listen(3000)