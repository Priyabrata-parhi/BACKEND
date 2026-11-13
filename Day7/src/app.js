/* 
   server ko create karna
   server config karna
*/

const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()

app.use(express.json())

/* 
  - POST /notes
  - req.body => {title,description}
*/
app.post('/notes', async (req, res) => {
    const { title, description, age } = req.body

    const note = await noteModel.create({
        title, description, age
    })

    res.status(201).json({
        message: "Note created successfuly",
        note
    })
})


/* 
  - GET /notes
  - fetch all the notes Data
*/
app.get('/notes', async (req,res) => {
   const notes = await noteModel.find()
// Find method database mein jitni bhi notes rahenga uhi sabhi data ko read karti hai then return karti hai uska baad notes variable ka under store karta hai
   res.status(200).json({
    message: "Notes fetch successfuly",
    notes
   })
})

module.exports = app