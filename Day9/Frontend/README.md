// npm create vite
// npm i axios
// cors policy hota kya hai
// npm i cors -> backend par install krna

// frontend ek command run krna padega -> npm run build    (command run kiya react ka pura output hamko 3 file mein dediya 3 file ko Backend public file ka under rakhe diya)


Frontend -> npm run build -> Dist


app.use(express.static('./public'))
kishi bhi ek folder ka under sara assests and file ko publically avaliable krna ka liye

------------------------------------------------------------

ek Authentication ka under 4 concept raheta hai

(i)  Authentication :->   Authentication matlab hota hai identifie krna req kish user ka pas sai aayi hai like req kon kr raha hai isko ham Authentication bolta hai  [ identifie krna user kon hai req kish user kiya hai usa pataa(find) krna ush chiez ko bolta hai ]

(ii) Authorization :->  (ex. 3 user hai student faculty director   alag alag user ka pas alag permission hai) Authorization ka matlab ek [paata krna user kya kya kr sakta  hai applicaion mein] usko ham bolta hai Authorization

(iii) validation  :-> Jo hamara pas data hai ush data ka format check krna oo data sahi format mein hai yaa nahi ish process ko hum bolta hai validation  [Data ka format check krna]

(iv)  verification :-> jo hamara pas data hai yaa information hai sahi(Right) hai ki nahi isko check krna ish process ko bolta hai verification  [Data sahi hai ya nahi]