const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("notes",noteSchema)
// ish model ka bina ek bhi CRUD operation perform nahi kar sakta datadase pai


module.exports = noteModel