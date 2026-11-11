/*
-  hum abhi ek simple sa server create karna hai jis server pee kuch api hongi unhh api ki help se user kya kar sakta hai frontend mein hamra client batha hai oo kya kar sakta hai oo notes ko create aur dekhe sakta hai aur delete  aur ek note ko update kar sakta hai REST API follow karenga
*/

/*

- server create karna
- server ko config karna

*/


const express = require('express')


const app = express()  // server create ho jata hai

app.use(express.json()) // middleware use karna padta hai

const notes = []

app.get('/', (req,res) => {
    res.send("Hello Jee")
})

/*
-> POST | /notes api created
*/
app.post('/notes', (req,res) => {

    console.log(req.body)

    notes.push(req.body)
    console.log(notes)

    res.send("note created")
})
// user aggar ish api(/notes) par req karega req.body mein data rakhe kar to ussh data ko sath note create kar sakta hai notes array ka under 
// hum ek api create karli jaha par user usko use karta hua ek note ko create kar sakta hai



// abhi user ne jitna bhi note create kare honga usko oo saare note hum fetch kar sake bapash sai
/* GET  /notes  */
app.get('/notes',(req,res) => {
    res.send(notes)
})


// abhi asi api create karna hai client note ko delete kar sake
/* DELETE  /notes */
/*  params  */

/*  delete /notes:3   */

app.delete('/notes:index', (req,res) => {
    delete notes[req.params.index]

    res.send("note deleted successfuly")
})
// postman delete method   :3000/notes/2



// hama abhi aisa end point yaa api create karna hai jaha pai client kisi bhi note ka description ko update kar sake (title,description) nahi sirf description
/*  PATCH  /notes/:index    */
/*  req.body mein data rahega      req.body = {description :- "sample modified desc"}    */
// req.body andar description rahega jo bhi update karke rakhana chaheta ho

app.patch('/notes:index', (req,res) => {
    notes[req.params.index].description = req.body.description

    res.send("note update succesfully")
})
// postman patch method   :3000/notes/2           ->  {"description": "Modified description"}


module.exports = app