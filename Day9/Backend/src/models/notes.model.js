const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("NOTES",noteSchema)

module.exports = noteModel