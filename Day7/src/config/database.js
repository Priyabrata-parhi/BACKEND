const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        // mongoose.connect ye server aur database sai connect kar raha hoga jaise connect hoga tabhi then excute hoga
        .then(() => {
            console.log("connect to DB")
        })
}

module.exports = connectToDb