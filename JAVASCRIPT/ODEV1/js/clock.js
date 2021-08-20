let myName=prompt("Adınız Nedir?")
let info =document.querySelector("#myName")
info.innerHTML=`${info.innerHTML}<strong> ${myName}</strong>`

let date = new Date()
let weekday = new Array(7);
weekday[0] = "Pazar";
weekday[1] = "Pazartesi";
weekday[2] = "Salı";
weekday[3] = "Çarşamba";
weekday[4] = "Perşembe";
weekday[5] = "Cuma";

let myName=prompt("Adınız Nedir?")
let info =document.querySelector("#myName")
info.innerHTML=`${info.innerHTML}<strong> ${myName}</strong>`

let date = new Date()
let weekday = new Array(7);
weekday[0] = "Pazar";
weekday[1] = "Pazartesi ";
weekday[2] = "Salı";
weekday[3] = "Çarşamba";
weekday[4] = "Perşembe";
weekday[5] = "Cuma";
weekday[6] = "Cumartesi";
let n = weekday[date.getDay()];

let hours = date.getHours()
let minute=date.getMinutes()
let seconds= date.getSeconds()
let day=date.getDay()

document.querySelector("#myClock").innerHTML =` <div> ${hours}:${minute}:${seconds} ${n}</div>` 


