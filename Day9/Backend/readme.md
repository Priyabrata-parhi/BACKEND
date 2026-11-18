* .env file ko hum github par nahi send krta uska under varible ko access krna hai to tumko package install krna padega npm i dotenv

* isko-install krna ka bad paheli line likhe ta hai require('dotenv').config() usko likhne sai hota ye hai .env ka under varible ko under value hai ish value ko access kar paata ho kahi par bhi 

* iska bad hama api's create krna hai user ush api ko use krta hua notes ko create kr saka and notes ki data store raha ga database ka under lakin database ka under kuchbhi data store krna chahata ho uska liye database ko batana padta hai aapka data ka format kaya hoga

* ex. mujha yaha par note ka data store krna hai database pai pahala mujha database ko bataana padega note ka format hoga kaise like note ka under data rahata ta title description inka type string ye batana padta hai properties or type batana padta hai hamara DB ko ish process ko bolta hai schema create krna jo format hota isha tarik sa data ko store karanga ush format ko schema bol ta hai

* humana yaha par bata diya note ki data store krna ga database ka under ush note ka format kya hoga ush format ko schema bol data hai / note ka under 2 property hongi title description dono ka type string rahiga

* iska bad ek chiez create krni paad ti hai model // model hai notes ki related kuch bhi operation(CRUD) perform krna hai database mein uska liye model use paad ta hai

* hamra jo server hai cross origin req ko accept kr data hai aisa hai hamra jo bank hai 00 allow kar raha hai server ko oo kishi aur ki website sa trafic ko accept kare aisa nahi hona chahiye identically jo bank ki website hai sirf bank ki trafic ko allow kare kishi aur website sa allow kyu kare ham aisa karenga production mein sirf hamra website ko allow krenga baki kisi aur website ko allow nahi krtai sirf development ka time mein cors ka use krnga


* npm i express
* npm i mongoose
* npm i dotenv
* npm i cors