// huma ek server create karna hai aur ek task ko impliment karna hai with the help of rest api

// jo bhi hamara client rahega oo kuch server per request karta hai ush req ka outcomes kya nikala server ush kam ko kar paya yaa nahi kar paya iska liye status code hota hai  ( 1xx 2xx 3xx 4xx)

// jitna bhi variable const likata ho oo sari ki saari variable constant apani value kaha pai store karta hai ush sab RAM ke under store karta hai


/* server start krna */

const app = require('./src/app')

app.listen(3000, () =>{
    console.log('server is start')
})


//abhi hum yaha pai tum kaha sakta ho hamana ek database create kya hai oo database cloud par create hua hai ush database sai abhi hum connect ho chuka hai abhi server ko connect nahi kya hai abhi hamara jo mongobd compass applicaion hai ush apllication ko hamana ek database create kya hai cloud pai ush appicaion sai mongobd compass application connect kya hai

// atlas hamra cloud platform hai aur compass hamari appliction hai 
// jo tumahari database hai cloud par hai tumhara sara ka sara data  database kai under store hoga database hai tumahara cloud pai ye puri picture mai compass ka kya rule hai jo bhi data database kai under store hona bala hai ush data ko dakhne main kam ayega compass 

// tum computer ko deploy nahi koroga server ki taraha sara user usko use kare  tumha deploy karna rahega server cloud pai cloud par sara chiez jana hai toh hamara database already cloud par rahega 