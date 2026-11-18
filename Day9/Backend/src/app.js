/*
  - server create krna
  - server start krna
*/

const express = require('express')
const noteModel = require('./models/notes.model')
const cors = require('cors')  // itna karna sai apaka jo server hai cross origin bala req ko allow kar daita hai browser pai aur problem nahi kare ga
const path = require("path")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))


/*
 - abhi yaha par ek api create krna hai ishki method post and api /notes
 - POST /api/notes
 - create new note and save data in mongodb
 - req.body - {title,description}
*/
app.post('/api/notes', async (req,res)=>{
    const {title, description} = req.body
//ya title,description aa raha hai ish data sath note create krna hai databse mein
    const note = await noteModel.create({  // noteModel.create ek new note create kar data hai
        title,description
    })
    // noteModel.create ek new note create kar data hai lakin kish data sath krna hai oo batao isa uska liye hum ek object pass krta hai object ka under title,description batatai hai req.body ka sath title,description milla hai uska sath huma ek new note create krna hai

    res.status(201).json({
        message: "note created",
        note
    })
})


/*
  - GET  /api/notes
  - Fetch all the notes data from mongodb and send them in the responce
*/
// yaad rakhe na notes ki related kuch bhi kam karna hai database mein noteModel ki jarurat padagi
app.get('/api/notes', async (req,res) =>{
    const notes = await noteModel.find() // jitni note creat honga database mein sabhi data ko lai aata hai

    res.status(200).json({  
        message: "Note feched successfully",
        notes
    })
})

/*
  - DELETE /api/notes/:id
  - Delete note with the id from req.params
*/
app.delete('/api/notes/:idx', async (req,res)=>{
    const id = req.params.idx
    // console.log(id)

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully" 
    })
})


/*
  - PATCH /api/notes/:id
  - update the description of the note by id
  - req.body = {description}
*/
app.patch('/api/notes/:idx', async (req,res) => {
    const id = req.params.idx

    const {description} = req.body

     await noteModel.findByIdAndUpdate(id, {description})

     res.status(200).json({
        message: "Modifed Done"
     })
})



// console.log(__dirname)
// jis bhi file ka under __dirname likoga oo file kish folder ka under tak hai waha tak path dikhne ko mil jayega
// hum app.js file ka under use kya hai app.js file kish folder ka under hai ush folder tak path mil jayega

// wild card api create kiya
app.use('*name',(req,res)=>{
    // res.send("this is wild card")
    res.sendFile(path.join(__dirname,"..", "/public/index.html"))
})
// iska under ham astrient(*) pass kr diya hai usko bolta hai wild card

module.exports = app