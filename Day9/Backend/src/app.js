/*
  - server create krna
  - server start krna
*/

const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()

app.use(express.json())

app.post('/api/notes', async (req,res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message: "note created",
        note
    })
})

app.get('/api/notes', async (req,res) =>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Note feched",
        notes
    })
})

app.delete('/api/notes/:idx', async (req,res)=>{
    const id = req.params.idx

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted" 
    })
})

app.patch('/api/notes/:idx', async (req,res) => {
    const id = req.params.idx

    const {description} = req.body

     await noteModel.findByIdAndUpdate(id, {description})

     res.status(200).json({
        message: "Modifed Done"
     })
})


module.exports = app