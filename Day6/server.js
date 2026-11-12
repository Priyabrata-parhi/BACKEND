/* 
  - server ko start karna
  - database se connect karna
*/

require('dotenv').config()
const app = require('./src/app')
const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
// ye method kya karta hai tumhara express server ko connect karta hai mongodb datadase sai
       .then( () => {
          console.log("connected to database")
       })
}

connectToDb()

app.listen(3000, (req,res) => {
    console.log("server is started port 3000")
})