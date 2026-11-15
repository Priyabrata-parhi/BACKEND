/* 
  - server ko start krna
  - database sai connect krna
*/

require('dotenv').config()
const app = require('./src/app')
const connectToDb = require('./src/config/database')


connectToDb()

app.listen(3000,()=>{
    console.log('server is start in 3000')
})