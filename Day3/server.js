const express = require('express')

const app = express()

app.use(express.json())

const notes = []

app.post('/note',(req,res) => {

    console.log(req.body)
// client side(fronted) se jitna bhi data ayega req oo sari sari data req through access kar paoga

    notes.push(req.body)

    res.send("Note created")
// server se agar aap kuch res aur data bhejna hai uska liye res use karna padega
})

app.get('/note',(req,res) => {
     res.send(notes)
})



app.listen(3000, () => {
    console.log("server start 3000")
})



// const notes = [
//     {
//         title: "test title 1",
//         desc: "test desc 1",
//     },
//     {
//         title: "test title 2",
//         desc: "test desc 2",
//     }
// ]