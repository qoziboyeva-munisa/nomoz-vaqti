
const navForm = document.querySelector("#navForm")
const navinput = document.querySelector("#navinput")
const navbtn = document.querySelector("#navbtn")
const navitem = document.querySelector("#navitem")
const headertext = document.querySelector("#headertext")
const errorText = document.querySelector(".error__text")
const text = document.querySelectorAll(".header__text")

const tong = document.querySelector('#tong')
const quyosh = document.querySelector('#quyosh')
const peshin = document.querySelector('#peshin')
const asr = document.querySelector('#asr')
const shom = document.querySelector('#shom')
const hufton = document.querySelector('#hufton')

const tongh = document.querySelector('#tongh')
const quyoshh = document.querySelector('#quyoshh')
const peshinh = document.querySelector('#peshinh')
const asrh = document.querySelector('#asrh')
const shomh = document.querySelector('#shomh')
const huftonh = document.querySelector('#huftonh')
const title = document.querySelector('#title')



navForm.addEventListener("submit", function(e){
    e.preventDefault();
    let apiKey = '6b290b6d66bdcadb91913d71c51d257e'
    fetch(`https://islomapi.uz/api/present/day?region=${navinput.value}&units=metric&appid${apiKey}`)
    .then(res => res.json())
    .then(data =>{
        errorText.style.display = "none"
        tong.innerHTML =  `${data.times.tong_saharlik}`,
        quyosh.innerHTML = `${data.times.quyosh}`,
        peshin.innerHTML = `${data.times.peshin}`,
        asr.innerHTML = `${data.times.asr}`,
        shom.innerHTML = `${data.times.shom_iftor}`,
        hufton.innerHTML = `${data.times.hufton}`
        }
        ).catch((error)=>{
            errorText.style.display = "block"
            errorText.textContent = "Shahar nomi xato!"

        })

})

navForm.addEventListener("submit", function(e){
    e.preventDefault();
    let apiKey = '7639f5cd4da89691622ae7276bc486df'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${navinput.value}&units=metric&appid=${apiKey}`)
    .then(res => res.json())    
    .then(data =>
        navitem.innerHTML = `<p id="temp" class="text">Harorati: ${data.main.temp}<sup>o</sup></p>
        <p id="description" class="text">Havo holati: ${data.weather[0].description}</p>
        <p id="lon" class="text">Lon: ${data.coord.lon}</p>
        <p id="lat" class="text">Lat: ${data.coord.lat}</p>`
        ).catch((error)=>{
            console.log("xato")
        })
    
})


function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

let language = {
    eng: {
       nomoz:  " Prayer times " ,
       tongh: "morning",
       quyoshh: "the sun",
       peshinh:"noon",
       asrh:"century",
       shomh:"evening",
       huftonh:"night",
       navbtn:"to see",
       temp:"Temperature"
    },
    rus: {
       nomoz :"Bремя молитвы",
       tongh:"утро",
       quyoshh:"солнце",
       peshinh:"полдень",
       asrh:"век",
       shomh:"вечер",
       huftonh:"ночь",
       navbtn:"чтобы увидеть",
    },
};

if (window.location.hash) {

    if (window.location.hash == "#eng") {
        title.textContent = 
            language.eng.nomoz;
        tongh.textContent=
            language.eng.tongh;
        quyoshh.textContent=
            language.eng.quyoshh;  
        peshinh.textContent=
            language.eng.peshinh;
        asrh.textContent=
            language.eng.asrh;
        shomh.textContent=
            language.eng.shomh;
        huftonh.textContent=
            language.eng.huftonh;  
        navbtn.textContent=
            language.eng.navbtn;
    
    }
    else if (window.location.hash == "#rus") {
        title.textContent =
            language.rus.nomoz;
        tongh.textContent=
            language.rus.tongh;
        quyoshh.textContent=
            language.rus.quyoshh;
        peshinh.textContent=
            language.rus.peshinh;
        asrh.textContent=
            language.rus.asrh;
        shomh.textContent=
            language.rus.shomh;
        huftonh.textContent=
            language.rus.huftonh;
        navbtn.textContent=
            language.rus.navbtn;

    }
}







