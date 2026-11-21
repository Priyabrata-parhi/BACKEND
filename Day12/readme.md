npm i mongoose

npm i express
npm i dotenv
npm i jsonwebtoken  // token create krna ka liye package ka needd padta hai
npm i cookie-parser

jwtSecrets.com  website ka need padta hai
jwt decode // token string past karen ke baad user ka data mill raha hai

(i)  Authentication :->   Authentication matlab hota hai identifie krna req kish user ka pas sai aayi hai like req kon kr raha hai isko ham Authentication bolta hai  [ identifie krna user kon hai req kish user kiya hai usa pataa(find) krna ush chiez ko bolta hai ]
[kon user req kr rha hai usko isdentify krna ko Authentication boltai hain]

authentication mein ek simple sa rule hota hai jab user ek baar register kr diya agar uska pass token hai  to iska baad jitni bhi req jayega user sai hamarai server pai wahh par har ek req ka under token present hona jaruri hota hai ishmein kam mein ati hai storages

authentication 

identifie kar sakie server pai req ata hai konsa user req bhej raha hai usko identify kar sakai aaj ki class mein  pura system ko hamai kisa implementaion kaise karenga


|> user ka register krna ka  route create krna bala hain

abhi yaha par ek api create krn hai register api use kartai hua sabsai phela user ki data create krenga hamare database mein aur ek token create karenga

register api create karni rahengi user apna account create kr paya server pai 

kabhi bhi app.js mein sara api create nahi krtai alag alag files ka under api create krtai ye jo register api hai it is relataied to authentication toh authentication file alag create krtai hain  routes folder auth.routes.js 

// ish file ka under aap ka jo register api hai ish file ka under create karoga  iidhar pa create krna ka baad app.js file mein use kar loga

jitni bhi authentication api rahengi inhi sabhi ka code  ish paricular file mein rahega

// jo hum Register API create krenga uska method POST rahegi and status code 201

abhi tak user Register ka liye req karta hai req ka under sara detail dega phir waha par check karta hai same email address exists  karta ta hai ya nahi user exist karta hai wahi sa return kara denga user exist nahi karta hai uska account create krtai hain uska baad 201 res bhej ta hai account created succefully


