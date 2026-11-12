/*
   server create krna
   server config krna
*/

const express = require('express')

const app = express()

app.use(express.json())


const notes = []

/* POST  /notes */
app.post('/notes', (req,res) => {
    notes.push(req.body)

    // console.log(req.body)
    // res.send('created..')

    res.status(201).json({
        message: "Note created successfully"
    })
})
// status code kab use karna hai generally taab use krta hai server pai kya outcomes aaya server oo kam kar paya oo kam nahi kar paya jo uska outcomes hai usko indicat krna ka liye status code ka use karta hai



// abhi jitni bhi note server side pai create hua hai oo sari notes ko client side pai bhej sako 

/* GET /notes */
app.get('/notes', (req,res) => {
   
    res.status(201).json({
        notes: notes
    })
})


/* DELETE /notes:index */
app.delete('/notes/:idx',(req,res)=>{
    delete notes[req.params.idx]

    res.status(204).json({
        msg: "Note deleted succesfilly"
    })
})

/* PATCH /notes/:index */
app.patch('/notes/:idx',(req,res) => {
    notes[req.params.idx].description = req.body.description

    res.status(200).json({
        msg: "Note updated successfully"
    })
})


module.exports = app