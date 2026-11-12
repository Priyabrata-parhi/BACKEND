/* 
  - server ko start karna
  - database se connect karna
*/

const app = require('./src/app')
const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect("mongodb+srv://mantu:FemWBRtHWBzEmZXP@cluster0.wjuc8lg.mongodb.net/day-6")
// ye method kya karta hai tumhara express server ko connect karta hai mongodb datadase sai
       .then( () => {
          console.log("connected to database")
       })
}

connectToDb()

app.listen(3000, (req,res) => {
    console.log("server is started port 3000")
})