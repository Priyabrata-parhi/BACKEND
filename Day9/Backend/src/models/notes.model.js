const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("NOTES",noteSchema)
// notes ka jo data rahiga kish name ki collection mein store hoga ye yaha kahatai ho

module.exports = noteModel




// kya hamari appliction mein ek note create krnga bohot sari note create karenga

// itni sari note create ho raha hai inhi sabhi data ko sath mein rakaha jata hai jo hum bahot sari data ko jo similar dikhe ta hai jinka format bahot same hota hai agar hum yaha par 100 note bhi create kr tai 100 note pai title description dono property hongi unka format exact same hota hoga agar hum 100 note create kar raha hai unka format same rahiga jab hum same format data ko mongodb mein sath mein rakhe tai hai usko hum collection bolta hai

// jaisa ki notes ki data ki alag collection hoga aaga jaka user ka data store karnaga use account create karnga uska liye user ka name email add. phone no.  password  ye chez manga raha honaga hamri application 1000 user agaye 1000 user ka data rahi ga kind of same format mein rahega  1000 data ek jagha(place) par rakhenaga usko bolta hai collection

// hamara pass note ka collection ho sakata hai user ka collection ho sakata hai toh collection alag alag hota hai alag alag type ka data ko store krna ka liye

// notes ka jo data rahai ga ye kish name ki collection mein store hoga toh aap ish string batate ho

// notes ka jo data hai mama name ki collection ka under store hoga

// mongodb compass ka under database ka under mama  collection create hua hai folder jaise dikhe ta hai