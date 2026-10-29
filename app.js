// const catMe = require('cat-me')

// console.log(catMe())

const express = require('express')

const app = express() // server ka instance create kar na
// instance create kar na ka matlab server ko kind of create kar rahe hai
// server ko start karna aur server create karna alag bat hota hai

app.get('/', (req,res) => {
    res.send("Hello world")
})
// user ne server pee kuch req kare to server pe req aaye server ek responce de sake aise programme likhna hai

app.listen(3000) // server start krna



// node Server.js -> jab ye command run krta hai apka server as a process operating system(mac os, windows) hai in mai run hona chalu ho jaega 
//server se communicate karna hai operating system kya karega os ish server ko ek port no. dana chahega hum os ko bata hai sever konsa PORT no. dena hai jo server rahega PORT no. 3000 me start hona chahiye hamara server ko already PORT no. 3000 se communicate kar rahe honga

// 8000 3000 7000 5173


// mere activite monitor me bahat sari process hai  inhi sari process pass ek port no. hota hai


// node server.js
// ye command server ko start kar dati hai lakin ek problem hai js me kuch bhi change karo ge to usko register nahi karti hai

/* npx nodemon server.js */
// ya kya karta hai hamra jo folder hai folder under jitne bhi js ki file hogi yani kuch bhi change hua 